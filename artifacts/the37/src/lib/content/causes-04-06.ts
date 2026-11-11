// Causes 04–06. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes04to06: CauseContent[] = [
  {
    slug: "total-pathogen-sovereignty",
    whyItMatters: [
      "Humanity still fights pathogens the way it always has: after they strike, one outbreak at a time, with the clock against us. A single novel virus can close the planet. That fragility is a standing tax on everything else we want to build.",
      "Make immunity programmable — proactive, systemic, engineered at the genetic level — and infectious disease stops being an act of nature. Pandemics become structurally impossible, not merely survivable.",
    ],
    endState:
      "Vaccination-by-outbreak gives way to standing immunity. Surveillance reads the biosphere in real time; countermeasures are designed and deployed before spread, not after. A new pathogen is a footnote handled by infrastructure — the way a lightning strike meets a grounded building rather than a wooden town.",
    history: [
      {
        label: "The Old Constraint",
        body: "Immunity was whatever nature granted — each plague endured, each vaccine a slow, reactive victory after the dying had begun.",
      },
      {
        label: "The Turning Point",
        body: "Vaccine platforms became programmable: the response to a new pathogen shifted from years of trial to the design of a sequence.",
        sources: [
          { name: "Pardi et al. — mRNA vaccines (Nature Reviews Drug Discovery, 2018)", url: "https://www.nature.com/articles/nrd.2017.243" },
          { name: "CEPI 100 Days Mission", url: "https://cepi.net/100-days-mission" },
        ],
      },
      {
        label: "The Opening",
        body: "Genomic surveillance, synthetic biology, and immune engineering are converging on immunity as infrastructure — built in advance, upgraded continuously.",
      },
    ],
    organizations: [
      { name: "World Health Organization", focus: "The United Nations agency coordinating global disease surveillance, outbreak response, and pandemic preparedness.", url: "https://www.who.int" },
      { name: "CEPI (Coalition for Epidemic Preparedness Innovations)", focus: "A global partnership funding vaccine development against emerging epidemic threats.", url: "https://cepi.net" },
      { name: "U.S. CDC", focus: "The national public health agency monitoring infectious disease and directing outbreak containment.", url: "https://www.cdc.gov" },
      { name: "BARDA (Biomedical Advanced Research and Development Authority)", focus: "A U.S. agency funding advanced development of vaccines, therapeutics, and diagnostics against pandemic threats.", url: "https://www.medicalcountermeasures.gov" },
      { name: "Bill & Melinda Gates Foundation", focus: "A philanthropic foundation funding vaccine research, disease eradication, and pandemic preparedness worldwide.", url: "https://www.gatesfoundation.org" },
      { name: "Wellcome Trust", focus: "A research charity funding infectious disease science and epidemic preparedness globally.", url: "https://wellcome.org" },
      { name: "Gavi, the Vaccine Alliance", focus: "A public-private partnership expanding vaccine access across lower-income countries.", url: "https://www.gavi.org" },
      { name: "BioNTech", focus: "A biotechnology company advancing mRNA platforms for rapidly designed vaccines and therapeutics.", url: "https://www.biontech.com" },
      { name: "Moderna", focus: "A biotechnology company developing mRNA vaccines and rapid-response platforms against emerging pathogens.", url: "https://www.modernatx.com" },
      { name: "U.S. NIAID (National Institute of Allergy and Infectious Diseases)", focus: "A federal institute funding and conducting research on infectious disease and vaccine development.", url: "https://www.niaid.nih.gov" },
      { name: "ECDC (European Centre for Disease Prevention and Control)", focus: "The European Union agency for infectious disease surveillance and outbreak coordination.", url: "https://www.ecdc.europa.eu" },
      { name: "Africa CDC", focus: "A continental public health agency strengthening disease surveillance and outbreak response across Africa.", url: "https://africacdc.org" },
      { name: "Broad Institute", focus: "A biomedical research institute advancing genomic tools for pathogen detection and tracking.", url: "https://www.broadinstitute.org" },
      { name: "SecureBio", focus: "A biosecurity nonprofit whose SecureBio Detection program develops genomic surveillance to detect novel pathogens early.", url: "https://securebio.org" },
      { name: "Johns Hopkins Center for Health Security", focus: "An academic center researching biosecurity policy and pandemic preparedness.", url: "https://centerforhealthsecurity.org" },
      { name: "Institut Pasteur", focus: "A research foundation studying infectious diseases and developing vaccines and diagnostics.", url: "https://www.pasteur.fr" },
      { name: "GISAID", focus: "A global data initiative sharing genomic sequences of influenza and other pathogens for rapid analysis.", url: "https://gisaid.org" },
      { name: "Vir Biotechnology", focus: "A biotechnology company developing antibody-based therapies and vaccines against serious infectious diseases.", url: "https://www.vir.bio" },
      { name: "PATH", focus: "A global health nonprofit developing and delivering vaccines, diagnostics, and disease-control tools.", url: "https://www.path.org" },
      { name: "Doherty Institute", focus: "A research institute focused on infectious disease and immunity, including pandemic pathogen research.", url: "https://www.doherty.edu.au" },
      { name: "Perimeter", focus: "A biosecurity company (spun out of Ginkgo) building end-to-end pathogen-monitoring and biothreat-response infrastructure.", url: "https://www.perimeter.bio" },
    ],
    scenario: {
      horizon: "2035–2050",
      destination:
        "A novel pathogen is sequenced within hours of emergence, and a matched countermeasure is designed, manufactured, and distributed before it can spread. Standing broad-spectrum defenses and continuous environmental monitoring turn outbreaks into contained incidents rather than global events.",
      convergences: [
        { name: "mRNA and platform vaccines", role: "Reduce the response to a new pathogen from years of development to the design and printing of a sequence." },
        { name: "Genomic surveillance", role: "Reads wastewater, air, and clinical samples continuously so a novel agent is detected before it becomes an outbreak." },
        { name: "Broadly neutralizing antibodies", role: "Provide pre-positioned protection against whole viral families rather than single strains." },
        { name: "AI protein and immunogen design", role: "Predicts pathogen evolution and generates candidate antigens and antivirals in silico ahead of need." },
        { name: "Distributed biomanufacturing", role: "Places rapid, local production of vaccines and therapeutics close to where outbreaks begin." },
        { name: "Biosecurity governance", role: "Sets the treaties, oversight, and dual-use controls that let engineered immunity scale without enabling misuse." },
      ],
      milestones: [
        { period: "2026–2030", event: "Genomic surveillance networks expand across wastewater and clinical systems, and platform vaccines compress design-to-trial timelines." },
        { period: "2030–2038", event: "Broad-spectrum antivirals and pan-family antibody candidates enter wide clinical use, and rapid-response manufacturing is regionalized." },
        { period: "2038–2050", event: "Standing immunity infrastructure and real-time detection make containment the default, and novel pathogens are neutralized before sustained transmission." },
      ],
      sources: [
        { name: "CEPI 100 Days Mission", url: "https://cepi.net/100-days-mission" },
        { name: "WHO Pandemic Accord (2024)", url: "https://www.who.int/news-room/questions-and-answers/item/pandemic-prevention--preparedness-and-response-accord" },
        { name: "Nucleic Acid Observatory", url: "https://naobservatory.org" },
        { name: "BARDA mRNA Platform Strategy", url: "https://www.medicalcountermeasures.gov/app/barda/coronavirus/covid19.aspx" },
      ],
    },
    stakes: {
      win: "Infectious disease stops setting the ceiling on human movement, trade, and longevity, freeing resources and lifespans that pandemics and endemic infection quietly consume.",
      lose: "Each new outbreak remains a coin flip that can shutter economies and kill millions, and the same tools left ungoverned lower the barrier to engineered pandemics.",
      wildcard: "A single engineered or spillover pathogen with high lethality and long latency could force the entire agenda forward in months, or overwhelm defenses that were built too slowly.",
      sources: [
        { name: "WHO — Global Burden of Infectious Disease", url: "https://www.who.int/health-topics/infectious-diseases" },
        { name: "World Bank — COVID-19 Economic Impact", url: "https://www.worldbank.org/en/publication/global-economic-prospects" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "Programmable countermeasures have proven themselves under fire; systemic, proactive immunity remains a build, not a given.",
      metrics: [
        { label: "Surveillance networks tracked", value: "—" },
        { label: "Platform response time", value: "—" },
      ],
    },
    getInvolved:
      "Owning Total Pathogen Sovereignty means funding the surveillance, the platforms, and the policy that make the next pandemic a non-event. Which of The 37 is yours?",
    readAs: "The substrate's shield: a body worth upgrading must first be un-killable by microbes.",
  },
  {
    slug: "reproductive-autonomy",
    whyItMatters: [
      "The creation of new human beings — the most consequential act our species performs — still runs substantially on accident, constraint, and biological lottery. Fertility windows, genetic risk, and access decide who gets to build a family, and when.",
      "Give humanity full mastery over reproduction and every child begins as a decision, not a default. Parenthood decouples from age, biology, and circumstance. Intention replaces chance at the very start of life.",
    ],
    endState:
      "Every birth is chosen. Infertility is a solved condition, not a private grief. Heritable disease is screened out with consent and care, and the timeline of parenthood belongs to the parents. The question \"can we have a child?\" is replaced, everywhere, by \"do we choose to?\"",
    history: [
      {
        label: "The Old Constraint",
        body: "Reproduction was governed by chance and biology's narrow windows — a lottery of timing, fertility, and inherited risk.",
      },
      {
        label: "The Turning Point",
        body: "Assisted reproduction proved conception could be helped, timed, and screened — the first cracks in biological fatalism.",
        sources: [
          { name: "HFEA Fertility Treatment Trends", url: "https://www.hfea.gov.uk/about-us/publications/research-and-data/fertility-treatment-2021-preliminary-trends-and-figures/" },
          { name: "ESHRE Guidelines on ART", url: "https://www.eshre.eu/Guidelines-and-Legal/Guidelines" },
        ],
      },
      {
        label: "The Opening",
        body: "Advances in embryology, genomics, and reproductive medicine point toward full decoupling of family-making from biological constraint.",
      },
    ],
    organizations: [
      { name: "American Society for Reproductive Medicine", focus: "A professional organization setting standards and advancing research across reproductive medicine.", url: "https://www.asrm.org" },
      { name: "ESHRE (European Society of Human Reproduction and Embryology)", focus: "A scientific society advancing research and clinical practice in reproduction and embryology.", url: "https://www.eshre.eu" },
      { name: "U.S. NICHD (National Institute of Child Health and Human Development)", focus: "A federal institute funding research on fertility, reproduction, and prenatal development.", url: "https://www.nichd.nih.gov" },
      { name: "Conception", focus: "A biotechnology company working to generate human egg cells from stem cells to treat infertility.", url: "https://www.conception.bio" },
      { name: "Gameto", focus: "A biotechnology company developing stem-cell-based approaches to fertility and egg maturation.", url: "https://www.gametogen.com" },
      { name: "The Jackson Laboratory", focus: "A nonprofit research institution studying reproductive and mammalian genetics.", url: "https://www.jax.org" },
      { name: "Genomic Prediction", focus: "A company offering preimplantation genetic testing to screen embryos for heritable disease risk.", url: "https://www.lifeview.com" },
      { name: "CooperSurgical", focus: "A company producing fertility diagnostics, embryo screening, and assisted reproduction technologies.", url: "https://www.coopersurgical.com" },
      { name: "Vitrolife", focus: "A company developing culture media and technologies used in IVF and embryology labs.", url: "https://www.vitrolife.com" },
      { name: "Ovation Fertility", focus: "A network of fertility laboratories providing embryology, andrology, and genetic testing services.", url: "https://ovationfertility.com" },
      { name: "CCRM Fertility", focus: "A fertility clinic network conducting reproductive research and delivering assisted reproduction care.", url: "https://www.ccrmivf.com" },
      { name: "Cambridge Reproductive Genetics research groups", focus: "Academic groups pioneering in-vitro gametogenesis and human embryo development research.", url: "https://www.repro.cam.ac.uk" },
      { name: "Kyoto University Saitou Laboratory", focus: "A research lab advancing the generation of germ cells and eggs from stem cells.", url: "https://anat.cell.med.kyoto-u.ac.jp/index_en.html" },
      { name: "Igenomix", focus: "A company providing reproductive genetic testing and endometrial receptivity diagnostics.", url: "https://www.igenomix.com" },
      { name: "Natera", focus: "A genetic testing company offering carrier screening and prenatal genetic diagnostics.", url: "https://www.natera.com" },
      { name: "Progyny", focus: "A fertility benefits company expanding access to assisted reproduction and family-building care.", url: "https://progyny.com" },
      { name: "Ivy Fertility", focus: "A network of fertility clinics providing IVF and reproductive medicine services.", url: "https://www.ivyfertility.com" },
      { name: "TMRW Life Sciences", focus: "A company building automated cryopreservation systems for eggs and embryos.", url: "https://www.tmrw.org" },
      { name: "Ferring Pharmaceuticals", focus: "A biopharmaceutical company specializing in reproductive medicine and maternal health therapies.", url: "https://www.ferring.com" },
      { name: "Boston IVF", focus: "A fertility center providing assisted reproduction care and conducting reproductive research.", url: "https://www.bostonivf.com" },
      { name: "Human Fertilisation and Embryology Authority", focus: "The UK regulator overseeing fertility treatment and embryo research.", url: "https://www.hfea.gov.uk" },
    ],
    scenario: {
      horizon: "2045–2070",
      destination:
        "Fertility is no longer bounded by age or biology: eggs and sperm can be derived from a person's own cells, and heritable disease is screened out before implantation with informed consent. Parenthood becomes a timed, chosen act rather than a race against a closing window.",
      convergences: [
        { name: "In-vitro gametogenesis", role: "Generates viable eggs and sperm from stem cells, decoupling reproduction from age and from failing gametes." },
        { name: "Embryo genomic screening", role: "Reads and interprets an embryo's genome so heritable disease can be identified before pregnancy begins." },
        { name: "Stem-cell and organoid biology", role: "Supplies the reprogrammed cells and ovarian models that make lab-grown gametes and endometrial testing possible." },
        { name: "Cryopreservation and automation", role: "Preserves eggs, sperm, and embryos reliably and tracks them at scale, extending the timeline of family-making." },
        { name: "AI embryo selection", role: "Improves prediction of implantation and developmental viability, raising success rates per cycle." },
        { name: "Reproductive law and ethics", role: "Defines consent, access, and limits so the technology expands autonomy without drifting into coercion or inequity." },
      ],
      milestones: [
        { period: "2026–2035", event: "Preimplantation genetic screening broadens, and early proof-of-concept work — like the first fertilizable human eggs coaxed from skin cells — matures toward reliable laboratory-derived gametes." },
        { period: "2035–2050", event: "If safety holds, clinical trials begin establishing whether lab-derived eggs and sperm are viable, and fertility benefits widen access across income levels." },
        { period: "2050–2070", event: "In-vitro gametogenesis enters routine care, and conception becomes achievable regardless of age or prior infertility." },
      ],
      sources: [
        { name: "Hayashi et al., in-vitro gametogenesis (Cell Stem Cell, 2016)", url: "https://www.cell.com/cell-stem-cell/fulltext/S1934-5909(16)30094-1" },
        { name: "HFEA Fertility Treatment Trends", url: "https://www.hfea.gov.uk/about-us/publications/research-and-data/fertility-treatment-2021-preliminary-trends-and-figures/" },
        { name: "ESHRE Guidelines on ART", url: "https://www.eshre.eu/Guidelines-and-Legal/Guidelines" },
      ],
    },
    stakes: {
      win: "Every child can begin as an intended decision, infertility ceases to be a private grief, and the biological clock stops dictating the shape of adult lives and careers.",
      lose: "Family-making stays a lottery of timing and inherited risk, and access remains rationed by wealth and geography, leaving millions with a solvable condition unsolved.",
      wildcard: "A safe demonstration of human in-vitro gametogenesis could collapse the timeline overnight, while a single ethical breach or eugenic misuse could freeze the field for a generation.",
      sources: [
        { name: "WHO — Infertility Prevalence Estimates", url: "https://www.who.int/news/item/04-04-2023-1-in-6-people-globally-affected-by-infertility" },
        { name: "Hayashi et al. — In-vitro gametogenesis (Cell Stem Cell, 2016)", url: "https://www.cell.com/cell-stem-cell/fulltext/S1934-5909(16)30094-1" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "Assisted reproduction is mature and widening; the deeper decoupling of reproduction from biological constraint is still frontier science and frontier ethics.",
      metrics: [
        { label: "Research programs tracked", value: "—" },
        { label: "Access coverage", value: "—" },
      ],
    },
    getInvolved:
      "Owning Reproductive Autonomy means backing the science, the access, and the ethics that make every child chosen and every birth intentional. Which of The 37 is yours?",
    readAs: "The substrate closes where life begins: the body mastered from its very first cell.",
  },
  {
    slug: "energy-limitlessness",
    whyItMatters: [
      "Energy is the master resource. Its price is hidden inside every meal, every medicine, every mile, every idea that needs a machine to exist. Scarcity of energy is scarcity of everything.",
      "Make power effectively free — fusion, orbital solar, deep geothermal — and the constraint dissolves across the whole civilization at once. Desalination, fabrication, computation, transport: all downstream, all unlocked. Free the engine and you free everything.",
    ],
    endState:
      "Electricity is metered the way air is: it isn't. Clean, abundant power runs desalination at continental scale, synthesizes fuels and materials on demand, and reaches every human on Earth. Energy poverty is a historical term. The question shifts from \"can we afford to?\" to \"what shall we build?\"",
    history: [
      {
        label: "The Old Constraint",
        body: "Every watt was fought for — dug up, burned, and rationed. Civilization's ambitions were sized to its fuel supply.",
      },
      {
        label: "The Turning Point",
        body: "Renewables collapsed in cost and fusion crossed from perpetual promise toward engineering program, with net-energy milestones in sight.",
        sources: [
          { name: "IRENA — Renewable Power Generation Costs 2023", url: "https://www.irena.org/publications/2024/Sep/Renewable-Power-Generation-Costs-in-2023" },
          { name: "NIF fusion ignition (Science, 2022)", url: "https://www.science.org/doi/10.1126/science.abq7221" },
        ],
      },
      {
        label: "The Opening",
        body: "Fusion ventures, orbital solar concepts, and advanced geothermal are converging on the same target: power too cheap to meter, everywhere.",
      },
    ],
    organizations: [
      { name: "ITER", focus: "An international collaboration building a large-scale experimental fusion reactor.", url: "https://www.iter.org" },
      { name: "Commonwealth Fusion Systems", focus: "A private company developing compact high-field fusion power plants.", url: "https://cfs.energy" },
      { name: "Helion Energy", focus: "A private company developing a fusion generator aimed at producing electricity directly.", url: "https://www.helionenergy.com" },
      { name: "TAE Technologies", focus: "A private company pursuing aneutronic fusion using field-reversed configuration reactors.", url: "https://tae.com" },
      { name: "Lawrence Livermore National Laboratory", focus: "A U.S. national lab whose National Ignition Facility achieved fusion energy gain by inertial confinement.", url: "https://www.llnl.gov" },
      { name: "Princeton Plasma Physics Laboratory", focus: "A U.S. Department of Energy lab conducting foundational research on magnetic-confinement fusion.", url: "https://www.pppl.gov" },
      { name: "Tokamak Energy", focus: "A private company developing compact spherical tokamak fusion reactors.", url: "https://www.tokamakenergy.com" },
      { name: "General Fusion", focus: "A private company developing magnetized target fusion for grid-scale power.", url: "https://generalfusion.com" },
      { name: "U.S. Department of Energy Office of Science", focus: "A federal office funding fusion, geothermal, and advanced energy research programs.", url: "https://science.osti.gov" },
      { name: "Max Planck Institute for Plasma Physics", focus: "A German research institute operating the Wendelstein 7-X stellarator for fusion research.", url: "https://www.ipp.mpg.de" },
      { name: "Xcimer Energy", focus: "A private company developing laser-driven inertial fusion for commercial power plants.", url: "https://xcimer.energy" },
      { name: "UK Atomic Energy Authority", focus: "The UK agency operating fusion research facilities and developing fusion power technology.", url: "https://www.gov.uk/government/organisations/uk-atomic-energy-authority" },
      { name: "Fervo Energy", focus: "A company developing enhanced geothermal systems for round-the-clock clean power.", url: "https://fervoenergy.com" },
      { name: "Quaise Energy", focus: "A company developing deep-drilling technology to access geothermal heat anywhere on Earth.", url: "https://www.quaise.energy" },
      { name: "National Laboratory of the Rockies (formerly NREL)", focus: "A U.S. national lab advancing solar, wind, and grid technologies for abundant clean power.", url: "https://nlr.gov" },
      { name: "TerraPower", focus: "A company developing advanced nuclear reactors for scalable low-carbon electricity.", url: "https://www.terrapower.com" },
      { name: "X-energy", focus: "A company developing high-temperature gas-cooled nuclear reactors and fuel.", url: "https://x-energy.com" },
      { name: "Zap Energy", focus: "A private company developing sheared-flow-stabilized Z-pinch fusion technology.", url: "https://www.zapenergy.com" },
      { name: "Marvel Fusion", focus: "A private company pursuing laser-driven inertial fusion for commercial power.", url: "https://marvelfusion.com" },
      { name: "Proxima Fusion", focus: "A private company developing stellarator-based fusion power plants.", url: "https://www.proximafusion.com" },
      { name: "EUROfusion", focus: "A European consortium coordinating fusion research toward demonstration power plants.", url: "https://euro-fusion.org" },
    ],
    scenario: {
      horizon: "2040–2060",
      destination:
        "Clean power is abundant and cheap enough that its cost stops constraining what civilization attempts. Fusion plants, deep geothermal, advanced fission, and continent-scale solar and storage feed grids that run desalination, fuel synthesis, and computation without rationing.",
      convergences: [
        { name: "Magnetic-confinement fusion", role: "High-field tokamaks and stellarators aim to turn plasma physics into steady grid-scale electricity." },
        { name: "Inertial-confinement fusion", role: "Laser-driven ignition, already demonstrated at net energy gain, points toward a second path to fusion power." },
        { name: "Enhanced geothermal and deep drilling", role: "Extends clean baseload heat to sites without natural reservoirs, making round-the-clock power widely available." },
        { name: "Advanced fission", role: "Small modular and high-temperature reactors provide dependable low-carbon output while fusion matures." },
        { name: "Grid storage and superconductors", role: "Store and move abundant electricity so cheap generation actually reaches loads without waste." },
        { name: "High-temperature superconducting magnets", role: "Shrink fusion machines and cut their cost, turning reactors from science projects into buildable plants." },
      ],
      milestones: [
        { period: "2026–2032", event: "Enhanced geothermal and modular fission projects come online, while private fusion ventures chase their first net-energy shots and break ground on pilot plants — inertial-confinement having already crossed scientific breakeven, magnetic confinement still to follow." },
        { period: "2032–2045", event: "If the physics and engineering hold, first-of-a-kind fusion demonstration plants begin delivering electricity to grids, and clean firm power costs fall." },
        { period: "2045–2060", event: "Fusion and geothermal scale commercially, and energy-intensive processes like desalination and synthetic fuels run on near-free power." },
      ],
      sources: [
        { name: "NIF fusion ignition (Science, 2022)", url: "https://www.science.org/doi/10.1126/science.abq7221" },
        { name: "Creely et al. — SPARC tokamak design (Nature, 2020)", url: "https://www.nature.com/articles/s41586-021-03753-3" },
        { name: "IEA Net Zero by 2050", url: "https://www.iea.org/reports/net-zero-by-2050" },
        { name: "Commonwealth Fusion Systems — SPARC Technology", url: "https://cfs.energy/technology/" },
      ],
    },
    stakes: {
      win: "Cheap, clean, abundant energy lifts the hidden tax on food, water, materials, and computation at once, making energy poverty history and reframing every ambition as an engineering choice rather than a budget.",
      lose: "Growth stays chained to scarce, dirty fuel, climate damage compounds, and the vast downstream unlocks in water, manufacturing, and intelligence remain out of reach.",
      wildcard: "A single fusion or geothermal breakthrough that proves durable and cheap could reshape the global economy in a decade, while chronic underinvestment could leave the technology perpetually a few years away.",
      sources: [
        { name: "IEA — World Energy Outlook 2023", url: "https://www.iea.org/reports/world-energy-outlook-2023" },
        { name: "IEA — Access to Electricity (SDG7)", url: "https://www.iea.org/reports/sdg7-data-and-projections" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "The physics has begun to say yes; the remaining fight is engineering, deployment, and scale.",
      metrics: [
        { label: "Fusion programs tracked", value: "—" },
        { label: "Cost per kilowatt-hour", value: "—" },
      ],
    },
    getInvolved:
      "Owning Energy Limitlessness means backing the reactors, the grids, and the policy that turn power from a bill into a birthright. Which of The 37 is yours?",
    readAs: "The reading turns outward here: from the upgraded body to the engine that powers everything it does.",
  },
];
