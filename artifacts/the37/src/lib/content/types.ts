// Content model for The 37 — see lib/content/index.ts for assembly.
// EDITORIAL PLACEHOLDERS: organization entries named "[Add organization]" and
// all metric values of "—" are placeholders meant to be replaced with vetted data.

export type ProgressStage =
  | "Frontier Research"
  | "Early Breakthroughs"
  | "Scaling"
  | "Approaching Escape Velocity";

export interface HistoryPhase {
  label: string;
  body: string;
  /** Optional reputable sources backing the claims in this phase. */
  sources?: SourceRef[];
}

export interface OrgEntry {
  /** Official website (absolute https URL). Rendered as an external link when present. */
  url?: string;
  name: string;
  focus: string;
  placeholder?: boolean;
}

export interface Convergence {
  name: string;
  role: string;
}

export interface ScenarioMilestone {
  period: string;
  event: string;
}

/** A citable source backing a scenario forecast. */
export interface SourceRef {
  /** Short display name, e.g. "NIF Ignition (Science, 2022)". */
  name: string;
  /** Absolute https URL to the primary source. */
  url: string;
}

/** Scene 05 — Scenario Analysis: the possible future, what converges to get us there, and when. */
export interface ScenarioContent {
  /** Projected arrival window, e.g. "2035–2050". */
  horizon: string;
  /** What the achieved future concretely looks like (1–2 sentences). */
  destination: string;
  /** Converging technologies/forces that make it possible (4–6). */
  convergences: Convergence[];
  /** Waypoints on the path (3–4), chronological. */
  milestones: ScenarioMilestone[];
  /** Reputable published sources that back the timeline estimates (2–5). */
  sources?: SourceRef[];
}

/** Scene 06 — The Stakes: what winning unlocks, the cost of delay, and the wildcard. */
export interface StakesContent {
  win: string;
  lose: string;
  wildcard: string;
  /** Reputable published sources that back the stakes claims (1–3). */
  sources?: SourceRef[];
}

export interface Metric {
  label: string;
  value: string; // "—" until replaced with vetted data
}

export interface CauseContent {
  slug: string;
  whyItMatters: [string, string];
  endState: string;
  history: [HistoryPhase, HistoryPhase, HistoryPhase];
  organizations: OrgEntry[];
  scenario?: ScenarioContent;
  stakes?: StakesContent;
  progress: {
    stage: ProgressStage;
    statusLine: string;
    metrics: Metric[];
  };
  getInvolved: string;
  readAs?: string;
}

export interface DimensionContent {
  id: string; // matches dimension id in lib/data.ts
  intro: string;
  readAs: string;
}

export const PLACEHOLDER_ORG: OrgEntry = {
  name: "[Add organization]",
  focus: "Placeholder — replace with a vetted organization advancing this cause.",
  placeholder: true,
};
