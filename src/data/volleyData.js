export const volleyStarsLevels = [
  {
    id: 'level1-catch',
    name: 'Level 1: Catch Volley',
    icon: '🤲',
    teamSize: '2 tegen 2',
    netHeight: '1.70m',
    fieldDepth: '4.50m',
    fieldWidth: '5.20m (binnenste lijnen badmintonveld)',
    ballWeight: '170 gram',
    ageGroup: '6-8 jaar (richtlijn)',
    mainGoal: 'Gooien en vangen',
    keyTechnique: 'Onderhandse opgooi over het net',
    entryRequirement: 'De spelers kunnen een bal die over het net komt vangen en zijn in staat om die over een 1.70 meter hoog net terug te gooien',
    rules: [
      'Iedere rally start met een onderhandse opgooi over het net vanuit het midden van de eigen helft',
      'Alle ballen moeten met twee handen worden teruggegooid',
      'Lopen met de bal is niet toegestaan',
      'De bal wordt met twee handen gevangen en direct (binnen 3 seconden) teruggegooid naar de overkant',
      'Bovenhands gooien mag, maar alleen met een stootworp van voor het hoofd (geen voetbalinworp)',
      'Overgooien naar een medespeler is toegestaan als de afstand naar het net te groot is',
      'Na een punt start het spel opnieuw vanaf de kant waar de bal is',
      'Een netfout (het aanraken van het net in de aanval) betekent dat het gescoorde punt niet telt'
    ],
    scoring: [
      'De bal op de grond in het veld van de tegenstander valt',
      'De bal via de tegenstander uit gaat',
      'De tegenstander meer dan twee worpen nodig heeft om de bal over het net te gooien'
    ],
    didacticTips: [
      'Focus op gooien en vangen',
      'Balbaan inschatten',
      'Gunstige positie innemen',
      'Reactiesnelheid ontwikkelen',
      'Bewust variëren'
    ],
    methodicalBuild: {
      description: 'Het doel is het ontwikkelen van basale vaardigheden en adaptief vermogen, zoals goede verplaatsing, actiebereidheid en omgaan met variatie.',
      steps: [
        'Begin met simpele rol- en vangspellen om balgevoel te ontwikkelen',
        'Oefen onderhands overgooien over een lage lijn of elastiek',
        'Speel in een klein veld 2-tegen-2 over een laag net',
        'Stimuleer bewegen naar de bal en op tijd onder de bal komen',
        'Leer elkaar aanroepen ("ik heb \'m!")'
      ],
      focus: 'Werpen en vangen: Balbaan inschatten, gunstige positie innemen, reactiesnelheid, bewust variëren'
    },
    commonMistakes: [
      {
        mistake: 'Niet bewegen naar de bal',
        description: 'Kinderen wachten tot de bal komt en strekken hun armen te laat',
        tips: [
          'Gebruik markeringen in het veld',
          'Laat kinderen vóór elke vangst een stap maken naar de bal',
          'Maak er een spelletje van ("kleurentikkertje")'
        ]
      },
      {
        mistake: 'Vangen met gestrekte armen of dicht bij het lichaam',
        description: 'Dit maakt de vangst moeilijker en minder betrouwbaar',
        tips: [
          'Leer de "komkommerschaal": armen iets gebogen, handen naast elkaar, vingers omhoog',
          'Begin zonder net, daarna over een laag net',
          'Oefen eerst met grote, zachte ballen'
        ]
      },
      {
        mistake: 'Onrustig gooien',
        description: 'Ballen worden te hard of te hoog gegooid',
        tips: [
          'Leg uit dat de bal "vriendelijk" moet worden gegooid',
          'Laat ze richten op de borst van de ander',
          'Gebruik lichte ballen of ballonnen',
          'Markeer gooi-zones op de grond'
        ]
      }
    ],
    exercises: [
      {
        name: 'Kleurentikkertje',
        goal: 'Bewegen naar de bal stimuleren',
        setup: 'Verschillende gekleurde kegels in het veld',
        description: 'Roep een kleur, kinderen rennen erheen en vangen daar de bal',
        material: ['Gekleurde kegels', 'Zachte ballen'],
        variations: ['Met verschillende balsoorten', 'In tweetallen', 'Met tijdsdruk']
      },
      {
        name: 'Vriendelijk gooien',
        goal: 'Nauwkeurig en rustig overgooien',
        setup: '2 meter tegenover elkaar',
        description: 'Gooien naar de borst van de partner, zachte boog',
        material: ['Lichte volleyballen', 'Ballonnen'],
        variations: ['Afstand variëren', 'Met hindernissen', 'Op targets gooien']
      },
      {
        name: 'Komkommerschaal',
        goal: 'Juiste vanghouding leren',
        setup: 'Cirkel of rij opstelling',
        description: 'Handen vormen een kom, bal zachtjes toegooien',
        material: ['Zachte ballen', 'Ballonnen'],
        variations: ['Uit verschillende hoeken', 'Met ogen dicht', 'Van verschillende hoogtes']
      },
      {
        name: 'Net-rally',
        goal: '2-tegen-2 spel met vangen',
        setup: 'Klein veld met laag net',
        description: 'Vang en gooi direct terug, maximaal 3 seconden vasthouden',
        material: ['Laag net of elastiek', 'Zachte volleyballen'],
        variations: ['Punten tellen', 'Verschillende veldsizes', 'Met bonusregels']
      }
    ]
  },
  {
    id: 'level2-bounce',
    name: 'Level 2: Bounce Volley',
    icon: '⚡',
    teamSize: '2 tegen 2',
    netHeight: '1.70m',
    fieldDepth: '4.50m',
    fieldWidth: '5.20m (binnenste lijnen badmintonveld)',
    ballWeight: '170 gram',
    ageGroup: '7-9 jaar (richtlijn)',
    mainGoal: 'Samenwerken in aanval, meer variatie in verdediging',
    keyTechnique: 'Bounce-set (tweehandige stuit vlak voor medespeler)',
    entryRequirement: 'Spelers beheersen level 1 effectief en stabiel en hebben daarnaast geoefend met het geven van een bounce-set die ze over een net van 1.70m hoog kunnen spelen',
    rules: [
      'Iedere rally start met een bounce-set en aanval vanuit het midden van de eigen helft',
      'Vangen: De speler die de bal vangt, mag rennen tot vlak voor de medespeler om een bounce-set voor de voeten te geven',
      'De bounce-set: De bounce-set is een tweehandige stuit vlak voor de medespeler (deze mag niet over het net gespeeld worden)',
      'Aanval: De aanvaller mag op een zelf gekozen volleybalachtige wijze de bal over het net spelen: bovenhands, tip, smash, onderarms',
      'Alle ballen moeten na het vangen (binnen 3 seconden) met een bounce-set naar de medespeler gespeeld worden',
      'Nadat de bal is gevangen, mogen de spelers niet samen naar het net rennen, alleen de speler die de bal heeft gevangen mag dat',
      'Na de bounce-set mag de aanvaller wel naar het net bewegen',
      'Blokken van de eerste bal die over het net komt mag niet',
      'Een netfout (het aanraken van het net in de aanval) betekent dat het gescoorde punt niet telt'
    ],
    scoring: [
      'De bal in het veld van de tegenstander op de grond valt (met uitzondering van de bounce-set)',
      'De bal via de tegenstander uit gaat',
      'De tegenstander meer dan twee keer samenspeelt'
    ],
    didacticTips: [
      'Samenwerken in aanval ontwikkelen',
      'Meer variatie in verdediging',
      'Afstemmen op medespeler met de set',
      'Gevarieerd aanvallen met bovenhandse dominantie'
    ],
    methodicalBuild: {
      description: 'Iedere bal die over het net komt wordt gevangen en vervolgens met een bounce-set (stuitbal tegen de grond) opgespeeld voor de medespeler. Na de bounce-set speelt de aanvaller de bal over het net.',
      steps: [
        'Start met individuele bounce-sets: stuit - vang - speel omhoog',
        'Uitbreiden naar tweetallen: één vangt en geeft bounce-set',
        'Partner slaat de bal over het net',
        'Samenwerking ontwikkelen door ritme te vinden',
        'Geleidelijk meer accent op spelen dan vangen'
      ],
      focus: 'Samenwerken in aanval, meer variatie in verdediging afstemmen op medespeler met de set, gevarieerd aanvallen met bovenhandse dominantie'
    },
    commonMistakes: [
      {
        mistake: 'Duimen omhoog of stijve polsen',
        description: 'Bal gaat oncontroleerbaar alle kanten op',
        tips: [
          'Handen vormen een "kom"; vingers gespreid, duimen naar elkaar',
          'Oefen met ballon of zwaardere bal voor gevoel',
          'Polsen blijven soepel, niet verstijven'
        ]
      },
      {
        mistake: 'Te harde stuit of geen stuit',
        description: 'Leerlingen slaan te hard of vergeten de stuit helemaal',
        tips: [
          'Teken een stuitzone op de grond',
          'Begin zonder net en bouw langzaam op',
          'Laat hardop meetellen: "stuit - een - twee - speel"'
        ]
      },
      {
        mistake: 'Niet stilstaan voor de bounce-set',
        description: 'Leerlingen blijven doorlopen tijdens de actie',
        tips: [
          'Introduceer ritme: vang – stap – bounce – set – speel',
          'Laat hardop meetellen om ritme te vinden',
          'Gebruik visuele markeringen voor stopposities'
        ]
      }
    ],
    exercises: [
      {
        name: 'Individuele bounce-set',
        goal: 'Basis bounce-techniek aanleren',
        setup: 'Eigen bal per speler',
        description: 'Bal laten stuiteren, vangen en omhoog spelen',
        material: ['Volleyballen', 'Eventueel hoepels als stuitzone'],
        variations: ['Verschillende stuithoogtes', 'Linker/rechter hand', 'Met wisseling van plaats']
      },
      {
        name: 'Kom-houding oefening',
        goal: 'Juiste handpositie leren',
        setup: 'Zonder bal in opstelling',
        description: 'Handpositie oefenen: kom vormen, duimen naar elkaar',
        material: ['Eventueel tennisballen als hulpmiddel'],
        variations: ['Met ogen dicht', 'Verschillende armhoogtes', 'Met ballon tussen handen']
      },
      {
        name: 'Tweetallen bounce-pass',
        goal: 'Samenspel met bounce-techniek',
        setup: '3 meter tegenover elkaar',
        description: 'A stuiteert en vangt, B speelt de bal over het net',
        material: ['Volleyballen', 'Laag net'],
        variations: ['Rollen omdraaien', 'Afstand variëren', 'Met doelen']
      },
      {
        name: 'Stuitzone-spel',
        goal: 'Nauwkeurigheid van de stuit',
        setup: 'Gekleurde zones op de grond',
        description: 'Bal in bepaalde zone laten stuiteren voor punten',
        material: ['Hoepels of markeerlinten', 'Volleyballen'],
        variations: ['Verschillende kleuren = verschillende punten', 'Als wedstrijd', 'Met timer']
      }
    ]
  },
  {
    id: 'level3-pass',
    name: 'Level 3: Pass Volley',
    icon: '🏐',
    teamSize: '2 tegen 2',
    netHeight: '2.00m',
    fieldDepth: '4.50m',
    fieldWidth: '5.20m (binnenste lijnen badmintonveld)',
    ballWeight: '170 gram',
    ageGroup: '8-10 jaar (richtlijn)',
    mainGoal: 'Pass de bal naar een medespeler die de bal vangt of vang je eigen pass (selfpass)',
    keyTechnique: 'Onderarmse pass en selfpass',
    entryRequirement: 'Spelers beheersen level 2 effectief en zijn daarnaast in staat om een bal die over het net komt onderarms te spelen als selfpass of pass naar een medespeler. Kinderen hebben geoefend met voor de medespeler opgooien',
    rules: [
      'Iedere rally start met het opgooien van de bal voor de medespeler die de bal over het net speelt vanuit het midden van de eigen helft',
      'Pass: De bal die over het net komt moet direct gespeeld worden. Na een onderarmse pass wordt de bal door de medespeler gevangen óf zelf gevangen (selfpass). Wordt de bal bovenhands gespeeld dan moet de medespeler de bal vangen',
      'Vang/opgooi: De balbezitter rent direct na het vangen met de bal naar het net en gooit de bal binnen 3 sec. op voor de medespeler',
      'Aanval: De aanvaller mag op een zelf gekozen volleybalachtige wijze de bal over het net spelen: bovenhands, tip, smash, onderarms',
      'Tijdens de rally moet er drie keer gespeeld worden',
      'Blokken van de eerste bal die over het net komt mag niet'
    ],
    scoring: [
      'De bal in het veld van de tegenstander op de grond valt',
      'De bal via de tegenstander uit gaat',
      'De tegenstander de bal niet in drie keer terug speelt'
    ],
    didacticTips: [
      'Volleybal-echt passen ontwikkelen',
      'Afstemmen set-up (direct opwerpen)',
      'Keuze speelwijze aanval afstemmen op kwaliteit van de set',
      'Selfpass als redmiddel'
    ],
    methodicalBuild: {
      description: 'Pass de bal naar een medespeler die de bal vangt of vang je eigen pass (selfpass). De gevangen bal wordt opgegooid en door de aanvaller over het net gespeeld.',
      steps: [
        'Leren van de platform-houding: voeten op schouderbreedte, knieën licht gebogen',
        'Armen gestrekt samen houden voor onderarmse pass',
        'Eerst selfpass oefenen (bal naar jezelf spelen)',
        'In tweetallen: pass – vang – gooi',
        'Opbouw naar 2-tegen-2 waarbij passer zichzelf toespeelt'
      ],
      focus: 'Volleybal-echt passen, afstemmen set-up (direct opwerpen), keuze speelwijze aanval afstemmen op kwaliteit van de set'
    },
    commonMistakes: [
      {
        mistake: 'Armen niet samen of te laat sluiten',
        description: 'Bal springt alle kanten op door slechte armhouding',
        tips: [
          'Eerst armpositie zonder bal oefenen',
          'Daarna ballonnen tikken voor gevoel',
          'Platform vroeg vormen en vasthouden'
        ]
      },
      {
        mistake: 'Rechtop staan tijdens pass',
        description: 'Weinig controle over de bal door slechte basishouding',
        tips: [
          'Lage hindernissen gebruiken om bukken te stimuleren',
          'Oefenen in "ski-houding"',
          'Knieën altijd licht gebogen houden'
        ]
      },
      {
        mistake: 'Niet naar de bal bewegen',
        description: 'Passers blijven op hun plaats staan',
        tips: [
          'Oefenen met bewegende startposities',
          'Bal vanuit verschillende hoeken aangooien',
          'Voetwerk apart oefenen'
        ]
      }
    ],
    exercises: [
      {
        name: 'Platform-houding',
        goal: 'Juiste basishouding aanleren',
        setup: 'Zonder bal, individueel',
        description: 'Ski-houding aannemen, armen samen vormen',
        material: ['Eventueel lage hindernissen'],
        variations: ['Met spiegel', 'Op commando', 'In beweging']
      },
      {
        name: 'Ballon-tikken',
        goal: 'Gevoel voor onderarmse pass',
        setup: 'Individueel met ballon',
        description: 'Ballon omhoog tikken met platform',
        material: ['Ballonnen'],
        variations: ['Aantal keer achter elkaar', 'In beweging', 'Met partner']
      },
      {
        name: 'Selfpass-oefening',
        goal: 'Bal naar jezelf spelen leren',
        setup: 'Individueel opstelling',
        description: 'Bal omhoog spelen, laten stuiteren, opnieuw spelen',
        material: ['Volleyballen', 'Zachte ondergrond'],
        variations: ['Verschillende hoogtes', 'Met stappen tussendoor', 'Linker/rechter kant']
      },
      {
        name: 'Pass-vang-gooi',
        goal: 'Overgang naar spelen',
        setup: 'Tweetallen, 4 meter uit elkaar',
        description: 'A past, B vangt en gooit terug',
        material: ['Volleyballen'],
        variations: ['Rollen omdraaien', 'Alleen passen (geen vangen)', 'Met net ertussen']
      },
      {
        name: 'Bewegende pass',
        goal: 'Voetwerk en pass combineren',
        setup: 'Hoek van het veld',
        description: 'Vanuit verschillende posities naar de bal bewegen en passen',
        material: ['Volleyballen', 'Markeringen'],
        variations: ['Verschillende richtingen', 'Met tijdsdruk', 'Als competitie']
      }
    ]
  },
  {
    id: 'level4-smash',
    name: 'Level 4: Smash Volley',
    icon: '💥',
    teamSize: '3 tegen 3',
    netHeight: '2.00m',
    fieldDepth: '4.50m',
    fieldWidth: '5.20m (binnenste lijnen badmintonveld)',
    ballWeight: '210-230 gram',
    ageGroup: '9-11 jaar (richtlijn)',
    mainGoal: 'Pass de bal die over het net komt. De tweede bal wordt gevangen en bovenhands gespeeld vanuit een zelf opgooi (set)',
    keyTechnique: 'Pass-set-aanval, bovenhandse set uit eigen opgooi',
    entryRequirement: 'Spelers beheersen level 3 effectief waarbij er steeds minder de selfpass nodig is voor het redden van een bal',
    rules: [
      'Iedere rally start met een onderhandse service door de speler op positie rechtsachter ergens in de achterste helft van het speelveld',
      'Pass: De bal spelen (bovenhands of onderarms) naar een medespeler. De selfpass is niet meer toegestaan',
      'Set: De bal vangen, naar voren rennen en binnen 3 seconden bovenhands opspelen vanuit een zelf opgegooide bal',
      'Aanval: De aanvaller mag op een zelf gekozen volleybalachtige wijze de bal over het net spelen: bovenhands, tip, smash, onderarms',
      'De eerste bal wordt gespeeld (bovenhands of onderarms), de tweede bal gevangen en opgespeeld, de derde bal gaat over het net',
      'Blokken van de eerste bal die over het net komt (serve) mag niet',
      'Er moet drie keer gespeeld worden (een blokaanraking telt niet mee)',
      'Het team dat de rally wint, krijgt de service',
      'De service moet binnen 3 seconden plaatsvinden',
      'Wisselt de service na een punt van team, wordt er aan de kant die gaat serveren eerst doorgedraaid',
      'Na drie keer serveren door dezelfde speler moet het team doordraaien'
    ],
    scoring: [
      'De bal in het veld van de tegenstander op de grond valt',
      'De bal via de tegenstander uit gaat',
      'Een speler twee keer achter elkaar de bal speelt',
      'Er minder dan drie keer gespeeld wordt'
    ],
    didacticTips: [
      'De selfpass verdwijnt uit het spel',
      'Spelers leren ruimere passes te spelen die vangbaar zijn voor medespelers',
      'Om de aanval te laten lukken mag de speler met bal rennen naar het net',
      'De set uit eigen opgooi introduceert de bovenhandse setup'
    ],
    methodicalBuild: {
      description: 'Pass de bal die over het net komt. De tweede bal wordt gevangen en bovenhands gespeeld vanuit een zelf opgooi (set). De derde bal wordt over het net gespeeld.',
      steps: [
        'Begin met losse technieken: onderhands serveren apart oefenen',
        'Set-oefeningen: vang en bovenhands spelen naar juiste zone',
        'Aanvalsoefeningen: tip of zachte smash zonder hard slaan',
        'Combineren tot pass – set – aanval patroon',
        'Uitbouwen naar 3-tegen-3 met rotatie'
      ],
      focus: 'De selfpass verdwijnt uit het spel en spelers leren om ruimere passes te spelen die vangbaar zijn voor de medespelers. Om de aanval te laten lukken mag de speler met bal rennen naar het net. De set uit eigen opgooi introduceert de bovenhandse setup en de mogelijkheid tot een gevarieerde aanvalsbal'
    },
    commonMistakes: [
      {
        mistake: 'Onnauwkeurige set',
        description: 'Bal komt verkeerd uit waardoor aanval mislukt',
        tips: [
          'Leer spelen vanuit een driehoek boven het hoofd',
          'Set altijd naar afgesproken zone',
          'Eerst vangen en rustig set geven',
          'Consistent dezelfde hoogte aanhouden'
        ]
      },
      {
        mistake: 'Aanvaller staat te dichtbij',
        description: 'Smash wordt laag geslagen of gaat in het net',
        tips: [
          'Oefen aanvalsaanloop zonder bal',
          'Leer 3-stappen aanloop: links-rechts-links',
          'Daarna met zachte opgooien oefenen',
          'Afstand tot setter oefenen'
        ]
      },
      {
        mistake: 'Serve te hoog of te hard',
        description: 'Service vliegt weg of is oncontroleerbaar',
        tips: [
          'Markeer serve-zones in het veld',
          'Begin dichterbij het net',
          'Focus op richting, niet op kracht',
          'Onderhands serveren met opgooien'
        ]
      }
    ],
    exercises: [
      {
        name: 'Onderhands serveren',
        goal: 'Service techniek aanleren',
        setup: 'Vanaf service-lijn',
        description: 'Bal opgooien en met vlakke hand over net slaan',
        material: ['Volleyballen', 'Markeringen voor zones'],
        variations: ['Verschillende afstanden', 'Op doelen serveren', 'Onder druk']
      },
      {
        name: 'Set-training',
        goal: 'Nauwkeurige set leren',
        setup: 'Driehoek opstelling',
        description: 'Vangt de bal en set naar zone 4 (links) of zone 2 (rechts)',
        material: ['Volleyballen', 'Doelen of hoepels'],
        variations: ['Verschillende setposities', 'Set op tijd', 'Set onder druk']
      },
      {
        name: 'Aanloop-training',
        goal: 'Smash-aanloop automatiseren',
        setup: 'Zonder bal, aan het net',
        description: '3-stappen aanloop: links-rechts-links + sprong',
        material: ['Eventueel lijnen op de grond'],
        variations: ['Met armzwaai', 'Vanaf verschillende posities', 'Met bal opgooien']
      },
      {
        name: 'Pass-Set-Aanval',
        goal: 'Samenspel in drietallen',
        setup: '3 spelers: passer, setter, aanvaller',
        description: 'Pass naar setter, set naar aanvaller, tip over het net',
        material: ['Volleyballen'],
        variations: ['Positions wisselen', 'Verschillende aanvalsposities', 'Als competitie']
      },
      {
        name: 'Mini-rotatie',
        goal: 'Rotatie en posities leren',
        setup: '3-tegen-3 opstelling',
        description: 'Na elk punt één positie doorschuiven',
        material: ['Net', 'Volleyballen'],
        variations: ['Verschillende rotatie-richtingen', 'Met vaste taken', 'Wedstrijdvorm']
      }
    ]
  },
  {
    id: 'level5-ultimate',
    name: 'Level 5: Ultimate Volley',
    icon: '🏆',
    teamSize: '3 tegen 3',
    netHeight: '2.00m',
    fieldDepth: '6.00m (eerste achterlijn badmintonveld)',
    fieldWidth: '6.00m (maximale breedte badmintonveld)',
    ballWeight: '210-230 gram',
    ageGroup: '10-12 jaar (richtlijn)',
    mainGoal: 'Het spel wordt zonder vangen gespeeld. Drie keer samenspelen levert een bonuspunt op',
    keyTechnique: 'Alle ballen worden gespeeld met kort contact (bovenhands of onderarms)',
    entryRequirement: 'Spelers beheersen level 4 waarin de pass in de meerderheid van de gevallen door de midvoor speler aan het net gevangen kan worden zonder daarvoor veel van de startpositie af te moeten wijken',
    rules: [
      'Iedere rally start met een onderhandse service door de speler op de positie rechtsachter ergens in de achterste helft van het speelveld',
      'Alle ballen worden gespeeld met kort contact (bovenhands of onderarms)',
      'Het team dat de rally wint, krijgt de service',
      'De service moet binnen 3 seconden plaatsvinden',
      'Wisselt de service van team, wordt er aan de kant die gaat serveren eerst doorgedraaid',
      'Na drie keer serveren door dezelfde speler moet het team doordraaien; de derde service mag bovenhands',
      'Blokken van de eerste bal die over het net komt (serve) mag niet'
    ],
    scoring: [
      'De bal in het veld van de tegenstander op de grond valt',
      'De bal via de tegenstander uit gaat',
      'Een team vaker dan drie keer overspeelt om de bal over het net te krijgen (een blokaanraking telt niet mee in aantal keren spelen)'
    ],
    bonusScoring: 'In drie keer de bal goed over het net spelen, zonder dat de bal uit gaat, levert direct een bonuspunt op, ongeacht het verdere verloop van de rally',
    didacticTips: [
      'Zonder vangen spelen',
      'De overgang naar level 5 blijft een grote stap voor kinderen',
      'Het advies is om daar niet te snel heen te willen',
      'Dit level stimuleert drie keer spelen met een bonuspunt'
    ],
    methodicalBuild: {
      description: 'Het spel wordt zonder vangen gespeeld. Drie keer samenspelen levert een bonuspunt op.',
      steps: [
        'Start met rally-oefeningen zonder vangen',
        'Volledige rotaties oefenen met positiewissels',
        'Pass – set – aanval automatiseren',
        'Introduceer blok en verdediging bij gevorderde groepen',
        'Beloningssysteem voor drie contacten (bonuspunt)'
      ],
      focus: 'Zonder vangen. De overgang naar level 5 blijft een grote stap voor kinderen. Het advies is om daar niet te snel heen te willen. Het is heel leerzaam voor kinderen om zich wat langer te mogen ontwikkelen in het voorgaande level. Dit level stimuleert drie keer spelen met een bonuspunt'
    },
    commonMistakes: [
      {
        mistake: 'Bal te snel terugspelen',
        description: 'Spelen in één of twee contacten in plaats van drie',
        tips: [
          'Beloningssysteem: bonuspunt voor drie contacts',
          'Oefen ook tegen de wand om geduld te leren',
          'Maak afspraken: altijd proberen samen te spelen',
          'Vier succesvolle rally\'s extra'
        ]
      },
      {
        mistake: 'Gebrek aan communicatie',
        description: 'Botsingen of vallende ballen door slechte afspraken',
        tips: [
          'Roepen van "ik" of "free" verplicht stellen',
          'Teamrollen toewijzen (passer, setter, aanvaller)',
          'Yell/high-five na elke geslaagde rally',
          'Positie-afspraken maken'
        ]
      },
      {
        mistake: 'Onvoldoende veldinzicht',
        description: 'Spelers staan te dicht op elkaar of dekken zones niet',
        tips: [
          'Gekleurde zones gebruiken op het veld',
          'Posities regelmatig laten wisselen',
          'Verdediging en aanval apart trainen',
          'Video-analyse van eigen spel'
        ]
      }
    ],
    exercises: [
      {
        name: 'Rally-oefening',
        goal: 'Lange rally\'s spelen zonder vangen',
        setup: '3-tegen-3 opstelling',
        description: 'Probeer zo lang mogelijk te rally\'en, bonuspunt bij 6+ contacten',
        material: ['Net op juiste hoogte', 'Volleyballen'],
        variations: ['Verschillende startsituaties', 'Met punten systeem', 'Tijdslimiet']
      },
      {
        name: 'Rotatie-drill',
        goal: 'Vlotte rotatie en positiespel',
        setup: 'Volledig veld met posities',
        description: 'Na elk punt doorrotatie, alle posities spelen',
        material: ['Markeringen voor posities', 'Volleyballen'],
        variations: ['Snelle rotatie', 'Met speciale taken per positie', 'Rotatie-race']
      },
      {
        name: 'Communicatie-training',
        goal: 'Roepen en afspraken maken',
        setup: 'Half veld, veel ballen tegelijk',
        description: 'Bij elke bal hard roepen wie hem heeft',
        material: ['Meerdere volleyballen'],
        variations: ['Met blinddoek', 'Onder tijdsdruk', 'Als wedstrijd']
      },
      {
        name: 'Tactical play',
        goal: 'Tactische varianten leren',
        setup: 'Wedstrijdsituaties',
        description: 'Verschillende aanvalsopties: tip, lob, hard slaan',
        material: ['Volleyballen', 'Doelen'],
        variations: ['Verschillende zones aanvallen', 'Verdediging organiseren', 'Match situaties']
      },
      {
        name: 'Bonuspunt-spel',
        goal: 'Beloningen voor samenspel',
        setup: '3-tegen-3 wedstrijdvorm',
        description: 'Normaal punt + bonuspunt als je drie keer raakt',
        material: ['Scorebord', 'Volleyballen'],
        variations: ['Andere bonusregels', 'Team-challenges', 'Toernooivorm']
      }
    ]
  }
]

