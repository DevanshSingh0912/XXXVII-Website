// Causes 01–09 · Dimensions I (The Substrate) and II (The Engine).
// EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values
// are placeholders to be replaced with vetted data.

import { CauseContent } from "./types";

export const substrateEngineCauses: CauseContent[] = [
  {
    slug: "longevity-escape-velocity",
    whyItMatters: [
      "Every problem humanity hopes to solve is solved by people — and we lose our most experienced people to a process we have never treated as a problem. Aging is the largest single source of human suffering and death, and the deadline under which every other ambition operates.",
      "Treat it as an engineering target instead of a fate, and the entire calculus of a human life changes: more time to build, to learn, to repair what a shorter life leaves unfinished.",
    ],
    endState:
      "Medicine shifts from patching decline to reversing it. A birthday is no longer a step toward an ending but a checkpoint in an open-ended life. Care becomes proactive rejuvenation; the phrase \"died of old age\" reads the way \"died of a treatable infection\" reads today — as a failure we chose to end.",
    history: [
      {
        label: "The Old Constraint",
        body: "For all of history a fixed lifespan was treated as the natural order, and medicine aimed only to soften the descent.",
      },
      {
        label: "The Turning Point",
        body: "Aging began to be understood as a set of specific, mechanistic processes — damage that can be measured, and in principle repaired.",
        sources: [
          { name: "López-Otín et al. — Hallmarks of Aging (Cell, 2023)", url: "https://www.cell.com/cell/fulltext/S0092-8674(22)01377-0" },
          { name: "NIA — Biology of Aging Program", url: "https://www.nia.nih.gov/research/dab" },
        ],
      },
      {
        label: "The Opening",
        body: "Rejuvenation moved from metaphor to research program, reframing longevity as a solvable engineering problem rather than a wish.",
      },
    ],
    organizations: [
      { name: "Altos Labs", focus: "A biotechnology company researching cellular rejuvenation programming to reverse aging and disease.", url: "https://www.altoslabs.com" },
      { name: "Calico Life Sciences", focus: "An Alphabet-backed research company studying the biology of aging and interventions to extend healthy lifespan.", url: "https://www.calicolabs.com" },
      { name: "National Institute on Aging", focus: "The U.S. federal agency leading and funding research on aging and age-related conditions.", url: "https://www.nia.nih.gov" },
      { name: "Buck Institute for Research on Aging", focus: "An independent biomedical research institute focused on the fundamental biology of aging.", url: "https://www.buckinstitute.org" },
      { name: "SENS Research Foundation", focus: "A nonprofit funding research into repairing the cellular and molecular damage of aging.", url: "https://www.sens.org" },
      { name: "Rubedo Life Sciences", focus: "A clinical-stage company developing senolytic therapeutics that selectively clear damaged senescent cells linked to aging.", url: "https://rubedolife.com" },
      { name: "Retro Biosciences", focus: "A biotechnology company pursuing cellular reprogramming, plasma-based therapies, and autophagy to add healthy years.", url: "https://www.retro.bio" },
      { name: "BioAge Labs", focus: "A clinical-stage company using human longevity data to develop drugs targeting the biology of aging.", url: "https://bioagelabs.com" },
      { name: "Life Biosciences", focus: "A company developing partial epigenetic reprogramming therapies to restore youthful cell function.", url: "https://www.lifebiosciences.com" },
      { name: "Gero", focus: "A biotech company applying physics and AI to human aging data to identify targets against biological aging.", url: "https://gero.ai" },
      { name: "Rejuvenate Bio", focus: "A company developing gene therapies aimed at treating age-related diseases and reversing aging.", url: "https://www.rejuvenatebio.com" },
      { name: "Insilico Medicine", focus: "An AI drug-discovery company developing therapeutics for aging and age-associated diseases.", url: "https://insilico.com" },
      { name: "Juvenescence", focus: "A drug-development company building and funding a portfolio of therapies to extend healthy human lifespan.", url: "https://juvlabs.com" },
      { name: "Methuselah Foundation", focus: "A nonprofit funding and incentivizing research and prizes aimed at extending healthy human life.", url: "https://www.mfoundation.org" },
      { name: "American Federation for Aging Research", focus: "A nonprofit supporting biomedical research to understand and slow the aging process.", url: "https://www.afar.org" },
      { name: "Hevolution Foundation", focus: "A nonprofit funding research and ventures focused on the biology of aging and healthspan extension.", url: "https://hevolution.com" },
      { name: "Fauna Bio", focus: "A company mining the genomics of hibernating and long-lived animals to find therapies for age-related disease.", url: "https://www.faunabio.com" },
      { name: "NewLimit", focus: "A company using partial epigenetic reprogramming to restore youthful gene expression and reverse cellular aging.", url: "https://www.newlimit.com" },
      { name: "Loyal", focus: "A company developing drugs to extend healthy lifespan, beginning with longevity therapeutics for dogs.", url: "https://loyal.com" },
      { name: "Longevity Biotechnology Association", focus: "An industry body representing and coordinating companies developing therapies that target aging.", url: "https://www.longevitybiotech.org" },
      { name: "Sinclair Lab at Harvard Medical School", focus: "An academic laboratory researching the mechanisms of aging and epigenetic reprogramming to reverse it.", url: "https://sinclair.hms.harvard.edu" },
    ],
    scenario: {
      horizon: "2040–2060",
      destination:
        "Aging is managed as a treatable condition. Periodic rejuvenation therapies hold biological age steady while the interventions themselves keep improving, so each year of healthspan bought helps buy the next.",
      convergences: [
        { name: "Partial cellular reprogramming", role: "Resetting the epigenetic markers of aging without erasing cell identity is the most direct route to restoring youthful tissue function." },
        { name: "Senolytics", role: "Selectively clearing senescent cells removes a driver of chronic inflammation and tissue decline that accumulates across every organ." },
        { name: "Aging biomarkers and clocks", role: "Measurable biological age turns rejuvenation from anecdote into an endpoint that trials and regulators can act on." },
        { name: "AI-driven drug discovery", role: "Machine learning compresses the search for compounds and combinations that target the shared mechanisms of aging." },
        { name: "Gene and cell therapy platforms", role: "Delivery systems refined for rare disease make it feasible to install durable interventions against age-related damage." },
        { name: "Regulatory recognition of aging", role: "Treating aging as an indication, rather than only its downstream diseases, unlocks the trial designs and capital the field needs." },
      ],
      milestones: [
        { period: "2026–2032", event: "With senolytic trials underway and the first cellular-reprogramming therapies now dosing in humans, controlled trials in age-related conditions begin reporting readouts." },
        { period: "2032–2045", event: "Validated aging clocks become accepted endpoints, and the first therapies approved on measures of biological age reach patients." },
        { period: "2045–2060", event: "Combination rejuvenation protocols demonstrate sustained reduction in biological age across multiple systems." },
      ],
      sources: [
        { name: "López-Otín et al. — Hallmarks of Aging (Cell, 2023)", url: "https://www.cell.com/cell/fulltext/S0092-8674(22)01377-0" },
        { name: "Buck Institute for Research on Aging", url: "https://www.buckinstitute.org" },
        { name: "NIA — Biology of Aging Program", url: "https://www.nia.nih.gov/research/dab" },
      ],
    },
    stakes: {
      win: "Every field gains decades of accumulated expertise instead of losing it, and the deadline under which all other ambitions operate is pushed back far enough to change what a human life can attempt.",
      lose: "Roughly a hundred thousand people die of age-related causes each day, and each year of delay is that toll repeated against people who might otherwise have been reached in time.",
      wildcard: "A single reprogramming or senolytic result that reverses a hard clinical endpoint could redirect pharmaceutical capital toward aging almost overnight.",
      sources: [
        { name: "WHO — Global Health Estimates (aging mortality)", url: "https://www.who.int/data/global-health-estimates" },
        { name: "Buck Institute for Research on Aging", url: "https://www.buckinstitute.org" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "The science has shifted from \"whether\" aging can be addressed to \"how fast,\" with the hardest translational work still ahead.",
      metrics: [
        { label: "Active research programs", value: "—" },
        { label: "Capital committed", value: "—" },
      ],
    },
    getInvolved:
      "Owning Longevity Escape Velocity means backing the labs, capital, and policy that turn rejuvenation from frontier science into standard care — and making added healthy years the defining metric of progress. Which of The 37 is yours?",
    readAs: "The first cause of the first dimension: before anything else, keep the builder alive.",
  },
  {
    slug: "morphological-freedom",
    whyItMatters: [
      "The body you were issued determines what you can do, feel, and endure — and until now you had no say in the specification. When biology is destiny, every limitation of the flesh becomes a limitation of the person inside it.",
      "Establish the sovereign right to redesign your own form, and the body stops being a cage. It becomes a canvas: repairable, adaptable, expressive. The alternative is a future where that power exists but belongs to someone else.",
    ],
    endState:
      "Choosing your body's capabilities is as unremarkable as choosing your profession. Prosthetics outperform what they replace and are chosen, not endured. Modification is safe, reversible, and governed by consent alone. Nobody is trapped in a form that does not fit the life they intend to live.",
    history: [
      {
        label: "The Old Constraint",
        body: "The body was fixed at birth. Medicine could mend it toward a single template of \"normal,\" and no further.",
      },
      {
        label: "The Turning Point",
        body: "Prosthetics, implants, and reconstructive practice crossed from restoring function to extending it — and choice entered the equation.",
        sources: [
          { name: "Xia et al. — Wearable robots for motor and sensory reconstruction and enhancement (Nature Communications, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10897332/" },
          { name: "Rubin et al. — BrainGate Neural Interface System feasibility study (Neurology, 2023)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10074470/" },
        ],
      },
      {
        label: "The Opening",
        body: "Bioengineering and neural interfaces are converging on a new premise: the human form as an editable architecture, governed by the person who lives in it.",
      },
    ],
    organizations: [
      { name: "Ottobock", focus: "A medical technology company producing advanced prosthetic and orthotic systems worldwide.", url: "https://www.ottobock.com" },
      { name: "Össur", focus: "A prosthetics company developing bionic limbs and powered knees that restore and extend physical function.", url: "https://www.ossur.com" },
      { name: "Neuralink", focus: "A company building implantable brain-computer interfaces to restore and augment human capability.", url: "https://neuralink.com" },
      { name: "Open Bionics", focus: "A company building affordable 3D-printed multi-grip bionic hands for amputees.", url: "https://openbionics.com" },
      { name: "DEKA Research and Development", focus: "The engineering firm behind the LUKE advanced prosthetic arm with dexterous, intuitive control.", url: "https://www.dekaresearch.com" },
      { name: "Coapt", focus: "A company developing pattern-recognition control systems that let users move prosthetic limbs more naturally.", url: "https://coaptengineering.com" },
      { name: "Blatchford", focus: "A prosthetics company producing microprocessor-controlled limbs that adapt to a wearer's movement.", url: "https://www.blatchford.co.uk" },
      { name: "Esper Bionics", focus: "A company building AI-driven robotic prosthetic hands and a platform for human augmentation.", url: "https://esperbionics.com" },
      { name: "Psyonic", focus: "A company producing the Ability Hand, a durable bionic hand with touch feedback.", url: "https://www.psyonic.io" },
      { name: "Cyberdyne", focus: "A robotics company developing the HAL powered exoskeleton to augment and restore human movement.", url: "https://www.cyberdyne.jp" },
      { name: "Ekso Bionics", focus: "A company producing wearable exoskeletons that augment strength and enable mobility.", url: "https://eksobionics.com" },
      { name: "Lifeward", focus: "A company producing the ReWalk powered exoskeleton that enables people with paralysis to stand and walk.", url: "https://golifeward.com" },
      { name: "Wandercraft", focus: "A company building self-balancing exoskeletons that let paralyzed users walk without crutches.", url: "https://en.wandercraft.eu" },
      { name: "Synchron", focus: "A company developing an endovascular brain-computer interface to restore control to paralyzed patients.", url: "https://synchron.com" },
      { name: "Blackrock Neurotech", focus: "A company producing implantable brain-computer interface systems for restoring movement and communication.", url: "https://blackrockneurotech.com" },
      { name: "MIT Media Lab Biomechatronics Group", focus: "A research group led by Hugh Herr designing bionic limbs that merge with the human nervous system.", url: "https://www.media.mit.edu/groups/biomechatronics/overview/" },
      { name: "Johns Hopkins Applied Physics Laboratory", focus: "A research lab that developed the Modular Prosthetic Limb with neural control of individual fingers.", url: "https://www.jhuapl.edu" },
      { name: "DARPA", focus: "The U.S. defense research agency funding advanced prosthetics, neural interfaces, and human augmentation programs.", url: "https://www.darpa.mil" },
      { name: "Phantom Neuro", focus: "A company developing an implantable muscle interface that lets amputees control advanced prosthetics intuitively.", url: "https://phantomneuro.com" },
      { name: "Cala Health", focus: "A bioelectronic medicine company building wearable neuromodulation devices that modify bodily function noninvasively.", url: "https://calahealth.com" },
      { name: "Onward Medical", focus: "A company developing spinal cord stimulation technology to restore movement after paralysis.", url: "https://onwd.com" },
      { name: "The Alliance for Regenerative Medicine", focus: "An industry organization advancing gene, cell, and tissue-engineering therapies that repair and rebuild the body.", url: "https://alliancerm.org" },
    ],
    scenario: {
      horizon: "2050–2080",
      destination:
        "Elective modification of the body is safe, reversible, and governed by the consent of the person undergoing it. Prosthetics and implants that outperform their biological counterparts are chosen for capability, not only prescribed for loss.",
      convergences: [
        { name: "Neural interfaces", role: "Two-way links between nervous system and device let augmentations be controlled and felt as extensions of the self rather than tools worn on it." },
        { name: "Advanced prosthetics and exoskeletons", role: "Powered, pattern-controlled limbs and wearable frames are already crossing from restoring function to extending it." },
        { name: "Gene editing", role: "Precise edits make heritable and somatic traits of the body candidates for deliberate redesign, not fixed inheritance." },
        { name: "Regenerative medicine and bioprinting", role: "Growing and printing tissue turns the body into repairable, replaceable architecture rather than a single non-renewable issue." },
        { name: "Synthetic biology", role: "Engineered biological systems expand what the living body can be built to do beyond its evolved specifications." },
        { name: "Bodily-autonomy law", role: "Legal frameworks for self-directed modification decide whether the power to redesign one's form belongs to the individual or to someone else." },
      ],
      milestones: [
        { period: "2026–2035", event: "Neurally controlled prosthetics with sensory feedback move from research demonstrations into wider clinical use." },
        { period: "2035–2055", event: "Elective, reversible augmentations reach early adopters as jurisdictions begin writing modification-rights frameworks." },
        { period: "2055–2080", event: "Self-directed embodiment is normalized in law and culture, with modification governed by consent alone." },
      ],
      sources: [
        { name: "Rubin et al. — BrainGate Neural Interface System feasibility study (Neurology, 2023)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10074470/" },
        { name: "Xia et al. — Wearable robots for motor and sensory reconstruction and enhancement (Nature Communications, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10897332/" },
        { name: "Liu et al. — Bioprinting principles, applications, and future perspectives (MedComm, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11417428/" },
        { name: "Ienca & Andorno — Towards New Human Rights in the Neurotechnology Age (Life Sciences Society Policy, 2017)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5447561/" },
      ],
    },
    stakes: {
      win: "The body stops being a fixed constraint on what a person can do, feel, and endure, and becomes an editable, sovereign platform under the control of the individual who lives in it.",
      lose: "The capability to redesign the human form arrives without the rights to match, leaving that power concentrated in institutions or markets rather than in the people whose bodies are at stake.",
      wildcard: "A breakthrough augmentation that clearly outperforms the healthy human baseline could collapse the line between therapy and enhancement, forcing law and culture to move faster than either is ready for.",
      sources: [
        { name: "Xia et al. — Wearable robots for motor and sensory reconstruction and enhancement (Nature Communications, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10897332/" },
        { name: "Ienca & Andorno — Towards New Human Rights in the Neurotechnology Age (Life Sciences Society Policy, 2017)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5447561/" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "Restorative augmentation is real and advancing; elective, sovereign redesign remains at the frontier of technology, law, and culture.",
      metrics: [
        { label: "Augmentation platforms tracked", value: "—" },
        { label: "Jurisdictions with rights frameworks", value: "—" },
      ],
    },
    getInvolved:
      "Owning Morphological Freedom means funding the engineering, defending the right, and shaping the norms that make self-directed embodiment safe and sovereign. Which of The 37 is yours?",
    readAs: "Reads with Cause 01: first the body endures, then the body becomes yours to design.",
  },
  {
    slug: "sensory-expansion",
    whyItMatters: [
      "Everything you have ever experienced arrived through a handful of narrow biological channels. The universe broadcasts in infrared, magnetism, ultrasound, and spectra we have no names for — and we are deaf to almost all of it.",
      "Widen the bandwidth of perception and you widen the mind itself. New senses mean new science, new art, new intuitions about reality. The perceivable world is not fixed; it is an engineering frontier.",
    ],
    endState:
      "A child chooses to feel magnetic north the way she feels warmth. Engineers hear structural stress before it becomes failure. Artists compose in spectra their grandparents could not imagine. Perception becomes a matter of curiosity and consent — reality experienced at the resolution it actually has.",
    history: [
      {
        label: "The Old Constraint",
        body: "Human senses were a fixed inheritance — a thin slice of reality, mistaken for the whole of it.",
      },
      {
        label: "The Turning Point",
        body: "Sensory substitution and neural interface research showed the brain will learn any well-structured input stream: perception is plastic.",
        sources: [
          { name: "Eagleman & Novich — Sensory Substitution and Augmentation (Frontiers in Neuroscience, 2015)", url: "https://www.frontiersin.org/articles/10.3389/fnins.2015.00422/full" },
          { name: "NIDCD — Cochlear Implants", url: "https://www.nidcd.nih.gov/health/cochlear-implants" },
        ],
      },
      {
        label: "The Opening",
        body: "Implants and synthetic sensory organs are moving from restoring lost senses toward adding ones biology never offered.",
      },
    ],
    organizations: [
      { name: "Cochlear", focus: "A company producing cochlear implants that deliver sound to the auditory nerve for the deaf.", url: "https://www.cochlear.com" },
      { name: "Neuralink", focus: "A company building high-bandwidth brain-computer interfaces that could feed new sensory streams directly to the brain.", url: "https://neuralink.com" },
      { name: "Envision", focus: "A company building AI-powered smart glasses that translate the visual world into speech for blind users.", url: "https://www.letsenvision.com" },
      { name: "MED-EL", focus: "A hearing-implant company developing cochlear and auditory brainstem implants that restore sound perception.", url: "https://www.medel.com" },
      { name: "Advanced Bionics", focus: "A company producing cochlear implant systems that convert sound into signals for the auditory nerve.", url: "https://www.advancedbionics.com" },
      { name: "GenSight Biologics", focus: "A gene-therapy company using optogenetics to restore light perception and vision to the blind.", url: "https://www.gensight-biologics.com" },
      { name: "Pixium Vision", focus: "A company developing wireless retinal implants that stimulate the retina to restore visual perception.", url: "https://www.pixium-vision.com" },
      { name: "Science Corporation", focus: "A neurotechnology company developing high-resolution retinal implants and other sensory interfaces.", url: "https://science.xyz" },
      { name: "Cortigent", focus: "A company developing cortical visual implants that stimulate the brain to create visual percepts for the blind.", url: "https://www.cortigent.com" },
      { name: "Bionic Vision Technologies", focus: "A company developing a bionic eye system that restores functional vision through retinal stimulation.", url: "https://bionicvis.com" },
      { name: "Paradromics", focus: "A company building high-data-rate cortical implants capable of reading and writing neural signals.", url: "https://www.paradromics.com" },
      { name: "Blackrock Neurotech", focus: "A company producing implantable cortical interfaces used to convey sensory feedback to the brain.", url: "https://blackrockneurotech.com" },
      { name: "Synchron", focus: "A company developing minimally invasive brain-computer interfaces that link the nervous system to devices.", url: "https://synchron.com" },
      { name: "Precision Neuroscience", focus: "A company developing thin-film cortical interfaces designed to read and stimulate the brain at high resolution.", url: "https://precisionneuro.io" },
      { name: "OpenBCI", focus: "A company producing open-source brain-computer interface hardware for neuroscience and sensory research.", url: "https://openbci.com" },
      { name: "Cyberkinetics research lineage at Brown University", focus: "The academic program behind BrainGate, which pioneered cortical interfaces and sensory feedback.", url: "https://www.braingate.org" },
      { name: "University of Chicago Bensmaia Lab", focus: "A research lab studying how to restore and encode the sense of touch through neural stimulation.", url: "https://bensmaialab.org" },
      { name: "Battelle", focus: "A research organization developing neural bypass and sensory-restoration technologies for paralysis.", url: "https://www.battelle.org" },
      { name: "Emerge", focus: "A company developing mid-air haptic technology that lets people feel virtual objects without contact.", url: "https://emerge.io" },
      { name: "Ultraleap", focus: "A company building mid-air haptics and hand-tracking that add tactile sensation to digital interaction.", url: "https://www.ultraleap.com" },
      { name: "DARPA", focus: "The U.S. defense research agency funding neural interface and sensory-restoration programs.", url: "https://www.darpa.mil" },
      { name: "Wyss Center for Bio and Neuroengineering", focus: "A nonprofit research foundation advancing neurotechnology to restore and extend sensory and motor function.", url: "https://www.wysscenter.ch" },
    ],
    scenario: {
      horizon: "2060–2090",
      destination:
        "Perception is a matter of curiosity and consent rather than fixed inheritance. People add stable new senses, from magnetic orientation to spectra outside the biological range, and the brain learns to read them as it reads sight and touch.",
      convergences: [
        { name: "Sensory substitution", role: "Feeding one channel of data through another sense proves the brain will learn any well-structured input, and does so with noninvasive hardware available today." },
        { name: "High-bandwidth neural interfaces", role: "Cortical and endovascular implants can eventually write new sensory streams directly to the brain rather than routing around it." },
        { name: "Cochlear and retinal implant heritage", role: "Decades of restoring hearing and vision through direct stimulation supply the safety base and encoding know-how for adding senses." },
        { name: "Neural encoding research", role: "Understanding how the brain represents touch and other modalities is the key to translating an arbitrary signal into a felt percept." },
        { name: "Neuroplasticity", role: "The brain's capacity to remap and integrate novel input is what allows an engineered sense to become intuitive rather than a decoded readout." },
        { name: "Wearable haptics and sensor fusion", role: "Skin-worn and mid-air haptic devices offer a low-risk path to expanded perception before anything is implanted." },
      ],
      milestones: [
        { period: "2026–2035", event: "Wearable substitution devices let users reliably perceive data outside the biological range, such as orientation or ultrasound, through touch." },
        { period: "2035–2060", event: "High-resolution interfaces restore lost senses well enough that adding non-native senses becomes a credible research target." },
        { period: "2060–2090", event: "Stable, brain-integrated new senses are available electively and experienced as naturally as the inherited ones." },
      ],
      sources: [
        { name: "Eagleman & Novich — Sensory Substitution and Augmentation (Frontiers in Neuroscience, 2015)", url: "https://www.frontiersin.org/articles/10.3389/fnins.2015.00422/full" },
        { name: "NIDCD — Cochlear Implants", url: "https://www.nidcd.nih.gov/health/cochlear-implants" },
        { name: "Metzger et al. — High-bandwidth speech BCI (Nature, 2023)", url: "https://www.nature.com/articles/s41586-023-06443-4" },
      ],
    },
    stakes: {
      win: "Expanding the bandwidth of perception expands the mind that runs on it, opening new science, art, and intuition drawn from parts of reality humans have never directly experienced.",
      lose: "Humanity stays confined to a thin, evolved slice of the world it mistakes for the whole, leaving vast amounts of accessible information permanently outside conscious experience.",
      wildcard: "A single demonstration of a person fluently using a sense biology never provided could reframe perception itself as a design choice, drawing talent and funding into the field.",
      sources: [
        { name: "Metzger et al. — High-bandwidth speech BCI (Nature, 2023)", url: "https://www.nature.com/articles/s41586-023-06443-4" },
        { name: "Wyss Center for Bio and Neuroengineering", url: "https://www.wysscenter.ch" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "Restorative neural interfaces are demonstrating the principle; expansion beyond the biological baseline is early and largely experimental.",
      metrics: [
        { label: "Interface modalities in research", value: "—" },
        { label: "Active clinical programs", value: "—" },
      ],
    },
    getInvolved:
      "Owning Sensory Expansion means backing the interfaces, the neuroscience, and the safety standards that turn new senses from lab demos into lived experience. Which of The 37 is yours?",
    readAs: "The substrate arc widens here: from surviving, to redesigning, to perceiving more.",
  },
];
