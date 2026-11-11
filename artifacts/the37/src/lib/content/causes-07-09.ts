// Causes 07–09. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes07to09: CauseContent[] = [
  {
    slug: "atomic-fabrication",
    whyItMatters: [
      "Everything you own crossed an ocean, a mine, and a hundred fragile handoffs to reach you. Scarcity today is mostly logistics: matter in the wrong shape, in the wrong place, owned by the wrong bottleneck.",
      "Move fabrication to the atomic level — localized molecular assembly from base elements — and supply chains collapse into a device. Any material, any product, on demand, anywhere. Scarcity of things becomes a memory, the way scarcity of copies of a book already is.",
    ],
    endState:
      "A clinic in a remote village prints the medical device it needs the hour it needs it. Materials are synthesized, not mined; products are assembled, not shipped. \"Out of stock\" and \"supply shock\" read like telegrams — artifacts of an era when matter had to travel to be useful.",
    history: [
      {
        label: "The Old Constraint",
        body: "Making things meant extracting, refining, and moving matter across the planet — every object a hostage to geology and logistics.",
      },
      {
        label: "The Turning Point",
        body: "Additive manufacturing and precision chemistry showed that objects can be grown from digital descriptions, layer by layer, close to where they're needed.",
        sources: [
          { name: "Eigler & Schweizer — Single-atom positioning (Nature, 1990)", url: "https://www.nature.com/articles/344524a0" },
          { name: "NIST Center for Nanoscale Science and Technology", url: "https://www.nist.gov/cnst" },
        ],
      },
      {
        label: "The Opening",
        body: "Nanoscale assembly and programmable matter research point toward fabrication from base elements — the end of scarcity at its root.",
      },
    ],
    organizations: [
      { name: "IBM Research", focus: "A corporate lab pioneering atomic-scale manipulation, from moving individual atoms to building single-molecule devices.", url: "https://research.ibm.com" },
      { name: "Intel", focus: "A company mass-manufacturing at near-atomic scale, defining the state of the art in precision fabrication of matter.", url: "https://www.intel.com" },
      { name: "TSMC", focus: "The world's largest contract chipmaker, producing structures at the leading edge of atomic-scale patterning.", url: "https://www.tsmc.com" },
      { name: "Foresight Institute", focus: "A nonprofit advancing research and community around atomically precise manufacturing.", url: "https://foresight.org" },
      { name: "National Institute of Standards and Technology (NIST)", focus: "A U.S. agency developing the metrology and standards that underpin nanoscale and atomic fabrication.", url: "https://www.nist.gov" },
      { name: "IMEC", focus: "A Belgian research institute advancing nanoelectronics and atomic-scale process technology.", url: "https://www.imec-int.com" },
      { name: "Zyvex Labs", focus: "A company pursuing molecular nanotechnology and atomically precise manufacturing.", url: "https://www.zyvexlabs.com" },
      { name: "EOS", focus: "A company building industrial additive-manufacturing systems for on-demand metal and polymer parts production.", url: "https://www.eos.info" },
      { name: "Oak Ridge National Laboratory", focus: "A U.S. national lab whose Center for Nanophase Materials Sciences advances atomically precise synthesis and imaging.", url: "https://www.ornl.gov" },
      { name: "IBM Zurich Research Laboratory", focus: "A lab whose scanning-probe work demonstrated single-atom and single-molecule fabrication techniques.", url: "https://research.ibm.com/labs/zurich" },
      { name: "Max Planck Institute for Solid State Research", focus: "A German institute studying atomic-scale physics and the assembly of matter from base elements.", url: "https://www.fkf.mpg.de" },
      { name: "Applied Materials", focus: "A company supplying the deposition and etch equipment that enables atomic-layer fabrication in industry.", url: "https://www.appliedmaterials.com" },
      { name: "ASML", focus: "The maker of extreme-ultraviolet lithography systems that pattern matter at atomic-scale resolution.", url: "https://www.asml.com" },
      { name: "Sandia National Laboratories", focus: "A U.S. national lab researching nanofabrication, microsystems, and atomically precise materials.", url: "https://www.sandia.gov" },
      { name: "Argonne National Laboratory", focus: "A U.S. national lab operating the Center for Nanoscale Materials for atomic-scale fabrication research.", url: "https://www.anl.gov" },
      { name: "MIT", focus: "A university advancing nanotechnology, additive manufacturing, and programmable-matter research.", url: "https://www.mit.edu" },
      { name: "Stratasys", focus: "A company producing industrial 3D-printing systems for on-demand, localized manufacturing.", url: "https://www.stratasys.com" },
      { name: "Colibrium Additive", focus: "A GE Aerospace business building metal additive-manufacturing machines that grow parts from digital descriptions.", url: "https://www.colibriumadditive.com" },
      { name: "Carbon", focus: "A company developing high-speed resin-based additive manufacturing for production-grade parts.", url: "https://www.carbon3d.com" },
      { name: "Molecular Foundry (Lawrence Berkeley National Laboratory)", focus: "A U.S. user facility for designing and fabricating materials at the nanoscale.", url: "https://foundry.lbl.gov" },
      { name: "Ginkgo Bioworks", focus: "A company engineering biology to program organisms that assemble molecules and materials on demand.", url: "https://www.ginkgobioworks.com" },
    ],
    scenario: {
      horizon: "2050–2080",
      destination:
        "Fabrication moves from moving matter to arranging it. Localized systems assemble a growing catalog of products and materials from base feedstock, and the ordinary supply chain becomes the exception rather than the rule.",
      convergences: [
        { name: "Scanning-probe microscopy", role: "Positions and images individual atoms, the enabling instrument for atomically precise construction." },
        { name: "Additive manufacturing", role: "Proves that objects can be grown from digital descriptions close to where they are used." },
        { name: "Synthetic biology", role: "Programs living systems to assemble molecules and materials that are hard to make by other means." },
        { name: "Atomic-layer deposition", role: "Builds structures one atomic layer at a time, already standard in advanced chip fabrication." },
        { name: "AI-driven materials discovery", role: "Searches chemical space for synthesizable structures far faster than trial-and-error in the lab." },
        { name: "Metrology and standards", role: "Defines how atomic-scale processes are measured and certified so fabrication becomes reproducible." },
      ],
      milestones: [
        { period: "2026–2032", event: "Additive manufacturing expands from prototyping into distributed production of end-use parts." },
        { period: "2032–2045", event: "Programmable synthesis and probe-based assembly demonstrate reliable construction of small atomically precise structures." },
        { period: "2045–2065", event: "Hybrid biological and mechanical assembly scales beyond niche materials toward broader product categories." },
        { period: "2065–2080", event: "Localized fabrication systems handle a meaningful share of everyday material needs." },
      ],
      sources: [
        { name: "Eigler & Schweizer, single-atom positioning (Nature, 1990)", url: "https://www.nature.com/articles/344524a0" },
        { name: "NIST Center for Nanoscale Science and Technology", url: "https://www.nist.gov/cnst" },
        { name: "Foresight Institute — Roadmap for Atomically Precise Manufacturing", url: "https://events.foresight.org/nanotechnology-roadmap-for-atomically-precise-manufacturing/" },
      ],
    },
    stakes: {
      win: "Winning collapses the distance between need and supply, freeing civilization from the logistics and extraction bottlenecks that ration matter today.",
      lose: "Stalling leaves the physical economy hostage to geology, shipping, and single points of failure, with shortages and shocks recurring as structural features.",
      wildcard: "A breakthrough in AI-designed synthesis routes could compress decades of trial-and-error and pull the timeline sharply forward.",
      sources: [
        { name: "Foresight Institute — Roadmap for Atomically Precise Manufacturing", url: "https://events.foresight.org/nanotechnology-roadmap-for-atomically-precise-manufacturing/" },
        { name: "OECD — Supply Chain Resilience", url: "https://www.oecd.org/en/topics/supply-chain-resilience.html" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "Additive manufacturing is real and spreading; true molecular assembly remains a research frontier with the largest prize in the dimension.",
      metrics: [
        { label: "Fabrication platforms tracked", value: "—" },
        { label: "Materials synthesized on demand", value: "—" },
      ],
    },
    getInvolved:
      "Owning Atomic Fabrication means funding the assemblers, the materials science, and the open standards that put a factory in every community. Which of The 37 is yours?",
    readAs: "The engine's second movement: after limitless power, limitless matter.",
  },
  {
    slug: "nutritional-superabundance",
    whyItMatters: [
      "We still feed the species with a technology from the Neolithic: clear the land, plant the seed, pray for weather. Agriculture consumes continents, drains rivers, and still leaves millions hungry — a system running at the edge of its design limits.",
      "Move food production beyond the field — precision fermentation, cellular agriculture, synthetic biology — and nutrition becomes an engineered abundance. Optimized, local, immune to drought and blight, at zero environmental cost. No one goes hungry. Ever.",
    ],
    endState:
      "Food is produced where it is eaten, designed for the body eating it. Farmland returns to wilderness at continental scale. Famine is impossible in the way smallpox is impossible — not because nature relented, but because we built past it. A child's nutrition no longer depends on latitude or luck.",
    history: [
      {
        label: "The Old Constraint",
        body: "Food meant land, weather, and toil — a planetary gamble renewed every season, with hunger as the recurring loss.",
      },
      {
        label: "The Turning Point",
        body: "Fermentation and cell culture crossed from lab curiosity to food production: protein without the animal, harvest without the field.",
        sources: [
          { name: "Good Food Institute — Cultivated Meat State of the Industry", url: "https://gfi.org/science/the-science-of-cultivated-meat/" },
          { name: "FAO — Future of Food and Agriculture 2050", url: "https://www.fao.org/3/i6583e/i6583e.pdf" },
        ],
      },
      {
        label: "The Opening",
        body: "Precision fermentation and cellular agriculture are scaling toward cost parity, pointing to nutrition as manufactured abundance rather than agricultural output.",
      },
    ],
    organizations: [
      { name: "CGIAR", focus: "A global agricultural research partnership working to secure nutrition and food supply for billions.", url: "https://www.cgiar.org" },
      { name: "Food and Agriculture Organization (FAO)", focus: "A UN agency leading international efforts to end hunger and improve nutrition worldwide.", url: "https://www.fao.org" },
      { name: "World Food Programme", focus: "A UN agency delivering food assistance at global scale and driving toward zero hunger.", url: "https://www.wfp.org" },
      { name: "The Good Food Institute", focus: "A nonprofit advancing alternative-protein science, policy, and industry.", url: "https://gfi.org" },
      { name: "Perfect Day", focus: "A company using precision fermentation to produce dairy proteins without animals.", url: "https://perfectday.com" },
      { name: "UPSIDE Foods", focus: "A company developing cultivated meat grown directly from animal cells.", url: "https://upsidefoods.com" },
      { name: "Solar Foods", focus: "A company producing protein from air, water, and electricity via microbial fermentation.", url: "https://solarfoods.com" },
      { name: "Impossible Foods", focus: "A company using precision fermentation and plant science to replace animal-derived foods.", url: "https://impossiblefoods.com" },
      { name: "Beyond Meat", focus: "A company producing plant-based meat to shift protein production off the field.", url: "https://www.beyondmeat.com" },
      { name: "Air Protein", focus: "A company converting carbon dioxide into edible protein through fermentation.", url: "https://www.airprotein.com" },
      { name: "GOOD Meat (Eat Just)", focus: "A company producing cultivated meat and among the first cleared for commercial sale.", url: "https://www.goodmeat.co" },
      { name: "Wildtype", focus: "A company developing cultivated seafood grown from fish cells.", url: "https://www.wildtypefoods.com" },
      { name: "BlueNalu", focus: "A company producing cell-cultured seafood to decouple supply from wild catch.", url: "https://www.bluenalu.com" },
      { name: "Mosa Meat", focus: "A company that produced the first cultivated-beef burger and is scaling cellular agriculture.", url: "https://mosameat.com" },
      { name: "Ginkgo Bioworks", focus: "A company engineering microbes for precision fermentation of foods and ingredients.", url: "https://www.ginkgobioworks.com" },
      { name: "Bill & Melinda Gates Foundation", focus: "A foundation funding agricultural innovation and nutrition programs to end hunger.", url: "https://www.gatesfoundation.org" },
      { name: "International Rice Research Institute", focus: "A research institute developing higher-yield, more nutritious rice for food security.", url: "https://www.irri.org" },
      { name: "USDA Agricultural Research Service", focus: "A U.S. agency conducting research to improve food production and nutrition.", url: "https://www.ars.usda.gov" },
      { name: "Wageningen University & Research", focus: "A leading research university advancing food science, cellular agriculture, and sustainable nutrition.", url: "https://www.wur.nl" },
      { name: "New Harvest", focus: "A nonprofit funding open cellular-agriculture research to build a post-animal food system.", url: "https://new-harvest.org" },
      { name: "HarvestPlus", focus: "A program breeding biofortified staple crops to deliver essential nutrients at scale.", url: "https://www.harvestplus.org" },
    ],
    scenario: {
      horizon: "2035–2055",
      destination:
        "A large share of protein and staple nutrition is produced by fermentation and cell culture near the point of consumption. Supply decouples from weather and arable land, and farmland begins returning to other uses.",
      convergences: [
        { name: "Precision fermentation", role: "Programs microbes to produce specific proteins and fats without the animal or the field." },
        { name: "Cellular agriculture", role: "Grows meat and seafood directly from cells, removing the need to raise and slaughter livestock." },
        { name: "Synthetic biology", role: "Engineers organisms to widen the range of nutrients and ingredients that can be manufactured." },
        { name: "Bioreactor scale-up", role: "Drives down the cost and footprint of production, the main barrier between demonstration and parity." },
        { name: "Cheap renewable energy", role: "Makes energy-intensive fermentation and gas-to-protein routes economically viable at scale." },
        { name: "Regulatory approval frameworks", role: "Determines how quickly cultivated and fermented foods reach markets and kitchens." },
      ],
      milestones: [
        { period: "2026–2032", event: "Precision-fermentation dairy and egg proteins expand across mainstream food products, even as cultivated meat faces regulatory headwinds and outright bans in some jurisdictions." },
        { period: "2032–2040", event: "If costs keep falling and approvals broaden, cultivated meat and seafood approach parity in early markets and scale beyond pilot facilities." },
        { period: "2040–2050", event: "Manufactured nutrition begins supplying a meaningful fraction of protein demand in the regions that embraced it." },
        { period: "2050–2055", event: "Local production networks make nutrition largely independent of latitude and harvest." },
      ],
      sources: [
        { name: "Good Food Institute — The Science of Cultivated Meat", url: "https://gfi.org/science/the-science-of-cultivated-meat/" },
        { name: "FAO — Future of Food and Agriculture 2050", url: "https://www.fao.org/3/i6583e/i6583e.pdf" },
        { name: "New Harvest — Cellular Agriculture Research", url: "https://new-harvest.org" },
      ],
    },
    stakes: {
      win: "Winning makes famine an engineering impossibility and returns continental-scale farmland to wilderness, ending the planetary gamble that agriculture has always been.",
      lose: "Stalling keeps billions dependent on a climate-fragile food system, with hunger and land and water pressure compounding as population and warming rise.",
      wildcard: "A sharp fall in clean-energy prices could make manufactured food cheaper than farmed food faster than any policy predicts.",
      sources: [
        { name: "FAO — State of Food Security and Nutrition in the World", url: "https://www.fao.org/publications/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world/en" },
        { name: "FAO — The State of Food and Agriculture 2022", url: "https://www.fao.org/publications/sofa/2022/en/" },
      ],
    },
    progress: {
      stage: "Scaling",
      statusLine: "The core technologies work; the race now is cost, capacity, and cultural acceptance.",
      metrics: [
        { label: "Production facilities tracked", value: "—" },
        { label: "Cost vs. conventional parity", value: "—" },
      ],
    },
    getInvolved:
      "Owning Nutritional Superabundance means backing the fermenters, the food scientists, and the supply transitions that end hunger as an engineering fact. Which of The 37 is yours?",
    readAs: "The engine feeds the substrate: abundant energy and matter, turned into abundant life.",
  },
  {
    slug: "computational-omnipresence",
    whyItMatters: [
      "Compute is the new literacy. Every exponential technology — AI, simulation, design, discovery — runs on it, and today it is rationed by wealth and geography. A mind without compute is increasingly a mind locked out of the century.",
      "Make computation and bandwidth unlimited and free for every human, and you lay the substrate every other cause builds on. Intelligence infrastructure for all is not a luxury; it is the precondition for the rest of the atlas.",
    ],
    endState:
      "Access to computation is as unremarkable as access to arithmetic. Every person — any country, any income — commands the modeling, intelligence, and connectivity that only institutions command today. Ideas compete on merit, not on their author's hardware budget. The grid of thought covers the Earth.",
    history: [
      {
        label: "The Old Constraint",
        body: "Computation was priced like a commodity and distributed like one — concentrated where wealth already lived.",
      },
      {
        label: "The Turning Point",
        body: "Costs per operation collapsed for decades while networks wrapped the planet, making universal access a question of will rather than physics.",
        sources: [
          { name: "ITU — Measuring Digital Development 2023", url: "https://www.itu.int/hub/publication/d-ind-ict_mdd-2023-1/" },
          { name: "Our World in Data — Transistor Count & Moore's Law", url: "https://ourworldindata.org/grapher/transistors-per-microprocessor" },
        ],
      },
      {
        label: "The Opening",
        body: "AI turned raw compute into raw capability, sharpening the case for computation as a fundamental right — the substrate of every other exponential.",
      },
    ],
    organizations: [
      { name: "NVIDIA", focus: "A company producing the accelerated-computing hardware that underpins modern AI workloads.", url: "https://www.nvidia.com" },
      { name: "Amazon Web Services", focus: "The largest cloud provider, making global-scale computation available on demand.", url: "https://aws.amazon.com" },
      { name: "Microsoft Azure", focus: "A hyperscale cloud platform delivering compute and AI infrastructure worldwide.", url: "https://azure.microsoft.com" },
      { name: "Google Cloud", focus: "A hyperscale cloud provider and builder of custom AI accelerators for global compute access.", url: "https://cloud.google.com" },
      { name: "Starlink", focus: "A satellite network extending broadband connectivity to remote and underserved regions.", url: "https://www.starlink.com" },
      { name: "TSMC", focus: "The world's largest chip foundry, manufacturing the processors that power global computation.", url: "https://www.tsmc.com" },
      { name: "Intel", focus: "A company designing and manufacturing the processors that form the backbone of computing infrastructure.", url: "https://www.intel.com" },
      { name: "Meta", focus: "A company building open connectivity infrastructure and open-source AI models to broaden compute access.", url: "https://about.meta.com" },
      { name: "Internet Society", focus: "A nonprofit working to expand affordable, open internet access worldwide.", url: "https://www.internetsociety.org" },
      { name: "ARM", focus: "A company whose processor designs power billions of devices, extending computation everywhere.", url: "https://www.arm.com" },
      { name: "Cloudflare", focus: "A company distributing compute and networking to the edge to make access faster and cheaper.", url: "https://www.cloudflare.com" },
      { name: "Alliance for Affordable Internet", focus: "A coalition working to lower the cost of internet access in developing regions.", url: "https://a4ai.org" },
      { name: "Cisco", focus: "A company building the networking hardware that connects the global internet.", url: "https://www.cisco.com" },
      { name: "Advanced Micro Devices (AMD)", focus: "A company producing CPUs and GPUs that supply large-scale compute for AI and cloud.", url: "https://www.amd.com" },
      { name: "Broadcom", focus: "A company supplying the networking and connectivity silicon that scales internet infrastructure.", url: "https://www.broadcom.com" },
      { name: "OpenAI", focus: "A research organization building large-scale AI that turns raw compute into broadly usable capability.", url: "https://openai.com" },
      { name: "Hugging Face", focus: "A platform democratizing access to open AI models and the compute tooling around them.", url: "https://huggingface.co" },
      { name: "GSMA", focus: "An industry body driving mobile connectivity and digital inclusion across emerging markets.", url: "https://www.gsma.com" },
      { name: "World Bank Digital Development", focus: "A program financing broadband and digital infrastructure in underserved countries.", url: "https://www.worldbank.org" },
      { name: "Mozilla Foundation", focus: "A nonprofit advocating for an open, accessible internet and equitable digital access.", url: "https://foundation.mozilla.org" },
      { name: "International Telecommunication Union (ITU)", focus: "A UN agency coordinating global connectivity and working to close the digital divide.", url: "https://www.itu.int" },
    ],
    scenario: {
      horizon: "2030–2045",
      destination:
        "Meaningful compute and connectivity reach nearly every person, delivered by low-cost devices, satellite and terrestrial networks, and cloud and edge infrastructure. Access to modeling and intelligence stops tracking wealth and geography.",
      convergences: [
        { name: "Accelerated-computing hardware", role: "Supplies the raw capability that AI and simulation consume, and its cost per operation keeps falling." },
        { name: "Satellite broadband constellations", role: "Extend connectivity to remote regions that terrestrial networks never reached economically." },
        { name: "Edge and cloud infrastructure", role: "Distributes computation closer to users, lowering latency and cost of access." },
        { name: "Open-source AI models", role: "Turn shared compute into usable capability without requiring proprietary licenses or data." },
        { name: "Low-cost mobile devices", role: "Put a networked computer in nearly every hand across emerging markets." },
        { name: "Digital-inclusion policy", role: "Shapes whether access becomes affordable and universal or stays metered and unequal." },
      ],
      milestones: [
        { period: "2026–2030", event: "Satellite and mobile networks close much of the remaining coverage gap in underserved regions." },
        { period: "2030–2037", event: "Open models and cheaper accelerators make advanced AI capability broadly affordable." },
        { period: "2037–2045", event: "Meaningful compute access approaches universality, treated as basic infrastructure rather than a premium good." },
      ],
      sources: [
        { name: "ITU — Measuring Digital Development 2023", url: "https://www.itu.int/hub/publication/d-ind-ict_mdd-2023-1/" },
        { name: "Broadband Commission for Sustainable Development", url: "https://broadbandcommission.org/publication/" },
        { name: "UNESCO — Futures of Education", url: "https://www.unesco.org/en/futures-education" },
      ],
    },
    stakes: {
      win: "Winning lays the substrate under every other exponential, letting ideas and discovery compete on merit rather than on an author's hardware budget.",
      lose: "Stalling hardens a compute divide into a permanent gap in opportunity, locking whole populations out of the century's defining tools.",
      wildcard: "A leap in energy-efficient chips or on-device models could make frontier capability essentially free and erase the access gap overnight.",
      sources: [
        { name: "Broadband Commission for Sustainable Development", url: "https://broadbandcommission.org/publication/" },
        { name: "Alliance for Affordable Internet", url: "https://a4ai.org" },
      ],
    },
    progress: {
      stage: "Scaling",
      statusLine: "The infrastructure exists and grows relentlessly; the unfinished work is making access universal and unmetered.",
      metrics: [
        { label: "Population with meaningful access", value: "—" },
        { label: "Cost per unit of compute", value: "—" },
      ],
    },
    getInvolved:
      "Owning Computational Omnipresence means funding the networks, the access programs, and the policy that make compute a right, not a bill. Which of The 37 is yours?",
    readAs: "The engine's last output is thought itself: power, matter, food — and now computation for every mind.",
  },
];
