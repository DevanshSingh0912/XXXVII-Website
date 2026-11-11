// Causes 16–18. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes16to18: CauseContent[] = [
  {
    slug: "infinite-knowledge-creation",
    whyItMatters: [
      "Discovery is the engine under every other engine — and it is neither guaranteed nor safe. Knowledge can be paywalled, siloed, defunded, or lost. A civilization that lets its epistemological engine stall inherits a future built from someone else's leftovers.",
      "Make discovery open, compounding, and irreversible — open science, open data, open reasoning — and knowledge stops leaking between generations. Each finding becomes a floor the next one stands on. Forever.",
    ],
    endState:
      "Every experiment strengthens a commons no one can close. Results, data, and reasoning are open by default; replication is cheap; discovery accelerates because nothing learned is ever un-learned. Science behaves like compound interest — and the whole species holds the account.",
    history: [
      {
        label: "The Old Constraint",
        body: "Knowledge lived in scarce libraries and closed journals — hard to reach, easy to lose, rediscovered as often as discovered.",
      },
      {
        label: "The Turning Point",
        body: "The open-access and open-data movements cracked the vaults, proving that shared knowledge compounds faster than hoarded knowledge.",
        sources: [
          { name: "UNESCO Recommendation on Open Science (2021)", url: "https://www.unesco.org/en/open-science/about" },
          { name: "cOAlition S — Plan S Open Access", url: "https://www.coalition-s.org" },
        ],
      },
      {
        label: "The Opening",
        body: "AI-assisted research and open reasoning tools point toward discovery itself becoming exponential — if the commons is defended.",
      },
    ],
    organizations: [
      { name: "Wikimedia Foundation", focus: "A nonprofit sustaining free, openly editable knowledge resources including Wikipedia.", url: "https://wikimediafoundation.org" },
      { name: "arXiv", focus: "An independent nonprofit running the open-access preprint repository for research across the sciences.", url: "https://arxiv.org" },
      { name: "Public Library of Science (PLOS)", focus: "A nonprofit publisher of peer-reviewed open-access scientific journals.", url: "https://plos.org" },
      { name: "OpenAI", focus: "An AI research lab building systems intended to accelerate scientific discovery and reasoning.", url: "https://openai.com" },
      { name: "Google DeepMind", focus: "An AI research lab whose systems, such as AlphaFold, have opened new frontiers in scientific discovery.", url: "https://deepmind.google" },
      { name: "National Institutes of Health (NIH)", focus: "The primary U.S. agency funding biomedical research and mandating open access to funded results.", url: "https://www.nih.gov" },
      { name: "European Organization for Nuclear Research (CERN)", focus: "A physics laboratory that pioneered the World Wide Web and champions open science across particle physics.", url: "https://home.cern" },
      { name: "Allen Institute for AI (AI2)", focus: "A nonprofit research institute building open AI tools like Semantic Scholar to accelerate scientific literature.", url: "https://allenai.org" },
      { name: "Internet Archive", focus: "A nonprofit digital library preserving books, papers, and web pages as an open, permanent knowledge record.", url: "https://archive.org" },
      { name: "Creative Commons", focus: "A nonprofit providing the licenses that make open sharing of knowledge and data legally reliable.", url: "https://creativecommons.org" },
      { name: "Center for Open Science (COS)", focus: "A nonprofit building infrastructure like the Open Science Framework to make research transparent and reproducible.", url: "https://www.cos.io" },
      { name: "OpenAlex", focus: "An open, free index of the world's scholarly works, authors, and citations.", url: "https://openalex.org" },
      { name: "Zenodo", focus: "A CERN-operated open repository for research data, software, and publications across all disciplines.", url: "https://zenodo.org" },
      { name: "figshare", focus: "A repository enabling researchers to publish and openly share datasets, figures, and other outputs.", url: "https://figshare.com" },
      { name: "Directory of Open Access Journals (DOAJ)", focus: "A community-curated index of vetted open-access scholarly journals.", url: "https://doaj.org" },
      { name: "Crossref", focus: "A nonprofit scholarly infrastructure organization providing open metadata and persistent links for research outputs.", url: "https://www.crossref.org" },
      { name: "cOAlition S (Plan S)", focus: "A coalition of research funders mandating immediate open access to publicly funded research.", url: "https://www.coalition-s.org" },
      { name: "OurResearch", focus: "A nonprofit building open tools like Unpaywall that make scholarly research free to find and read.", url: "https://ourresearch.org" },
      { name: "Wellcome Trust", focus: "A research foundation funding science and requiring open access to the research it supports.", url: "https://wellcome.org" },
      { name: "Howard Hughes Medical Institute (HHMI)", focus: "A biomedical research organization funding open science and free access to its scientists' publications.", url: "https://www.hhmi.org" },
      { name: "SPARC", focus: "A nonprofit coalition advocating for open access, open data, and open education policies.", url: "https://sparcopen.org" },
      { name: "Protocols.io", focus: "An open platform for sharing and reproducing detailed scientific methods and protocols.", url: "https://www.protocols.io" },
    ],
    scenario: {
      horizon: "2035–2050",
      destination:
        "Research outputs default to open: papers, underlying data, and machine-readable reasoning are published together and mirrored across resilient archives. AI systems read the full literature, propose experiments, and cite verifiable sources, so each result becomes a stable foundation the next builds on.",
      convergences: [
        { name: "Open access mandates", role: "Funder policies like Plan S helped push open access past half of new papers, though its 2026–2030 strategy softened the strictest requirements." },
        { name: "Persistent data repositories", role: "Platforms such as Zenodo and OpenAlex give datasets and citation graphs durable, machine-readable homes." },
        { name: "Large language models", role: "Systems that read and reason over the entire corpus turn scattered findings into searchable, connectable knowledge." },
        { name: "Automated replication tools", role: "Shared protocols and computational notebooks make reproducing a result cheap enough to be routine." },
        { name: "Persistent identifiers", role: "DOIs, ORCID, and structured metadata let works, authors, and data link reliably across decades." },
        { name: "Decentralized archiving", role: "Distributed preservation guards the record against defunding, link rot, and single points of failure." },
      ],
      milestones: [
        { period: "2026–2032", event: "With open access already past half of new papers, more funders and journals push toward open-by-default publishing of papers and their supporting data — though mandates have softened and progress is uneven." },
        { period: "2032–2040", event: "AI research assistants become standard tools for literature synthesis and hypothesis generation across disciplines." },
        { period: "2040–2050", event: "Replication and reasoning trails increasingly ship alongside published work, making discovery more cumulative than repeatedly rediscovered." },
      ],
      sources: [
        { name: "UNESCO Recommendation on Open Science (2021)", url: "https://www.unesco.org/en/open-science/about" },
        { name: "cOAlition S — Plan S Open Access", url: "https://www.coalition-s.org" },
        { name: "OECD — Making Open Science a Reality", url: "https://www.oecd.org/sti/making-open-science-a-reality-9789264239739-en.htm" },
      ],
    },
    stakes: {
      win: "Discovery compounds like interest: every field advances on a shared, permanent floor of verified knowledge, and progress in one domain accelerates all the others.",
      lose: "Knowledge stays fragmented behind paywalls and dead links, findings are rediscovered instead of built upon, and the pace of civilization-scale problem-solving stalls.",
      wildcard: "AI systems capable of autonomous, verifiable reasoning could either collapse the cost of discovery overnight or flood the record with unverified claims.",
      sources: [
        { name: "OECD — Making Open Science a Reality", url: "https://www.oecd.org/sti/making-open-science-a-reality-9789264239739-en.htm" },
        { name: "Wellcome Trust — Open Access Policy", url: "https://wellcome.org/grant-funding/guidance/open-access-guidance/open-access-policy" },
      ],
    },
    progress: {
      stage: "Scaling",
      statusLine: "Open science is winning arguments and losing budgets; the commons grows, but its permanence is not yet guaranteed.",
      metrics: [
        { label: "Open repositories tracked", value: "—" },
        { label: "Share of research open by default", value: "—" },
      ],
    },
    getInvolved:
      "Owning Infinite Knowledge Creation means funding, building, and defending the open engine of discovery so it never stalls and never closes. Which of The 37 is yours?",
    readAs: "Teach every mind, then arm them all: knowledge that compounds is the Intellect's flywheel.",
  },
  {
    slug: "collective-superintelligence",
    whyItMatters: [
      "Our hardest problems — climate, coordination, discovery at the frontier — are bigger than any single mind, and our tools for thinking together are barely better than the committee. Groups today are often dumber than their members.",
      "Network human and machine cognition properly and the ceiling lifts: groups that think at scales and speeds no individual could reach, without dissolving the individuals inside them. The hive mind, with the self intact.",
    ],
    endState:
      "A thousand minds attack a problem as one — and disband as easily. Human intuition and machine breadth interleave in real time; credit, dissent, and individuality survive the merge. Civilization gains an instrument that thinks at the size of its problems.",
    history: [
      {
        label: "The Old Constraint",
        body: "Collective thought moved through speech, print, and meetings — bandwidth so narrow that crowds routinely underperformed their members.",
      },
      {
        label: "The Turning Point",
        body: "Networked collaboration showed flashes of the possible: open-source projects and distributed research outthinking any single institution.",
        sources: [
          { name: "Woolley et al. — Evidence for a Collective Intelligence Factor (Science, 2010)", url: "https://www.science.org/doi/10.1126/science.1193147" },
          { name: "MIT Center for Collective Intelligence", url: "https://cci.mit.edu" },
        ],
      },
      {
        label: "The Opening",
        body: "Human-AI teaming makes cognition composable — the first credible path to groups that are reliably smarter than their smartest member.",
      },
    ],
    organizations: [
      { name: "MIT Center for Collective Intelligence", focus: "A research center investigating how people and computers can think together more effectively.", url: "https://cci.mit.edu" },
      { name: "Santa Fe Institute", focus: "A research institute studying complex adaptive systems, including collective intelligence and emergent behavior.", url: "https://www.santafe.edu" },
      { name: "Google DeepMind", focus: "An AI research lab developing multi-agent systems and human-AI teaming that extend collective cognition.", url: "https://deepmind.google" },
      { name: "OpenAI", focus: "An AI research lab building models designed to augment and combine with human reasoning at scale.", url: "https://openai.com" },
      { name: "Anthropic", focus: "An AI safety lab developing systems intended to collaborate reliably with humans on complex reasoning.", url: "https://www.anthropic.com" },
      { name: "Wikimedia Foundation", focus: "A nonprofit whose Wikipedia demonstrates large-scale distributed human collective intelligence.", url: "https://wikimediafoundation.org" },
      { name: "Polis (The Computational Democracy Project)", focus: "An open-source platform using machine learning to surface consensus across large groups of participants.", url: "https://pol.is" },
      { name: "Metaculus", focus: "A forecasting platform aggregating many predictions into a more accurate collective forecast.", url: "https://www.metaculus.com" },
      { name: "Good Judgment", focus: "An organization applying research on superforecasting to improve group prediction and reasoning.", url: "https://goodjudgment.com" },
      { name: "Human Diagnosis Project", focus: "A nonprofit combining machine learning with the collective judgment of clinicians worldwide.", url: "https://www.humandx.org" },
      { name: "Foldit", focus: "A collaborative science game that pools human intuition to solve protein-folding problems.", url: "https://fold.it" },
      { name: "Zooniverse", focus: "A citizen-science platform mobilizing volunteers to collectively analyze research data at scale.", url: "https://www.zooniverse.org" },
      { name: "Ushahidi", focus: "A nonprofit building crowdsourcing tools that aggregate distributed reports into collective situational awareness.", url: "https://www.ushahidi.com" },
      { name: "Kialo", focus: "A structured debate platform designed to help large groups reason through complex arguments together.", url: "https://www.kialo.com" },
      { name: "Stanford Institute for Human-Centered AI (HAI)", focus: "A university institute researching how AI can augment human and collective intelligence.", url: "https://hai.stanford.edu" },
      { name: "Allen Institute for AI (AI2)", focus: "A nonprofit lab building AI tools that extend collective research and reasoning capacity.", url: "https://allenai.org" },
      { name: "Ostrom Workshop", focus: "An Indiana University research center studying institutions for collective action and governance of commons.", url: "https://ostromworkshop.indiana.edu" },
      { name: "RadicalxChange Foundation", focus: "A nonprofit designing mechanisms like quadratic voting to improve collective decision-making.", url: "https://www.radicalxchange.org" },
      { name: "Stack Overflow", focus: "A knowledge platform aggregating distributed expertise into a shared collective problem-solving resource.", url: "https://stackoverflow.com" },
      { name: "Prolific", focus: "A research platform enabling large-scale studies of human collaboration and collective behavior.", url: "https://www.prolific.com" },
      { name: "Center for Advanced Study in the Behavioral Sciences (Stanford)", focus: "An interdisciplinary institute studying group cognition and collective behavior.", url: "https://casbs.stanford.edu" },
      { name: "Aalto University Complex Systems groups", focus: "Academic research groups modeling networked collective intelligence and emergent group behavior.", url: "https://www.aalto.fi" },
    ],
    scenario: {
      horizon: "2040–2060",
      destination:
        "Groups convene around a problem, augment their deliberation with real-time machine synthesis, and reliably out-reason any single member before disbanding. Human judgment and machine breadth interleave while dissent, credit, and individual accountability remain legible.",
      convergences: [
        { name: "Human-AI teaming", role: "Models that summarize, challenge, and extend arguments could let a group hold more context than any participant alone — though evidence so far is mixed, with human-AI combinations often failing to beat the stronger of human or AI on their own." },
        { name: "Consensus-surfacing tools", role: "Platforms like Polis map where large groups agree and disagree instead of collapsing them into a single vote." },
        { name: "Forecasting aggregation", role: "Prediction markets and superforecasting methods turn many estimates into calibrated collective judgment." },
        { name: "Mechanism design", role: "Approaches such as quadratic voting align incentives so groups reason honestly rather than posture." },
        { name: "Complex systems science", role: "Models of emergent group behavior explain when crowds get smarter and when they get dumber." },
        { name: "Real-time collaboration infrastructure", role: "Networked platforms let distributed contributors think together at speed rather than through slow meetings." },
      ],
      milestones: [
        { period: "2026–2032", event: "AI-mediated deliberation tools move from pilots into large organizations and public consultation, with early field experiments showing gains on some tasks." },
        { period: "2032–2045", event: "If the design challenge is solved, structured human-machine groups begin to reliably out-reason expert individuals on hard problems — something today's mixed evidence has not yet established." },
        { period: "2045–2060", event: "Composable cognition matures toward a standard instrument, convened and dissolved on demand without erasing the individuals inside." },
      ],
      sources: [
        { name: "MIT Center for Collective Intelligence", url: "https://cci.mit.edu" },
        { name: "Woolley et al. — Evidence for a Collective Intelligence Factor (Science, 2010)", url: "https://www.science.org/doi/10.1126/science.1193147" },
        { name: "The Collective Intelligence Project", url: "https://www.cip.org" },
      ],
    },
    stakes: {
      win: "Civilization gains a thinking instrument scaled to its hardest problems, so coordination on climate, discovery, and governance stops being bottlenecked by the limits of any single mind.",
      lose: "Groups keep underperforming their members, and problems that require thinking above individual scale remain permanently out of reach or badly mishandled.",
      wildcard: "The same tools that amplify collective reasoning could amplify manufactured consensus, letting a few actors steer the crowd rather than surface its judgment.",
      sources: [
        { name: "The Collective Intelligence Project", url: "https://www.cip.org" },
        { name: "Woolley et al. — Evidence for a Collective Intelligence Factor (Science, 2010)", url: "https://www.science.org/doi/10.1126/science.1193147" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The ingredients exist in fragments; the architecture that fuses them without erasing the individual is still being invented.",
      metrics: [
        { label: "Cognition networks tracked", value: "—" },
        { label: "Documented collective-gain results", value: "—" },
      ],
    },
    getInvolved:
      "Owning Collective Superintelligence means building the protocols and cultures where minds — human and machine — genuinely think together. Which of The 37 is yours?",
    readAs: "The Intellect's summit: unlocked minds, open knowledge, then thought at civilizational scale.",
  },
  {
    slug: "architected-eudaimonia",
    whyItMatters: [
      "We engineered our way out of famine and plague, then left meaning to chance. Flourishing — flow, purpose, joy — is still treated as a lucky byproduct of circumstance rather than an outcome anyone can design for.",
      "Take eudaimonia seriously as a discipline and the default human state becomes something built, not stumbled into. When survival is solved, the pursuit becomes deliberate flourishing — or the abundance was for nothing.",
    ],
    endState:
      "Deep engagement is the norm, not the exception. The conditions of flow, purpose, and connection are understood well enough to design into schools, workplaces, and cities. \"Are you flourishing?\" becomes a question with an engineering answer — and, for most people, an affirmative one.",
    history: [
      {
        label: "The Old Constraint",
        body: "Happiness was fate, fortune, or philosophy — pursued by all, engineered by no one.",
      },
      {
        label: "The Turning Point",
        body: "The science of well-being made flourishing measurable, revealing conditions of flow and meaning that repeat across cultures.",
        sources: [
          { name: "OECD — How's Life? Well-being Framework", url: "https://www.oecd.org/statistics/hows-life/" },
          { name: "World Happiness Report", url: "https://worldhappiness.report" },
        ],
      },
      {
        label: "The Opening",
        body: "With survival increasingly solvable, the deliberate design of meaning shifts from indulgence to the next legitimate frontier.",
      },
    ],
    organizations: [
      { name: "Penn Positive Psychology Center", focus: "A university research center advancing the scientific study of well-being and resilience.", url: "https://ppc.sas.upenn.edu" },
      { name: "Greater Good Science Center", focus: "A UC Berkeley center studying the psychology of well-being and translating it into practices for flourishing.", url: "https://greatergood.berkeley.edu" },
      { name: "Harvard Human Flourishing Program", focus: "A research program at Harvard measuring and advancing the determinants of human flourishing.", url: "https://hfh.fas.harvard.edu" },
      { name: "Harvard Study of Adult Development", focus: "One of the longest-running studies of what makes for a happy, meaningful, and healthy life.", url: "https://www.adultdevelopmentstudy.org" },
      { name: "World Happiness Report", focus: "An annual global study, backed by Gallup data, measuring and ranking well-being across nations.", url: "https://worldhappiness.report" },
      { name: "Oxford Wellbeing Research Centre", focus: "A University of Oxford center studying the science and economics of well-being.", url: "https://wellbeing.hmc.ox.ac.uk" },
      { name: "Action for Happiness", focus: "A nonprofit movement helping people apply evidence-based practices to build happier, more connected lives.", url: "https://actionforhappiness.org" },
      { name: "London School of Economics Centre for Economic Performance (Wellbeing)", focus: "A research group producing economic evidence on the drivers of population well-being.", url: "https://cep.lse.ac.uk" },
      { name: "VIA Institute on Character", focus: "A nonprofit researching and applying the science of character strengths to flourishing.", url: "https://www.viacharacter.org" },
      { name: "Mind & Life Institute", focus: "A nonprofit bridging contemplative practice and science to study well-being and human flourishing.", url: "https://www.mindandlife.org" },
      { name: "Center for Healthy Minds (UW–Madison)", focus: "A research center studying the science of well-being and how it can be cultivated.", url: "https://centerhealthyminds.org" },
      { name: "Yale Center for Emotional Intelligence", focus: "A research center developing evidence-based approaches to emotional well-being in schools and workplaces.", url: "https://www.ycei.org" },
      { name: "Gallup", focus: "A research and analytics firm measuring well-being, engagement, and life evaluation worldwide.", url: "https://www.gallup.com" },
      { name: "International Positive Psychology Association (IPPA)", focus: "A professional organization advancing the science and application of well-being research.", url: "https://www.ippanetwork.org" },
      { name: "Lee Kum Sheung Center for Health and Happiness (Harvard)", focus: "A Harvard research center studying the links between psychological well-being and physical health.", url: "https://hsph.harvard.edu/research/health-happiness/" },
      { name: "OECD Better Life / Well-being initiatives", focus: "An intergovernmental effort developing well-being metrics to guide policy beyond GDP.", url: "https://www.oecd.org" },
      { name: "Search Inside Yourself Leadership Institute", focus: "A nonprofit teaching evidence-based mindfulness and emotional-intelligence practices for flourishing at work.", url: "https://siyli.org" },
      { name: "Greater Good in Action", focus: "A UC Berkeley resource translating well-being research into practical, tested activities.", url: "https://ggia.berkeley.edu" },
      { name: "Berkeley's Othering & Belonging Institute", focus: "A research institute studying belonging and connection as conditions for human flourishing.", url: "https://belonging.berkeley.edu" },
      { name: "Templeton World Charity Foundation", focus: "A grantmaking foundation funding cross-disciplinary research on human flourishing and purpose.", url: "https://www.templetonworldcharity.org" },
      { name: "Quality of Life Research Center (Claremont Graduate University)", focus: "A research institute advancing the study of flow and optimal experience central to flourishing.", url: "https://www.cgu.edu/center/quality-of-life-research-center/" },
      { name: "Happier Lives Institute", focus: "A nonprofit research organization evaluating how effectively interventions improve subjective well-being.", url: "https://www.happierlivesinstitute.org" },
    ],
    scenario: {
      horizon: "2050–2070",
      destination:
        "The conditions for flow, purpose, and connection are understood well enough to design into schools, workplaces, and cities rather than left to chance. Flourishing is measured routinely and treated as a policy and design target alongside GDP and health.",
      convergences: [
        { name: "Well-being science", role: "Positive psychology and flourishing research point to conditions for meaning and flow, though effect sizes and replication remain debated." },
        { name: "Well-being measurement", role: "Instruments from Gallup, the World Happiness Report, and OECD make flourishing quantifiable and comparable over time." },
        { name: "Contemplative neuroscience", role: "Research on attention and emotion regulation shows which mental states can be trained and how." },
        { name: "Beyond-GDP policy metrics", role: "Governments adopting well-being indicators create demand and funding for flourishing as a public outcome." },
        { name: "Behavioral design", role: "Evidence-based programs translate research into environments, curricula, and workplaces that cultivate engagement." },
        { name: "Digital well-being tools", role: "Apps and platforms deliver and track tested practices at population scale rather than one clinic at a time." },
      ],
      milestones: [
        { period: "2026–2035", event: "Well-being metrics extend further into mainstream policy and organizational dashboards, building on efforts like the OECD's and New Zealand's wellbeing budgets." },
        { period: "2035–2050", event: "Schools, workplaces, and cities pilot environments explicitly designed around the science of flourishing." },
        { period: "2050–2070", event: "Deliberate flourishing becomes the default design assumption once material survival is broadly solved." },
      ],
      sources: [
        { name: "OECD — How's Life? Well-being Framework", url: "https://www.oecd.org/statistics/hows-life/" },
        { name: "Penn Positive Psychology Center — Research", url: "https://ppc.sas.upenn.edu/" },
        { name: "WHO — Comprehensive Mental Health Action Plan", url: "https://www.who.int/publications/i/item/9789240031029" },
      ],
    },
    stakes: {
      win: "Abundance gets a purpose: a species that has solved survival can make deep engagement and meaning the ordinary human condition rather than a lucky accident.",
      lose: "Material problems are solved while the inner ones are ignored, and rising prosperity coexists with widespread emptiness, disengagement, and despair.",
      wildcard: "Technologies that can directly modulate mood and attention could make flourishing engineerable, or could substitute shallow stimulation for genuine meaning.",
      sources: [
        { name: "WHO — Comprehensive Mental Health Action Plan", url: "https://www.who.int/publications/i/item/9789240031029" },
        { name: "Gallup — State of the Global Workplace", url: "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx" },
      ],
    },
    progress: {
      stage: "Early Breakthroughs",
      statusLine: "The measurement science is real; the applied discipline of designing flourishing at scale is in its first drafts.",
      metrics: [
        { label: "Applied programs tracked", value: "—" },
        { label: "Populations studied", value: "—" },
      ],
    },
    getInvolved:
      "Owning Architected Eudaimonia means funding the science and building the environments where flourishing is the default setting of a human life. Which of The 37 is yours?",
    readAs: "The atlas turns inward: after the outer world is provisioned, the inner world becomes the project.",
  },
];
