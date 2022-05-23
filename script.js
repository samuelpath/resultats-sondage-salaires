function loadTable() {
    var table = new Tabulator("#example-table", {
        data: tabledata, //assign data to table
        columns:[          //define the table columns
          { title: "Entreprise", field: "Entreprise" },
          { title: "Titre", field: "Titre" },
          { title: "Années XP", field: "Années XP", sorter: "number" },
          { title: "Brut/CA (k€)", field: "Brut/CA (k€)", sorter: "number"},
          { title: "Contrat", field: "Contrat", headerFilter: true },
          { title: "Package (k€)", field: "Package (k€)", sorter: "number"  },
          { title: "Détails package", field: "Détails package" },
          { title: "Remarques libres", field: "Remarques libres" }
        ],
        initialSort:[ //set the initial sort order of the data
          {column: "Brut/CA (k€)", dir:"desc"},
        ],
        initialFilter:[
          {field:"Contrat", type:"=", value:"CDI"}
      ],
    });
};

// I convert the raw CSV in JSON using a quick copy/paste on https://csvjson.com/csv2json
var tabledata = [
  {
    "Entreprise": "Datadog",
    "Titre": "Software engineer senior",
    "Années XP": "",
    "Brut/CA (k€)": 110,
    "Contrat": "CDI",
    "Package (k€)": 130,
    "Détails package": "RSU 20k€/ans",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Grand compte dans le domaine de la mode",
    "Titre": "Consultant web performance",
    "Années XP": "",
    "Brut/CA (k€)": 160,
    "Contrat": "Freelance",
    "Package (k€)": 160,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Stuart",
    "Titre": "Senior Scala engineer",
    "Années XP": "",
    "Brut/CA (k€)": 76,
    "Contrat": "CDI",
    "Package (k€)": 76,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "IDAaaS",
    "Titre": "Dev",
    "Années XP": 10,
    "Brut/CA (k€)": 80,
    "Contrat": "CDI",
    "Package (k€)": 80,
    "Détails package": "BSPCE (pour 25k€ + 6k€ / an), mais je ne les compte pas dedans, on verra bien",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Scale-up dans les médias",
    "Titre": "VP Engineering",
    "Années XP": 18,
    "Brut/CA (k€)": 120,
    "Contrat": "CDI",
    "Package (k€)": 120,
    "Détails package": "300k€ d'actions en BSA",
    "Remarques libres": "Freelance pour la même boîte pendant 10 ans avant de passer en CDI."
  },
  {
    "Entreprise": "Filiale du groupe Accor à Londres",
    "Titre": "Senior Data Engineer",
    "Années XP": 4,
    "Brut/CA (k€)": 170,
    "Contrat": "Freelance",
    "Package (k€)": 170,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Datadog",
    "Titre": "Senior Software Engineer",
    "Années XP": 10,
    "Brut/CA (k€)": 91.5,
    "Contrat": "CDI",
    "Package (k€)": 91.5,
    "Détails package": "9,900 DDOG stock option sur 4 ans + 2,781 DDOG RSU sur 3 ans",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Platform.sh",
    "Titre": "Product Manager Developer Experience",
    "Années XP": 20,
    "Brut/CA (k€)": 72,
    "Contrat": "CDI",
    "Package (k€)": 92,
    "Détails package": "BSPCE, Prime télétravail (150€ brut/mois), programme Wellness (remboursement), budget formation (remboursement)",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Red Hat",
    "Titre": "Principal Software Engineer",
    "Années XP": 20,
    "Brut/CA (k€)": 70,
    "Contrat": "CDI",
    "Package (k€)": 80,
    "Détails package": "Primes jusqu'à 15% du brut",
    "Remarques libres": "Les Red Hatters sont conscients d'avoir un salaire moins intéressant que ce qui se pratique dans d'autres boîtes équivalentes, mais que la qualité des conditions travail compense le côté financier"
  },
  {
    "Entreprise": "Freelance",
    "Titre": "Tech Lead Front-end",
    "Années XP": 10,
    "Brut/CA (k€)": 105,
    "Contrat": "Freelance",
    "Package (k€)": 105,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Doctolib",
    "Titre": "Senior staff engineer",
    "Années XP": 20,
    "Brut/CA (k€)": 94,
    "Contrat": "CDI",
    "Package (k€)": "Confidentiel",
    "Détails package": "Confidentiel",
    "Remarques libres": ""
  },
  {
    "Entreprise": "ZEBet",
    "Titre": "Développeur mobile",
    "Années XP": 6,
    "Brut/CA (k€)": 144,
    "Contrat": "Freelance",
    "Package (k€)": 144,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Swile",
    "Titre": "Senior Software Engineer",
    "Années XP": 9,
    "Brut/CA (k€)": 61,
    "Contrat": "CDI",
    "Package (k€)": 63,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Mirakl",
    "Titre": "Senior Software Engineer",
    "Années XP": 13,
    "Brut/CA (k€)": 71,
    "Contrat": "CDI",
    "Package (k€)": 71,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "DevOps",
    "Années XP": 4,
    "Brut/CA (k€)": 52,
    "Contrat": "CDI",
    "Package (k€)": 52,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Tech Lead",
    "Années XP": 7,
    "Brut/CA (k€)": 110,
    "Contrat": "CDI",
    "Package (k€)": 110,
    "Détails package": "BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "GAFAM",
    "Titre": "Sr Dev Advocate",
    "Années XP": 14,
    "Brut/CA (k€)": 98,
    "Contrat": "CDI",
    "Package (k€)": 145,
    "Détails package": "Annuel: 20% bonus cash, 30k$ RSU sur 4 ans. Embauche: 50k€ cash, 150k$ RSU sur 4 ans, 1.5k€ d'avantages CE, beaucoup de congés",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Cardiff",
    "Titre": "Dev backend senior",
    "Années XP": 11,
    "Brut/CA (k€)": 140,
    "Contrat": "Freelance",
    "Package (k€)": 140,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Datadog",
    "Titre": "Software Engineer 2",
    "Années XP": 7,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 145,
    "Détails package": "80k$ de RSU sur 4 ans à l'embauche + 2 fois 100k$ de recharge \"au mérite\" en 2 ans = 280k$",
    "Remarques libres": "La volatilité de l'action et l'évolution du cours $\\€ font pas mal bouger le package avec le temps, et complique bien la déclaration d'impôts lors des ventes 😁. Sans compter le programme d'ESPP pour acheter des actions à -15%."
  },
  {
    "Entreprise": "Licorne Tech US",
    "Titre": "Director of Engineering",
    "Années XP": 15,
    "Brut/CA (k€)": 150,
    "Contrat": "CDI",
    "Package (k€)": 150,
    "Détails package": "Stock options en plus mais confidentiel",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Shopify",
    "Titre": "Staff Developer",
    "Années XP": 25,
    "Brut/CA (k€)": 140,
    "Contrat": "CDI",
    "Package (k€)": 215,
    "Détails package": "RSU",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Senior Software Engineer",
    "Années XP": 10,
    "Brut/CA (k€)": 78,
    "Contrat": "CDI",
    "Package (k€)": 118,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Refer",
    "Titre": "Lead Frontend",
    "Années XP": 13,
    "Brut/CA (k€)": 63,
    "Contrat": "CDI",
    "Package (k€)": 63,
    "Détails package": "",
    "Remarques libres": "Je suis à mi-temps (24h/semaine) mais j'ai indiqué l'équivalent si plein temps."
  },
  {
    "Entreprise": "Obat",
    "Titre": "Lead Frontend Developer",
    "Années XP": 12,
    "Brut/CA (k€)": 60,
    "Contrat": "CDI",
    "Package (k€)": 60,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Dans la foodtech",
    "Titre": "Lead tech",
    "Années XP": 12,
    "Brut/CA (k€)": 150,
    "Contrat": "Freelance",
    "Package (k€)": 150,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Efficity",
    "Titre": "Architecte Logiciel",
    "Années XP": 11,
    "Brut/CA (k€)": 72,
    "Contrat": "CDI",
    "Package (k€)": 72,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "GitGuardian",
    "Titre": "Engineering Lead",
    "Années XP": 12,
    "Brut/CA (k€)": 85,
    "Contrat": "CDI",
    "Package (k€)": 115,
    "Détails package": "76,5k fixe + 8.5k de variable (85k) + 30k de BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Datadog",
    "Titre": "Senior iOS Engineer",
    "Années XP": 12,
    "Brut/CA (k€)": 95,
    "Contrat": "CDI",
    "Package (k€)": 250,
    "Détails package": "RSU, ESPP, Participation",
    "Remarques libres": "Pour calculer le package total j'ai multiplié le nombre de RSU que j'ai par la valeur *à ce jour*  du \"200-Day Moving Average\" de DDOG (soit 148$), et j'ai divisé le tout par 5 ans (il faut que je reste en tout 5 ans à Datadog pour pouvoir vester toutes ces RSU). Néanmoins, l'action est très variable. Depuis que je suis à Datadog, le min est à 37$ et le max à 198$. C'est donc très dûr de faire une moyenne tant que c'est pas vendu."
  },
  {
    "Entreprise": "",
    "Titre": "Developer Relations Engineer",
    "Années XP": 1,
    "Brut/CA (k€)": 100,
    "Contrat": "CDI",
    "Package (k€)": 105,
    "Détails package": "10k$ options",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Ornikar",
    "Titre": "Senior backend developer",
    "Années XP": 13,
    "Brut/CA (k€)": 64,
    "Contrat": "CDI",
    "Package (k€)": 64,
    "Détails package": "Tickets resto",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Inqom",
    "Titre": "Engineering lead",
    "Années XP": 12,
    "Brut/CA (k€)": 68,
    "Contrat": "CDI",
    "Package (k€)": 68,
    "Détails package": "BSPCE",
    "Remarques libres": "BSPCE difficile à chiffrer (>30K)"
  },
  {
    "Entreprise": "Lucca",
    "Titre": "Engineering Manager",
    "Années XP": 20,
    "Brut/CA (k€)": 71,
    "Contrat": "CDI",
    "Package (k€)": 71,
    "Détails package": "Associé",
    "Remarques libres": "Chez Lucca, salaire libre pour les + de 3 ans. Mais il faut savoir le justifier."
  },
  {
    "Entreprise": "Sunday",
    "Titre": "Software engineer",
    "Années XP": 10,
    "Brut/CA (k€)": 60,
    "Contrat": "CDI",
    "Package (k€)": 80,
    "Détails package": "Aussi vacances illimitées, congés paternité de 16 semaines, et d'autres choses",
    "Remarques libres": "Je ne suis \"que\" software engineer, en passant senior j'espère bientôt le package va évoluer."
  },
  {
    "Entreprise": "",
    "Titre": "Directeur technique",
    "Années XP": 20,
    "Brut/CA (k€)": 95,
    "Contrat": "CDI",
    "Package (k€)": 105,
    "Détails package": "Bonus",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Predictice",
    "Titre": "Head of Data",
    "Années XP": 17,
    "Brut/CA (k€)": 77.5,
    "Contrat": "CDI",
    "Package (k€)": 77.5,
    "Détails package": "J’attends encore les BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Singulart",
    "Titre": "Lead Front End Developer",
    "Années XP": 7,
    "Brut/CA (k€)": 61,
    "Contrat": "CDI",
    "Package (k€)": 64,
    "Détails package": "3k€ bonus",
    "Remarques libres": "- J'ai mis ma rémunération si je ne travaillais pas au 4/5ème. -20% vu que 4/5ème. - Full remote, mais venue régulière sur Paris"
  },
  {
    "Entreprise": "Salsify",
    "Titre": "Senior SRE",
    "Années XP": 15,
    "Brut/CA (k€)": 80,
    "Contrat": "CDI",
    "Package (k€)": 80,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Deezer",
    "Titre": "Lead SRE",
    "Années XP": 12,
    "Brut/CA (k€)": 70,
    "Contrat": "CDI",
    "Package (k€)": 76,
    "Détails package": "Astreinte",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Yousign",
    "Titre": "Dev back ou front senior 3.3",
    "Années XP": 10,
    "Brut/CA (k€)": 66,
    "Contrat": "CDI",
    "Package (k€)": 66.15,
    "Détails package": "Frais remote mobilier et matériel, 30€ d'internet chaque mois, ticket resto Swile, BSPCE, 10 RTT, 1 congé d'ancienneté tous les 2 ans...",
    "Remarques libres": "https://blog.yousign.io/posts/parcours-carriere-engineering-chez-yousign"
  },
  {
    "Entreprise": "Alan",
    "Titre": "Senior Software Engineer",
    "Années XP": 16,
    "Brut/CA (k€)": 96,
    "Contrat": "CDI",
    "Package (k€)": 141,
    "Détails package": "BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Sunday",
    "Titre": "Senior Software Engineer",
    "Années XP": 13,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 80,
    "Détails package": "5k€ de variable + 15k€ de BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Sunday",
    "Titre": "Staff Engineer",
    "Années XP": 16,
    "Brut/CA (k€)": 95,
    "Contrat": "CDI",
    "Package (k€)": 115,
    "Détails package": "20k€ BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Ingenico",
    "Titre": "Software developer",
    "Années XP": 4,
    "Brut/CA (k€)": 50,
    "Contrat": "CDI",
    "Package (k€)": 55,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Elastic",
    "Titre": "Software engineer II",
    "Années XP": 4,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": "Difficile à calculer",
    "Détails package": "RSU (vesting sur 4 ans / 2 ans) + nouvelles acquisitions de RSUs chaque année",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Comet",
    "Titre": "CTO",
    "Années XP": 20,
    "Brut/CA (k€)": 115,
    "Contrat": "CDI",
    "Package (k€)": 115,
    "Détails package": "BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Filiale grand groupe FR (secteur de l'énergie)",
    "Titre": "Lead développeur Ionic",
    "Années XP": 15,
    "Brut/CA (k€)": 116,
    "Contrat": "Freelance",
    "Package (k€)": 116,
    "Détails package": "TJM DE 550€/jour sur 221 jour annuel, full télétravail et l’un des seuls de l'entreprise",
    "Remarques libres": "En free-lance full télétravail depuis 2017. Je cumule avec un poste en Irlande 2j semaine en remote aussi."
  },
  {
    "Entreprise": "Datadog",
    "Titre": "Staff Software Engineer",
    "Années XP": 20,
    "Brut/CA (k€)": 140,
    "Contrat": "CDI",
    "Package (k€)": 265,
    "Détails package": "RSU",
    "Remarques libres": "Le package avec les RSU est assez volatile à Datadog. Pour être plus précis ça correspond à un batch initial de 300,000$ (sur 4 ans) à l'embauche puis un refresh de 300,000$ (toujours sur 4 ans) 2 ans plus tard."
  },
  {
    "Entreprise": "",
    "Titre": "Devops",
    "Années XP": 10,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 110,
    "Détails package": "35k€ BCPE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Daevel",
    "Titre": "SRE",
    "Années XP": 10,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 75,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Alma",
    "Titre": "Staff Engineer",
    "Années XP": 22,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 75,
    "Détails package": "+ BSPCE",
    "Remarques libres": "Difficile d'évaluer les BSPCE..."
  },
  {
    "Entreprise": "Renault digital",
    "Titre": "Data engineer",
    "Années XP": 11,
    "Brut/CA (k€)": 62,
    "Contrat": "CDI",
    "Package (k€)": 62,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Sonar",
    "Titre": "Développeur",
    "Années XP": 12,
    "Brut/CA (k€)": 71,
    "Contrat": "CDI",
    "Package (k€)": 71,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Qwant",
    "Titre": "Research Engineer",
    "Années XP": 9,
    "Brut/CA (k€)": 68,
    "Contrat": "CDI",
    "Package (k€)": 68,
    "Détails package": "",
    "Remarques libres": "J'ai un profil bâtard, je suis pas vraiment dev je fais plutôt de la recherche appliquée"
  },
  {
    "Entreprise": "Université en région parisienne",
    "Titre": "Responsable d'équipe / CP technique",
    "Années XP": 27,
    "Brut/CA (k€)": 57,
    "Contrat": "CDI",
    "Package (k€)": 57,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Getaround",
    "Titre": "Senior Backend Engineer",
    "Années XP": 7,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 75,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Sunday",
    "Titre": "Software engineer",
    "Années XP": 12,
    "Brut/CA (k€)": 65,
    "Contrat": "CDI",
    "Package (k€)": 83,
    "Détails package": "15k€ BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Smile",
    "Titre": "Ingénieur R&D DevOps/Dev",
    "Années XP": 21,
    "Brut/CA (k€)": 62,
    "Contrat": "CDI",
    "Package (k€)": 62,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Shopify",
    "Titre": "Senior Developer",
    "Années XP": 12,
    "Brut/CA (k€)": 99,
    "Contrat": "CDI",
    "Package (k€)": 140,
    "Détails package": "Lifestyle grant 3700€, RSU USD 112K",
    "Remarques libres": "Pas sûr que les RSU seront renouvelés tous les ans sous forme de refresher."
  },
  {
    "Entreprise": "Dataiku",
    "Titre": "Senior dev fullstack",
    "Années XP": 12,
    "Brut/CA (k€)": 75,
    "Contrat": "CDI",
    "Package (k€)": 75,
    "Détails package": "80k€ de BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "TechProductInsight",
    "Titre": "Dirigeant dev fullstack",
    "Années XP": 7,
    "Brut/CA (k€)": 141,
    "Contrat": "Freelance",
    "Package (k€)": 141,
    "Détails package": "",
    "Remarques libres": "En freelance je peux déduire des charges et travailler avec le matos et équipement que je veux"
  },
  {
    "Entreprise": "",
    "Titre": "Senior developer",
    "Années XP": "",
    "Brut/CA (k€)": 200,
    "Contrat": "Freelance",
    "Package (k€)": 200,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "IBM",
    "Titre": "Senior Software Engineer",
    "Années XP": 16,
    "Brut/CA (k€)": 80,
    "Contrat": "CDI",
    "Package (k€)": 80,
    "Détails package": "Actions à 85% du prix public avec 10% du salaire mensuel, au 4/5ème",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Ornikar",
    "Titre": "Senior backend developer",
    "Années XP": 10,
    "Brut/CA (k€)": 62,
    "Contrat": "CDI",
    "Package (k€)": 62,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Prisma Media",
    "Titre": "Lead Developer",
    "Années XP": 12,
    "Brut/CA (k€)": 68,
    "Contrat": "CDI",
    "Package (k€)": 68,
    "Détails package": "Convention cadre de la presse magazine. 9 semaines de congés. CE. Mutuelle. Tickets resto. Cantine. Télétravail.",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Beta Gouv",
    "Titre": "Développeur Backend Python",
    "Années XP": 20,
    "Brut/CA (k€)": 130,
    "Contrat": "Freelance",
    "Package (k€)": 130,
    "Détails package": "",
    "Remarques libres": "Au 4/5ème"
  },
  {
    "Entreprise": "Lunex",
    "Titre": "Full stack dev",
    "Années XP": 7,
    "Brut/CA (k€)": 94,
    "Contrat": "CDI",
    "Package (k€)": 120,
    "Détails package": "Bonus, stocks",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Treezor",
    "Titre": "Lead Dev Go",
    "Années XP": 15,
    "Brut/CA (k€)": 73,
    "Contrat": "CDI",
    "Package (k€)": 75,
    "Détails package": "Prime de resultat de 3k€",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Senior Dev Go",
    "Années XP": 17,
    "Brut/CA (k€)": 100,
    "Contrat": "CDI",
    "Package (k€)": 150,
    "Détails package": "BSPCE, meilleur package wemind",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Lifen",
    "Titre": "Senior front-end engineer",
    "Années XP": 12,
    "Brut/CA (k€)": 65,
    "Contrat": "CDI",
    "Package (k€)": 65,
    "Détails package": "12k BSPCE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Meritis",
    "Titre": "Architecte logiciel",
    "Années XP": 11,
    "Brut/CA (k€)": 65,
    "Contrat": "CDI",
    "Package (k€)": 65,
    "Détails package": "Salaire fixe uniquement",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Contentsquare",
    "Titre": "Customer Success on a Product for Dev",
    "Années XP": 15,
    "Brut/CA (k€)": 60,
    "Contrat": "CDI",
    "Package (k€)": 75,
    "Détails package": "60k€ + bonus on objective + BSPCE à deux ans + divers indemnités et soutiens pour un montant de 3k€/an",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Emplifi.io",
    "Titre": "Team Lead - Dev",
    "Années XP": 8,
    "Brut/CA (k€)": 68,
    "Contrat": "CDI",
    "Package (k€)": 68,
    "Détails package": "RAS mais avantages parentaux en cours de négo, vacances 5+2 RTT semaines",
    "Remarques libres": "Poste que j'ai gardé à mon retour d'expatriation de Montréal (4 ans là bas dont 2 ans dans cette entreprise). Pas trouvé mieux en Normandie niveau salaire/conditions de travail donc j'y reste, la flemme de chercher mieux sur Paris pour l'instant"
  },
  {
    "Entreprise": "DeepReach",
    "Titre": "Senior Software Developpr",
    "Années XP": 12,
    "Brut/CA (k€)": 80,
    "Contrat": "CDI",
    "Package (k€)": 95,
    "Détails package": "BSPCE 15k€",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Microsoft",
    "Titre": "Principal Software Engineer",
    "Années XP": 20,
    "Brut/CA (k€)": 120,
    "Contrat": "CDI",
    "Package (k€)": 200,
    "Détails package": "40k€ Bonus Cash et 40k€ Bonus RSU",
    "Remarques libres": ""
  },
  {
    "Entreprise": "api.video",
    "Titre": "Infra",
    "Années XP": 9,
    "Brut/CA (k€)": 120,
    "Contrat": "CDI",
    "Package (k€)": 180,
    "Détails package": "BSCPE",
    "Remarques libres": ""
  },
  {
    "Entreprise": "KissKissBankBank",
    "Titre": "Lead dev back (Ruby)",
    "Années XP": 10,
    "Brut/CA (k€)": 78,
    "Contrat": "CDI",
    "Package (k€)": 78,
    "Détails package": "5k€ notes de frais, RTT, tickets resto",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Ledger",
    "Titre": "Principal Software Engineer",
    "Années XP": 22,
    "Brut/CA (k€)": 95,
    "Contrat": "CDI",
    "Package (k€)": 140,
    "Détails package": "BSPCE 35k€, variable 10k€",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Getaround",
    "Titre": "Senior Full-Stack Engineer",
    "Années XP": 6,
    "Brut/CA (k€)": 65,
    "Contrat": "CDI",
    "Package (k€)": 65,
    "Détails package": "5000 RSU (valeur pas claire)",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Swile",
    "Titre": "iOS senior developer",
    "Années XP": 14,
    "Brut/CA (k€)": 61,
    "Contrat": "CDI",
    "Package (k€)": 61,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Architect",
    "Années XP": 20,
    "Brut/CA (k€)": 130,
    "Contrat": "CDI",
    "Package (k€)": 160,
    "Détails package": "Options + Bonus",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Scale-up UK",
    "Titre": "Software Engineer",
    "Années XP": 2.5,
    "Brut/CA (k€)": 72,
    "Contrat": "CDI",
    "Package (k€)": 84,
    "Détails package": "10% bonus, 23k€/4ans stocks",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Ankorstore",
    "Titre": "Senior Quality Engineer",
    "Années XP": 15,
    "Brut/CA (k€)": 65,
    "Contrat": "CDI",
    "Package (k€)": 91,
    "Détails package": "26k€ euros en BSPCE",
    "Remarques libres": "Tu parles d'exp en dev mais je ne suis plus dev depuis 6 ans, par contre je l'étais avant"
  },
  {
    "Entreprise": "Maze",
    "Titre": "Eng manager",
    "Années XP": 20,
    "Brut/CA (k€)": 120,
    "Contrat": "Portage salarial",
    "Package (k€)": 300,
    "Détails package": "Equivalent BSPCE + ben + mutuelle",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Datadog",
    "Titre": "Engineering team lead",
    "Années XP": 7,
    "Brut/CA (k€)": 88,
    "Contrat": "CDI",
    "Package (k€)": 200,
    "Détails package": "Salaire + ~150k $ / ans en RSU",
    "Remarques libres": ""
  },
  {
    "Entreprise": "PrestaShop",
    "Titre": "Développeur Core (projet open source)",
    "Années XP": 12,
    "Brut/CA (k€)": 57,
    "Contrat": "CDI",
    "Package (k€)": 57,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Intérim digital",
    "Titre": "SRE senior",
    "Années XP": 10,
    "Brut/CA (k€)": 134,
    "Contrat": "CDI",
    "Package (k€)": 177,
    "Détails package": "100k€ de BSPCE sur 3 ans",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Grande entreprise e-commerce France",
    "Titre": "Développeur",
    "Années XP": 8,
    "Brut/CA (k€)": 55,
    "Contrat": "CDI",
    "Package (k€)": 61,
    "Détails package": "10% de variable atteint chaque année car équipe de qualité et les objectifs sont en grande majorité des OKR d'équipe",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Doctolib",
    "Titre": "Staff Engineer",
    "Années XP": 4,
    "Brut/CA (k€)": 70,
    "Contrat": "CDI",
    "Package (k€)": 127.5,
    "Détails package": "70k€ + 230k€ BSPCE sur 4 ans (une fois l’intégralité vestée une fois leur coût d’excercice payé)",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Neo4j",
    "Titre": "Developer",
    "Années XP": 13,
    "Brut/CA (k€)": 125,
    "Contrat": "CDI",
    "Package (k€)": 125,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Squadracer",
    "Titre": "Ingénieur Développement",
    "Années XP": 24,
    "Brut/CA (k€)": 55,
    "Contrat": "CDI",
    "Package (k€)": 55,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Shopify",
    "Titre": "Senior Software Developer",
    "Années XP": 7,
    "Brut/CA (k€)": 110,
    "Contrat": "CDI",
    "Package (k€)": 148,
    "Détails package": "105k€ de RSU sur 3 ans + 3k€ budget lifestyle annuel",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Veepee",
    "Titre": "Lead Developer",
    "Années XP": 9,
    "Brut/CA (k€)": 71.5,
    "Contrat": "CDI",
    "Package (k€)": 71.5,
    "Détails package": "71,5k€ de fixe brut + 10% bonus de ce brut par an sur objectifs",
    "Remarques libres": "Selon la team, l'équilibre pro/perso est vraiment correct"
  },
  {
    "Entreprise": "Squadracer",
    "Titre": "Software Engineer",
    "Années XP": 3,
    "Brut/CA (k€)": 55,
    "Contrat": "CDI",
    "Package (k€)": "",
    "Détails package": "BSPCE + ticket restaurant + mutuelle + Navigo prise en charge à 100%",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Squadracer",
    "Titre": "Développeur",
    "Années XP": 1,
    "Brut/CA (k€)": 55,
    "Contrat": "CDI",
    "Package (k€)": 55,
    "Détails package": "BSPCE 1%",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Swile",
    "Titre": "Head of Engineering",
    "Années XP": 18,
    "Brut/CA (k€)": 100,
    "Contrat": "CDI",
    "Package (k€)": "Confidentiel",
    "Détails package": "Confidentiel (> 100k€ BSPCE)",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Devops",
    "Années XP": 8,
    "Brut/CA (k€)": 120,
    "Contrat": "Freelance",
    "Package (k€)": 120,
    "Détails package": "TJM 500€ sur 20j/mois en full-time donc",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "VP Eng",
    "Années XP": 14,
    "Brut/CA (k€)": "",
    "Contrat": "CDI",
    "Package (k€)": 85,
    "Détails package": "Bonus",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Data engineer",
    "Années XP": 6,
    "Brut/CA (k€)": 50,
    "Contrat": "CDI",
    "Package (k€)": 55,
    "Détails package": "Participation, 100% du titre de transport, tickets resto",
    "Remarques libres": ""
  },
  {
    "Entreprise": "OVHcloud",
    "Titre": "SRE",
    "Années XP": 5,
    "Brut/CA (k€)": 51,
    "Contrat": "CDI",
    "Package (k€)": 67,
    "Détails package": "Convention collective de la métallurgie, Intéressement, Participation, Gympass, Ticket restaurants, CSE/Meyclub (+600€ dont 150€ vacances, 200€ pour sport, Cinéma, Culture, Noël, etc), Berceaux de crèche (+réduction tarifaire), Indemnité Kilométrique Vélo annuel, 13ème mois, Equipement pour télétravail (dock, écrans), subvention équipement bureau/télétravail, Compte Epargne Temps (CET), réduction location SiXT",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Molotov TV",
    "Titre": "Software Backend Engineer",
    "Années XP": 6,
    "Brut/CA (k€)": 52.5,
    "Contrat": "CDI",
    "Package (k€)": 52.5,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Elastic",
    "Titre": "Senior SRE",
    "Années XP": 14,
    "Brut/CA (k€)": 80,
    "Contrat": "CDI",
    "Package (k€)": 110,
    "Détails package": "RSU entre 30k$ et 45k$ selon les années",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Licorne tech FR",
    "Titre": "Engineering Director",
    "Années XP": 14,
    "Brut/CA (k€)": 135,
    "Contrat": "CDI",
    "Package (k€)": 300,
    "Détails package": "Bonus sur objectifs : 20k€, Bspce : 145k€",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Squadracer",
    "Titre": "CEO/CTO/dev",
    "Années XP": 20,
    "Brut/CA (k€)": 84,
    "Contrat": "CDI (président assimilé salariés)",
    "Package (k€)": 136,
    "Détails package": "50k€ de dividende -> 36k€ net d'impôt sur le revenu + 2k€ de prime de fin d'année",
    "Remarques libres": "2 ans sans salaire (mais chômage) avant de se payer depuis 2 ans."
  },
  {
    "Entreprise": "Veepee",
    "Titre": "Software Engineer",
    "Années XP": 3,
    "Brut/CA (k€)": 50,
    "Contrat": "CDI",
    "Package (k€)": 60,
    "Détails package": "10% Bonus + Participation/Intéressement",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "AI Engineer",
    "Années XP": 3,
    "Brut/CA (k€)": 90,
    "Contrat": "CDI",
    "Package (k€)": 115,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Startup",
    "Titre": "Sr Dev Advocate",
    "Années XP": 13,
    "Brut/CA (k€)": 85,
    "Contrat": "CDI",
    "Package (k€)": "",
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "ESN Paris",
    "Titre": "Développeur iOS / Chef de projet",
    "Années XP": 4,
    "Brut/CA (k€)": 52,
    "Contrat": "CDI",
    "Package (k€)": 58,
    "Détails package": "prime 2k€, transports 100%, TR 14e/j",
    "Remarques libres": ""
  },
  {
    "Entreprise": "",
    "Titre": "Senior Developer",
    "Années XP": 7,
    "Brut/CA (k€)": 100,
    "Contrat": "Freelance",
    "Package (k€)": 100,
    "Détails package": "",
    "Remarques libres": ""
  },
  {
    "Entreprise": "Client dans le secteur de l'e-commerce",
    "Titre": "Dev Back",
    "Années XP": 7,
    "Brut/CA (k€)": 70,
    "Contrat": "Freelance",
    "Package (k€)": 70,
    "Détails package": "4j/semaine",
    "Remarques libres": ""
  }
];