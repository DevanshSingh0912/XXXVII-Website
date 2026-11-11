// Causes 13–15. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes13to15: CauseContent[] = [
  {
    slug: "algorithmic-justice",
    whyItMatters: [
      "Justice delayed is not merely denied — it is denied at scale, every day, to millions who cannot afford the wait or the counsel. Courts run at the speed of bureaucracy while society runs at the speed of software.",
      "Build dispute resolution that is hyper-fast, transparent, and equitable, and the law stops being a resource that money buys and time erodes. Rules that evolve with the society they govern. Resolution in minutes, not years.",
    ],
    endState:
      "A dispute is filed at breakfast and fairly resolved by lunch, with reasoning anyone can read and appeal open to all. Access to justice no longer scales with wealth. Law updates like a living system — deliberate, auditable, and fast enough to matter in the life it governs.",
    history: [
      {
        label: "The Old Constraint",
        body: "Justice moved on paper, through queues and fees — precise in principle, glacial and unequal in practice.",
      },
      {
        label: "The Turning Point",
        body: "Online dispute resolution proved that vast categories of conflict can be settled quickly, cheaply, and by process rather than by courtroom.",
        sources: [
          { name: "World Justice Project — Rule of Law Index 2023", url: "https://worldjusticeproject.org/rule-of-law-index/global" },
          { name: "HiiL — Measuring the Justice Gap", url: "https://www.hiil.org/research/the-justice-gap/" },
        ],
      },
      {
        label: "The Opening",
        body: "AI-assisted analysis and transparent digital procedure make speed and fairness allies for the first time, not trade-offs.",
      },
    ],
    organizations: [
      { name: "British Columbia Civil Resolution Tribunal", focus: "A public online tribunal resolving civil disputes quickly and affordably through a digital process.", url: "https://civilresolutionbc.ca" },
      { name: "Legal Aid Society", focus: "A nonprofit providing free legal assistance to people who cannot afford representation.", url: "https://legalaidnyc.org" },
      { name: "Legal Services Corporation", focus: "The largest U.S. funder of civil legal aid, supporting access to justice for low-income Americans.", url: "https://www.lsc.gov" },
      { name: "National Center for State Courts", focus: "A nonprofit advancing court technology, standards, and online dispute resolution across U.S. state courts.", url: "https://www.ncsc.org" },
      { name: "Stanford Legal Design Lab", focus: "A research lab building tools and standards to make legal systems more accessible and understandable.", url: "https://law.stanford.edu/legal-design-lab/" },
      { name: "American Bar Association", focus: "A professional body setting standards and promoting access-to-justice initiatives and legal technology.", url: "https://www.americanbar.org" },
      { name: "HiiL (The Hague Institute for Innovation of Law)", focus: "A think tank measuring justice needs and designing people-centered dispute resolution worldwide.", url: "https://www.hiil.org" },
      { name: "World Justice Project", focus: "A nonprofit measuring the rule of law globally through its Rule of Law Index and access-to-justice research.", url: "https://worldjusticeproject.org" },
      { name: "Pew Charitable Trusts", focus: "A research and public policy organization studying court modernization and civil legal system reform.", url: "https://www.pewtrusts.org" },
      { name: "United Kingdom HM Courts & Tribunals Service", focus: "A government agency digitizing court processes to enable faster, lower-cost online resolution.", url: "https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service" },
      { name: "Singapore State Courts", focus: "A judiciary pioneering online dispute resolution and technology-enabled case management.", url: "https://www.judiciary.gov.sg/state-courts" },
      { name: "MIT Computational Law Report", focus: "A research initiative studying how computation and code can express and administer legal rules.", url: "https://law.mit.edu" },
      { name: "Berkman Klein Center for Internet & Society", focus: "A Harvard research center studying law, technology, and the governance of digital systems.", url: "https://cyber.harvard.edu" },
      { name: "Tyler Technologies (Modria)", focus: "A court-technology company whose Modria online dispute resolution platform scales high-volume resolution for courts.", url: "https://www.tylertech.com" },
      { name: "Kleros", focus: "A blockchain-based dispute resolution protocol using crowdsourced jurors to arbitrate claims.", url: "https://kleros.io" },
      { name: "American Arbitration Association", focus: "A nonprofit administering arbitration and mediation, including online dispute resolution services.", url: "https://www.adr.org" },
      { name: "JAMS", focus: "A provider of private mediation and arbitration services, including virtual dispute resolution.", url: "https://www.jamsadr.com" },
      { name: "Code for America", focus: "A nonprofit building digital public services that simplify access to legal and government systems.", url: "https://codeforamerica.org" },
      { name: "Pro Bono Net", focus: "A nonprofit building online platforms that connect people with legal help and self-help resources.", url: "https://www.probono.net" },
      { name: "National Center for Access to Justice", focus: "A research center at Fordham Law measuring and advancing access to civil justice in the United States.", url: "https://ncaj.org" },
      { name: "Catalis (Matterhorn ODR)", focus: "A government-technology company whose Matterhorn platform powers online dispute resolution for U.S. courts.", url: "https://catalisgov.com" },
      { name: "DoNotPay", focus: "A consumer-facing service automating routine legal claims and disputes for individuals.", url: "https://donotpay.com" },
    ],
    scenario: {
      horizon: "2032–2045",
      destination:
        "Most routine civil disputes — consumer claims, small debts, tenancy, benefits appeals — resolve through auditable digital process in days rather than years, with published reasoning and open appeal. Courtrooms narrow to the contested and the grave.",
      convergences: [
        { name: "Large language models", role: "Draft filings, translate legalese, and summarize case facts so unrepresented parties can navigate a claim without counsel." },
        { name: "Online dispute resolution platforms", role: "Provide the structured intake, negotiation, and adjudication pipelines already proven at high volume in courts and marketplaces." },
        { name: "Structured legal data and citation graphs", role: "Make statutes, precedent, and outcomes machine-readable so systems can reason over the actual law rather than approximate it." },
        { name: "Explainability and audit tooling", role: "Turn model outputs into reviewable, contestable reasoning, the precondition for using automation in binding decisions." },
        { name: "Digital identity and e-signature infrastructure", role: "Let parties file, authenticate, and be bound remotely without physical presence or paper." },
        { name: "Procedural and evidentiary regulation", role: "Sets which decisions may be automated, how appeal works, and where a human judge must remain in the loop." },
      ],
      milestones: [
        { period: "2026–2029", event: "Courts and agencies expand AI-assisted triage and self-help tools while keeping final decisions human." },
        { period: "2030–2035", event: "Public online tribunals resolve broad categories of low-value civil disputes end to end with published reasoning." },
        { period: "2036–2045", event: "Standards for auditable, appealable algorithmic adjudication mature enough to handle the bulk of routine civil caseloads." },
      ],
      sources: [
        { name: "EU AI Act (Official Journal, 2024)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
        { name: "NIST AI Risk Management Framework 1.0", url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" },
        { name: "AI Now Institute Annual Report", url: "https://ainowinstitute.org/research" },
      ],
    },
    stakes: {
      win: "Access to justice stops scaling with wealth and time, and the law becomes a responsive utility that ordinary people can actually use.",
      lose: "Backlogs and cost keep courts out of reach for most, while unaccountable automated decisions creep in through the back door of private platforms.",
      wildcard: "A high-profile wrongful automated ruling could either trigger the transparency standards the field needs or freeze adoption for a decade.",
      sources: [
        { name: "Legal Services Corporation — Justice Gap Report 2022", url: "https://justicegap.lsc.gov" },
        { name: "World Justice Project — Rule of Law Index", url: "https://worldjusticeproject.org/rule-of-law-index/global" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "Fast digital resolution works in narrow lanes; extending it to the core of the law, transparently and equitably, is the open build.",
      metrics: [
        { label: "Resolution systems tracked", value: "—" },
        { label: "Median time to resolution", value: "—" },
      ],
    },
    getInvolved:
      "Owning Algorithmic Justice means building and funding the systems that make fair resolution a utility — fast, legible, and open to everyone. Which of The 37 is yours?",
    readAs: "Coordination needs a referee: justice fast enough to keep pace with everything else in the atlas.",
  },
  {
    slug: "distributive-design",
    whyItMatters: [
      "Every previous technological wave created abundance — and then spent generations litigating who got it. Redistribution after the fact is the most expensive patch in history: politically corrosive, perpetually contested, always late.",
      "Design equitable access into systems from inception and the fight never starts. Fairness as a feature, not a patch. The exponential future is only worth building if its outputs reach everyone by default.",
    ],
    endState:
      "New technologies launch with access built in the way software ships with security built in. The gap between invention and universal availability shrinks from generations to years. \"Who gets this?\" is answered in the design review, not in the streets a decade later.",
    history: [
      {
        label: "The Old Constraint",
        body: "Every abundance arrived unevenly, and fairness was bolted on afterward — by tax, by protest, by decades of catch-up.",
      },
      {
        label: "The Turning Point",
        body: "Open-source, generics, and universal-access frameworks showed that distribution can be a design decision made at the start.",
        sources: [
          { name: "WHO Essential Medicines List", url: "https://www.who.int/groups/expert-committee-on-selection-and-use-of-essential-medicines/essential-medicines-lists" },
          { name: "Medicines Patent Pool — Publications", url: "https://medicinespatentpool.org/news-publications/mpp-publications" },
        ],
      },
      {
        label: "The Opening",
        body: "With the largest abundances yet on the horizon, the chance exists to bake distribution into their architecture before the concrete sets.",
      },
    ],
    organizations: [
      { name: "Gavi, the Vaccine Alliance", focus: "A global health partnership working to ensure equitable access to vaccines in lower-income countries.", url: "https://www.gavi.org" },
      { name: "Bill & Melinda Gates Foundation", focus: "A philanthropy funding equitable access to health, agriculture, and technology in developing regions.", url: "https://www.gatesfoundation.org" },
      { name: "World Health Organization", focus: "A UN agency setting standards and coordinating equitable access to essential medicines and health tools.", url: "https://www.who.int" },
      { name: "Global Fund to Fight AIDS, Tuberculosis and Malaria", focus: "A financing partnership channeling resources to make treatments universally accessible.", url: "https://www.theglobalfund.org" },
      { name: "Wellcome Trust", focus: "A research foundation funding open science and equitable access to health innovations.", url: "https://wellcome.org" },
      { name: "Open Source Initiative", focus: "A nonprofit stewarding the open-source definition that keeps software freely available and modifiable.", url: "https://opensource.org" },
      { name: "Creative Commons", focus: "A nonprofit providing licenses that make creative and educational works openly shareable by default.", url: "https://creativecommons.org" },
      { name: "Free Software Foundation", focus: "A nonprofit promoting software freedom through copyleft licensing that guarantees access to source.", url: "https://www.fsf.org" },
      { name: "Wikimedia Foundation", focus: "A nonprofit hosting freely accessible knowledge resources like Wikipedia for everyone.", url: "https://wikimediafoundation.org" },
      { name: "Mozilla Foundation", focus: "A nonprofit building open, accessible internet technology and advocating for equitable digital access.", url: "https://foundation.mozilla.org" },
      { name: "Linux Foundation", focus: "A nonprofit stewarding open-source infrastructure that keeps foundational software openly available.", url: "https://www.linuxfoundation.org" },
      { name: "Medicines Patent Pool", focus: "A UN-backed organization licensing patented medicines to expand affordable access in low-income countries.", url: "https://medicinespatentpool.org" },
      { name: "Doctors Without Borders (Access Campaign)", focus: "A humanitarian organization advocating for affordable access to medicines and diagnostics.", url: "https://www.doctorswithoutborders.org" },
      { name: "Ford Foundation", focus: "A philanthropy funding initiatives that embed equity into technology, media, and public infrastructure.", url: "https://www.fordfoundation.org" },
      { name: "Open Society Foundations", focus: "A philanthropic network supporting equitable access to information, health, and justice.", url: "https://www.opensocietyfoundations.org" },
      { name: "GitHub", focus: "A platform hosting open-source software that makes code globally shareable and reusable by default.", url: "https://github.com" },
      { name: "Internet Archive", focus: "A nonprofit providing free, universal access to books, media, and archived web content.", url: "https://archive.org" },
      { name: "Raspberry Pi Foundation", focus: "A nonprofit making low-cost computing and free computing education accessible to children worldwide.", url: "https://www.raspberrypi.org" },
      { name: "Digital Public Goods Alliance", focus: "A multi-stakeholder initiative promoting open technologies as public goods for equitable development.", url: "https://www.digitalpublicgoods.net" },
      { name: "Coalition for Epidemic Preparedness Innovations (CEPI)", focus: "A partnership funding vaccine development with equitable-access commitments built into its agreements.", url: "https://cepi.net" },
      { name: "Rockefeller Foundation", focus: "A philanthropy funding programs that broaden access to health, energy, and economic opportunity.", url: "https://www.rockefellerfoundation.org" },
      { name: "Apache Software Foundation", focus: "A nonprofit stewarding widely used open-source projects available freely to all developers.", url: "https://www.apache.org" },
    ],
    scenario: {
      horizon: "2035–2055",
      destination:
        "Major new technologies ship with access commitments written into their licensing, funding, and supply chains from the start, so the lag between invention and broad availability compresses from generations to years. Equity becomes a design constraint reviewed alongside safety and cost.",
      convergences: [
        { name: "Open-source and copyleft licensing", role: "Provides the working legal template for making a technology freely usable and modifiable by default." },
        { name: "Patent pools and access-tiered licensing", role: "Show, as with medicines, how proprietary innovation can still reach low-income markets affordably." },
        { name: "Advance market commitments and pooled funding", role: "Guarantee demand and finance for equitable distribution before a product exists, as used for vaccines." },
        { name: "Digital public goods standards", role: "Define what qualifies as an open, reusable public technology and how governments can adopt it." },
        { name: "Distributed manufacturing and generics capacity", role: "Let a design reach many regions without depending on a single owner or supplier." },
        { name: "Procurement and regulatory policy", role: "Uses public purchasing power and rules to reward products built for broad access from inception." },
      ],
      milestones: [
        { period: "2026–2032", event: "Access-by-design norms spread from health and software into AI models and climate technology through licensing and funding conditions." },
        { period: "2033–2042", event: "Major funders and governments make built-in access a standard grant and procurement requirement." },
        { period: "2043–2055", event: "Distribution-by-design matures into an explicit engineering discipline applied to frontier abundances as they launch." },
      ],
      sources: [
        { name: "WHO Essential Medicines List", url: "https://www.who.int/groups/expert-committee-on-selection-and-use-of-essential-medicines/essential-medicines-lists" },
        { name: "UN SDG 10 — Reduced Inequalities", url: "https://unstats.un.org/sdgs/report/2023/goal-10/" },
        { name: "OECD — Inequality & Inclusion", url: "https://www.oecd.org/inequality/reducing-inequalities/" },
      ],
    },
    stakes: {
      win: "The largest abundances yet reach everyone by construction, sparing the world the corrosive, decades-long fights over who was left out.",
      lose: "New technologies concentrate their gains as every prior wave did, and society pays again in inequality, backlash, and slow, contested redistribution.",
      wildcard: "If a dominant AI or energy platform bakes in open access early, it could set an industry default that others are forced to match.",
      sources: [
        { name: "OECD — Inequality & Inclusion", url: "https://www.oecd.org/inequality/reducing-inequalities/" },
        { name: "UN SDG 10 — Reduced Inequalities", url: "https://unstats.un.org/sdgs/report/2023/goal-10/" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "Proven precedents exist in software and medicine; distribution-by-design as a general discipline is still being written.",
      metrics: [
        { label: "Design frameworks tracked", value: "—" },
        { label: "Systems shipped with built-in access", value: "—" },
      ],
    },
    getInvolved:
      "Owning Distributive Design means embedding access into the blueprints of the exponential stack — as architect, funder, or standard-bearer. Which of The 37 is yours?",
    readAs: "The Nexus closes on its promise: coordination that shares the upside by construction.",
  },
  {
    slug: "universal-cognitive-mastery",
    whyItMatters: [
      "Somewhere right now a mind that could cure a disease is stuck without a teacher. Genius has always been an accident of birth — the lottery of geography, wealth, and who happened to explain things well when it mattered.",
      "Give every person an infinitely patient, personalized tutor and the lottery ends. Anyone, anywhere, can master any subject they choose. The species stops wasting its own intelligence.",
    ],
    endState:
      "Learning fits the learner, not the classroom average. A farmer's daughter and a financier's son sit before the same infinitely patient intelligence and advance at the pace of their curiosity. Expertise is decided by desire and effort — the last two variables that should ever have mattered.",
    history: [
      {
        label: "The Old Constraint",
        body: "Mastery required rare teachers and rarer access — one lecture pace for every mind, and most minds left behind.",
      },
      {
        label: "The Turning Point",
        body: "Research confirmed what intuition suspected: one-on-one tutoring transforms outcomes — it simply never scaled.",
        sources: [
          { name: "Bloom — The 2 Sigma Problem (Educational Researcher, 1984)", url: "https://web.mit.edu/5.95/www/readings/bloom-two-sigma.pdf" },
          { name: "UNESCO — Right to Education", url: "https://www.unesco.org/en/education/right" },
        ],
      },
      {
        label: "The Opening",
        body: "AI tutors make personal instruction infinitely replicable, and brain-computer interface research hints at even more direct roads to mastery.",
      },
    ],
    organizations: [
      { name: "Khan Academy", focus: "A nonprofit providing free online education, including AI-assisted tutoring.", url: "https://www.khanacademy.org" },
      { name: "Duolingo", focus: "A company delivering free, adaptive language learning to hundreds of millions of learners worldwide.", url: "https://www.duolingo.com" },
      { name: "OpenAI", focus: "An AI lab whose language models power personalized tutoring and learning tools at scale.", url: "https://openai.com" },
      { name: "Google DeepMind", focus: "An AI research lab developing models and educational tools that support personalized learning.", url: "https://deepmind.google" },
      { name: "Coursera", focus: "A platform delivering university and professional courses to a global base of learners.", url: "https://www.coursera.org" },
      { name: "edX", focus: "A nonprofit-founded platform offering open online courses from leading universities worldwide.", url: "https://www.edx.org" },
      { name: "Carnegie Learning", focus: "An education company building AI-driven personalized tutoring software grounded in learning science.", url: "https://www.carnegielearning.com" },
      { name: "MIT OpenCourseWare", focus: "An initiative publishing MIT course materials freely for self-directed learners everywhere.", url: "https://ocw.mit.edu" },
      { name: "Anthropic", focus: "An AI lab building assistants used as patient, personalized tutors across subjects.", url: "https://www.anthropic.com" },
      { name: "Wikipedia", focus: "A free, collaboratively edited encyclopedia giving anyone access to knowledge in hundreds of languages.", url: "https://www.wikipedia.org" },
      { name: "Photomath", focus: "An app that guides learners through math problems with step-by-step explanations.", url: "https://photomath.com" },
      { name: "Squirrel AI Learning", focus: "A company deploying adaptive AI tutoring systems for personalized instruction at scale.", url: "https://squirrelai.com" },
      { name: "Century Tech", focus: "An education company using AI to adapt lessons to each learner's pace and gaps.", url: "https://www.century.tech" },
      { name: "Carnegie Mellon University (Human-Computer Interaction Institute)", focus: "A research institute pioneering intelligent tutoring systems and learning science.", url: "https://www.hcii.cmu.edu" },
      { name: "Stanford Graduate School of Education", focus: "A research institution studying learning science and technology-enabled personalized instruction.", url: "https://ed.stanford.edu" },
      { name: "UNESCO", focus: "A UN agency advancing equitable access to quality education and educational technology globally.", url: "https://www.unesco.org" },
      { name: "Chan Zuckerberg Initiative", focus: "A philanthropy funding personalized learning tools and education research.", url: "https://chanzuckerberg.com" },
      { name: "Pearson", focus: "An education company building adaptive digital learning products and assessments.", url: "https://www.pearson.com" },
      { name: "IXL Learning", focus: "An education technology company delivering personalized, adaptive K–12 learning to millions of students.", url: "https://www.ixl.com" },
      { name: "Neuralink", focus: "A company researching brain-computer interfaces that could one day accelerate learning directly.", url: "https://neuralink.com" },
      { name: "Curriculum Associates (i-Ready)", focus: "An education company providing adaptive diagnostic and instructional software for schools.", url: "https://www.curriculumassociates.com" },
      { name: "Quizlet", focus: "A learning platform using adaptive study tools and AI to help learners master material.", url: "https://quizlet.com" },
    ],
    scenario: {
      horizon: "2030–2045",
      destination:
        "Any person with a phone has an infinitely patient tutor that teaches to mastery in their own language and at their own pace, adapting to how they learn. The one-on-one instruction long known to work becomes free and universal instead of rare and bought.",
      convergences: [
        { name: "Large language models", role: "Give every learner a conversational, subject-general tutor that explains, quizzes, and adapts in real time." },
        { name: "Learning science and mastery-based pedagogy", role: "Encodes what makes tutoring effective so AI instruction produces real understanding, not just answers." },
        { name: "Low-cost devices and mobile connectivity", role: "Put the tutor within reach of learners in regions long cut off from quality instruction." },
        { name: "Multilingual speech and translation models", role: "Deliver instruction in a learner's native language and by voice, removing literacy and language barriers." },
        { name: "Open educational resources", role: "Supply the freely licensed curriculum and materials AI tutors draw on across subjects." },
        { name: "Brain-computer interface research", role: "Points to longer-term, more direct routes to skill acquisition, still early and unproven." },
      ],
      milestones: [
        { period: "2026–2030", event: "AI tutors reach hundreds of millions, with early studies showing promising but still uneven learning gains in core subjects." },
        { period: "2031–2038", event: "If reliability holds, mastery-grade tutors extend across most school and professional subjects with verifiable outcomes." },
        { period: "2039–2045", event: "Universal, multilingual, low-cost tutoring closes much of the global gap in access to expert instruction." },
      ],
      sources: [
        { name: "Bloom — The 2 Sigma Problem (Educational Researcher, 1984)", url: "https://web.mit.edu/5.95/www/readings/bloom-two-sigma.pdf" },
        { name: "UNESCO — Right to Education", url: "https://www.unesco.org/en/education/right" },
        { name: "OECD — Education at a Glance 2023", url: "https://www.oecd.org/en/publications/education-at-a-glance-2023_e13bef63-en.html" },
      ],
    },
    stakes: {
      win: "Human potential stops being rationed by geography and wealth, and the species recovers the vast intelligence it currently wastes.",
      lose: "The teacher shortage and access gap persist, and the same accident of birth keeps deciding who ever gets to master anything." ,
      wildcard: "A tutor demonstrably better than the best human teachers could transform schooling worldwide almost overnight, or provoke fierce resistance from systems it displaces.",
      sources: [
        { name: "OECD — Education at a Glance 2023", url: "https://www.oecd.org/en/publications/education-at-a-glance-2023_e13bef63-en.html" },
        { name: "UNESCO — Global Education Monitoring Report", url: "https://www.unesco.org/gem-report/en" },
      ],
    },
    progress: {
      stage: "Scaling",
      statusLine: "Personalized AI tutoring is live and improving fast; universal reach and true mastery-level depth are the remaining climb.",
      metrics: [
        { label: "Learners reached", value: "—" },
        { label: "Subjects with mastery-grade tutors", value: "—" },
      ],
    },
    getInvolved:
      "Owning Universal Cognitive Mastery means funding and building the tutors, interfaces, and access that unlock every mind alive. Which of The 37 is yours?",
    readAs: "From coordinated society to awakened minds: the Intellect begins with teaching everyone everything.",
  },
];
