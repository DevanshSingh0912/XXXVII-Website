// Causes 31–33. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes31to33: CauseContent[] = [
  {
    slug: "stellar-engineering",
    whyItMatters: [
      "Our star pours out more energy in a second than civilization has used in its entire history — and we harvest a rounding error of a rounding error. Every ambition in this atlas eventually hits the same wall: how much power a species can command.",
      "Begin the transition to a Kardashev Type II civilization — megastructures harnessing the Sun's full output — and the wall moves out by orders of magnitude. Think at the scale of solar systems. Build at the scale of centuries.",
    ],
    endState:
      "Orbital collectors bloom around the Sun in growing constellations, feeding a civilization whose energy budget is measured in fractions of a star. Projects impossible under planetary constraints — terraforming, interstellar probes, computation at unthinkable scale — move from fantasy to scheduling. The species builds on stellar time.",
    history: [
      {
        label: "The Old Constraint",
        body: "Civilization's power budget was whatever a planet's surface could catch or store — a thin skim of one star's output.",
      },
      {
        label: "The Turning Point",
        body: "Physicists formalized the scale itself: civilizations classed by energy command, with the path from planet to star laid out as a gradient, not a miracle.",
        sources: [
          { name: "Dyson — Search for Artificial Stellar Sources of Infrared Radiation (Science, 1960)", url: "https://www.science.org/doi/10.1126/science.131.3414.1667" },
          { name: "ESA — Space-Based Solar Power SOLARIS study", url: "https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOLARIS/Space-based_solar_power" },
        ],
      },
      {
        label: "The Opening",
        body: "Falling launch costs and space-based solar research put the first honest rungs of that ladder — orbital collection at scale — within engineering conversation.",
      },
    ],
    organizations: [
      { name: "NASA", focus: "The US space agency whose studies and space-power research underpin the engineering path toward large-scale orbital energy collection.", url: "https://www.nasa.gov" },
      { name: "European Space Agency", focus: "A space agency studying space-based solar power through its SOLARIS initiative for large-scale orbital energy collection.", url: "https://www.esa.int" },
      { name: "SpaceX", focus: "A launch company driving down the cost of reaching orbit, the enabling prerequisite for building solar megastructures.", url: "https://www.spacex.com" },
      { name: "Caltech Space Solar Power Project", focus: "A research program that demonstrated wireless power transmission from an orbital solar prototype in space.", url: "https://www.spacesolar.caltech.edu" },
      { name: "China Academy of Space Technology", focus: "A state space contractor developing plans and test facilities for megawatt-scale space-based solar power stations.", url: "https://www.cast.cn" },
      { name: "Japan Aerospace Exploration Agency", focus: "A national space agency that has pursued a long-running roadmap and demonstrations for space solar power.", url: "https://global.jaxa.jp" },
      { name: "Space Energy Initiative", focus: "A UK industry group developing plans and technology for gigawatt-scale space-based solar power stations.", url: "https://spaceenergyinitiative.org.uk" },
      { name: "US Air Force Research Laboratory", focus: "A military research organization flying orbital experiments to demonstrate solar power collection and beaming from space.", url: "https://www.afrl.af.mil" },
      { name: "US Naval Research Laboratory", focus: "A research lab that has flown hardware testing solar energy conversion and microwave power transmission in orbit.", url: "https://www.nrl.navy.mil" },
      { name: "Blue Origin", focus: "A launch and in-space infrastructure company advancing heavy-lift and in-orbit manufacturing relevant to large space structures.", url: "https://www.blueorigin.com" },
      { name: "Northrop Grumman", focus: "An aerospace contractor that developed lightweight modular hardware for the Caltech orbital solar power demonstration.", url: "https://www.northropgrumman.com" },
      { name: "Airbus", focus: "An aerospace manufacturer conducting wireless power-beaming demonstrations tied to space-based solar power concepts.", url: "https://www.airbus.com" },
      { name: "Thales Alenia Space", focus: "A European space manufacturer studying large orbital platforms and systems for space-based solar power.", url: "https://www.thalesaleniaspace.com" },
      { name: "China Aerospace Science and Technology Corporation", focus: "China's main space contractor constructing ground test facilities for space solar power transmission.", url: "https://english.spacechina.com" },
      { name: "Xidian University", focus: "A Chinese university that built a full-chain ground demonstration system for space solar power collection and beaming.", url: "https://en.xidian.edu.cn" },
      { name: "Chongqing University", focus: "A Chinese university developing a ground testing base for space-based solar power research.", url: "https://english.cqu.edu.cn" },
      { name: "Massachusetts Institute of Technology", focus: "A research university advancing lightweight photovoltaics, structures, and power systems relevant to orbital solar collection.", url: "https://www.mit.edu" },
      { name: "National Space Society", focus: "A nonprofit advocacy organization promoting space-based solar power as a path toward high-energy spacefaring civilization.", url: "https://space.nss.org" },
      { name: "Emrod", focus: "A company developing long-range wireless power transmission technology applicable to beaming energy from orbit.", url: "https://emrod.energy" },
      { name: "Solaren", focus: "A company that has pursued commercial contracts to deliver baseload electricity generated by orbital solar satellites.", url: "https://www.solarenspace.com" },
      { name: "Frazer-Nash Consultancy", focus: "An engineering firm that produced UK government feasibility studies for gigawatt-scale space-based solar power.", url: "https://www.fnc.co.uk" },
    ],
    scenario: {
      horizon: "2100+",
      destination:
        "The first operational space-based solar power stations beam gigawatts to Earth from geostationary orbit, and the initial elements of a larger orbital collection network are under construction. The step from planetary energy to a meaningful fraction of stellar output has begun.",
      convergences: [
        { name: "Reusable heavy-lift launch", role: "Radically lower cost to orbit is the precondition for lofting the mass required by any large collector." },
        { name: "In-space manufacturing and assembly", role: "Structures too large to launch intact must be built and joined in orbit by robotic systems." },
        { name: "Wireless power transmission", role: "Microwave and laser beaming move collected energy from orbit to ground receivers without cables." },
        { name: "Lightweight photovoltaics", role: "High-efficiency, low-mass solar cells determine how much power each kilogram launched can return." },
        { name: "Autonomous robotics", role: "Self-directed construction and maintenance make kilometer-scale structures buildable and repairable far from human crews." },
        { name: "International governance frameworks", role: "Agreements on orbital slots, spectrum, and liability determine whether such infrastructure can be deployed at all." },
      ],
      milestones: [
        { period: "2026–2035", event: "Building on the first in-space power-beaming demonstrations, larger orbital tests and megawatt-scale ground trials mature lightweight collectors and end-to-end transmission." },
        { period: "2035–2060", event: "If the economics and launch cadence hold, early gigawatt-class space solar stations move from pilot to service, delivering baseload power to a terrestrial grid." },
        { period: "2060–2090", event: "Modular collectors are mass-produced and assembled in orbit, and an interconnected network begins to scale." },
        { period: "2090–2100+", event: "Collection expands beyond geostationary orbit as the earliest components of a solar-scale energy architecture take shape." },
      ],
      sources: [
        { name: "Dyson — Search for Artificial Stellar Sources of Infrared Radiation (Science, 1960)", url: "https://www.science.org/doi/10.1126/science.131.3414.1667" },
        { name: "ESA — Space-Based Solar Power study", url: "https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOLARIS/Space-based_solar_power" },
        { name: "National Space Society — Space Solar Power", url: "https://space.nss.org/space-solar-power/" },
      ],
    },
    stakes: {
      win: "A civilization drawing on a fraction of its star's output can fund terraforming, interstellar probes, and computation at scales that planetary energy budgets forbid.",
      lose: "Capped at what a planet's surface can catch, the species stays energy-starved, and the most ambitious projects in this atlas remain permanently out of reach.",
      wildcard: "A breakthrough in launch cost or superconducting power transmission could compress the timeline from centuries to decades.",
      sources: [
        { name: "National Space Society — Space Solar Power", url: "https://space.nss.org/space-solar-power/" },
        { name: "Caltech Space Solar Power Project", url: "https://www.spacesolar.caltech.edu" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The concepts are rigorous, the prerequisites are maturing, and the construction has not begun.",
      metrics: [
        { label: "Orbital energy demonstrations", value: "—" },
        { label: "Research programs tracked", value: "—" },
      ],
    },
    getInvolved:
      "Owning Stellar Engineering means funding the studies, the demonstrations, and the century-long roadmaps that start civilization's climb up the Kardashev scale. Which of The 37 is yours?",
    readAs: "The Horizon steepens: first a second home, then the energy of the star itself.",
  },
  {
    slug: "mastery-of-fundamental-physics",
    whyItMatters: [
      "Every technology in this atlas runs on physics we already know — and our two best theories of reality still refuse to speak to each other. The gaps in our understanding are not academic trivia. They are the walls of the possible.",
      "Solve the theory of everything and the walls move. Each past unification rewrote civilization: electromagnetism gave us the modern world, quantum mechanics gave us the digital one. The next one gives us modes of reality manipulation we have not yet imagined.",
    ],
    endState:
      "The deepest rules are known — gravity and the quantum reconciled, the dark sectors explained. Engineering inherits a complete rulebook, and applications follow as they always have: unimaginable before the theory, indispensable after. The universe stops being a mystery we inhabit and becomes a medium we work in.",
    history: [
      {
        label: "The Old Constraint",
        body: "Reality's rules were discovered piecemeal, and civilization could only exploit the fragments it happened to hold.",
      },
      {
        label: "The Turning Point",
        body: "The twentieth century's twin revolutions — relativity and quantum mechanics — explained almost everything, and contradicted each other at the foundations.",
        sources: [
          { name: "CERN — High-Luminosity LHC Programme", url: "https://hilumilhc.web.cern.ch" },
          { name: "LIGO Scientific Collaboration", url: "https://www.ligo.org" },
        ],
      },
      {
        label: "The Opening",
        body: "New instruments — gravitational-wave observatories, precision cosmology, quantum experiments — are probing exactly where the theories disagree.",
      },
    ],
    organizations: [
      { name: "CERN", focus: "An international laboratory operating the world's largest particle physics facilities to probe the fundamental constituents of matter.", url: "https://home.cern" },
      { name: "LIGO Scientific Collaboration", focus: "A collaboration operating gravitational-wave observatories that probe gravity where general relativity and quantum theory meet.", url: "https://www.ligo.org" },
      { name: "Fermi National Accelerator Laboratory", focus: "A US national laboratory studying neutrinos, muons, and particle physics anomalies that could point beyond the Standard Model.", url: "https://www.fnal.gov" },
      { name: "Perimeter Institute for Theoretical Physics", focus: "A research institute focused on foundational theoretical physics, including quantum gravity and unification.", url: "https://www.perimeterinstitute.ca" },
      { name: "Institute for Advanced Study", focus: "A research center whose theoretical physicists work on string theory, quantum gravity, and the unification of fundamental forces.", url: "https://www.ias.edu" },
      { name: "Max Planck Society", focus: "A German research organization whose institutes lead work in particle physics, gravitation, and quantum foundations.", url: "https://www.mpg.de" },
      { name: "SLAC National Accelerator Laboratory", focus: "A US national lab operating accelerators and detectors probing the fundamental structure of matter and cosmology.", url: "https://www6.slac.stanford.edu" },
      { name: "Kavli Institute for Theoretical Physics", focus: "A research institute at UC Santa Barbara convening theorists on frontier problems in fundamental physics.", url: "https://www.kitp.ucsb.edu" },
      { name: "DESY", focus: "A German accelerator center conducting particle physics and photon science that tests fundamental theories.", url: "https://www.desy.de" },
      { name: "Brookhaven National Laboratory", focus: "A US national lab operating colliders that study quark-gluon plasma and the strong force.", url: "https://www.bnl.gov" },
      { name: "IceCube Neutrino Observatory", focus: "A cubic-kilometer detector at the South Pole studying high-energy neutrinos to probe fundamental particle interactions.", url: "https://icecube.wisc.edu" },
      { name: "Simons Foundation", focus: "A philanthropic foundation funding theoretical physics and mathematics aimed at deep questions about reality.", url: "https://www.simonsfoundation.org" },
      { name: "KEK", focus: "Japan's high-energy accelerator research organization operating experiments that test particle physics and search for new physics.", url: "https://www.kek.jp" },
      { name: "Joint Institute for Nuclear Research", focus: "An international nuclear and particle physics laboratory conducting experiments on fundamental interactions.", url: "https://www.jinr.ru" },
      { name: "Gran Sasso National Laboratory", focus: "An underground laboratory hosting experiments searching for dark matter and rare processes beyond known physics.", url: "https://www.lngs.infn.it" },
      { name: "European Space Agency", focus: "A space agency running precision cosmology and gravitational missions that constrain fundamental theories.", url: "https://www.esa.int" },
      { name: "NASA", focus: "A space agency operating observatories and missions probing dark energy, gravity, and cosmological fundamentals.", url: "https://www.nasa.gov" },
      { name: "American Physical Society", focus: "A professional body that convenes and publishes the research community pursuing fundamental physics.", url: "https://www.aps.org" },
      { name: "TRIUMF", focus: "Canada's particle accelerator center conducting experiments on subatomic physics and fundamental interactions.", url: "https://www.triumf.ca" },
      { name: "Institute of Physics", focus: "A learned society advancing physics research and the pursuit of unifying theories of nature.", url: "https://www.iop.org" },
      { name: "RIKEN", focus: "A Japanese research institute conducting theoretical and experimental physics probing the fundamental laws of nature.", url: "https://www.riken.jp" },
    ],
    scenario: {
      horizon: "22nd century",
      destination:
        "A theory reconciling gravity with quantum mechanics is confirmed by experiment, and the dark sectors of cosmology are explained rather than parameterized. Engineering inherits a complete account of the rules matter and energy obey.",
      convergences: [
        { name: "Gravitational-wave astronomy", role: "Observing merging black holes probes gravity in exactly the strong-field regime where relativity and quantum theory must be reconciled." },
        { name: "Next-generation colliders", role: "Higher-energy particle collisions test for physics beyond the Standard Model that theory alone cannot resolve." },
        { name: "Precision cosmology", role: "Ever-finer surveys of the early universe and its expansion constrain what dark matter and dark energy can be." },
        { name: "Quantum sensing", role: "Atom interferometers and comparable instruments measure fundamental constants and forces with the precision needed to catch small deviations." },
        { name: "Machine-assisted theory", role: "Computation and machine learning search vast theoretical and data spaces for patterns human calculation cannot exhaust." },
        { name: "Underground and neutrino experiments", role: "Rare-event and neutrino detectors search for the subtle signatures that point toward the next unification." },
      ],
      milestones: [
        { period: "2026–2040", event: "Upgraded gravitational-wave observatories and collider runs sharpen or overturn candidate anomalies in current theory." },
        { period: "2040–2070", event: "A next-generation collider and precision cosmology missions decisively probe the energy and distance scales where the theories diverge." },
        { period: "2070–2100", event: "Converging experimental results isolate the specific mechanism unifying gravity and the quantum, and a leading framework emerges." },
        { period: "2100+", event: "The unifying theory is confirmed and, as with past unifications, unforeseen applications begin to follow." },
      ],
      sources: [
        { name: "High-Luminosity LHC Project (HL-LHC)", url: "https://hilumilhc.web.cern.ch" },
        { name: "International Linear Collider — Technical Design Report", url: "https://www.linearcollider.org/ILC/Publications/Technical-Design-Report" },
        { name: "LIGO Scientific Collaboration", url: "https://www.ligo.org" },
      ],
    },
    stakes: {
      win: "Each past unification rewrote what civilization could build; a complete theory of the fundamental rules opens forms of energy and reality manipulation not yet imaginable.",
      lose: "The two foundational theories stay mutually contradictory, the dark sectors stay unexplained, and progress across every physics-limited technology slows against walls no one can see past.",
      wildcard: "A single unexpected anomaly in a gravitational-wave signal or collider dataset could point directly at the answer decades early.",
      sources: [
        { name: "CERN — High-Luminosity LHC Programme", url: "https://hilumilhc.web.cern.ch" },
        { name: "LIGO Scientific Collaboration", url: "https://www.ligo.org" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The frontier is instrumented as never before; the unifying theory remains unwritten.",
      metrics: [
        { label: "Major experiments tracked", value: "—" },
        { label: "Anomalies under investigation", value: "—" },
      ],
    },
    getInvolved:
      "Owning Mastery of Fundamental Physics means funding the instruments and the minds that find the rules we haven't discovered yet. Which of The 37 is yours?",
    readAs: "Beneath the Horizon's engineering lies its license: the laws of the universe, fully read.",
  },
  {
    slug: "first-contact-readiness",
    whyItMatters: [
      "The discovery of another intelligence — a signal, an artifact, a mind we made ourselves — would be the most consequential event in human history. Our current preparation for it is approximately none: no agreed protocols, no tested ethics, no response systems.",
      "Readiness is cheap; unreadiness is not. Prepare civilizationally — protocols, ethics, response frameworks — and the most important conversation ever held begins with our species at its best instead of its most panicked.",
    ],
    endState:
      "Detection triggers procedure, not chaos: verification standards, deliberation frameworks, and response protocols agreed before they were needed. Humanity meets the moment — whenever and however it comes — coordinated, principled, and calm. Ready for the conversation that changes everything.",
    history: [
      {
        label: "The Old Constraint",
        body: "Contact lived in fiction and fringe, unbudgeted and unplanned — a civilizational blind spot dressed as a genre.",
      },
      {
        label: "The Turning Point",
        body: "The search became science: systematic surveys, exoplanet astronomy, and the discovery that worlds are everywhere made the question statistical rather than speculative.",
        sources: [
          { name: "IAA SETI Post-Detection Hub (2022 protocol update)", url: "https://iaaseti.org" },
          { name: "SKA Observatory", url: "https://www.skao.int" },
        ],
      },
      {
        label: "The Opening",
        body: "Post-detection protocols and contact ethics are being drafted in earnest — the beginnings of an answer to \"and then what?\"",
      },
    ],
    organizations: [
      { name: "SETI Institute", focus: "A research organization conducting scientific searches for extraterrestrial intelligence and technosignatures.", url: "https://www.seti.org" },
      { name: "Breakthrough Listen", focus: "A ten-year astronomical program surveying the sky for technosignatures from other civilizations.", url: "https://breakthroughinitiatives.org" },
      { name: "NASA", focus: "The US space agency funding astrobiology research and missions that search for signs of life beyond Earth.", url: "https://www.nasa.gov" },
      { name: "International Academy of Astronautics SETI Permanent Committee", focus: "A body that drafts the post-detection protocols governing how humanity would respond to a confirmed signal.", url: "https://iaaseti.org" },
      { name: "NASA Astrobiology Program", focus: "A NASA research program studying the origin, evolution, and distribution of life in the universe.", url: "https://astrobiology.nasa.gov" },
      { name: "European Space Agency", focus: "A space agency operating exoplanet and astrobiology missions that inform the search for habitable worlds and life.", url: "https://www.esa.int" },
      { name: "Berkeley SETI Research Center", focus: "A research center at UC Berkeley conducting radio and optical searches for extraterrestrial signals.", url: "https://seti.berkeley.edu" },
      { name: "International Institute of Space Law", focus: "A body developing the legal frameworks relevant to contact, messaging, and off-world governance.", url: "https://iislweb.space" },
      { name: "METI International", focus: "An organization researching the composition and ethics of deliberate messaging to extraterrestrial intelligence.", url: "https://meti.org" },
      { name: "Penn State Extraterrestrial Intelligence Center", focus: "An academic research center advancing the search for extraterrestrial technosignatures across radio, optical, and other channels.", url: "https://www.pseti.psu.edu" },
      { name: "Green Bank Observatory", focus: "A radio observatory whose large telescope conducts sensitive surveys used in the search for technosignatures.", url: "https://greenbankobservatory.org" },
      { name: "SKA Observatory", focus: "An international observatory building the world's largest radio telescope, expected to greatly expand technosignature searches.", url: "https://www.skao.int" },
      { name: "National Radio Astronomy Observatory", focus: "A US facility operating radio telescopes used in searches for extraterrestrial signals.", url: "https://public.nrao.edu" },
      { name: "Breakthrough Message", focus: "A program studying whether and how humanity should compose a message representing Earth to other civilizations.", url: "https://breakthroughinitiatives.org" },
      { name: "Blue Marble Space Institute of Science", focus: "A nonprofit research institute studying astrobiology and the societal implications of discovering life beyond Earth.", url: "https://www.bmsis.org" },
      { name: "NASA Jet Propulsion Laboratory", focus: "A NASA research center developing missions and instruments to detect and interpret potential biosignatures.", url: "https://www.jpl.nasa.gov" },
      { name: "International Astronomical Union", focus: "The global body of professional astronomers that helps coordinate verification and communication of major discoveries.", url: "https://www.iau.org" },
      { name: "The Planetary Society", focus: "A nonprofit that funds and advocates for the search for life and technosignatures beyond Earth.", url: "https://www.planetary.org" },
      { name: "Galileo Project", focus: "A Harvard-led research program systematically searching for and studying potential artifacts of extraterrestrial technology.", url: "https://projects.iq.harvard.edu/galileo" },
      { name: "National Astronomical Observatories of China", focus: "The operator of the FAST radio telescope, the world's largest single dish, which conducts searches for extraterrestrial signals.", url: "https://english.nao.cas.cn" },
      { name: "The Long Now Foundation", focus: "A nonprofit fostering long-term thinking about humanity's future, including how a civilization should prepare for events that reshape it.", url: "https://longnow.org" },
    ],
    scenario: {
      horizon: "2035–2060",
      destination:
        "Verification standards, deliberation frameworks, and communication protocols for a confirmed detection are agreed and rehearsed across scientific and governmental institutions. Whenever a signal or artifact arrives, humanity responds by procedure rather than panic.",
      convergences: [
        { name: "Radio and optical technosignature searches", role: "Wide-field surveys raise the odds and set the technical conditions under which a candidate detection would occur." },
        { name: "Exoplanet and biosignature astronomy", role: "Direct study of other worlds turns the question of life elsewhere from speculation into measurable observation." },
        { name: "Post-detection protocols", role: "Drafted verification and disclosure procedures define what happens between a candidate signal and a public announcement." },
        { name: "Space law and governance", role: "Legal frameworks for messaging, response, and off-world activity decide who may speak for Earth and how." },
        { name: "Data analysis and machine learning", role: "Automated classification separates genuine candidates from interference across enormous survey datasets." },
        { name: "International scientific coordination", role: "Cross-institution agreements allow independent confirmation and a single, calm channel of communication." },
      ],
      milestones: [
        { period: "2026–2035", event: "Next-generation radio telescopes and exoplanet observatories expand the volume and sensitivity of the search, while the community's post-detection principles — updated by the IAA in 2026 — are broadened beyond voluntary declarations." },
        { period: "2035–2045", event: "Verification and messaging protocols gain binding adoption by major observatories, scientific bodies, and governments rather than resting on scientific self-governance alone." },
        { period: "2045–2060", event: "Response frameworks are rehearsed and integrated into institutional practice, leaving humanity prepared regardless of when detection comes." },
      ],
      sources: [
        { name: "International Academy of Astronautics SETI Committee", url: "https://iaaseti.org" },
        { name: "SKA Observatory", url: "https://www.skao.int" },
        { name: "SETI Institute — Research Programs", url: "https://www.seti.org/research" },
      ],
    },
    stakes: {
      win: "The most consequential discovery in human history begins with humanity coordinated, principled, and calm, rather than improvising under the pressure of the moment.",
      lose: "A detection meets a species with no agreed protocols, no tested ethics, and no response system, and the most important conversation ever held opens in chaos.",
      wildcard: "A single confirmed technosignature or interstellar artifact could arrive tomorrow, collapsing decades of preparation time into days.",
      sources: [
        { name: "IAA SETI Post-Detection Hub (2022 protocol update)", url: "https://iaaseti.org" },
        { name: "SETI Institute — Research Programs", url: "https://www.seti.org/research" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The search is scientific and ongoing; civilizational readiness for a positive result barely exists.",
      metrics: [
        { label: "Protocol frameworks drafted", value: "—" },
        { label: "Search programs tracked", value: "—" },
      ],
    },
    getInvolved:
      "Owning First Contact Readiness means funding the search, drafting the protocols, and building the institutions that make humanity worth meeting. Which of The 37 is yours?",
    readAs: "The Horizon's far edge: having reached outward, be ready for what reaches back.",
  },
];
