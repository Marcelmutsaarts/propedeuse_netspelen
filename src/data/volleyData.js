export const volleyStarsLevels = [
  {
    id: 'level1-catch',
    name: 'Level 1: Catch',
    icon: '🤲',
    teamSize: '2 tegen 2',
    netHeight: 'Laag (1.80m)',
    courtSize: '6x4.5 meter',
    mainGoal: 'Vangen en gooien leren',
    keyTechnique: 'Vang-gooi beweging',
    rules: [
      'Bal mag gevangen worden',
      'Maximaal 3 seconden vasthouden',
      'Geen lopen met de bal',
      'Service door onderhands te gooien',
      'Maximaal 3 balcontacten per team'
    ],
    didacticTips: [
      'Focus op oog-hand coördinatie',
      'Stimuleer samenspel',
      'Korte rallys om succesbeleving te creëren',
      'Varieer met verschillende ballen'
    ],
    videos: [
      {
        title: 'Catch technieken - Vangen en Gooien',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: '2:30'
      }
    ]
  },
  {
    id: 'level2-bounce',
    name: 'Level 2: Bounce',
    icon: '⚡',
    teamSize: '2 tegen 2',
    netHeight: 'Middel (2.00m)',
    courtSize: '6x4.5 meter',
    mainGoal: 'Bounce-set techniek leren',
    keyTechnique: 'Bounce-set (stuit-vang-gooi)',
    rules: [
      'Eerste balcontact: bal laten stuiteren',
      'Na stuit mag bal gevangen worden',
      'Maximaal 2 seconden vasthouden',
      'Service: onderhands gooien of slaan',
      'Maximaal 3 balcontacten per team'
    ],
    didacticTips: [
      'Leer timing van de stuit',
      'Focus op positie onder de bal',
      'Gebruik zachte ondergrond voor stuit',
      'Progressief minder vangen toestaan'
    ],
    videos: [
      {
        title: 'Bounce-set uitleg',
        url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
        duration: '3:00'
      }
    ]
  },
  {
    id: 'level3-pass',
    name: 'Level 3: Pass',
    icon: '🏐',
    teamSize: '2 tegen 2',
    netHeight: 'Middel-hoog (2.10m)',
    courtSize: '6x4.5 meter',
    mainGoal: 'Onderarms en bovenhandse pass',
    keyTechnique: 'Pass technieken zonder vangen',
    rules: [
      'Geen vangen meer toegestaan',
      'Onderarms en bovenhands passen',
      'Service: onderhands slaan',
      'Maximaal 3 balcontacten per team',
      'Selfpass is toegestaan'
    ],
    didacticTips: [
      'Start met ballonnen voor langzamer tempo',
      'Focus op techniek boven resultaat',
      'Veel herhaling voor automatisering',
      'Positieve feedback bij goede pogingen'
    ],
    videos: [
      {
        title: 'Pass technieken',
        url: 'https://www.youtube.com/watch?v=3JdWlSF195Y',
        duration: '4:00'
      }
    ]
  },
  {
    id: 'level4-smash',
    name: 'Level 4: Smash',
    icon: '💥',
    teamSize: '3 tegen 3',
    netHeight: 'Hoog (2.20m)',
    courtSize: '9x4.5 meter',
    mainGoal: 'Aanval (smash) introduceren',
    keyTechnique: 'Smash en setup',
    rules: [
      'Vangen alleen bij eerste balcontact toegestaan',
      'Aanval (smash) is toegestaan',
      'Service: bovenhands of onderhands',
      'Maximaal 3 balcontacten per team',
      'Rotatie na punt'
    ],
    didacticTips: [
      'Leer aanloop voor smash',
      'Focus op timing sprong',
      'Oefen setup voor aanval',
      'Introduceer eenvoudige tactieken'
    ],
    videos: [
      {
        title: 'Smash techniek',
        url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
        duration: '3:30'
      }
    ]
  },
  {
    id: 'level5-ultimate',
    name: 'Level 5: Ultimate',
    icon: '🏆',
    teamSize: '3 tegen 3',
    netHeight: 'Officieel (2.24m)',
    courtSize: '9x4.5 meter',
    mainGoal: 'Volledig volleybal',
    keyTechnique: 'Alle volleybaltechnieken',
    rules: [
      'Geen vangen meer toegestaan',
      'Alle volleybaltechnieken toegestaan',
      'Service: bovenhands of onderhands sprong',
      'Maximaal 3 balcontacten per team',
      'Volledige rotatie en positiespel'
    ],
    didacticTips: [
      'Focus op teamtactieken',
      'Leer specialisatie per positie',
      'Introduceer complexe spelpatronen',
      'Wedstrijdgericht trainen'
    ],
    videos: [
      {
        title: 'Ultimate volleybal',
        url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        duration: '5:00'
      }
    ]
  }
]

export const smashballInfo = {
  id: 'smashball',
  name: 'Smashball / SMASH!',
  icon: '🔥',
  ageGroup: '13-18 jaar',
  teamSize: '4 tegen 4',
  netHeight: 'Aangepast aan leeftijd (2.15-2.35m)',
  courtSize: '9x9 meter',
  mainGoal: 'Smash staat centraal - dynamisch en spectaculair',
  keyFeatures: [
    'Elke rally moet met een smash worden afgemaakt',
    'Vangen is toegestaan bij verdediging',
    'Service mag onderhands of bovenhands',
    'Rotatie na elk punt',
    'Kortere sets (eerst bij 15 punten)'
  ],
  rules: [
    'Maximaal 3 balcontacten per team',
    'Na vangen binnen 2 seconden doorspelen',
    'Blok telt niet als balcontact',
    'Service mag niet direct gesmasht worden',
    'Aanval alleen vanaf aanvalszone'
  ],
  didacticTips: [
    'Stimuleer aanvallend spel',
    'Leer verschillende smashtechnieken',
    'Focus op explosiviteit',
    'Varieer met powerplay momenten',
    'Gebruik muziek voor extra energie'
  ],
  progressionPath: [
    'Start met lagere net en groter veld',
    'Introduceer geleidelijk complexere regels',
    'Van 3v3 naar 4v4 naar 6v6',
    'Voeg speciale spelvormen toe'
  ],
  videos: [
    {
      title: 'Smashball introductie',
      url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      duration: '4:00'
    },
    {
      title: 'Smash technieken',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '5:30'
    }
  ]
}

