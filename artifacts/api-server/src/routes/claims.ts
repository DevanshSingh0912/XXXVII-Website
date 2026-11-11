import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { CreateClaimBody, CreateClaimResponse } from "@workspace/api-zod";
import { db, claimsTable } from "@workspace/db";

const router: IRouter = Router();

const claimsLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,              // 5 submissions per IP per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests — please wait a moment and try again." },
});

router.post("/claims", claimsLimiter, async (req, res) => {
  // Honeypot: bots fill hidden fields that humans never see.
  // If the `website` field is non-empty, silently pretend success.
  if (req.body && req.body.website) {
    res.status(201).json({ id: "bot", honeypot: true });
    return;
  }

  const parsed = CreateClaimBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  try {
    const [row] = await db.insert(claimsTable).values(parsed.data).returning();

    if (!row) {
      res.status(500).json({ error: "Failed to save claim" });
      return;
    }

    const data = CreateClaimResponse.parse({
      id: row.id,
      name: row.name,
      email: row.email,
      causeSlug: row.causeSlug,
      role: row.role,
      message: row.message,
      createdAt: row.createdAt.toISOString(),
    });
    res.status(201).json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to create claim");
    res.status(500).json({ error: "Failed to save claim" });
  }
});

export default router;
