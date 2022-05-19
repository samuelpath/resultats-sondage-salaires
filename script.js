function loadTable() {
    var table = new Tabulator("#example-table", {
        data: tabledata, //assign data to table
        autoColumns: true, //create columns from data field names
    });
}

var tabledata = [
    {
      "Entreprise": "Datadog",
      "Titre/Poste/Role": "Software engineer senior",
      "Années d'expérience en dev": "",
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 110,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 110,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "RSU 20k€/ans",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Grand compte dans le domaine de la mode",
      "Titre/Poste/Role": "Consultant web performance",
      "Années d'expérience en dev": "",
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 160,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Stuart",
      "Titre/Poste/Role": "Senior Scala engineer",
      "Années d'expérience en dev": "",
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 76,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "IDAaaS",
      "Titre/Poste/Role": "Dev",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 80,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 80,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE (pour 25k€ + 6k€ / an), mais je ne les compte pas dedans, on verra bien",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Phenix Digital",
      "Titre/Poste/Role": "VP Engineering",
      "Années d'expérience en dev": 18,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 120,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "300k€ d'actions en BSA",
      "Remarque libre": "En remote depuis Nantes. Freelance pour la meme boîte pendant 10 ans avant de passer en CDI."
    },
    {
      "Entreprise": "Filiale du groupe Accor à Londres",
      "Titre/Poste/Role": "Senior Data Engineer",
      "Années d'expérience en dev": 4,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 170,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Datadog",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": "91,5",
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "9,900 DDOG stock option sur 4 ans + 2,781 DDOG RSU sur 3 ans",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Platform.sh",
      "Titre/Poste/Role": "Product Manager Developer Experience",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 72,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 92,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE, Prime télétravail (150€ brut/mois), programme Wellness (remboursement), budget formation (remboursement)",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Red Hat",
      "Titre/Poste/Role": "Principal Software Engineer",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 70,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 80,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Primes jusqu'à 15% du brut",
      "Remarque libre": "Les Red Hatters sont conscients d'avoir un salaire moins intéressant que ce qui se pratique dans d'autres boîtes équivalentes, mais que la qualité des conditions travail compense le côté financier"
    },
    {
      "Entreprise": "Freelance",
      "Titre/Poste/Role": "Tech Lead Front-end",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 105,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Doctolib",
      "Titre/Poste/Role": "Senior staff engineer",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 94,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "Confidentiel",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Confidentiel",
      "Remarque libre": ""
    },
    {
      "Entreprise": "ZEBet",
      "Titre/Poste/Role": "Développeur mobile",
      "Années d'expérience en dev": 6,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 144,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Swile",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 9,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 61,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 63,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Mirakl",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 13,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 71,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 71,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "DevOps",
      "Années d'expérience en dev": 4,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 52,
      "Nature du contrat (CDI, CDD, freelance…)": "Cdi",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Tech Lead",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 110,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "GAFAM",
      "Titre/Poste/Role": "Sr Dev Advocate",
      "Années d'expérience en dev": 14,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 98,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 145,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Annuel: 20% bonus cash, 30k$ RSU sur 4 ans. Embauche: 50k€ cash, 150k$ RSU sur 4 ans, 1.5k€ d'avantages CE, beaucoup de congés",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Cardiff",
      "Titre/Poste/Role": "Dev backend senior",
      "Années d'expérience en dev": 11,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 140,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Datadog",
      "Titre/Poste/Role": "Software Engineer 2",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 145,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "80k$ de RSU sur 4 ans à l'embauche + 2 fois 100k$ de recharge \"au mérite\" en 2 ans = 280k$",
      "Remarque libre": "La volatilité de l'action et l'évolution du cours $\\€ font pas mal bouger le package avec le temps, et complique bien la déclaration d'impôts lors des ventes 😁. Sans compter le programme d'ESPP pour acheter des actions à -15%."
    },
    {
      "Entreprise": "Mural",
      "Titre/Poste/Role": "Director of Engineering",
      "Années d'expérience en dev": 15,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 150,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 150,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Stock options en plus mais confidentiel",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Shopify",
      "Titre/Poste/Role": "Staff Developer",
      "Années d'expérience en dev": 25,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 140,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 215,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "RSU",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 78,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 118,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Refer",
      "Titre/Poste/Role": "Lead Frontend",
      "Années d'expérience en dev": 13,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 63,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 63,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": "Je suis à mi-temps (24h/semaine) mais j'ai indiqué l'équivalent si plein temps."
    },
    {
      "Entreprise": "Obat",
      "Titre/Poste/Role": "Lead Frontend Developer",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 60,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Dans la foodtech",
      "Titre/Poste/Role": "Lead tech",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 150,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Efficity",
      "Titre/Poste/Role": "Architecte Logiciel",
      "Années d'expérience en dev": 11,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 72,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 72,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "GitGuardian",
      "Titre/Poste/Role": "Engineering Lead",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 85,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 115,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "76,5k fixe + 8.5k de variable (85k) + 30k de BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Datadog",
      "Titre/Poste/Role": "Senior iOS Engineer",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 95,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 250,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "RSU, ESPP, Participation",
      "Remarque libre": "Pour calculer le package total j'ai multiplié le nombre de RSU que j'ai par la valeur *à ce jour*  du \"200-Day Moving Average\" de DDOG (soit 148$), et j'ai divisé le tout par 5 ans (il faut que je reste en tout 5 ans à Datadog pour pouvoir vester toutes ces RSU). Néanmoins, l'action est très variable. Depuis que je suis à Datadog, le min est à 37$ et le max à 198$. C'est donc très dûr de faire une moyenne tant que c'est pas vendu."
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Developer Relations Engineer",
      "Années d'expérience en dev": 1,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 100,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 105,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "10k$ options",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Ornikar",
      "Titre/Poste/Role": "Senior backend developer",
      "Années d'expérience en dev": 13,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 64,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 64,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Tickets resto",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Inqom",
      "Titre/Poste/Role": "Engineering lead",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 68,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 68,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE",
      "Remarque libre": "BSPCE difficile à chiffrer (>30K)"
    },
    {
      "Entreprise": "Lucca",
      "Titre/Poste/Role": "Engineering Manager",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 71,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Associé",
      "Remarque libre": "Chez Lucca, salaire libre pour les + de 3 ans. Mais il faut savoir le justifier."
    },
    {
      "Entreprise": "Sunday",
      "Titre/Poste/Role": "Software engineer",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 60,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 80,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Aussi vacances illimitées, congés paternité de 16 semaines, et d'autres choses",
      "Remarque libre": "Je ne suis \"que\" software engineer, en passant senior j'espère bientôt le package va évoluer."
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Directeur technique",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 95,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 105,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Bonus",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Predictice",
      "Titre/Poste/Role": "Head of Data",
      "Années d'expérience en dev": 17,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": "77,5",
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "77,5",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "J’attends encore les BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Singulart",
      "Titre/Poste/Role": "Lead Front End Developer",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 61,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 64,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "3k€ bonus",
      "Remarque libre": "- J'ai mis ma rémunération si je ne travaillais pas au 4/5ème. -20% vu que 4/5ème. - Full remote, mais venue régulière sur Paris"
    },
    {
      "Entreprise": "Salsify",
      "Titre/Poste/Role": "Senior SRE",
      "Années d'expérience en dev": 15,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 80,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 80,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Deezer",
      "Titre/Poste/Role": "Lead SRE",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 70,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 76,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Astreinte",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Yousign",
      "Titre/Poste/Role": "Dev back ou front senior 3.3",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 66,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "66,15",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Frais remote mobilier et matériel, 30€ d'internet chaque mois, ticket resto Swile, BSPCE, 10 RTT, 1 congé d'ancienneté tous les 2 ans...",
      "Remarque libre": "https://blog.yousign.io/posts/parcours-carriere-engineering-chez-yousign"
    },
    {
      "Entreprise": "Alan",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 16,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 96,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 141,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Sunday",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 13,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 80,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "5k€ de variable + 15k€ de BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Sunday",
      "Titre/Poste/Role": "Staff Engineer",
      "Années d'expérience en dev": 16,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 95,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 115,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "20k€ BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Ingenico",
      "Titre/Poste/Role": "Software developer",
      "Années d'expérience en dev": 4,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 50,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 55,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Elastic",
      "Titre/Poste/Role": "Software engineer II",
      "Années d'expérience en dev": 4,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "Difficile à calculer",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "RSU (vesting sur 4 ans / 2 ans) + nouvelles acquisitions de RSUs chaque année",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Comet",
      "Titre/Poste/Role": "CTO",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 115,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 115,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "DALKIA",
      "Titre/Poste/Role": "Lead développeur Ionic",
      "Années d'expérience en dev": 15,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 116,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "TJM DE 550€/jour sur 221 jour annuel, full télétravail et l’un des seuls de DALKIA",
      "Remarque libre": "En free-lance full télétravail depuis 2017. Je cumule avec un poste en Irlande 2j semaine en remote aussi."
    },
    {
      "Entreprise": "Datadog",
      "Titre/Poste/Role": "Staff Software Engineer",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 140,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 265,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "RSU",
      "Remarque libre": "Le package avec les RSU est assez volatile à Datadog. Pour être plus précis ça correspond à un batch initial de 300,000$ (sur 4 ans) à l'embauche puis un refresh de 300,000$ (toujours sur 4 ans) 2 ans plus tard."
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Devops",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 110,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "35k€ BCPE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Daevel",
      "Titre/Poste/Role": "SRE",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Alma",
      "Titre/Poste/Role": "Staff Engineer",
      "Années d'expérience en dev": 22,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 75,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "+ BSPCE",
      "Remarque libre": "Difficile d'évaluer les BSPCE..."
    },
    {
      "Entreprise": "Renault digital",
      "Titre/Poste/Role": "Data engineer",
      "Années d'expérience en dev": 11,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 62,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Sonar",
      "Titre/Poste/Role": "Développeur",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 71,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Qwant",
      "Titre/Poste/Role": "Research Engineer",
      "Années d'expérience en dev": 9,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 68,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 68,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": "J'ai un profil bâtard, je suis pas vraiment dev je fais plutôt de la recherche appliquée"
    },
    {
      "Entreprise": "Université Paris 8",
      "Titre/Poste/Role": "Responsable d'équipe / CP technique",
      "Années d'expérience en dev": 27,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 60,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Getaround",
      "Titre/Poste/Role": "Senior Backend Engineer",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 75,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Sunday",
      "Titre/Poste/Role": "Software engineer",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 65,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 83,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "15k€ BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Smile",
      "Titre/Poste/Role": "Ingénieur R&D DevOps/Dev",
      "Années d'expérience en dev": 21,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 62,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Shopify",
      "Titre/Poste/Role": "Senior Developer",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 99,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 140,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Lifestyle grant 3700€, RSU USD 112K",
      "Remarque libre": "Pas sûr que les RSU seront renouvelés tous les ans sous forme de refresher."
    },
    {
      "Entreprise": "Dataiku",
      "Titre/Poste/Role": "Senior dev fullstack",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 75,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "80k€ de BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "TechProductInsight",
      "Titre/Poste/Role": "Dirigeant dev fullstack",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 141,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": "En freelance je peux déduire des charges et travailler avec le matos et équipement que je veux"
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Senior developer",
      "Années d'expérience en dev": "",
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 200,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": 200,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "IBM",
      "Titre/Poste/Role": "Senior Software Engineer",
      "Années d'expérience en dev": 16,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 80,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Actions à 85% du prix public avec 10% du salaire mensuel, au 4/5ème",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Ornikar",
      "Titre/Poste/Role": "Senior backend developer",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 62,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 62,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Prisma Media",
      "Titre/Poste/Role": "Lead Developer",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 68,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Convention cadre de la presse magazine. 9 semaines de congés. CE. Mutuelle. Tickets resto. Cantine. Télétravail.",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Beta Gouv",
      "Titre/Poste/Role": "Développeur Backend Python",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 130,
      "Nature du contrat (CDI, CDD, freelance…)": "Freelance",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": "Au 4/5ème"
    },
    {
      "Entreprise": "Lunex",
      "Titre/Poste/Role": "Full stack dev",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 94,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 120,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Bonus, stocks",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Treezor",
      "Titre/Poste/Role": "Lead Dev Go",
      "Années d'expérience en dev": 15,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 73,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 75,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Prime de resultat de 3k€",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Senior Dev Go",
      "Années d'expérience en dev": 17,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 100,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 300,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE, meilleur package wemind",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Lifen",
      "Titre/Poste/Role": "Senior front-end engineer",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 65,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "12k BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Meritis",
      "Titre/Poste/Role": "Architecte logiciel",
      "Années d'expérience en dev": 11,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 65,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 65,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Salaire fixe uniquement",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Contentsquare",
      "Titre/Poste/Role": "Customer Success on a Product for Dev (so a dev is needed)",
      "Années d'expérience en dev": 15,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 60,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 75,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "60k€ + bonus on objective + BSPCE à deux ans + divers indemnités et soutiens pour un montant de 3k€/an (soutiens aux dons caritatifs, welfare sport alloyancd, prise en charge psy, des trucs pour les enfants…)",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Emplifi.io",
      "Titre/Poste/Role": "Team Lead - Dev",
      "Années d'expérience en dev": 8,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 68,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 68,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "RAS mais avantages parentaux en cours de négo, vacances 5+2 RTT semaines",
      "Remarque libre": "Poste que j'ai gardé à mon retour d'expatriation de Montréal (4 ans là bas dont 2 ans dans cette entreprise). Pas trouvé mieux en Normandie niveau salaire/conditions de travail donc j'y reste, la flemme de chercher mieux sur Paris pour l'instant"
    },
    {
      "Entreprise": "DeepReach",
      "Titre/Poste/Role": "Senior Software Developpr",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 80,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 95,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE 15k€",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Microsoft",
      "Titre/Poste/Role": "Principal Software Engineer",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 120,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 200,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "40k€ Bonus Cash et 40k€ Bonus RSU",
      "Remarque libre": ""
    },
    {
      "Entreprise": "api.video",
      "Titre/Poste/Role": "Infra",
      "Années d'expérience en dev": 9,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 120,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 180,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSCPE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "KissKissBankBank",
      "Titre/Poste/Role": "Lead dev back (Ruby)",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 78,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "5k€ notes de frais, RTT, tickets resto",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Ledger",
      "Titre/Poste/Role": "Principal Software Engineer",
      "Années d'expérience en dev": 22,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 95,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 140,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "BSPCE 35k€, variable 10k€",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Getaround",
      "Titre/Poste/Role": "Senior Full-Stack Engineer",
      "Années d'expérience en dev": 6,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 65,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 65,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "5000 RSU (valeur pas claire)",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Swile",
      "Titre/Poste/Role": "iOS senior developer",
      "Années d'expérience en dev": 14,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 61,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 61,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Non renseigné",
      "Titre/Poste/Role": "Architect",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 130,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 160,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Options + Bonus",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Onfido",
      "Titre/Poste/Role": "Software Engineer",
      "Années d'expérience en dev": "2,5",
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 72,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 84,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "10% bonus, 23k€/4ans stocks",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Ankorstore",
      "Titre/Poste/Role": "Senior Quality Engineer",
      "Années d'expérience en dev": 15,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 65,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 91,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "26k€ euros en BSPCE",
      "Remarque libre": "Tu parles d'exp en dev mais je ne suis plus dev depuis 6 ans, par contre je l'étais avant"
    },
    {
      "Entreprise": "Maze",
      "Titre/Poste/Role": "Eng manager",
      "Années d'expérience en dev": 20,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 120,
      "Nature du contrat (CDI, CDD, freelance…)": "Portage salarial",
      "Package total (k€)": 300,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Equivalent BSPCE + ben + mutuelle",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Datadog",
      "Titre/Poste/Role": "Engineering team lead",
      "Années d'expérience en dev": 7,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 88,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 200,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "Salaire + ~150k $ / ans en RSU",
      "Remarque libre": ""
    },
    {
      "Entreprise": "PrestaShop",
      "Titre/Poste/Role": "Développeur Core (projet open source)",
      "Années d'expérience en dev": 12,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 57,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 57,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Iziwork",
      "Titre/Poste/Role": "Lead SRE",
      "Années d'expérience en dev": 10,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 134,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 177,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "100k€ de BSPCE sur 3 ans",
      "Remarque libre": "Les infos sont confidentiels"
    },
    {
      "Entreprise": "Grande entreprise e-commerce France",
      "Titre/Poste/Role": "Développeur",
      "Années d'expérience en dev": 8,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 55,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 61,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "10% de variable atteint chaque année car équipe de qualité et les objectifs sont en grande majorité des OKR d'équipe",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Doctolib",
      "Titre/Poste/Role": "Staff Engineer",
      "Années d'expérience en dev": 4,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 67,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": 426,
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "67k€ + 4k€ variable + 355k€ BSPCE",
      "Remarque libre": ""
    },
    {
      "Entreprise": "Neo4j",
      "Titre/Poste/Role": "Developer",
      "Années d'expérience en dev": 13,
      "Salaire brut en k€ (ou chiffre d'affaires si en indépendant)": 125,
      "Nature du contrat (CDI, CDD, freelance…)": "CDI",
      "Package total (k€)": "",
      "Détail du package total (options/RSU/BSPCE, bonus, autres avantages, etc.)": "",
      "Remarque libre": ""
    }
  ];