export const quizQuestions = {
  'level1-catch': [
    {
      id: 'q1-1',
      question: 'Hoe hoog is het net in Level 1: Catch Volley?',
      options: ['1.50m', '1.70m', '2.00m', '2.24m'],
      correctAnswer: 1,
      explanation: 'In Level 1 (Catch Volley) is het net 1.70 meter hoog.'
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
      explanation: 'Lopen met de bal is niet toegestaan in Level 1.'
    },
    {
      id: 'q1-4',
      question: 'Hoe zwaar is de wedstrijdbal in Level 1?',
      options: ['150 gram', '170 gram', '210 gram', '230 gram'],
      correctAnswer: 1,
      explanation: 'In Level 1 wordt gespeeld met een 170 gram volleybal.'
    },
    {
      id: 'q1-5',
      question: 'Wanneer mag je bovenhands gooien in Level 1?',
      options: ['Nooit', 'Altijd', 'Alleen met een stootworp van voor het hoofd', 'Alleen bij service'],
      correctAnswer: 2,
      explanation: 'Bovenhands gooien mag, maar alleen met een stootworp van voor het hoofd (geen voetbalinworp).'
    }
  ],
  'level2-bounce': [
    {
      id: 'q2-1',
      question: 'Wat is de bounce-set techniek in Level 2?',
      options: [
        'Direct slaan zonder stuit',
        'Een tweehandige stuit vlak voor de medespeler',
        'Twee keer laten stuiteren',
        'Alleen bovenhands spelen'
      ],
      correctAnswer: 1,
      explanation: 'De bounce-set is een tweehandige stuit vlak voor de medespeler (deze mag niet over het net gespeeld worden).'
    },
    {
      id: 'q2-2',
      question: 'Hoe hoog is het net in Level 2: Bounce Volley?',
      options: ['1.70m', '2.00m', '2.10m', '2.24m'],
      correctAnswer: 0,
      explanation: 'In Level 2 (Bounce Volley) is het net 1.70 meter hoog.'
    },
    {
      id: 'q2-3',
      question: 'Hoe lang mag je de bal vasthouden in Level 2?',
      options: ['1 seconde', '2 seconden', '3 seconden', '4 seconden'],
      correctAnswer: 2,
      explanation: 'In Level 2 moeten alle ballen na het vangen (binnen 3 seconden) met een bounce-set naar de medespeler gespeeld worden.'
    },
    {
      id: 'q2-4',
      question: 'Mag je blokken in Level 2?',
      options: ['Ja, altijd', 'Nee, nooit', 'Alleen de eerste bal', 'Blokken van de eerste bal die over het net komt mag niet'],
      correctAnswer: 3,
      explanation: 'Blokken van de eerste bal die over het net komt mag niet in Level 2.'
    }
  ],
  'level3-pass': [
    {
      id: 'q3-1',
      question: 'Hoe hoog is het net in Level 3: Pass Volley?',
      options: ['1.70m', '2.00m', '2.10m', '2.24m'],
      correctAnswer: 1,
      explanation: 'In Level 3 (Pass Volley) is het net 2.00 meter hoog.'
    },
    {
      id: 'q3-2',
      question: 'Wat gebeurt er als de bal bovenhands gespeeld wordt in Level 3?',
      options: [
        'De bal mag door iedereen gevangen worden',
        'De medespeler moet de bal vangen',
        'De bal moet direct teruggespeeld worden',
        'Het is een fout'
      ],
      correctAnswer: 1,
      explanation: 'Wordt de bal bovenhands gespeeld dan moet de medespeler de bal vangen.'
    },
    {
      id: 'q3-3',
      question: 'Wat kan er gebeuren na een onderarmse pass in Level 3?',
      options: ['Alleen medespeler mag vangen', 'Alleen selfpass toegestaan', 'Bal door medespeler gevangen óf zelf gevangen (selfpass)', 'Bal moet direct over het net'],
      correctAnswer: 2,
      explanation: 'Na een onderarmse pass wordt de bal door de medespeler gevangen óf zelf gevangen (selfpass).'
    },
    {
      id: 'q3-4',
      question: 'Hoeveel keer moet er gespeeld worden tijdens de rally in Level 3?',
      options: ['1 keer', '2 keer', '3 keer', '4 keer'],
      correctAnswer: 2,
      explanation: 'Tijdens de rally moet er drie keer gespeeld worden in Level 3.'
    }
  ],
  'level4-smash': [
    {
      id: 'q4-1',
      question: 'Hoeveel spelers per team in Level 4: Smash Volley?',
      options: ['2', '3', '4', '6'],
      correctAnswer: 1,
      explanation: 'Level 4 (Smash Volley) wordt gespeeld met 3 tegen 3.'
    },
    {
      id: 'q4-2',
      question: 'Hoe zwaar is de wedstrijdbal in Level 4?',
      options: ['170 gram', '200 gram', '210-230 gram', '250 gram'],
      correctAnswer: 2,
      explanation: 'In Level 4 wordt er met een bal van 210-230 gram gespeeld.'
    },
    {
      id: 'q4-3',
      question: 'Is de selfpass nog toegestaan in Level 4?',
      options: ['Ja, altijd', 'Nee, de selfpass is niet meer toegestaan', 'Alleen bij de eerste bal', 'Alleen bij de service'],
      correctAnswer: 1,
      explanation: 'In Level 4 is de selfpass niet meer toegestaan. Spelers moeten de bal naar een medespeler passen.'
    },
    {
      id: 'q4-4',
      question: 'Wie serveert na een gewonnen rally in Level 4?',
      options: ['Hetzelfde team', 'Het team dat de rally wint', 'Altijd het andere team', 'De aanvaller'],
      correctAnswer: 1,
      explanation: 'Het team dat de rally wint, krijgt de service in Level 4.'
    },
    {
      id: 'q4-5',
      question: 'Wat gebeurt er na drie keer serveren door dezelfde speler?',
      options: ['Niets', 'Het team moet doordraaien', 'De service gaat naar de tegenstander', 'Een time-out'],
      correctAnswer: 1,
      explanation: 'Na drie keer serveren door dezelfde speler moet het team doordraaien.'
    }
  ],
  'level5-ultimate': [
    {
      id: 'q5-1',
      question: 'Hoe hoog is het net in Level 5: Ultimate Volley?',
      options: ['1.70m', '2.00m', '2.20m', '2.24m'],
      correctAnswer: 1,
      explanation: 'In Level 5 (Ultimate Volley) is het net 2.00 meter hoog.'
    },
    {
      id: 'q5-2',
      question: 'Hoe groot is het veld in Level 5?',
      options: ['4.50 x 5.20m', '6.00 x 6.00m', '9.00 x 18.00m', '4.50 x 9.00m'],
      correctAnswer: 1,
      explanation: 'In Level 5 is de velddiepte 6.00 meter (eerste achterlijn badmintonveld) en veldbreedte 6.00 meter (maximale breedte badmintonveld).'
    },
    {
      id: 'q5-3',
      question: 'Wanneer krijg je een bonuspunt in Level 5?',
      options: ['Bij elke service', 'Bij een smash', 'In drie keer de bal goed over het net spelen zonder dat de bal uit gaat', 'Bij een ace'],
      correctAnswer: 2,
      explanation: 'In drie keer de bal goed over het net spelen, zonder dat de bal uit gaat, levert direct een bonuspunt op, ongeacht het verdere verloop van de rally.'
    },
    {
      id: 'q5-4',
      question: 'Hoe worden alle ballen gespeeld in Level 5?',
      options: ['Met vangen', 'Met kort contact (bovenhands of onderarms)', 'Alleen bovenhands', 'Alleen onderarms'],
      correctAnswer: 1,
      explanation: 'Alle ballen worden gespeeld met kort contact (bovenhands of onderarms) in Level 5.'
    },
    {
      id: 'q5-5',
      question: 'Wanneer mag de derde service bovenhands gespeeld worden?',
      options: ['Nooit', 'Altijd', 'Na drie keer serveren door dezelfde speler mag de derde service bovenhands', 'Alleen bij de eerste service'],
      correctAnswer: 2,
      explanation: 'Na drie keer serveren door dezelfde speler moet het team doordraaien; de derde service mag bovenhands.'
    }
  ]
}

