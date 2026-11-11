// Causes 22–24. EDITORIAL PLACEHOLDERS: "[Add organization]" entries and "—" metric values are placeholders.

import { CauseContent } from "./types";

export const causes22to24: CauseContent[] = [
  {
    slug: "pan-sentient-ethics",
    whyItMatters: [
      "Our power now reaches every mind on the planet — and soon, minds we build and minds we may meet. An ethics sized for one species, applied by a civilization with this much leverage, is not a moral position. It is a rounding error waiting to compound.",
      "Expand the moral circle to all forms of consciousness — animal, digital, alien — and our values finally scale with our capabilities. A civilization that works for all minds, not just human ones.",
    ],
    endState:
      "Moral standing tracks sentience, not species. The suffering we cause is counted wherever it occurs — farm, server, or elsewhere — and designed out rather than ignored. When new kinds of minds arrive, the framework to treat them justly already exists, because we built it before we needed it.",
    history: [
      {
        label: "The Old Constraint",
        body: "The moral circle ended at the tribe, then the nation, then the species — each boundary defended as obvious until it wasn't.",
      },
      {
        label: "The Turning Point",
        body: "Animal-welfare science and the study of consciousness made sentience measurable enough to argue about — and to legislate.",
        sources: [
          { name: "Cambridge Declaration on Consciousness (2012)", url: "https://fcmconference.org/img/CambridgeDeclarationOnConsciousness.pdf" },
          { name: "Birch et al. — Dimensions of Animal Consciousness (Trends in Cognitive Sciences, 2020)", url: "https://doi.org/10.1016/j.tics.2020.07.007" },
        ],
      },
      {
        label: "The Opening",
        body: "Artificial minds and the search for life beyond Earth force the question forward: an ethics for all consciousness, drafted in advance.",
      },
    ],
    organizations: [
      { name: "Humane World for Animals", focus: "One of the largest animal-protection nonprofits (formerly the Humane Society of the United States), campaigning to end suffering across farming, research, and wildlife.", url: "https://www.humaneworld.org" },
      { name: "People for the Ethical Treatment of Animals (PETA)", focus: "A global animal-rights organization advocating that all sentient animals deserve moral consideration.", url: "https://www.peta.org" },
      { name: "The Humane League", focus: "A nonprofit securing corporate and legislative reforms to reduce the suffering of farmed animals at scale.", url: "https://thehumaneleague.org" },
      { name: "Mercy For Animals", focus: "An international nonprofit working to end industrial animal agriculture and expand protections for farmed animals.", url: "https://mercyforanimals.org" },
      { name: "Compassion in World Farming", focus: "A campaigning organization advancing farm-animal welfare and challenging factory farming worldwide.", url: "https://www.ciwf.org.uk" },
      { name: "Royal Society for the Prevention of Cruelty to Animals (RSPCA)", focus: "The world's oldest animal-welfare charity, setting welfare standards and enforcing anti-cruelty law.", url: "https://www.rspca.org.uk" },
      { name: "Animal Welfare Institute", focus: "A nonprofit advancing legal and policy protections against the suffering of animals in farming, labs, and the wild.", url: "https://awionline.org" },
      { name: "World Animal Protection", focus: "An international nonprofit moving governments and companies to recognize animals as sentient and protect them accordingly.", url: "https://www.worldanimalprotection.org" },
      { name: "Sentience Institute", focus: "A think tank researching how to expand humanity's moral circle to all sentient beings, including future digital minds.", url: "https://www.sentienceinstitute.org" },
      { name: "Center on Long-Term Risk", focus: "A research organization working to reduce risks of large-scale suffering, including among artificial minds.", url: "https://longtermrisk.org" },
      { name: "Animal Ethics", focus: "A nonprofit promoting the ethical consideration of all sentient beings, including wild animals and their suffering.", url: "https://www.animal-ethics.org" },
      { name: "The Nonhuman Rights Project", focus: "A nonprofit litigating for the legal rights and personhood of nonhuman animals.", url: "https://www.nonhumanrights.org" },
      { name: "Wild Animal Initiative", focus: "A research nonprofit studying how to understand and improve the welfare of animals living in the wild.", url: "https://www.wildanimalinitiative.org" },
      { name: "Faunalytics", focus: "A nonprofit providing research and data to help advocates reduce animal suffering effectively.", url: "https://faunalytics.org" },
      { name: "Animal Charity Evaluators", focus: "An organization identifying and recommending the most effective ways to help animals and expand their moral standing.", url: "https://animalcharityevaluators.org" },
      { name: "Machine Intelligence Research Institute", focus: "A research institute working on the safe and ethical development of advanced artificial minds.", url: "https://intelligence.org" },
      { name: "NYU Center for Mind, Ethics, and Policy", focus: "A research center studying the consciousness, sentience, and moral status of animals and artificial minds.", url: "https://nonhumanminds.org" },
      { name: "Cambridge Centre for the Study of Existential Risk", focus: "A research center examining threats to and the moral consideration of present and future minds.", url: "https://www.cser.ac.uk" },
      { name: "Effective Altruism Funds — Animal Welfare Fund", focus: "A grantmaking fund directing resources to the highest-impact work reducing animal suffering.", url: "https://funds.effectivealtruism.org" },
      { name: "The Good Food Institute", focus: "A nonprofit advancing alternative proteins to displace the industrial farming that causes mass animal suffering.", url: "https://gfi.org" },
      { name: "Cruelty Free International", focus: "A nonprofit campaigning globally to end animal testing and extend protections to sentient animals in research.", url: "https://crueltyfreeinternational.org" },
    ],
    scenario: {
      horizon: "2050–2080",
      destination:
        "Legal and institutional frameworks assess moral standing by capacity to suffer rather than species membership, so farmed animals, wild animals, and artificial systems judged sentient all fall inside enforceable protection.",
      convergences: [
        { name: "Consciousness science", role: "Measurable markers of sentience give the moral circle a defensible boundary rather than an intuition." },
        { name: "Animal-welfare law", role: "Sentience recognition in statutes, such as the UK's 2022 Animal Welfare (Sentience) Act, turns philosophy into enforceable standing." },
        { name: "Cultured and alternative proteins", role: "Displacing industrial animal agriculture removes the largest source of engineered suffering from the economy." },
        { name: "AI welfare research", role: "Early work on the moral status of digital minds prepares a framework before artificial sentience is plausibly present." },
        { name: "Precision animal monitoring", role: "Sensors and behavioral analytics make individual welfare states observable at scale, so suffering can be counted." },
        { name: "Strategic litigation", role: "Personhood and rights cases test where legal standing extends and set precedents that widen it." },
      ],
      milestones: [
        { period: "2026–2032", event: "More jurisdictions codify animal sentience in law and tighten welfare standards for farming and research." },
        { period: "2032–2045", event: "If cost curves hold, alternative proteins approach price and taste parity in major markets, beginning to shrink the scale of industrial animal suffering." },
        { period: "2045–2065", event: "Formal criteria for assessing machine sentience enter policy debate as capable AI systems proliferate." },
        { period: "2065–2080", event: "Moral and legal standing is routinely assigned by sentience across biological and artificial minds." },
      ],
      sources: [
        { name: "Cambridge Declaration on Consciousness (2012)", url: "https://fcmconference.org/img/CambridgeDeclarationOnConsciousness.pdf" },
        { name: "Birch et al. — Dimensions of Animal Consciousness (Trends in Cognitive Sciences, 2020)", url: "https://doi.org/10.1016/j.tics.2020.07.007" },
        { name: "LSE Philosophy — Research", url: "https://www.lse.ac.uk/philosophy/research" },
      ],
    },
    stakes: {
      win: "Our moral reach finally matches our technological reach, so the immense leverage of an advanced civilization stops compounding suffering across farms, servers, and worlds we have yet to encounter.",
      lose: "We carry a species-scale ethics into a post-human era, industrializing suffering among animals and any new minds we create because we never built the framework to recognize them.",
      wildcard: "Credible evidence of sentience in an AI system, or contact with nonhuman intelligence, could force the entire question into law overnight.",
      sources: [
        { name: "Cambridge Declaration on Consciousness (2012)", url: "https://fcmconference.org/img/CambridgeDeclarationOnConsciousness.pdf" },
        { name: "New York Declaration on Animal Consciousness (2024)", url: "https://sites.google.com/nyu.edu/nydeclaration/declaration" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The moral circle is widening in argument and, slowly, in law; the general framework is still philosophy in progress.",
      metrics: [
        { label: "Frameworks under development", value: "—" },
        { label: "Jurisdictions with sentience statutes", value: "—" },
      ],
    },
    getInvolved:
      "Owning Pan-Sentient Ethics means funding the research and drafting the frameworks that make our values as large as our reach. Which of The 37 is yours?",
    readAs: "The Bond widens past the human: connection, extended to every mind that can feel.",
  },
  {
    slug: "the-new-mythos",
    whyItMatters: [
      "The old stories held civilizations together — and they were written for mortal, earthbound, scarcity-shaped lives. A species becoming post-scarcity, multi-planetary, and possibly immortal is walking into its largest chapter with no narrative to hold it.",
      "Craft the new stories, rituals, and shared meanings deliberately, and cohesion survives the transition. Without a mythos, abundance fragments into nihilism. With one, it becomes a civilization.",
    ],
    endState:
      "The species shares stories big enough for its situation: rituals that mark a life measured in centuries, narratives that bind Earth and its settlements into one people, a sense of the sacred that needs no denial of science. Meaning-making keeps pace with world-making.",
    history: [
      {
        label: "The Old Constraint",
        body: "Myth grew slowly and locally, fitted to short lives and small worlds — and modernity dissolved it faster than anything replaced it.",
      },
      {
        label: "The Turning Point",
        body: "The meaning crisis became visible: secular abundance arrived, and the hunger for shared story and ritual did not go away.",
        sources: [
          { name: "Long Now Foundation", url: "https://longnow.org" },
          { name: "Gottschall — The Storytelling Animal (2012)", url: "https://www.harpercollins.com/products/the-storytelling-animal-jonathan-gottschall" },
        ],
      },
      {
        label: "The Opening",
        body: "Artists, philosophers, and communities have begun consciously composing narratives sized to an exponential, spacefaring species.",
      },
    ],
    organizations: [
      { name: "Long Now Foundation", focus: "A nonprofit fostering long-term thinking and cultural narratives spanning millennia.", url: "https://longnow.org" },
      { name: "Joseph Campbell Foundation", focus: "A nonprofit preserving and extending the study of myth and its role in human meaning-making.", url: "https://www.jcf.org" },
      { name: "The Center for Action and Contemplation", focus: "An educational nonprofit developing contemplative frameworks of meaning for a modern, pluralistic world.", url: "https://cac.org" },
      { name: "Santa Fe Institute", focus: "A research institute studying how shared narratives and meaning emerge in complex human systems.", url: "https://www.santafe.edu" },
      { name: "Templeton Foundation", focus: "A grantmaking foundation funding research on meaning, purpose, and the big questions of human existence.", url: "https://www.templeton.org" },
      { name: "The Institute of Noetic Sciences", focus: "A research nonprofit exploring consciousness, meaning, and shared frameworks of human experience.", url: "https://noetic.org" },
      { name: "Aspen Institute", focus: "A nonprofit convening leaders to shape values and shared narratives for society's future.", url: "https://www.aspeninstitute.org" },
      { name: "The School of Life", focus: "An educational organization producing philosophy, ritual, and secular meaning-making resources for modern life.", url: "https://www.theschooloflife.com" },
      { name: "Sunday Assembly", focus: "A global movement building secular congregations and rituals of belonging without doctrine.", url: "https://www.sundayassembly.org" },
      { name: "The Sacred Design Lab", focus: "A soul-centered research and design lab creating rituals and communities of meaning for a secular age.", url: "https://sacred.design" },
      { name: "On Being Project", focus: "A media and public-life initiative exploring meaning, spirituality, and the human questions behind culture.", url: "https://onbeing.org" },
      { name: "Center for Humans and Nature", focus: "A nonprofit developing narratives and philosophy connecting people to one another and to the wider world.", url: "https://humansandnature.org" },
      { name: "Emergence Magazine", focus: "A publication crafting stories exploring culture, ecology, and spirituality for a changing planet.", url: "https://emergencemagazine.org" },
      { name: "The Long Time Project", focus: "An organization cultivating art and story that expand humanity's sense of time and responsibility.", url: "https://www.thelongtimeproject.org" },
      { name: "Museum of the Future", focus: "A Dubai institution imagining and dramatizing shared narratives of humanity's coming eras.", url: "https://museumofthefuture.ae" },
      { name: "The Consilience Project", focus: "A nonprofit working on cultural sense-making and shared understanding for a functioning civilization.", url: "https://consilienceproject.org" },
      { name: "Reboot", focus: "An arts-and-culture nonprofit reimagining tradition, ritual, and story for contemporary communities seeking meaning.", url: "https://rebooting.com" },
      { name: "Burning Man Project", focus: "A nonprofit stewarding large-scale participatory ritual, art, and community meaning-making.", url: "https://burningman.org" },
      { name: "Cultural Survival", focus: "A nonprofit defending Indigenous peoples' rights and sustaining the living traditions that carry shared human meaning.", url: "https://www.culturalsurvival.org" },
      { name: "Berggruen Institute", focus: "A global network of thinkers developing the ideas and narratives humanity needs for its long-term future.", url: "https://berggruen.org" },
      { name: "Institute for the Future", focus: "A research nonprofit helping societies envision and prepare narratives for coming decades.", url: "https://www.iftf.org" },
    ],
    scenario: {
      horizon: "2060–2100",
      destination:
        "A shared framework of stories, rituals, and meaning holds across a long-lived, multi-planetary population, marking lives stretched well past today's spans and binding Earth and its settlements into one people without demanding a rejection of science.",
      convergences: [
        { name: "Longevity science", role: "If healthy lifespans stretch well beyond today's limits, the mortal rhythms that older myths and rituals were built around begin to loosen." },
        { name: "Space settlement", role: "Off-world communities need narratives that bind dispersed populations into a single civilization." },
        { name: "Secularization", role: "The retreat of inherited religion leaves a meaning vacuum that deliberate story and ritual must fill." },
        { name: "Immersive media", role: "Games, film, and virtual worlds become the medium through which new shared myths are authored and inhabited." },
        { name: "Network culture", role: "Global platforms let communities compose, test, and spread rituals and narratives faster than any prior era." },
        { name: "Meaning-crisis research", role: "Study of purpose, belonging, and sense-making supplies the evidence base for what actually holds people together." },
      ],
      milestones: [
        { period: "2026–2035", event: "Secular congregations, ritual designers, and long-now narrative projects move from fringe experiments toward mainstream practice." },
        { period: "2035–2055", event: "If longevity gains and durable settlements arrive, longer life stories and cross-world identity become concrete cultural problems." },
        { period: "2055–2080", event: "A generation raised in immersive worlds authors shared myths native to an exponential, spacefaring species." },
        { period: "2080–2100", event: "Meaning-making broadly keeps pace with world-making, giving abundance a story that holds." },
      ],
      sources: [
        { name: "Joseph Campbell Foundation", url: "https://www.jcf.org" },
        { name: "Gottschall — The Storytelling Animal (HarperCollins, 2012)", url: "https://www.harpercollins.com/products/the-storytelling-animal-jonathan-gottschall" },
        { name: "Long Now Foundation", url: "https://longnow.org" },
      ],
    },
    stakes: {
      win: "A civilization crossing into post-scarcity, long life, and other worlds keeps a coherent shared story, so cohesion and purpose survive the largest transition in human history.",
      lose: "Abundance arrives with no narrative to hold it, and the meaning crisis deepens into fragmentation and nihilism precisely when the stakes are highest.",
      wildcard: "A single work of art, ritual, or platform could seed a shared mythos far faster than any deliberate program, for better or worse.",
      sources: [
        { name: "Pew Research Center — Religion & Public Life", url: "https://www.pewresearch.org/religion/" },
        { name: "Long Now Foundation", url: "https://longnow.org" },
      ],
    },
    progress: {
      stage: "Frontier Research",
      statusLine: "The need is named and the fragments are appearing; a mythos that actually holds at scale has yet to cohere.",
      metrics: [
        { label: "Narrative projects tracked", value: "—" },
        { label: "Communities practicing new ritual", value: "—" },
      ],
    },
    getInvolved:
      "Owning The New Mythos means composing, funding, and living the stories that hold an exponential species together. Which of The 37 is yours?",
    readAs: "The Bond's keystone: belonging and ethics, bound into a story worth belonging to.",
  },
  {
    slug: "infinite-creative-expression",
    whyItMatters: [
      "Almost every symphony, novel, and invention that could have existed died inside someone who lacked the tools, the training, or the time. Technical barriers have always stood between the inner world and its expression — and talent behind a barrier is talent lost.",
      "Democratize creation so radically that anyone can externalize any thought in any medium, and the species' creative output stops being sampled from the trained few and starts being drawn from everyone.",
    ],
    endState:
      "The distance from imagination to artifact approaches zero. A farmer scores a film; a child builds a world; craft becomes a choice of depth, not a toll gate. Every person is fluent in making — and the culture is fed by a billion voices that used to be silent.",
    history: [
      {
        label: "The Old Constraint",
        body: "Expression demanded years of technique and costly tools — so most inner worlds stayed inner, permanently.",
      },
      {
        label: "The Turning Point",
        body: "Digital tools collapsed the cost of making and sharing, letting amateurs reach audiences once reserved for institutions.",
        sources: [
          { name: "UNESCO — Culture 2030 Indicators", url: "https://www.unesco.org/en/articles/culture-2030-indicators" },
          { name: "UNCTAD — Creative Economy Programme", url: "https://unctad.org/creativeconomy" },
        ],
      },
      {
        label: "The Opening",
        body: "Generative tools are removing the final barrier — technique itself — leaving intention as the only prerequisite for creation.",
      },
    ],
    organizations: [
      { name: "Adobe", focus: "A software company building widely used creative tools spanning image, video, audio, and design.", url: "https://www.adobe.com" },
      { name: "YouTube", focus: "The world's largest video platform, enabling anyone to create and distribute media to a global audience.", url: "https://www.youtube.com" },
      { name: "OpenAI", focus: "An AI lab building generative tools that let people create images, text, and audio from plain intention.", url: "https://openai.com" },
      { name: "Canva", focus: "A design platform lowering the barrier to visual creation for hundreds of millions of non-designers.", url: "https://www.canva.com" },
      { name: "Blender Foundation", focus: "A nonprofit developing Blender, a free and open-source 3D creation suite used worldwide.", url: "https://www.blender.org" },
      { name: "TikTok", focus: "A short-video platform whose creation tools have made video-making accessible to a billion people.", url: "https://www.tiktok.com" },
      { name: "Roblox", focus: "A platform empowering millions of users, including children, to build and publish their own interactive worlds.", url: "https://www.roblox.com" },
      { name: "Epic Games", focus: "The maker of Unreal Engine and Fortnite, distributing professional-grade creation tools broadly.", url: "https://www.epicgames.com" },
      { name: "Unity Technologies", focus: "A real-time development platform enabling creators to build games, films, and interactive experiences.", url: "https://unity.com" },
      { name: "Stability AI", focus: "An AI company releasing open generative models that let anyone produce images and media.", url: "https://stability.ai" },
      { name: "GarageBand / Apple", focus: "A software maker whose free music tools let anyone compose and record without technical training.", url: "https://www.apple.com" },
      { name: "Ableton", focus: "A music-software company building tools that make electronic music production widely accessible.", url: "https://www.ableton.com" },
      { name: "Substack", focus: "A publishing platform letting any writer reach and monetize an audience without gatekeepers.", url: "https://substack.com" },
      { name: "Wikimedia Foundation", focus: "A nonprofit enabling mass collaborative creation and sharing of the world's knowledge.", url: "https://wikimediafoundation.org" },
      { name: "Khan Academy", focus: "A nonprofit teaching the skills that let more people become fluent creators across disciplines.", url: "https://www.khanacademy.org" },
      { name: "Processing Foundation", focus: "A nonprofit promoting software literacy and accessible creative coding tools for artists and beginners.", url: "https://processingfoundation.org" },
      { name: "GIMP / GNOME Foundation", focus: "Stewards of free, open-source image-editing software removing cost barriers to visual creation.", url: "https://www.gimp.org" },
      { name: "Krita Foundation", focus: "A nonprofit developing free, open-source digital painting software for artists worldwide.", url: "https://krita.org" },
      { name: "Audacity / Muse Group", focus: "Maintainers of free, open-source audio-editing software used by creators globally.", url: "https://www.audacityteam.org" },
      { name: "Figma", focus: "A collaborative design platform lowering the barrier to interface and visual design for anyone.", url: "https://www.figma.com" },
      { name: "Scratch Foundation", focus: "A nonprofit whose visual programming tools teach children to create games, stories, and animations.", url: "https://www.scratchfoundation.org" },
    ],
    scenario: {
      horizon: "2030–2045",
      destination:
        "The distance from imagination to finished artifact approaches zero, so anyone can compose music, build worlds, or produce film in any medium by describing intent, and craft becomes a chosen depth rather than a barrier to entry.",
      convergences: [
        { name: "Generative models", role: "Text, image, audio, and video generation remove technique as the prerequisite for making, leaving intention." },
        { name: "Real-time engines", role: "Tools like Unreal and Unity let non-specialists build interactive worlds at professional fidelity." },
        { name: "Open-source creative software", role: "Free tools such as Blender, Krita, and Audacity keep the cost of production near zero." },
        { name: "Cloud and mobile compute", role: "Powerful creation runs on ordinary devices, putting studio capability in nearly every hand." },
        { name: "Distribution platforms", role: "YouTube, TikTok, Substack, and Roblox let any creation reach an audience without gatekeepers." },
        { name: "Multimodal interfaces", role: "Voice and natural-language control let people direct complex tools by speaking rather than mastering them." },
      ],
      milestones: [
        { period: "2026–2030", event: "Generative tools, already embedded in mainstream creative software, mature and collapse production time across text, image, audio, and video." },
        { period: "2030–2037", event: "Real-time, describe-it-and-build workflows let non-professionals produce film, games, and music end to end." },
        { period: "2037–2045", event: "Creative fluency spreads across most media and most people, and culture is fed by voices once kept silent by cost or training." },
      ],
      sources: [
        { name: "UNCTAD — Creative Economy Programme", url: "https://unctad.org/creativeconomy" },
        { name: "UNESCO — Culture 2030 Indicators", url: "https://www.unesco.org/en/articles/culture-2030-indicators" },
        { name: "Reuters Institute — Digital News Report", url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024" },
      ],
    },
    stakes: {
      win: "The species' creative output stops being sampled from the trained few and is drawn from everyone, unlocking a cultural explosion from a billion people who could never before externalize what they imagined.",
      lose: "The tools consolidate behind a handful of platforms and paywalls, and creation stays a privilege while most inner worlds remain permanently inner.",
      wildcard: "Fully agentic creative systems could compress imagination-to-artifact to an instant, or drown human authorship in machine-made volume.",
      sources: [
        { name: "WIPO — Global Innovation Index 2023", url: "https://www.wipo.int/global_innovation_index/en/" },
        { name: "UNESCO — Culture 2030 Indicators", url: "https://www.unesco.org/en/articles/culture-2030-indicators" },
      ],
    },
    progress: {
      stage: "Scaling",
      statusLine: "Creation tools are democratizing at speed; universal creative fluency — every medium, every person — is the unfinished half.",
      metrics: [
        { label: "Creators active worldwide", value: "—" },
        { label: "Media accessible without technical barrier", value: "—" },
      ],
    },
    getInvolved:
      "Owning Infinite Creative Expression means building and funding the tools and cultures that let every inner world reach the outer one. Which of The 37 is yours?",
    readAs: "Survival solved, the atlas reaches the Canvas: creation as the point of the whole machine.",
  },
];
