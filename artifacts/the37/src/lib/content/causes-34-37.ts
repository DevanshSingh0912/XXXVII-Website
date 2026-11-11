// Causes 34–37. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes34to37: CauseContent[] = [
  {
    slug: "existential-security",
    whyItMatters: [
      "Everything in this atlas — every cause, every dimension, every future — carries the same silent asterisk: assuming we survive. Engineered pandemics, unaligned intelligence, nuclear exchange, unknown unknowns. One is enough.",
      "Reach a civilizational state where existential catastrophe is vanishingly unlikely and the asterisk disappears. This is not one cause among many. It is the precondition for all of them. Survive first. Then thrive forever.",
    ],
    endState:
      "Extinction-class risks are monitored, engineered against, and governed like the solved hazards they've become — the way aviation turned catastrophe into checklists. Civilization plans in centuries because it can. The future is no longer a bet; it is an expectation.",
    history: [
      {
        label: "The Old Constraint",
        body: "For most of history, extinction wasn't a policy area — the risks were natural, invisible, and beyond anyone's reach.",
      },
      {
        label: "The Turning Point",
        body: "Humanity acquired self-erasing power and, decades later, a research field willing to take the possibility seriously and rank the threats.",
        sources: [
          { name: "Ord — The Precipice (Oxford University Press, 2020)", url: "https://theprecipice.com" },
          { name: "Centre for the Study of Existential Risk", url: "https://www.cser.ac.uk" },
        ],
      },
      {
        label: "The Opening",
        body: "Biosecurity, AI safety, and resilience engineering are becoming real disciplines — the beginnings of an immune system against the worst outcomes.",
      },
    ],
    organizations: [
      { name: "Nuclear Threat Initiative", focus: "A nonprofit working to reduce nuclear and biological threats to humanity.", url: "https://www.nti.org" },
      { name: "International Atomic Energy Agency", focus: "The United Nations body safeguarding nuclear materials and working to prevent their use in catastrophic weapons.", url: "https://www.iaea.org" },
      { name: "Johns Hopkins Center for Health Security", focus: "A research center focused on preventing and preparing for engineered pandemics and other biosecurity threats.", url: "https://centerforhealthsecurity.org" },
      { name: "World Health Organization", focus: "The UN agency coordinating global pandemic preparedness, surveillance, and response to catastrophic disease outbreaks.", url: "https://www.who.int" },
      { name: "Coalition for Epidemic Preparedness Innovations", focus: "A global partnership accelerating vaccine development to blunt pandemics before they become civilizational threats.", url: "https://cepi.net" },
      { name: "OpenAI", focus: "An AI lab that dedicates research and safety teams to aligning advanced AI systems and mitigating catastrophic risks.", url: "https://openai.com" },
      { name: "Anthropic", focus: "An AI safety company researching how to make powerful AI systems reliable, interpretable, and aligned with human intent.", url: "https://www.anthropic.com" },
      { name: "Google DeepMind", focus: "An AI lab with dedicated safety and alignment research aimed at preventing harms from advanced artificial intelligence.", url: "https://deepmind.google" },
      { name: "Future of Life Institute", focus: "A nonprofit working to steer transformative technologies away from extreme risks, especially AI and nuclear weapons.", url: "https://futureoflife.org" },
      { name: "Center for Human-Compatible AI", focus: "A UC Berkeley research center working to ensure advanced AI systems remain provably beneficial and under human control.", url: "https://humancompatible.ai" },
      { name: "Centre for the Study of Existential Risk", focus: "A Cambridge research center studying and mitigating risks that could lead to human extinction or civilizational collapse.", url: "https://www.cser.ac.uk" },
      { name: "Machine Intelligence Research Institute", focus: "A nonprofit researching the mathematical foundations of safe and aligned advanced artificial intelligence.", url: "https://intelligence.org" },
      { name: "Center for AI Safety", focus: "A nonprofit conducting research and field-building to reduce societal-scale risks from artificial intelligence.", url: "https://www.safe.ai" },
      { name: "Alignment Research Center", focus: "A nonprofit developing techniques to align advanced machine learning systems with human interests.", url: "https://www.alignment.org" },
      { name: "Bulletin of the Atomic Scientists", focus: "An organization tracking nuclear, climate, and technological threats through its Doomsday Clock and expert analysis.", url: "https://thebulletin.org" },
      { name: "Comprehensive Nuclear-Test-Ban Treaty Organization", focus: "An international body operating a global monitoring network to detect and deter nuclear weapons testing.", url: "https://www.ctbto.org" },
      { name: "Federation of American Scientists", focus: "A nonprofit providing analysis on nuclear arsenals, biosecurity, and other catastrophic global risks.", url: "https://fas.org" },
      { name: "Nuclear Emergency Support Team", focus: "A U.S. government team that responds to nuclear and radiological threats to prevent mass-casualty events.", url: "https://www.energy.gov/nnsa/nuclear-emergency-support-team-nest" },
      { name: "Union of Concerned Scientists", focus: "A science advocacy nonprofit working to reduce the risks of nuclear war and other global-scale hazards.", url: "https://www.ucsusa.org" },
      { name: "International Biosecurity and Biosafety Initiative for Science", focus: "A nonprofit safeguarding modern bioscience by screening DNA synthesis and securing dangerous pathogens against misuse.", url: "https://ibbis.bio" },
      { name: "Global Catastrophic Risk Institute", focus: "A think tank analyzing and developing strategies to address risks that threaten global civilization.", url: "https://gcrinstitute.org" },
      { name: "Ploughshares Fund", focus: "A foundation funding efforts to reduce and eliminate the dangers posed by nuclear weapons.", url: "https://www.ploughshares.org" },
    ],
    scenario: {
      horizon: "2040–2070",
      destination:
        "Each extinction-class risk has a dedicated defense with measurable margins: pathogen surveillance that catches novel outbreaks in days, verifiable limits on the most dangerous AI training runs, and nuclear arsenals held far below hair-trigger postures. Catastrophe becomes a governed hazard rather than an open question.",
      convergences: [
        { name: "Metagenomic biosurveillance", role: "Sequencing wastewater and clinical samples at scale turns a novel pathogen from an invisible threat into an early, actionable signal." },
        { name: "AI interpretability and evals", role: "Techniques to inspect and stress-test frontier models make it possible to detect dangerous capabilities before deployment." },
        { name: "Nuclear monitoring networks", role: "Seismic, radionuclide, and satellite sensing verify test bans and arsenal limits, reducing the incentive to build first-strike capacity." },
        { name: "Pandemic-agnostic countermeasures", role: "Rapid vaccine platforms and broad-spectrum antivirals compress the time from outbreak to protection." },
        { name: "International governance regimes", role: "Treaties and inspection bodies convert one-off restraint into durable, enforceable norms across nations." },
        { name: "Compute and DNA-synthesis screening", role: "Gating access to the physical inputs of catastrophic weapons closes the gap between intent and capability." },
      ],
      milestones: [
        { period: "2026–2032", event: "Biosurveillance and DNA-synthesis screening move from pilots toward standing infrastructure in leading economies, building on early rules like the EU AI Act's systemic-risk obligations." },
        { period: "2032–2045", event: "If political will holds, binding safety evaluations for frontier AI and updated arms-control frameworks extend beyond early adopters to the other major powers." },
        { period: "2045–2070", event: "The full set of named extinction risks operates under continuous monitoring with independently verifiable safety margins." },
      ],
      sources: [
        { name: "Ord — The Precipice (Oxford University Press, 2020)", url: "https://theprecipice.com" },
        { name: "Centre for the Study of Existential Risk", url: "https://www.cser.ac.uk" },
        { name: "EU AI Act — systemic risk provisions", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
      ],
    },
    stakes: {
      win: "Every other cause in the atlas inherits a future it can actually reach, and civilization gains the confidence to plan in centuries rather than hedge against sudden erasure.",
      lose: "A single unmanaged risk that materializes ends the story for everyone, and even near misses divert a generation's resources into recovery instead of progress.",
      wildcard: "A rapid jump in AI capability could either supply the tools to lock down every other risk or become the risk that outruns all our safeguards.",
      sources: [
        { name: "Ord — The Precipice (Oxford University Press, 2020)", url: "https://theprecipice.com" },
        { name: "Johns Hopkins Center for Health Security", url: "https://centerforhealthsecurity.org" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The risks are named and studied; the systematic engineering-down of all of them has barely begun.",
      metrics: [
        { label: "Risk domains under active mitigation", value: "—" },
        { label: "Dedicated programs tracked", value: "—" },
      ],
    },
    getInvolved:
      "Owning Existential Security means funding and building the safeguards that keep every other cause possible — the insurance policy on the entire atlas. Which of The 37 is yours?",
    readAs: "Deep time begins with a lock on the door: survive everything, so everything else can matter.",
  },
  {
    slug: "antifragile-civilization",
    whyItMatters: [
      "Robust systems resist shocks until the shock that breaks them. Efficient systems shatter beautifully. Our civilization is mostly the second kind: optimized supply chains, brittle institutions, single points of failure wearing the costume of strength.",
      "Build systems that gain from disorder — that get stronger from stress the way muscle does — and every crisis becomes an upgrade. Not resilience, which survives the blow. Antifragility, which profits from it.",
    ],
    endState:
      "Shocks make the news, not the history books. Infrastructure, institutions, and economies absorb volatility and emerge more capable — each disruption metabolized into design improvements by default. Civilization stops fearing stress tests because it has become one long, passing grade.",
    history: [
      {
        label: "The Old Constraint",
        body: "Civilization optimized for efficiency and called it strength — until each crisis revealed how much had been quietly betting on calm.",
      },
      {
        label: "The Turning Point",
        body: "The concept of antifragility gave the goal a name: systems that need volatility, as living things do, rather than merely tolerating it.",
        sources: [
          { name: "Taleb — Antifragile: Things That Gain from Disorder (Random House, 2012)", url: "https://www.penguinrandomhouse.com/books/176227/antifragile-by-nassim-nicholas-taleb/" },
          { name: "Stockholm Resilience Centre", url: "https://www.stockholmresilience.org" },
        ],
      },
      {
        label: "The Opening",
        body: "Resilience engineering and stress-test culture are spreading from finance and software toward infrastructure and governance — the vocabulary becoming a practice.",
      },
    ],
    organizations: [
      { name: "Santa Fe Institute", focus: "A research institute studying complex adaptive systems, including how networks and economies respond to stress and shock.", url: "https://www.santafe.edu" },
      { name: "Stockholm Resilience Centre", focus: "A research center studying how social and ecological systems build resilience to shocks and change.", url: "https://www.stockholmresilience.org" },
      { name: "World Bank", focus: "A global institution financing resilient infrastructure and disaster-risk reduction across developing economies.", url: "https://www.worldbank.org" },
      { name: "United Nations Office for Disaster Risk Reduction", focus: "The UN body coordinating global efforts to reduce disaster losses and build resilience into development.", url: "https://www.undrr.org" },
      { name: "Rockefeller Foundation", focus: "A foundation that pioneered the resilient-cities movement, helping urban systems absorb and adapt to shocks.", url: "https://www.rockefellerfoundation.org" },
      { name: "Federal Emergency Management Agency", focus: "The U.S. agency building national capacity to withstand and recover from disasters and infrastructure failures.", url: "https://www.fema.gov" },
      { name: "RAND Corporation", focus: "A research organization analyzing how infrastructure, supply chains, and institutions can be made resilient to disruption.", url: "https://www.rand.org" },
      { name: "Resilience Engineering Association", focus: "An international community advancing the study of how systems adapt to and gain from disruption.", url: "https://www.resilience-engineering-association.org" },
      { name: "Massachusetts Institute of Technology", focus: "A university whose supply-chain and systems researchers study how networks can be made robust and adaptive under stress.", url: "https://www.mit.edu" },
      { name: "Bank for International Settlements", focus: "An international body that stress-tests the global financial system to prevent cascading collapse.", url: "https://www.bis.org" },
      { name: "Financial Stability Board", focus: "An international body monitoring and recommending safeguards against systemic risk in global finance.", url: "https://www.fsb.org" },
      { name: "International Institute for Applied Systems Analysis", focus: "A research institute modeling how complex human and natural systems respond to shocks and change.", url: "https://iiasa.ac.at" },
      { name: "OECD", focus: "An intergovernmental organization developing frameworks for economic and infrastructure resilience among member states.", url: "https://www.oecd.org" },
      { name: "World Economic Forum", focus: "An organization convening leaders to identify systemic global risks and strengthen resilience against them.", url: "https://www.weforum.org" },
      { name: "Cybersecurity and Infrastructure Security Agency", focus: "A U.S. agency safeguarding critical infrastructure against cyber and physical disruptions.", url: "https://www.cisa.gov" },
      { name: "Complexity Science Hub Vienna", focus: "A research center modeling systemic risk in economies, supply chains, and interconnected networks.", url: "https://www.csh.ac.at" },
      { name: "Institute for Systems Biology", focus: "A research institute studying how biological systems achieve robustness and adaptation, informing resilience science.", url: "https://isbscience.org" },
      { name: "New England Complex Systems Institute", focus: "A research institute analyzing fragility and resilience in economic, social, and ecological systems.", url: "https://necsi.edu" },
      { name: "Resilient Cities Network", focus: "A global network of cities collaborating to build urban resilience against shocks and chronic stresses.", url: "https://resilientcitiesnetwork.org" },
      { name: "Commodity Futures Trading Commission", focus: "The U.S. commodities regulator that stress-tests markets and derivatives to prevent systemic financial failure.", url: "https://www.cftc.gov" },
      { name: "European Central Bank", focus: "A central bank conducting systemic stress tests to keep the eurozone financial system stable under shock.", url: "https://www.ecb.europa.eu" },
      { name: "National Institute of Standards and Technology", focus: "A U.S. agency developing resilience standards and frameworks for infrastructure and communities.", url: "https://www.nist.gov" },
    ],
    scenario: {
      horizon: "2045–2080",
      destination:
        "Critical systems are designed with slack, redundancy, and reversibility as default requirements, and disruptions routinely trigger automatic improvement rather than cascading failure. Supply chains reroute, grids self-heal, and institutions treat each stress test as a source of data.",
      convergences: [
        { name: "Distributed energy and microgrids", role: "Decentralized generation lets local systems keep running and recover faster when a central node fails." },
        { name: "Digital twins and simulation", role: "High-fidelity models of infrastructure allow shocks to be rehearsed and weaknesses fixed before they break in reality." },
        { name: "Complex-systems science", role: "Formal understanding of cascades and tipping points turns fragility from a surprise into a measurable, designed-against property." },
        { name: "Modular and additive manufacturing", role: "Localized, reconfigurable production shortens supply chains and reduces single points of failure." },
        { name: "Real-time sensing and monitoring", role: "Pervasive instrumentation gives systems the early warning needed to adapt instead of collapse." },
        { name: "Adaptive regulation and standards", role: "Codes that reward redundancy and stress-testing embed antifragility into how infrastructure is built and financed." },
      ],
      milestones: [
        { period: "2026–2035", event: "Stress-testing and digital-twin practice spread from finance and software into power, water, and logistics networks." },
        { period: "2035–2055", event: "Resilience and reversibility become mandated design criteria in infrastructure codes across major economies." },
        { period: "2055–2080", event: "Interconnected systems demonstrably strengthen after major shocks, with recovery times falling with each event." },
      ],
      sources: [
        { name: "Taleb — Antifragile: Things That Gain from Disorder (Random House, 2012)", url: "https://www.penguinrandomhouse.com/books/176227/antifragile-by-nassim-nicholas-taleb/" },
        { name: "OECD — Building More Resilient Societies", url: "https://www.oecd.org/gov/risk/building-more-resilient-societies.htm" },
        { name: "Rockefeller Foundation — 100 Resilient Cities: Resilience for All", url: "https://www.rockefellerfoundation.org/reports/100-resilient-cities/" },
      ],
    },
    stakes: {
      win: "Crises stop being existential gambles and become routine upgrades, freeing civilization to take bolder risks because it can absorb the consequences.",
      lose: "Efficiency-optimized systems keep shattering at their weakest point, and each shock compounds the last until recovery capacity itself erodes.",
      wildcard: "A cascading failure across coupled digital and physical infrastructure could either discredit the whole agenda or become the wake-up call that finally funds it.",
      sources: [
        { name: "Taleb — Antifragile (2012)", url: "https://www.penguinrandomhouse.com/books/176227/antifragile-by-nassim-nicholas-taleb/" },
        { name: "OECD — Building More Resilient Societies", url: "https://www.oecd.org/gov/risk/building-more-resilient-societies.htm" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The principle is understood and occasionally applied; a civilization built on it remains a design goal, not a description.",
      metrics: [
        { label: "Systems redesigned for antifragility", value: "—" },
        { label: "Stress-test frameworks adopted", value: "—" },
      ],
    },
    getInvolved:
      "Owning Antifragile Civilization means engineering the institutions and infrastructure that convert every shock into strength. Which of The 37 is yours?",
    readAs: "Continuity's second law: what survives must also learn — every crisis a curriculum.",
  },
  {
    slug: "permanent-revisability",
    whyItMatters: [
      "The most dangerous decision a civilization can make is the one it can never unmake. Values ossify, constitutions calcify, technologies entrench — and what began as a choice becomes a cage for every generation after.",
      "Guarantee the right to course-correct across deep time — no value system, governance structure, or technological choice permanently locked in — and the future stays steerable. Flexibility is not indecision. It is the deepest form of humility engineering.",
    ],
    endState:
      "Every layer of civilization ships with an amendment process that works. Institutions sunset and renew; technologies deploy with reversibility as a requirement; no generation can chain all the ones that follow. The future remains permanently editable — by the people who have to live in it.",
    history: [
      {
        label: "The Old Constraint",
        body: "Systems were built to last by being built to resist change — and their errors lasted just as long.",
      },
      {
        label: "The Turning Point",
        body: "Constitutional amendment, versioned software, and adaptive governance proved that durability and revisability can coexist.",
        sources: [
          { name: "UN Resolution on Future Generations (2024)", url: "https://www.un.org/en/summit-of-the-future" },
          { name: "Long Now Foundation — Long-Term Thinking", url: "https://longnow.org/ideas/" },
        ],
      },
      {
        label: "The Opening",
        body: "As civilization makes choices with million-year shadows, designing against lock-in is emerging as a discipline of its own.",
      },
    ],
    organizations: [
      { name: "The Long Now Foundation", focus: "A nonprofit designing institutions and mechanisms for long-term, revisable decision-making across deep time.", url: "https://longnow.org" },
      { name: "Center for the Governance of AI", focus: "A research organization studying how to govern transformative technologies without locking in irreversible choices.", url: "https://www.governance.ai" },
      { name: "Internet Archive", focus: "A nonprofit preserving versioned records of the web so past states of knowledge remain recoverable and revisable.", url: "https://archive.org" },
      { name: "Institute for the Future", focus: "A nonprofit foresight organization helping institutions keep long-range decisions adaptable rather than locked in.", url: "https://www.iftf.org" },
      { name: "Open Government Partnership", focus: "A multilateral initiative advancing transparent, accountable governance that citizens can revise over time.", url: "https://www.opengovpartnership.org" },
      { name: "Electronic Frontier Foundation", focus: "A nonprofit defending the ability to revise and reclaim digital rights against irreversible technological lock-in.", url: "https://www.eff.org" },
      { name: "Free Software Foundation", focus: "A nonprofit championing software freedom so systems remain modifiable rather than permanently closed.", url: "https://www.fsf.org" },
      { name: "Berkman Klein Center for Internet & Society", focus: "A Harvard center studying governance of technology in ways that preserve future flexibility and choice.", url: "https://cyber.harvard.edu" },
      { name: "Oxford Internet Institute", focus: "A research institute examining how digital technologies can be governed without foreclosing future options.", url: "https://www.oii.ox.ac.uk" },
      { name: "Stanford Institute for Human-Centered AI", focus: "A research institute promoting AI governance that keeps human oversight and course-correction intact.", url: "https://hai.stanford.edu" },
      { name: "Partnership on AI", focus: "A multistakeholder organization developing adaptable norms for AI so choices can be revised as understanding grows.", url: "https://partnershiponai.org" },
      { name: "Ada Lovelace Institute", focus: "A research institute working to ensure data and AI systems remain accountable and revisable in the public interest.", url: "https://www.adalovelaceinstitute.org" },
      { name: "OECD", focus: "An intergovernmental body developing adaptive regulatory and governance frameworks that can evolve over time.", url: "https://www.oecd.org" },
      { name: "GovLab", focus: "An NYU research center designing more responsive, iterative institutions for public decision-making.", url: "https://thegovlab.org" },
      { name: "RAND Corporation", focus: "A research organization studying adaptive and robust decision-making under deep uncertainty.", url: "https://www.rand.org" },
      { name: "Wikimedia Foundation", focus: "A nonprofit operating openly editable knowledge platforms whose full revision histories remain recoverable.", url: "https://wikimediafoundation.org" },
      { name: "Software Freedom Conservancy", focus: "A nonprofit safeguarding open, modifiable software so technological choices are not permanently entrenched.", url: "https://sfconservancy.org" },
      { name: "Center for Democracy & Technology", focus: "A nonprofit advocating for technology policy that preserves rights and the capacity for future correction.", url: "https://cdt.org" },
      { name: "Nesta", focus: "An innovation foundation experimenting with adaptive governance and participatory decision-making methods.", url: "https://www.nesta.org.uk" },
      { name: "Mozilla Foundation", focus: "A nonprofit promoting an open internet whose standards and code remain revisable by the public.", url: "https://foundation.mozilla.org" },
      { name: "National Constitution Center", focus: "A nonpartisan institution studying and educating on constitutional amendment as a model of durable revisability.", url: "https://constitutioncenter.org" },
      { name: "Digital Preservation Coalition", focus: "A membership organization ensuring digital records and their prior states remain accessible and revisable over time.", url: "https://www.dpconline.org" },
    ],
    scenario: {
      horizon: "2060–2100",
      destination:
        "Major technological and governance choices ship with explicit exit ramps: sunset clauses, amendment processes, and reversibility requirements that keep long-horizon decisions steerable. No single generation can permanently bind the ones that follow.",
      convergences: [
        { name: "Adaptive governance frameworks", role: "Sunset clauses, regulatory sandboxes, and review mandates make it standard for rules to expire and renew rather than calcify." },
        { name: "Versioned and open systems", role: "Software practices of branching, rollback, and full revision history offer a working template for keeping institutions editable." },
        { name: "AI governance research", role: "Studying how to deploy transformative systems without irreversible lock-in keeps humanity's most consequential choices open to revision." },
        { name: "Deep-time institutional design", role: "Long-horizon foresight organizations translate the value of future flexibility into concrete institutional structures." },
        { name: "Durable archives and provenance", role: "Recoverable records of prior states are the precondition for undoing a choice or auditing how it was made." },
        { name: "Participatory decision tools", role: "Deliberative platforms let each generation re-express its consent rather than inherit a locked settlement." },
      ],
      milestones: [
        { period: "2026–2040", event: "Sunset clauses, reversibility requirements, and amendment processes become common in technology and platform regulation." },
        { period: "2040–2070", event: "Anti-lock-in design is treated as a distinct discipline informing AI, infrastructure, and constitutional choices." },
        { period: "2070–2100", event: "Civilization-scale decisions routinely ship with working mechanisms for future generations to revisit and revise them." },
      ],
      sources: [
        { name: "UN Summit of the Future (2024)", url: "https://www.un.org/en/summit-of-the-future" },
        { name: "Sunstein — Can It Happen Here? (HarperCollins, 2018)", url: "https://www.harpercollins.com/products/can-it-happen-here-cass-r-sunstein" },
        { name: "Long Now Foundation — Long-Term Thinking", url: "https://longnow.org/ideas/" },
      ],
    },
    stakes: {
      win: "The future stays a place people can steer, and mistakes made in one era become correctable rather than permanent inheritances.",
      lose: "A value system, technology, or governance structure hardens beyond reach and quietly forecloses options for every generation that follows.",
      wildcard: "A transformative AI or governance regime could either entrench itself as the ultimate irreversible lock-in or become the tool that keeps everything else revisable.",
      sources: [
        { name: "UN Resolution on Future Generations (2024)", url: "https://www.un.org/en/summit-of-the-future" },
        { name: "Long Now Foundation — Long-Term Thinking", url: "https://longnow.org/ideas/" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The principle has precedents; its deliberate application to civilization-scale choices is only beginning to be theorized.",
      metrics: [
        { label: "Governance frameworks with revisability guarantees", value: "—" },
        { label: "Research programs tracked", value: "—" },
      ],
    },
    getInvolved:
      "Owning Permanent Revisability means designing the amendment clauses of civilization itself — so no future is ever locked out of choosing again. Which of The 37 is yours?",
    readAs: "Deep time's steering wheel: endure, adapt — and never weld the controls in place.",
  },
  {
    slug: "the-long-archive",
    whyItMatters: [
      "Libraries burn. Formats rot. Languages die. Everything humanity has learned is stored on media measured in decades, guarded by institutions measured in centuries, on a planet subject to events measured in megatons. Memory is our most valuable asset and our least protected.",
      "Preserve knowledge, culture, and genetic heritage in systems designed for millions of years, and nothing learned is ever truly lost. The ultimate insurance policy — for everything we've ever figured out.",
    ],
    endState:
      "Civilization's memory is redundant across media, locations, and worlds — engineered to outlast languages, institutions, and planets. Whatever happens, the record survives: retrievable, readable, complete. The species that finally learned to remember, permanently.",
    history: [
      {
        label: "The Old Constraint",
        body: "Memory lived on fragile media in single places — and history is a catalog of what burned, crumbled, or was simply forgotten.",
      },
      {
        label: "The Turning Point",
        body: "Long-term archiving became a deliberate movement: seed vaults, deep-time storage projects, and media engineered for millennia rather than decades.",
        sources: [
          { name: "Svalbard Global Seed Vault", url: "https://www.seedvault.no" },
          { name: "Long Now Foundation — Rosetta Project", url: "https://rosettaproject.org" },
        ],
      },
      {
        label: "The Opening",
        body: "Ultra-durable storage research and off-world archiving point toward memory that no single catastrophe — or single planet — can erase.",
      },
    ],
    organizations: [
      { name: "Svalbard Global Seed Vault", focus: "A secure facility preserving duplicate seed samples of the world's crop diversity against catastrophe.", url: "https://www.seedvault.no" },
      { name: "Internet Archive", focus: "A nonprofit preserving billions of web pages, books, and media as a living archive of human knowledge.", url: "https://archive.org" },
      { name: "Library of Congress", focus: "The world's largest library, preserving vast collections of the human record for future generations.", url: "https://www.loc.gov" },
      { name: "UNESCO Memory of the World Programme", focus: "A global initiative safeguarding documentary heritage of universal value against loss and decay.", url: "https://www.unesco.org" },
      { name: "Wikimedia Foundation", focus: "A nonprofit maintaining freely accessible, redundantly stored encyclopedic knowledge for the world.", url: "https://wikimediafoundation.org" },
      { name: "The Long Now Foundation", focus: "A nonprofit fostering long-term thinking through projects designed to last millennia.", url: "https://longnow.org" },
      { name: "Arch Mission Foundation", focus: "A nonprofit creating and distributing long-duration archives of human knowledge, including off-world.", url: "https://www.archmission.org" },
      { name: "Crop Trust", focus: "An organization funding the permanent conservation of crop diversity in seed banks worldwide.", url: "https://www.croptrust.org" },
      { name: "GitHub Arctic Code Vault", focus: "A project storing the world's open-source software on durable film in an Arctic mine for future recovery.", url: "https://archiveprogram.github.com" },
      { name: "Millennium Seed Bank", focus: "A Kew Gardens facility conserving seeds of wild plant species as insurance against extinction.", url: "https://www.kew.org" },
      { name: "Rosetta Project", focus: "A Long Now initiative archiving the world's languages on ultra-durable etched-nickel disks.", url: "https://rosettaproject.org" },
      { name: "Digital Preservation Coalition", focus: "A membership organization ensuring digital records survive format obsolescence and technological change.", url: "https://www.dpconline.org" },
      { name: "National Archives and Records Administration", focus: "The U.S. agency preserving the nation's permanent records for enduring public access.", url: "https://www.archives.gov" },
      { name: "Vatican Apostolic Library", focus: "One of the oldest libraries, preserving and digitizing manuscripts spanning millennia of human knowledge.", url: "https://www.vaticanlibrary.va" },
      { name: "HathiTrust Digital Library", focus: "A partnership of research libraries preserving millions of digitized volumes with long-term redundancy.", url: "https://www.hathitrust.org" },
      { name: "Microsoft Project Silica", focus: "A research effort storing data in quartz glass engineered to last for thousands of years.", url: "https://www.microsoft.com" },
      { name: "Piql", focus: "A company storing digital data on photosensitive film designed to remain readable for centuries.", url: "https://www.piql.com" },
      { name: "GitHub Archive Program", focus: "A program safeguarding open-source code across multiple long-term storage media and locations.", url: "https://archiveprogram.github.com" },
      { name: "Google Books", focus: "A project digitizing millions of the world's books to make written knowledge broadly preservable and searchable.", url: "https://books.google.com" },
      { name: "Prelinger Archives", focus: "A film archive preserving ephemeral and cultural moving images that would otherwise be lost.", url: "https://archive.org/details/prelinger" },
      { name: "British Library", focus: "A national library preserving one of the world's largest collections of recorded knowledge and heritage.", url: "https://www.bl.uk" },
      { name: "Memory of Mankind", focus: "A project inscribing human knowledge onto ceramic tablets stored in a salt mine for deep-time survival.", url: "https://www.memory-of-mankind.com" },
    ],
    scenario: {
      horizon: "2060–2120",
      destination:
        "The core of human knowledge, culture, and genetic heritage exists in redundant copies across durable media, distant locations, and eventually other worlds, with formats and indexes designed to stay readable for millennia. No single fire, war, or planetary event can erase the record.",
      convergences: [
        { name: "Molecular and DNA data storage", role: "Encoding information in DNA and similar media promises densities and lifespans measured in millennia rather than decades." },
        { name: "Inorganic durable media", role: "Etched glass, nickel, and ceramic archives survive heat, water, and magnetic decay that destroy conventional storage." },
        { name: "Seed and biobanking", role: "Redundant vaults of crop and species genetics preserve living heritage alongside the written record." },
        { name: "Off-world repositories", role: "Placing archives on the Moon and beyond makes civilization's memory independent of any single planet's fate." },
        { name: "Format-agnostic encoding", role: "Self-describing, low-dependency encodings guard against the obsolescence that renders old data unreadable." },
        { name: "Distributed digital preservation", role: "Geographically redundant, continuously refreshed copies protect against localized loss and institutional failure." },
      ],
      milestones: [
        { period: "2026–2040", event: "DNA and glass storage move from lab demonstrations toward practical archival deployment at meaningful scale, and the first off-world archives — small lunar and deep-space payloads already placed — expand in scope." },
        { period: "2040–2070", event: "Coordinated, geographically distributed deep-time archives establish shared standards for readability and redundancy." },
        { period: "2070–2120", event: "Comprehensive, continually refreshed off-world copies of the core record make the essential human archive genuinely independent of any single planet." },
      ],
      sources: [
        { name: "Long Now Foundation — Rosetta Project", url: "https://rosettaproject.org" },
        { name: "Internet Archive — About & Digital Preservation", url: "https://archive.org/about/" },
        { name: "Lunar Codex — Off-World Cultural Archive", url: "https://www.lunarcodex.com" },
      ],
    },
    stakes: {
      win: "Everything humanity learns becomes permanent, and no future collapse can force civilization to rediscover what it already knew.",
      lose: "Knowledge stays hostage to fragile media and single locations, and one catastrophe can erase centuries of accumulated understanding.",
      wildcard: "A breakthrough in ultra-dense, ultra-durable storage could make comprehensive deep-time archiving cheap enough to become routine almost overnight.",
      sources: [
        { name: "Svalbard Global Seed Vault", url: "https://www.seedvault.no" },
        { name: "Internet Archive — Digital Preservation", url: "https://archive.org/about/" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "Deliberate deep-time archives exist and are growing; million-year, planet-independent memory is still being engineered.",
      metrics: [
        { label: "Archive sites tracked", value: "—" },
        { label: "Designed lifespan of best media", value: "—" },
      ],
    },
    getInvolved:
      "Owning The Long Archive means funding the vaults, media, and missions that make forgetting impossible — memory that outlives planets. Which of The 37 is yours?",
    readAs: "The atlas ends where it must: everything the other 36 achieve, remembered forever.",
  },
];
