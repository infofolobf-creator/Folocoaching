import { ServiceItem, TrainingProgram, Testimonial, DiagnosticQuestion } from '../types';

export const COMPANY_INFO = {
  name: 'FOLO Coaching & Formation',
  nativeName: 'Fɔlɔ',
  slogan: "Révélez le potentiel de vos équipes et sécurisez l'exécution quotidienne",
  phone: '+226 04 58 11 98',
  phoneClean: '+22604581198',
  email: 'infofolo.bf@gmail.com',
  address: 'Secteur 24, Bobo-Dioulasso, Burkina Faso',
  subRegion: "Burkina Faso & Afrique de l'Ouest",
  whatsappLink: 'https://wa.me/22604581198?text=Bonjour%20FOLO%20Coaching,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.',
  hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 09h00 - 13h00',
  stats: [
    { value: '500+', label: 'Professionnels et managers formés', detail: 'À travers le Burkina Faso et la sous-région' },
    { value: '45+', label: 'Organisations accompagnées', detail: 'PME, institutions publiques, ONGs et startups' },
    { value: '98%', label: 'Taux de satisfaction global', detail: 'Mesuré sur nos cycles d’immersion' },
    { value: '100%', label: 'Méthode terrain & actionnable', detail: 'Applicable dès le lendemain en entreprise' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'coaching-equipe',
    title: "Coaching d'Équipe & Cohésion",
    subtitle: "Aligner les talents, dissoudre les silos et catalyser l'intelligence collective",
    description: "Un accompagnement immersif conçu pour restaurer la confiance, clarifier les rôles et transformer un groupe d'individus en une équipe unie et performante.",
    iconName: 'Users',
    targetAudience: 'Comités de direction, équipes projet, services en restructuration',
    durationExample: 'Parcours de 3 à 6 mois ou ateliers intensifs de 2 jours',
    keyBenefits: [
      "Résolution constructive des tensions et des non-dits",
      "Alignement clair sur la vision et les objectifs opérationnels",
      "Amélioration mesurable de la collaboration transversale",
      "Engagement renforcé de chaque membre de l'équipe"
    ],
    modules: [
      "Diagnostic systémique du fonctionnement de l'équipe",
      "Séminaire résidentiel de cohésion et d'intelligence collective",
      "Ateliers de co-développement managérial",
      "Suivi opérationnel des engagements pris en séance"
    ],
  },
  {
    id: 'leadership-operationnel',
    title: 'Leadership Opérationnel & Agile',
    subtitle: 'Développer une posture de leader affirmée, humaine et orientée résultats',
    description: 'Aider les managers et dirigeants à passer du simple rôle de superviseur à celui de facilitateur inspirant, capable de décider avec lucidité et de mobiliser leurs équipes.',
    iconName: 'Compass',
    targetAudience: 'Directeurs, managers d’équipes, cadres intermédiaires, chefs de projet',
    durationExample: 'Cycles de 4 à 8 séances de coaching individuel ou de groupe',
    keyBenefits: [
      "Maîtrise de la délégation et de la responsabilisation",
      "Gestion efficace de la pression et des imprévus",
      "Développement de l'écoute active et du feedback constructif",
      "Capacité à motiver et fédérer sans autoritarisme stérile"
    ],
    modules: [
      "Bilan de posture et cartographie des styles de leadership",
      "Entraînements intensifs aux situations managériales complexes",
      "Prise de parole impactante et conduite de réunions dynamiques",
      "Ancrage d'un plan de développement managérial individuel"
    ],
  },
  {
    id: 'formations-soft-skills',
    title: 'Formations Pratiques & Soft Skills',
    subtitle: 'Les compétences humaines clés pour l’efficacité et la performance durable',
    description: 'Des modules de formation pragmatiques, centrés sur des mises en situation réelles pour débloquer le potentiel relationnel et organisationnel de vos collaborateurs.',
    iconName: 'Award',
    targetAudience: 'Collaborateurs tous niveaux, commerciaux, agents de service public, RH',
    durationExample: 'Modules modulables de 1 à 3 jours en présentiel ou hybride',
    keyBenefits: [
      "Communication interpersonnelle limpide et bienveillante",
      "Gestion sereine du temps, des urgences et des priorités",
      "Prévention de l'épuisement professionnel et du stress",
      "Amélioration sensible de la relation client et usagers"
    ],
    modules: [
      "Communication stratégique et désamorçage des conflits",
      "Gestion du temps à l'ère du numérique et des interruptions",
      "Intelligence émotionnelle au travail",
      "Art du pitch et négociation commerciale gagnant-gagnant"
    ],
  },
  {
    id: 'mentorat-entrepreneurs',
    title: 'Mentorat & Accompagnement Entrepreneurs',
    subtitle: 'Sécuriser le démarrage, la structuration et la croissance de votre entreprise',
    description: 'Un appui stratégique et opérationnel dédié aux fondateurs de PME et porteurs de projet pour surmonter le sentiment de solitude, structurer leur offre et exécuter avec rigueur.',
    iconName: 'Rocket',
    targetAudience: 'Fondateurs de startups, dirigeants de PME, repreneurs d’affaires',
    durationExample: 'Programme de mentorat continu de 6 à 12 mois',
    keyBenefits: [
      "Clarification du modèle économique et de la proposition de valeur",
      "Structuration des processus internes et du recrutement",
      "Pilotage de la trésorerie et tableau de bord de gestion",
      "Mise en relation avec un réseau d’experts et de partenaires"
    ],
    modules: [
      "Audit stratégique et priorisation des chantiers vitaux",
      "Optimisation de la stratégie commerciale et de vente terrain",
      "Mise en place de rituels d'exécution hebdomadaires",
      "Revues stratégiques mensuelles avec un mentor chevronné"
    ],
  },
];

export const TRAINING_CATALOG: TrainingProgram[] = [
  {
    id: 'tr-01',
    title: 'Leadership de Proximité : Fédérer et Motiver au Quotidien',
    category: 'leadership',
    duration: '2 jours (16 heures)',
    level: 'Fondamentaux',
    format: 'Présentiel',
    shortDesc: 'Acquérir les réflexes essentiels du manager moderne : fixer des objectifs motivants, conduire des entretiens 1-to-1 et gérer les baisses de régime.',
    objectives: [
      'Adopter la posture de manager-coach',
      'Maîtriser la matrice de délégation en fonction des profils',
      'Réaliser des feedbacks réguliers qui déclenchent l’action',
      'Construire une dynamique de confiance au sein de son unité'
    ],
    targetAudience: 'Nouveaux managers, chefs d’équipe, chefs d’atelier, superviseurs',
    nextSession: '18 - 19 Octobre 2026',
    spotsLeft: 4,
  },
  {
    id: 'tr-02',
    title: 'Communication Stratégique & Gestion Constructive des Conflits',
    category: 'soft-skills',
    duration: '3 jours (24 heures)',
    level: 'Avancé',
    format: 'Intra-entreprise',
    shortDesc: 'Transformer les tensions en opportunités de collaboration grâce aux techniques éprouvées de la communication non-violente et de la médiation.',
    objectives: [
      'Identifier les signaux faibles de discorde avant l’embrasement',
      'Séparer les faits objectifs des jugements de valeur',
      'Mener une médiation sereine entre deux collaborateurs',
      'Instaurer une culture du dialogue franc et respectueux'
    ],
    targetAudience: 'Responsables RH, managers de proximité, directeurs de département',
    nextSession: '04 - 06 Novembre 2026',
    spotsLeft: 6,
  },
  {
    id: 'tr-03',
    title: 'Intelligence Collective & Rituels d’Exécution Haute Performance',
    category: 'cohesion',
    duration: '2 jours (14 heures)',
    level: 'Avancé',
    format: 'Présentiel',
    shortDesc: 'Organiser des réunions courtes, productives et orientées action, et animer des séances de co-résolution de problèmes en équipe.',
    objectives: [
      'Bannir la réunionite stérile grâce aux protocoles agiles',
      'Utiliser les méthodes de créativité collective (World Café, Co-développement)',
      'Définir des indicateurs de progrès visibles et partagés',
      'Renforcer le sentiment d’appartenance et la solidarité'
    ],
    targetAudience: 'Équipes projet, cadres dirigeants, chefs de département',
    nextSession: '25 - 26 Novembre 2026',
    spotsLeft: 8,
  },
  {
    id: 'tr-04',
    title: 'Passer de l’Artisan au Chef d’Entreprise : Piloter et Développer sa PME',
    category: 'entrepreneuriat',
    duration: '4 jours (séparés en 2 modules)',
    level: 'Dirigeants',
    format: 'Hybride',
    shortDesc: 'Sortir de l’opérationnel permanent pour structurer son organisation, sécuriser sa marge et construire une équipe autonome.',
    objectives: [
      'Mettre en place des fiches de poste et déléguer sans angoisse',
      'Construire un tableau de bord commercial et financier simple',
      'Clarifier le positionnement concurrentiel sur le marché ouest-africain',
      'Manager avec vision et rigueur budgétaire'
    ],
    targetAudience: 'Chefs d’entreprise, fondateurs de PME, artisans en expansion',
    nextSession: '08 - 11 Décembre 2026',
    spotsLeft: 5,
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Diagnostic Terrain & Écoute',
    description: "Nous ne croyons pas aux solutions préfabriquées. Nous commençons toujours par des entretiens d'immersion avec la direction et les collaborateurs pour cerner les vrais freins opérationnels.",
  },
  {
    step: '02',
    title: 'Architecture Sur-Mesure',
    description: "Co-construction du plan d'action : définition précise des indicateurs de réussite, sélection des outils adaptés à votre culture d'entreprise et planification réaliste des interventions.",
  },
  {
    step: '03',
    title: 'Immersion Pratique & Ateliers',
    description: "Des séances vivantes, basées sur des cas vécus, des jeux de rôle et du coaching direct. 80% de pratique et 20% de concepts pour ancrer les réflexes immédiatement.",
  },
  {
    step: '04',
    title: 'Mesure d’Impact & Pérennisation',
    description: "Bilan post-intervention à 30 et 90 jours pour évaluer les changements réels observés sur le terrain et sécuriser les acquis à long terme.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Idrissa Ouédraogo',
    role: 'Directeur Général',
    organization: 'Société Agro-industrielle',
    location: 'Bobo-Dioulasso, Burkina Faso',
    content: "L'intervention de FOLO a transformé notre comité de direction. Les querelles d'ego et les non-dits ont cédé la place à une coordination fluide et un focus absolu sur les objectifs de production. Un investissement rentabilisé en moins de 3 mois.",
    metric: '+35% de productivité inter-services',
  },
  {
    id: 't-2',
    name: 'Fatoumata Traoré',
    role: 'Responsable des Ressources Humaines',
    organization: 'Institution Financière Régionale',
    location: 'Ouagadougou & Bobo',
    content: "Ce qui distingue FOLO Coaching, c'est leur capacité à toucher au cœur des réalités africaines en entreprise. Pas de théorie déconnectée : nos managers de proximité appliquent les méthodes de feedback chaque semaine avec enthousiasme.",
    metric: '92% d’engagement collaborateur',
  },
  {
    id: 't-3',
    name: 'Moussa Sanon',
    role: 'Fondateur & Promoteur',
    organization: 'Logistique & Transport Sahel',
    location: 'Burkina Faso',
    content: "En tant qu'entrepreneur, j'étais étouffé par le micro-management. Grâce au mentorat FOLO, j'ai structuré mes équipes, appris à déléguer et retrouvé du temps pour signer de nouveaux contrats stratégiques.",
    metric: 'Temps dirigeant libéré : 15h / semaine',
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: "Quelle est la dynamique actuelle au sein de votre équipe ou organisation ?",
    description: "Identifiez le climat relationnel dominant dans vos équipes quotidiennes.",
    options: [
      {
        label: "Tensions visibles et silos entre départements",
        description: "Manque d'entraide, communication saccadée, conflits larvés.",
        categoryScore: 'cohesion',
        recommendedService: "Coaching d'Équipe & Cohésion",
      },
      {
        label: "Difficultés de délégation et surcharge managériale",
        description: "Les managers sont sous pression et portent tout sur leurs épaules.",
        categoryScore: 'leadership',
        recommendedService: "Leadership Opérationnel & Agile",
      },
      {
        label: "Communication maladroite et gestion du stress compliquée",
        description: "Les équipes peinent à s'exprimer clairement et à prioriser les tâches.",
        categoryScore: 'soft-skills',
        recommendedService: "Formations Pratiques & Soft Skills",
      },
      {
        label: "Flou stratégique ou ralentissement de la croissance",
        description: "Besoin de structurer le modèle économique et professionnaliser la gouvernance.",
        categoryScore: 'entrepreneuriat',
        recommendedService: "Mentorat & Accompagnement Entrepreneurs",
      },
    ],
  },
  {
    id: 2,
    question: "Quel est votre objectif prioritaire pour les 3 prochains mois ?",
    description: "Choisissez le levier qui aura le plus d'impact sur vos résultats.",
    options: [
      {
        label: "Créer un esprit d'équipe fort et aligné sur les résultats",
        description: "Retrouver une atmosphère de travail stimulante et harmonieuse.",
        categoryScore: 'cohesion',
        recommendedService: "Coaching d'Équipe & Cohésion",
      },
      {
        label: "Faire monter nos managers en autonomie et en leadership",
        description: "Former des relais fiables capables de prendre des décisions justes.",
        categoryScore: 'leadership',
        recommendedService: "Leadership Opérationnel & Agile",
      },
      {
        label: "Armer nos collaborateurs avec des compétences relationnelles concrètes",
        description: "Négociation, gestion du temps, accueil client et intelligence émotionnelle.",
        categoryScore: 'soft-skills',
        recommendedService: "Formations Pratiques & Soft Skills",
      },
      {
        label: "Sécuriser les finances, les processus et l'exécution de l'entreprise",
        description: "Passer un cap décisif dans le chiffre d'affaires et la pérennité.",
        categoryScore: 'entrepreneuriat',
        recommendedService: "Mentorat & Accompagnement Entrepreneurs",
      },
    ],
  },
  {
    id: 3,
    question: "Quel format d'intervention correspond le mieux à vos contraintes ?",
    description: "Pour concevoir un dispositif adapté à votre rythme opérationnel.",
    options: [
      {
        label: "Séminaire immersif ou atelier résidentiel (1 à 3 jours)",
        description: "Un temps fort hors du cadre quotidien pour marquer une rupture positive.",
        categoryScore: 'cohesion',
        recommendedService: "Coaching d'Équipe & Cohésion",
      },
      {
        label: "Coaching régulier et progressif (1 séance tous les 15 jours)",
        description: "Idéal pour ancrer les nouvelles habitudes managériales pas à pas.",
        categoryScore: 'leadership',
        recommendedService: "Leadership Opérationnel & Agile",
      },
      {
        label: "Session de formation intra-entreprise ciblée",
        description: "Pour former un groupe homogène directement dans vos locaux.",
        categoryScore: 'soft-skills',
        recommendedService: "Formations Pratiques & Soft Skills",
      },
      {
        label: "Accompagnement individuel et confidentiel du dirigeant",
        description: "Un tête-à-tête stratégique pour les décisions sensibles.",
        categoryScore: 'entrepreneuriat',
        recommendedService: "Mentorat & Accompagnement Entrepreneurs",
      },
    ],
  },
];
