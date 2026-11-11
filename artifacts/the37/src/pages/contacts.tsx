import { BackButton } from "@/components/back-button";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateClaim } from "@workspace/api-client-react";
import { causes } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactsContent, forcesContent } from "@/lib/content";
import { SceneVideo } from "@/components/scene-video";

const claimSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  causeSlug: z.string().min(1, "Select a cause"),
  role: z.string().min(1, "Select a role"),
  message: z.string().optional(),
  // Honeypot: hidden from real users, filled only by bots
  website: z.string().optional(),
});

const FORCES = contactsContent.forces;
const PLAYERS_VIDEO_ROOT = `${import.meta.env.BASE_URL}videos/players`;
const FORCE_VIDEO_NAMES: Record<string, string> = {
  "01": "kouncil",
  "02": "weavers",
  "03": "katalysts",
  "04": "philosophers",
  "05": "vanguard",
};

export default function Contacts() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const preselectedCause = searchParams.get("cause") || "";
  const { toast } = useToast();

  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof claimSchema>>({
    resolver: zodResolver(claimSchema),
    defaultValues: {
      name: "",
      email: "",
      causeSlug: preselectedCause,
      role: "",
      message: "",
      website: "",
    },
  });

  const createClaim = useCreateClaim();

  // Deep links like /contacts?cause=slug should land on the claim form, not
  // the top of the five force screens.
  useEffect(() => {
    if (!preselectedCause) return;
    const el = document.getElementById("claim");
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data: z.infer<typeof claimSchema>) => {
    createClaim.mutate(
      { data },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: () => {
          toast({
            title: contactsContent.form.errorTitle,
            description: contactsContent.form.errorBody,
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <BackButton />

      {/* THE FIVE FORCES — one screen per force */}
      <section aria-label="The Five Forces">
        <div className="relative min-h-[100dvh] flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
          <SceneVideo
            src={`${PLAYERS_VIDEO_ROOT}/intro.mp4`}
            webmSrc={`${PLAYERS_VIDEO_ROOT}/intro.webm`}
            eager
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" aria-hidden="true" />
          <div className="relative z-10 max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm font-mono uppercase tracking-widest text-white/65 mb-10"
            >
              {forcesContent.overline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-light uppercase tracking-tighter leading-[0.9]"
            >
              {forcesContent.introLine}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50"
            >
              Scroll
            </motion.p>
          </div>
        </div>

        {forcesContent.roles.map((force) => (
          <div
            key={force.id}
            className="relative min-h-[100dvh] flex flex-col justify-center px-8 md:px-16 lg:px-24 border-t border-white/10 overflow-hidden"
          >
            <SceneVideo
              src={`${PLAYERS_VIDEO_ROOT}/${FORCE_VIDEO_NAMES[force.id]}.mp4`}
              webmSrc={`${PLAYERS_VIDEO_ROOT}/${FORCE_VIDEO_NAMES[force.id]}.webm`}
              preloadMargin="75% 0px"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" aria-hidden="true" />

            {/* Oversized numeral backdrop */}
            <span
              aria-hidden="true"
              className="absolute z-10 right-4 md:right-16 top-1/2 -translate-y-1/2 font-serif text-[38vw] md:text-[26vw] leading-none text-white/[0.05] select-none pointer-events-none"
            >
              {force.id}
            </span>

            <div className="relative z-20 max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-20%" }}
                className="font-mono text-xs tracking-[0.3em] text-white/50"
              >
                {force.id} / 05
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, margin: "-20%" }}
                className="mt-6 text-5xl sm:text-6xl md:text-8xl font-sans font-light uppercase tracking-tighter leading-[0.9] break-words"
              >
                {force.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                viewport={{ once: true, margin: "-20%" }}
                className="mt-8 text-2xl md:text-3xl font-serif text-white/85 leading-snug max-w-2xl"
              >
                {force.desc}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true, margin: "-20%" }}
                className="mt-6 text-base md:text-lg font-light text-white/60 leading-relaxed max-w-xl"
              >
                {force.dayToDay}
              </motion.p>
            </div>
          </div>
        ))}
      </section>

      {/* CLAIM — headline + form */}
      <div id="claim" className="min-h-screen px-8 md:px-16 lg:px-24 py-32 flex flex-col justify-center border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left Col - Copy */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-12">
              {contactsContent.overline}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-light uppercase tracking-tighter leading-[0.9] mb-12 break-words">
              {contactsContent.headline.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl font-serif text-white/60 leading-relaxed max-w-lg">
              {contactsContent.invitation}
            </p>
          </motion.div>
        </div>

        {/* Right Col - Form */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-8">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>
                <h3 className="text-2xl font-light uppercase tracking-widest mb-4">{contactsContent.form.successTitle}</h3>
                <p className="text-muted-foreground font-mono text-sm">{contactsContent.form.successBody}</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Honeypot: hidden from humans, bots fill this in */}
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...form.register("website")}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-widest text-white/60">{contactsContent.form.nameLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={contactsContent.form.nameHelper} {...field} className="min-h-11 bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors" />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-widest text-white/60">{contactsContent.form.emailLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={contactsContent.form.emailHelper} type="email" {...field} className="min-h-11 bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors" />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="causeSlug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-widest text-white/60">{contactsContent.form.causeLabel}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="min-h-11 bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus:ring-0 focus:border-white transition-colors">
                              <SelectValue placeholder={contactsContent.form.causePlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-zinc-950 border-white/10 text-white max-h-[400px]">
                            {causes.map((cause) => (
                              <SelectItem key={cause.slug} value={cause.slug} className="font-sans uppercase text-sm hover:bg-white/10 focus:bg-white/10">
                                <span className="font-mono text-white/55 mr-4">{cause.id}</span> {cause.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-widest text-white/60">{contactsContent.form.forceLabel}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="min-h-11 bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus:ring-0 focus:border-white transition-colors">
                              <SelectValue placeholder={contactsContent.form.forcePlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-zinc-950 border-white/10 text-white">
                            {FORCES.map((force) => (
                              <SelectItem key={force} value={force} className="font-sans uppercase text-sm hover:bg-white/10 focus:bg-white/10">
                                {force}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-widest text-white/60">{contactsContent.form.messageLabel}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={contactsContent.form.messageHelper} 
                            {...field} 
                            className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors resize-none min-h-[100px]" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={createClaim.isPending}
                    className="w-full rounded-none bg-white text-black hover:bg-white/80 font-sans uppercase tracking-widest py-6 mt-8 transition-colors"
                  >
                    {createClaim.isPending ? contactsContent.form.submittingLabel : contactsContent.form.submitLabel}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>

      </div>
      </div>
    </div>
  );
}