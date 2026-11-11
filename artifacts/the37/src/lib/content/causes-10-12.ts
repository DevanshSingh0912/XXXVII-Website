// Causes 10–12. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes10to12: CauseContent[] = [
  {
    slug: "decentralized-sensemaking",
    whyItMatters: [
      "A civilization that cannot agree on what is happening cannot decide what to do. Our information systems optimize for attention, not accuracy — so the smarter our tools become, the noisier our shared picture of reality gets.",
      "Build systems that synthesize diverse perspectives into coherent shared understanding, and collective intelligence stops being an accident of good media and becomes infrastructure. Not consensus by force. Wisdom by design.",
    ],
    endState:
      "Public questions arrive with their evidence attached. Disagreement sharpens understanding instead of shattering it, because the systems that carry information reward synthesis over outrage. A society can see itself clearly enough to steer — and knows the difference between a debate and a divergence of facts.",
    history: [
      {
        label: "The Old Constraint",
        body: "Shared understanding depended on a few centralized channels — coherent, but narrow, and fragile to capture.",
      },
      {
        label: "The Turning Point",
        body: "The network dissolved the gatekeepers and the coherence with them: infinite voices, no synthesis, engagement rewarded over truth.",
        sources: [
          { name: "Reuters Institute — Digital News Report 2023", url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2023" },
          { name: "Pew Research — News Consumption Across Social Media", url: "https://www.pewresearch.org/journalism/2021/01/12/news-use-across-social-media-platforms-in-2020/" },
        ],
      },
      {
        label: "The Opening",
        body: "AI-augmented deliberation and open protocols make it possible, for the first time, to aggregate many perspectives into shared signal rather than shared noise.",
      },
    ],
    organizations: [
      { name: "Community Notes (X)", focus: "A crowdsourced system that adds contextual annotations to posts using bridging-based ranking that rewards notes agreed on across viewpoints.", url: "https://communitynotes.x.com" },
      { name: "Wikimedia Foundation", focus: "A nonprofit operating Wikipedia and its sister projects, coordinating volunteers to build a shared, sourced record of public knowledge.", url: "https://wikimediafoundation.org" },
      { name: "The Center for Collective Intelligence (MIT)", focus: "A research center studying how people and machines can think together more effectively at scale.", url: "https://cci.mit.edu" },
      { name: "Computational Democracy Project (Polis)", focus: "A nonprofit building open-source tools that surface consensus across large-scale public deliberation.", url: "https://compdemocracy.org" },
      { name: "Metaculus", focus: "A forecasting platform that aggregates many predictions into calibrated probabilities on public questions.", url: "https://www.metaculus.com" },
      { name: "Good Judgment", focus: "An organization applying superforecasting methods to produce accurate aggregate estimates of uncertain events.", url: "https://goodjudgment.com" },
      { name: "Cooperative AI Foundation", focus: "A nonprofit funding research on how AI systems can improve cooperation and collective decision-making.", url: "https://www.cooperativeai.com" },
      { name: "AI Objectives Institute", focus: "A nonprofit building AI tools that help groups deliberate and articulate shared goals.", url: "https://ai.objectives.institute" },
      { name: "The Collective Intelligence Project", focus: "A research and development organization designing new governance and aggregation mechanisms for collective decisions.", url: "https://www.cip.org" },
      { name: "RadicalxChange Foundation", focus: "A nonprofit advancing mechanisms like quadratic voting and funding to improve collective choice.", url: "https://www.radicalxchange.org" },
      { name: "Gitcoin", focus: "A platform running quadratic-funding rounds that aggregate community preferences to allocate public-goods funding.", url: "https://www.gitcoin.co" },
      { name: "Democracy Fund", focus: "A foundation supporting a healthier information ecosystem and more resilient democratic institutions.", url: "https://democracyfund.org" },
      { name: "Knight Foundation", focus: "A foundation funding journalism, research, and technology aimed at informed and engaged communities.", url: "https://knightfoundation.org" },
      { name: "Information Futures Lab (Brown University)", focus: "A university lab, successor to First Draft, building methods and training to verify information and counter misinformation.", url: "https://sites.brown.edu/informationfutures/" },
      { name: "The Trust Project", focus: "A consortium developing transparency standards that help audiences judge the credibility of news.", url: "https://thetrustproject.org" },
      { name: "Internet Archive", focus: "A nonprofit preserving the public record of the web and media so shared history remains verifiable.", url: "https://archive.org" },
      { name: "Our World in Data", focus: "A research publication presenting sourced, transparent data on the world's largest problems.", url: "https://ourworldindata.org" },
      { name: "Digital Forensic Research Lab (Atlantic Council)", focus: "A research lab studying the abuse of information systems and how disinformation shapes public understanding.", url: "https://dfrlab.org" },
      { name: "Berkman Klein Center (Harvard)", focus: "An academic center researching the internet's effect on discourse, governance, and shared knowledge.", url: "https://cyber.harvard.edu" },
      { name: "Ushahidi", focus: "A nonprofit whose open-source platform crowdsources and maps eyewitness reports into a shared situational picture.", url: "https://www.ushahidi.com" },
      { name: "OpenMined", focus: "An open-source community building privacy-preserving tools that let institutions pool data and insight without exposing it.", url: "https://openmined.org" },
    ],
    scenario: {
      horizon: "2035–2050",
      destination:
        "Public deliberation runs on bridging-based systems that surface where agreement actually exists and route evidence to the questions that need it. Large communities reach workable shared understanding without a central authority deciding what is true.",
      convergences: [
        { name: "Large language models", role: "They summarize, cluster, and translate millions of viewpoints into legible positions faster than human moderators ever could." },
        { name: "Bridging algorithms", role: "Ranking that rewards content agreed on across factions turns the feed away from outrage and toward shared signal." },
        { name: "Open deliberation protocols", role: "Tools like Polis let large groups map their own areas of consensus and disagreement without a gatekeeper." },
        { name: "Prediction markets and forecasting", role: "Calibrated aggregate probabilities give contested questions a track record instead of a shouting match." },
        { name: "Provenance and verification standards", role: "Content credentials and archival records let claims carry their sourcing, making fabrication easier to detect." },
        { name: "Privacy-preserving computation", role: "Federated and cryptographic methods let institutions pool sensitive data into shared insight without exposing it." },
      ],
      milestones: [
        { period: "2026–2030", event: "Bridging-based annotation, already adopted across major social platforms, deepens and spreads into open deliberation tools and civic processes." },
        { period: "2030–2038", event: "AI synthesis of public input becomes standard in consultations, letting agencies process comment at population scale." },
        { period: "2038–2050", event: "Interoperable sensemaking infrastructure spans platforms, so shared understanding survives any single network's decline or capture." },
      ],
      sources: [
        { name: "Ovadya & Weil — Bridging Systems (Harvard Kennedy School, 2023)", url: "https://ash.harvard.edu/publications/bridging-systems/" },
        { name: "EU Digital Services Act", url: "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package" },
        { name: "Computational Democracy Project (Polis)", url: "https://compdemocracy.org" },
      ],
    },
    stakes: {
      win: "A civilization that can see itself clearly can coordinate on climate, pandemics, and technology risk before the window closes, turning collective intelligence into standing infrastructure.",
      lose: "Reality fragments into incompatible feeds, and a society that cannot agree on what is happening loses the ability to act on anything, including the threats that need collective response most.",
      wildcard: "The same generative models that could synthesize understanding can also flood the zone with convincing fabrication, and which use wins the arms race is not yet decided.",
      sources: [
        { name: "Ovadya & Weil — Bridging Systems (Harvard Kennedy School, 2023)", url: "https://ash.harvard.edu/publications/bridging-systems/" },
        { name: "EU Digital Services Act", url: "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "Promising deliberation tools and protocols exist at small scale; nothing yet operates at the scale of the noise.",
      metrics: [
        { label: "Deliberation systems tracked", value: "—" },
        { label: "Communities served", value: "—" },
      ],
    },
    getInvolved:
      "Owning Decentralized Sensemaking means building and funding the tools that let millions think together without a single point of capture. Which of The 37 is yours?",
    readAs: "The atlas turns from machinery to society: coordination begins with seeing the same world.",
  },
  {
    slug: "post-scarcity-economics",
    whyItMatters: [
      "Most human talent is spent earning the right to exist. The painter drives a truck; the scientist writes ad copy. Survival labor is the largest silent confiscation of human potential ever devised — and we treat it as natural law.",
      "Guarantee the wealth baseline and the equation flips: work becomes optional, purpose becomes universal. People stop selling their hours to stay alive and start spending them on what only they can do.",
    ],
    endState:
      "No one's survival is contingent on employment. The floor is guaranteed; the ceiling is open. Work persists — chosen, meaningful, often intense — but desperation vanishes from the labor market. The question that organizes a life is no longer \"what pays?\" but \"what matters?\"",
    history: [
      {
        label: "The Old Constraint",
        body: "Survival was priced in labor: no work, no bread. Every economy since the first harvest has been built on that trade.",
      },
      {
        label: "The Turning Point",
        body: "Productivity began outrunning the need for human toil, and basic-income experiments moved the idea of a guaranteed floor from pamphlet to pilot.",
        sources: [
          { name: "OpenResearch — Unconditional Cash Study", url: "https://www.openresearchlab.org" },
          { name: "Stanford Basic Income Lab", url: "https://basicincome.stanford.edu/research/" },
        ],
      },
      {
        label: "The Opening",
        body: "Automation and AI are collapsing the cost of production, making the decoupling of survival from labor an engineering question instead of a utopian one.",
      },
    ],
    organizations: [
      { name: "GiveDirectly", focus: "A nonprofit running direct cash-transfer and basic-income programs at scale with rigorous evaluation.", url: "https://www.givedirectly.org" },
      { name: "OpenResearch", focus: "A research organization running a large-scale randomized study of unconditional basic income.", url: "https://www.openresearch.org" },
      { name: "Abdul Latif Jameel Poverty Action Lab (J-PAL)", focus: "A research center at MIT running randomized evaluations of cash-transfer and anti-poverty programs worldwide.", url: "https://www.povertyactionlab.org" },
      { name: "GiveWell", focus: "A nonprofit evaluator directing large-scale funding to the most cost-effective poverty interventions, including cash transfers.", url: "https://www.givewell.org" },
      { name: "Innovations for Poverty Action", focus: "A research nonprofit testing and scaling evidence-based solutions to poverty, including guaranteed-income pilots.", url: "https://poverty-action.org" },
      { name: "Open Philanthropy", focus: "A grantmaker funding research and pilots on economic security and the effects of income support.", url: "https://www.openphilanthropy.org" },
      { name: "Stanford Basic Income Lab", focus: "An academic center studying the design and effects of guaranteed-income policies.", url: "https://basicincome.stanford.edu" },
      { name: "Center on Poverty and Social Policy (Columbia)", focus: "A research center analyzing income-support policies such as the expanded child tax credit.", url: "https://www.povertycenter.columbia.edu" },
      { name: "Economic Security Project", focus: "A network advancing guaranteed income and other cash policies through pilots and advocacy in the United States.", url: "https://economicsecurityproject.org" },
      { name: "Mayors for a Guaranteed Income", focus: "A coalition of mayors piloting guaranteed-income programs in cities across the United States.", url: "https://www.mayorsforagi.org" },
      { name: "UBI Center", focus: "A think tank producing open computational analysis of universal basic income and its effects on poverty.", url: "https://www.ubicenter.org" },
      { name: "Evidence Action", focus: "A nonprofit scaling proven, low-cost programs that raise the economic floor for people in poverty.", url: "https://www.evidenceaction.org" },
      { name: "World Bank", focus: "An institution funding and researching social-protection and cash-transfer systems in developing economies.", url: "https://www.worldbank.org" },
      { name: "UNICEF", focus: "A UN agency operating and studying large cash-transfer programs to support children and families.", url: "https://www.unicef.org" },
      { name: "International Labour Organization", focus: "A UN agency researching social-protection floors and the future of work under automation.", url: "https://www.ilo.org" },
      { name: "Basic Income Earth Network (BIEN)", focus: "A global network coordinating research and advocacy on unconditional basic income.", url: "https://basicincome.org" },
      { name: "Roosevelt Institute", focus: "A think tank producing analysis on economic security, automation, and guaranteed-income policy.", url: "https://rooseveltinstitute.org" },
      { name: "Niskanen Center", focus: "A think tank developing and advocating cash-based safety-net reforms across the political spectrum.", url: "https://www.niskanencenter.org" },
      { name: "Institute for Research on Poverty (Wisconsin)", focus: "A university center studying the causes and consequences of poverty and income-support programs.", url: "https://www.irp.wisc.edu" },
      { name: "Center for Guaranteed Income Research (Penn)", focus: "A research center providing evidence and evaluation for guaranteed-income pilots nationwide.", url: "https://www.penncgir.org" },
      { name: "Charter Cities Institute", focus: "A nonprofit exploring new governance and economic models that could sustain higher baselines of prosperity.", url: "https://chartercitiesinstitute.org" },
    ],
    scenario: {
      horizon: "2040–2060",
      destination:
        "A guaranteed material floor covers basic needs regardless of employment, funded by the collapsing cost of automated production. Work continues, but survival no longer depends on selling one's hours.",
      convergences: [
        { name: "Industrial automation and robotics", role: "Falling costs of automated labor break the historical link between human toil and the volume of goods produced." },
        { name: "Generative AI", role: "Machine capability spreading into cognitive and creative work erodes the assumption that wages must be the only route to survival." },
        { name: "Randomized cash-transfer evidence", role: "Rigorous trials of unconditional payments provide the empirical basis for scaling a guaranteed floor without guesswork." },
        { name: "Digital payment rails", role: "Direct, low-cost transfer systems make it feasible to deliver income to entire populations with minimal overhead." },
        { name: "Renewable energy and cheap compute", role: "Declining marginal cost of energy and computation drives down the price of the goods and services a floor must cover." },
        { name: "Fiscal and tax-policy reform", role: "New instruments for capturing and redistributing automation gains determine whether the floor can be paid for durably." },
      ],
      milestones: [
        { period: "2026–2032", event: "City and regional guaranteed-income pilots expand and report longitudinal outcomes, moving the debate from whether to how much." },
        { period: "2032–2045", event: "Automation-driven displacement pushes at least one wealthy economy to enact a permanent income floor." },
        { period: "2045–2060", event: "Guaranteed baselines become normal policy in high-productivity economies, decoupling survival from employment at scale." },
      ],
      sources: [
        { name: "OpenResearch — Unconditional Cash Study", url: "https://www.openresearchlab.org" },
        { name: "Stanford Basic Income Lab", url: "https://basicincome.stanford.edu/research/" },
        { name: "ILO — World Employment and Social Outlook", url: "https://www.ilo.org/publications/world-employment-and-social-outlook-trends-2024" },
      ],
    },
    stakes: {
      win: "Human effort redirects from survival labor toward care, science, art, and enterprise, unlocking the largest release of trapped potential in history.",
      lose: "Automation concentrates the gains while stranding displaced workers, producing mass insecurity and the political instability that follows it.",
      wildcard: "If AI automates knowledge work faster than institutions can respond, the transition could arrive as a shock rather than a policy choice.",
      sources: [
        { name: "ILO — World Employment and Social Outlook 2024", url: "https://www.ilo.org/publications/world-employment-and-social-outlook-trends-2024" },
        { name: "McKinsey Global Institute — Future of Work", url: "https://www.mckinsey.com/featured-insights/future-of-work" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "Cash-floor experiments keep returning encouraging results; no economy has yet committed to the full decoupling.",
      metrics: [
        { label: "Baseline programs tracked", value: "—" },
        { label: "People covered", value: "—" },
      ],
    },
    getInvolved:
      "Owning Post-Scarcity Economics means designing, funding, and defending the models that guarantee the floor so everyone can reach for the ceiling. Which of The 37 is yours?",
    readAs: "Sensemaking shows us the world; post-scarcity frees the hands to change it.",
  },
  {
    slug: "tyranny-resistant-architecture",
    whyItMatters: [
      "Every abundance in this atlas can be captured. History's warning is consistent: concentrate enough unaccountable power and it will, eventually, be abused — good intentions are not a defense, they are a delay.",
      "The answer is not better rulers. It is architecture: systems engineered so that concentrated, unaccountable power is structurally impossible. Not ideology — engineering. Freedom that holds because of how the system is built, not who happens to run it.",
    ],
    endState:
      "Power is legible, divisible, and revocable by design. Critical systems — money, speech, identity, infrastructure — have no single switch a tyrant could seize. Defense dominates offense in the architecture of institutions, so would-be authoritarians face not resistance but impossibility.",
    history: [
      {
        label: "The Old Constraint",
        body: "Liberty depended on parchment and virtue — constitutions that strongmen could ignore and institutions that capture could hollow out.",
      },
      {
        label: "The Turning Point",
        body: "Cryptography and distributed systems demonstrated that some guarantees can be enforced by mathematics rather than by trust.",
        sources: [
          { name: "Electronic Frontier Foundation — Surveillance Self-Defense", url: "https://ssd.eff.org" },
          { name: "Freedom House — Freedom in the World 2024", url: "https://freedomhouse.org/report/freedom-world" },
        ],
      },
      {
        label: "The Opening",
        body: "Decentralized protocols and verifiable computation make it plausible to build core civic infrastructure that no single actor can seize.",
      },
    ],
    organizations: [
      { name: "Signal Foundation", focus: "A nonprofit developing end-to-end encrypted messaging that no central party can surveil.", url: "https://signal.org" },
      { name: "Electronic Frontier Foundation", focus: "A nonprofit defending civil liberties and privacy in digital systems through law, advocacy, and technology.", url: "https://www.eff.org" },
      { name: "The Tor Project", focus: "A nonprofit maintaining anonymity and censorship-resistance software for open communication.", url: "https://www.torproject.org" },
      { name: "Ethereum Foundation", focus: "A nonprofit stewarding a decentralized computation platform whose contracts execute without a controlling party.", url: "https://ethereum.foundation" },
      { name: "Freedom of the Press Foundation", focus: "A nonprofit building and maintaining tools like SecureDrop that protect journalists and sources from surveillance.", url: "https://freedom.press" },
      { name: "Tails / Tor Project", focus: "A project maintaining an amnesic operating system that routes traffic through Tor to resist tracking and censorship.", url: "https://tails.net" },
      { name: "Guardian Project", focus: "A collective developing open-source mobile apps that secure communications and resist surveillance.", url: "https://guardianproject.info" },
      { name: "Access Now", focus: "A nonprofit defending the digital rights of users at risk and running a global digital-security helpline.", url: "https://www.accessnow.org" },
      { name: "Citizen Lab (University of Toronto)", focus: "A research lab exposing state surveillance, spyware, and censorship targeting civil society.", url: "https://citizenlab.ca" },
      { name: "Freedom House", focus: "A nonprofit documenting threats to political rights and internet freedom around the world.", url: "https://freedomhouse.org" },
      { name: "Open Technology Fund", focus: "A nonprofit funding open-source tools that support internet freedom and circumvent censorship.", url: "https://www.opentech.fund" },
      { name: "The Calyx Institute", focus: "A nonprofit developing privacy-preserving communications infrastructure and network access.", url: "https://calyxinstitute.org" },
      { name: "Protocol Labs", focus: "A research and development organization building decentralized storage and networking protocols like IPFS and Filecoin.", url: "https://protocol.ai" },
      { name: "Zcash / Electric Coin Company", focus: "An organization developing privacy-preserving cryptographic payment technology using zero-knowledge proofs.", url: "https://electriccoin.co" },
      { name: "Internet Freedom Foundation", focus: "An Indian nonprofit litigating and advocating against surveillance and for digital rights.", url: "https://internetfreedom.in" },
      { name: "Committee to Protect Journalists", focus: "A nonprofit defending press freedom and the ability to report free from state coercion.", url: "https://cpj.org" },
      { name: "Article 19", focus: "An international nonprofit defending freedom of expression and information against censorship.", url: "https://www.article19.org" },
      { name: "Privacy International", focus: "A nonprofit challenging governments and companies that build surveillance infrastructure.", url: "https://privacyinternational.org" },
      { name: "Human Rights Foundation", focus: "A nonprofit supporting dissidents and building tools to resist authoritarian control, including its Bitcoin development fund.", url: "https://hrf.org" },
      { name: "OpenTitan / lowRISC", focus: "A project building open-source, verifiable secure-silicon designs so trust roots are transparent rather than proprietary.", url: "https://opentitan.org" },
      { name: "Matrix.org Foundation", focus: "A nonprofit stewarding an open protocol for decentralized, federated, encrypted communication.", url: "https://matrix.org" },
    ],
    scenario: {
      horizon: "2045–2070",
      destination:
        "Core civic systems for money, speech, identity, and infrastructure run on protocols with no central switch to seize. Power over them is divisible and revocable by design, so capture requires defeating mathematics rather than persuading a custodian.",
      convergences: [
        { name: "End-to-end encryption", role: "Communications that no central party can read remove the surveillance leverage authoritarian control depends on." },
        { name: "Zero-knowledge proofs", role: "Verifiable computation lets systems prove they followed the rules without exposing the underlying data to a controller." },
        { name: "Decentralized ledgers and protocols", role: "Distributed consensus keeps records and rules running with no single actor able to rewrite or halt them." },
        { name: "Open-source secure hardware", role: "Transparent, auditable silicon means the root of trust is inspectable rather than a proprietary black box." },
        { name: "Censorship-resistant networking", role: "Anonymity and circumvention tools keep communication and coordination alive under blockade or shutdown." },
        { name: "Digital-rights law and advocacy", role: "Legal frameworks and civil-society pressure determine whether these primitives are allowed to protect ordinary users." },
      ],
      milestones: [
        { period: "2026–2035", event: "Encrypted messaging, already ubiquitous, is joined by maturing privacy payments and decentralized identity, normalizing tools that resist capture." },
        { period: "2035–2050", event: "Verifiable and decentralized systems start carrying real civic functions such as records, voting integrity, and public infrastructure." },
        { period: "2050–2070", event: "Critical civic infrastructure is architected so that no single actor holds a switch, making authoritarian seizure structurally impractical." },
      ],
      sources: [
        { name: "Freedom House — Freedom in the World 2024", url: "https://freedomhouse.org/report/freedom-world" },
        { name: "Electronic Frontier Foundation — Surveillance Self-Defense", url: "https://ssd.eff.org" },
        { name: "Access Now — Digital Rights Organization", url: "https://www.accessnow.org" },
      ],
    },
    stakes: {
      win: "Every other abundance in this atlas gains a durable guarantee, because the systems carrying them cannot be quietly seized by whoever gains power.",
      sources: [
        { name: "Freedom House — Freedom in the World 2024", url: "https://freedomhouse.org/report/freedom-world" },
        { name: "Access Now — Digital Rights Organization", url: "https://www.accessnow.org" },
      ],
      lose: "The same tools that concentrate capability, from AI to surveillance to centralized finance, hand future rulers unprecedented and irreversible control.",
      wildcard: "A single large-scale surveillance or AI-enabled control system deployed first could set the default for decades before resistant architecture matures.",
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The primitives exist; assembling them into tyranny-proof civic infrastructure is largely unbuilt territory.",
      metrics: [
        { label: "Resilient systems deployed", value: "—" },
        { label: "Jurisdictions engaged", value: "—" },
      ],
    },
    getInvolved:
      "Owning Tyranny-Resistant Architecture means building and funding the protocols that make freedom a property of the system, not a promise of its rulers. Which of The 37 is yours?",
    readAs: "Abundance must be guarded at the root: coordination that no one can capture.",
  },
];