// Speelregels informatie
export const playingRules = {
  general: {
    title: 'Speelregels',
    description: 'Naast spelregels zijn er ook speelregels. Deze speelregels hebben als doel om de jonge volleybalspelers te kunnen laten genieten van het spelen van volleybal.',
    principles: [
      'Iedereen speelt evenveel',
      'Spelbegeleiders begeleiden kinderen en schatten in hoe "streng" ze de "technische" regels toepassen',
      'Kinderen wisselen regelmatig van medespelers in level 1,2 en 3',
      'Wees positief naar tegenstanders en eigen spelers',
      'Spelers geven na afloop van de wedstrijd een hand en bedanken elkaar',
      'Spelers mogen veel zelf ontdekken. De coach begeleidt de spelers waar nodig',
      'Het spel is van de kinderen. Enthousiaste ouders coachen niet vanaf de tribune',
      'Coaches en spelbegeleiders stimuleren snelheid in het spel',
      'Spelers spelen in de eerste drie levels zo veel mogelijk op beide posities (wissel links en rechts af)'
    ],
    volleyballLikeTechniques: {
      title: 'In level 1,2 en 3 streven we naar volleybalachtig gooien en vangen',
      techniques: [
        {
          name: 'Vang-stootbeweging',
          description: 'Een bal die bovenhands met twee handen van voor of boven het hoofd wordt weggeduwd'
        },
        {
          name: 'Vang-gooi beweging', 
          description: 'Een onderhands gevangen bal die vrijwel direct met gestrekte armen opgegooid wordt'
        }
      ]
    }
  },
  methodology: {
    title: 'Methodische toelichting',
    generalGoal: 'Het doel van de eerste drie levels is het ontwikkelen van basale vaardigheden en adaptief vermogen, zoals goede verplaatsing, actiebereidheid en omgaan met variatie.',
    coreChallenge: 'Spelers leren dit binnen de kernuitdaging van volleybal: de bal op de grond in het veld van de tegenstander plaatsen en het voorkomen ervan aan eigen zijde als spannend spel.',
    approach: 'Spelers ervaren bij voorkeur veel betrokkenheid tijdens het spel, waarbij ze leren via een speler- en spelgerichte benadering.',
    development: 'Spelers ontwikkelen zich van veelzijdig naar speelzijdig in deze leeftijd. Naast het ontwikkelen van vaardigheden, neemt de complexiteit van samenwerking toe, van eenvoudige afstemming naar complexere handelingen qua timing en richting.'
  },
  tournamentFormat: {
    title: 'Toernooivormen als speelconcept',
    description: 'Volley Stars wordt altijd in toernooivorm gespeeld.',
    advantages: [
      'Club- én teamgevoel bij de jongste kinderen in level 1 t/m 3',
      'Teamgevoel bij de wat oudere kinderen vanaf level 4',
      'Mogelijkheid voor clubs om teams flexibel op eigen niveau in te laten schrijven per toernooi',
      'Een aantrekkelijk dag(deel)programma',
      'Ontwikkeling centraal',
      'Op termijn kunnen clubs meer rekening houden met kinderen en ouders die meer flexibiliteit willen'
    ],
    teamStructure: {
      levels123: 'Bij voorkeur hanteren clubs teamstructuren van 4-6 spelers voor trainen en naar wedstrijden reizen. De Nevobo adviseert om niet in vaste tweetallen te spelen maar juist binnen een trainingsgroep/team veel door te wisselen in samenstelling.',
      levels45: 'Vanaf level 4 is er wel sprake van vaste teams (van minimaal 3 spelers).'
    }
  },
  fieldVariations: {
    title: 'Veldvariaties',
    generalRule: 'De aangegeven velddiepte is een vast gegeven. De veldbreedte kan variëren per zaal.',
    allowedWidths: {
      level1: 'Tussen 4.50 en 6.00 meter, afhankelijk van het instapniveau',
      level2: 'Tussen 4.50 en 6.00 meter',
      level3: 'Tussen 4.50 en 6.00 meter',
      level4: 'Tussen 5.20 en 6.00 meter',
      level5: 'Tussen 6.00 en 6.10 meter'
    },
    recommendations: {
      levels123: 'Voor level 1, 2 en 3 adviseert de Nevobo om eerder op de binnenste lijnen van een badmintonveld te spelen (5.20m) of op de genoemde 4.50 meter.',
      minimumWidth: 'In de eerste 3 levels is 4.50 meter als minimale breedte toegestaan. Smaller mag niet, omdat uit testen blijkt dat er dan een grote kans is op te veel dominantie door één speler.'
    }
  },
  ballSpecifications: {
    title: 'Wedstrijdbal',
    levels123: {
      weight: '170 gram',
      advantages: 'Voor de eerste drie levels betekent dit een iets tragere balvlucht. Dat is voordelig voor het leren vangen. Daarnaast is het een prettige bal om mee te leren passen.'
    },
    levels45: {
      weight: '210-230 gram',
      advantages: 'Vanaf level 4 wordt de bovenhandse set dominanter. Deze uitvoering is gebaat bij iets meer gewicht in de bal. Kinderen kunnen de bal beter ontvangen waardoor de bovenhandse bal soepeler gespeeld kan worden.'
    }
  },
  bounceSetExplanation: {
    title: 'Bounce-set',
    description: 'De bounce-set is een manier om de bal op te zetten via een stuit op de grond. Het helpt jonge spelers om een goede aanvallende actie te kunnen maken.',
    advantages: [
      'Het geeft de spelers meer tijd om goed onder de bal te komen, zonder dat de set van heel hoog moet komen en daardoor onnauwkeurig en moeilijk speelbaar kan worden',
      'Deze tijd en hoogte maakt dat de spelers makkelijker en gevarieerder de bal over het net kunnen spelen',
      'Het "dwingt" de aanvallers op natuurlijke wijze om ruimte te houden/maken achter de bal en daarna naar voren de actie in te zetten'
    ],
    execution: 'De setter mag tot voor de medespeler rennen en dan de bounce-set geven. Het makkelijkste is als dat vlak voor de aanvaller gebeurt.',
    rule: 'De spelers mogen niet samen naar het net rennen na het vangen van de bal. De speler met de bal in de handen (setter) mag wel met de bal naar voren rennen.'
  }
}