export const quizQuestions = {
  'level1-catch': [
    {
      id: 'q1-1',
      question: 'Hoe lang mag je de bal vasthouden in Level 1?',
      options: ['1 seconde', '2 seconden', '3 seconden', '5 seconden'],
      correctAnswer: 2,
      explanation: 'In Level 1 (Catch) mag je de bal maximaal 3 seconden vasthouden voordat je moet gooien.'
    },
    {
      id: 'q1-2',
      question: 'Hoeveel spelers staan er per team in Level 1?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      explanation: 'Level 1 wordt gespeeld met 2 tegen 2.'
    },
    {
      id: 'q1-3',
      question: 'Mag je lopen met de bal in Level 1?',
      options: ['Ja, onbeperkt', 'Ja, maximaal 3 stappen', 'Nee', 'Alleen bij service'],
      correctAnswer: 2,
      explanation: 'Je mag niet lopen met de bal in Level 1.'
    }
  ],
  'level2-bounce': [
    {
      id: 'q2-1',
      question: 'Wat is de bounce-set techniek?',
      options: [
        'Direct slaan zonder stuit',
        'Stuit - vang - gooi',
        'Twee keer laten stuiteren',
        'Alleen bovenhands spelen'
      ],
      correctAnswer: 1,
      explanation: 'De bounce-set is een techniek waarbij je de bal laat stuiteren, vangt en weer doorgooit.'
    },
    {
      id: 'q2-2',
      question: 'Hoe hoog is het net in Level 2?',
      options: ['1.80m', '2.00m', '2.10m', '2.24m'],
      correctAnswer: 1,
      explanation: 'In Level 2 (Bounce) is het net 2.00 meter hoog.'
    }
  ],
  'level3-pass': [
    {
      id: 'q3-1',
      question: 'Wat mag NIET meer in Level 3?',
      options: ['Onderhands passen', 'Bovenhands passen', 'Vangen', 'Selfpass'],
      correctAnswer: 2,
      explanation: 'In Level 3 (Pass) is vangen niet meer toegestaan, alles moet direct gespeeld worden.'
    },
    {
      id: 'q3-2',
      question: 'Wat is een selfpass?',
      options: [
        'Naar jezelf serveren',
        'De bal twee keer achter elkaar aanraken',
        'Alleen met jezelf oefenen',
        'De bal naar een teamgenoot passen'
      ],
      correctAnswer: 1,
      explanation: 'Een selfpass is wanneer je de bal twee keer achter elkaar aanraakt, wat in Level 3 is toegestaan.'
    }
  ],
  'level4-smash': [
    {
      id: 'q4-1',
      question: 'Hoeveel spelers per team in Level 4?',
      options: ['2', '3', '4', '6'],
      correctAnswer: 1,
      explanation: 'Level 4 (Smash) wordt gespeeld met 3 tegen 3.'
    },
    {
      id: 'q4-2',
      question: 'Wanneer mag je vangen in Level 4?',
      options: [
        'Nooit',
        'Alleen bij eerste balcontact',
        'Bij alle balcontacten',
        'Alleen bij service'
      ],
      correctAnswer: 1,
      explanation: 'In Level 4 mag je alleen bij het eerste balcontact vangen.'
    }
  ],
  'level5-ultimate': [
    {
      id: 'q5-1',
      question: 'Wat is NIET toegestaan in Level 5?',
      options: ['Smash', 'Blok', 'Vangen', 'Bovenhands serveren'],
      correctAnswer: 2,
      explanation: 'In Level 5 (Ultimate) is vangen helemaal niet meer toegestaan.'
    },
    {
      id: 'q5-2',
      question: 'Hoe hoog is het net in Level 5?',
      options: ['2.10m', '2.15m', '2.20m', '2.24m'],
      correctAnswer: 3,
      explanation: 'In Level 5 wordt gespeeld op officiële nethoogte van 2.24 meter.'
    }
  ],
  'smashball': [
    {
      id: 'qs-1',
      question: 'Wat is het hoofddoel van Smashball?',
      options: [
        'Techniek verbeteren',
        'Conditie opbouwen',
        'Smash staat centraal',
        'Verdedigen leren'
      ],
      correctAnswer: 2,
      explanation: 'In Smashball staat de smash centraal - het is een dynamische en spectaculaire spelvariant.'
    },
    {
      id: 'qs-2',
      question: 'Voor welke leeftijdsgroep is Smashball bedoeld?',
      options: ['6-12 jaar', '10-14 jaar', '13-18 jaar', '16+ jaar'],
      correctAnswer: 2,
      explanation: 'Smashball/SMASH! is ontwikkeld voor jongeren van 13-18 jaar.'
    },
    {
      id: 'qs-3',
      question: 'Hoeveel spelers per team bij Smashball?',
      options: ['2', '3', '4', '6'],
      correctAnswer: 2,
      explanation: 'Smashball wordt standaard gespeeld met 4 tegen 4.'
    }
  ]
}