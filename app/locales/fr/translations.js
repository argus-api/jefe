export default {
  application: {
    home: 'Tableau de bord',
    moreInfo: 'En savoir plus',
    noDate: 'Pas de date disponible.',
    pending: 'Chargement des données',
  },

  index: {
    header: 'Les possibilités de l\'API',
    subheader: 'présentation',
    search: {
      title: 'Recherche de véhicule',
      description: 'Rechercher un véhicule dans le Référentiel® Argus.',
    },
    referential: {
      title: 'Référentiel',
    },
    quote: {
      title: 'La Cote Argus',
      description: 'La Cote Argus® et les Valeurs Argus de marché.',
    },
    plate: {
      title: 'Chercher par immatriculation',
    },
    dashboard: {
      topMakes: 'Constructeurs populaires',
      topVehicles: 'Véhicules populaires',
      latestVehicles: 'Derniers véhicules',
    },
  },

  login: {
    title: {
      signIn: 'Identifiez-vous',
    },
    form: {
      applicationId: 'Clé de l\'application',
      applicationSecret: 'Clé secrète de l\'application',
      username: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      isRemembered: 'Mémoriser ?',
    },
    button: {
      signIn: 'Me connecter',
    },
  },

  pageHeader: {
    myProfile: 'Mon Profil',
    signOut: 'Se déconnecter',
  },

  makeList: {
    title: 'Liste des constructeurs',
    displayDateSince: 'Depuis {{startDate}}',
    displayDateWithEnd: 'De {{startDate}} à {{endDate}}',
    noMatching: 'Aucun élément trouvé pour cette lettre.',
  },

  makeSheet: {
    title: 'Fiche constructeur',
    informations: {
      title: 'Informations',
      quote: 'Position cote: ',
    },
    topVehicles: 'Véhicules populaires',
    latestVehicles: 'Derniers véhicules',
    categories: 'Catégories',
    models: {
      title: 'Modèles et sous-modèles',
    },
  },

  modelTimeline: {
    title: 'Chronologie du modèle',
    informations: 'Informations',
    index: 'Index',
    generation: 'Génération',
    phase: 'Phase',
    today: 'Aujourd\'hui',
  },

  vehicleSheet: {
    title: 'Fiche véhicule',
    identity: 'Identité du véhicule',
    priceAndQuote: {
      title: 'Prix et cote',
      priceEvolution: {
        title: 'Évolution du prix',
        legend: 'Prix TTC',
      },
      quote: {
        title: 'Cote',
        quotable: 'Cotable',
        first: 'Première cote',
        prevarable: 'Prevarable',
      },
    },
    specsBlock: {
      dimensions: 'Dimensions et poids',
      technical: 'Spécifications technique',
      performance: 'Performances et consommation',
      stdEquipments: 'Équipement de série',
      optEquipments: 'Équipement optionnels',
      stdPacks: 'Packs de série',
      optPacks: 'Packs optionnels',
    },
    equipmentsLabels: {
      manRef: 'Ref. constructeur',
      name: 'Nom',
      category: 'Catégory',
      priceHT: 'Prix HT',
      priceTTC: 'Prix TTC',
    },
    equipments: 'Équipements',
    argusId: 'Id Argus',
  },

  prices: {
    ttc: 'TTC',
    ht: 'HT',
  },

  techData: {
    notSpecified: 'Non spécifié',
    units: {
      liter: 'L',
      cc: 'cm³',
      mm: 'mm',
      kg: 'kg',
      kw: 'kW',
      hp: 'ch',
      cx: 'cx',
      rpm: 'tr/min',
      nm: 'Nm',
      cv: 'CV',
      m: 'm',
      degree: 'degré',
      sec: 'sec',
      kph: 'km/h',
      l100km: 'L/100km',
      km: 'km',
      gpkm: 'g/km',
    },
    dimensions: {
      title: 'Dimensions',
      length: 'Longueur',
      width: 'Largeur',
      height: 'Hauteur',
      heightIncludingRoofRails: 'Hauteur avec barres de toit',
      wheelBase: 'Empattement',
      fuelTank: 'Réservoir',
      frontOverhang: 'Porte à faux avant',
      rearOverhang: 'Porte à faux arrière',
      frontTrack: 'Voies avant',
      rearTrack: 'Voies arrière',
      dragCoefficent: 'Coefficient d\'aérodynamisme',
    },
    tyre: {
      title: 'Pneumatiques',
      wheelType: 'Matériau des jantes',
      tyreType: 'Type de pneumatiques',
      front: 'Taille des roues avant',
      rear: 'Taille des roues arrière',
      sparewheelType: 'Roue de secours',
    },
    weight: {
      title: 'Poids',
      kerbweight: 'Poids à vide',
      kerbweightIncludingDriver: 'Poids à vide avec chauffeur',
      grossVehicleRating: 'PTAC',
      grossCombinedRating: 'PTRA',
      payload: ' Charge utile',
      unbrakedTrailer: 'Poids tracté non freiné',
    },
    habitability: {
      title: 'Habitabilité',
      numberOfPlaces: 'Nombre de places',
      numberOfDoors: 'Nombre de portes',
    },
    boot: {
      title: 'Coffre',
      capacity: 'Capacité',
      minimumCapacity: 'Capacité minimale',
      maximumCapacity: 'Capacité maximale',
      maximumLength: 'Longueur maximale',
      usableLength: 'Longueur utilisable',
      usableWidth: 'Largeur utilisable',
      loadStillHeight: 'Hauteur de seuil de chargement',
      thirdRowCapacity: 'Capacité de la troisième rangée',
    },
    energy: {
      title: 'Énergie',
      name: 'Nom',
      code: 'Code',
      masterId: 'Master id',
      masterName: 'Master name',
      masterCode: 'Master code',
      legacyId: 'Legacy id',
    },
    engine: {
      title: 'Moteur',
      marketName: 'Nom',
      powerMarketName: 'Puissance commercial',
      fullNicename: 'Nom complet',
      acronym: 'Acronyme',
      layout: 'Disposition',
      configuration: 'Architecture',
      supply: 'Aspiration',
      injectionSystem: 'Alimentation',
      literCapacity: 'Cylindrée en litre',
      cubicCapacity: 'Cylindrée en cc',
      dinHorsepower: 'Puissance en chevaux',
      kilowatt: 'Puissance en kilowatt',
      maxPowerRpm: 'Au régime de',
      torque: 'Couple',
      maxTorqueRpm: 'Au régime de',
      numberOfValves: 'Nombre de soupapes',
      boreAndStroke: 'Alésage/course',
      compressionRatio: 'Rapport volumétrique',
      emission: 'Norme anti-pollution',
      fiscalHorsepower: 'Puissance fiscale',
    },
    gearbox: {
      title: 'Boîte de vitesses',
      name: 'Nom',
      marketingName: 'Nom commercial',
      subtype: 'Type',
      numberOfGears: 'Nombre de vitesses',
      code: 'Code',
      legacyId: 'Legacy id',
    },
    transmission: {
      title: 'Transmission',
      marketingName: 'Nom commercial',
      drivenWheels: 'Mode de transmission',
      numberOfGears: 'Nombre de vitesses',
    },
    platform: {
      title: 'Châssis',
      chassisType: 'Type',
      chassisMaterial: 'Matériau',
      powerSteering: 'Direction assistée',
      powerSteeringAssistance: 'Type de direction',
      powerSteeringType: 'Type de direction',
      turningCircleBetweenKerbs: 'Diamètre de braquage (trottoir)',
      turningCircleWallToWall: 'Diamètre de braquage (mur)',
      steeringWheelLockToLockTurns: 'Rotation du volant',
      frontSuspension: 'Type de suspension avant',
      rearSuspensionType: 'Type de suspension arrière',
    },
    performance: {
      title: 'Performances',
      maximumSpeed: 'Vitesse maximale',
      da0100kph: '0 à 100 km/h',
      da01000m: '1000 mètres DA',
    },
    consumption: {
      title: 'Consommation',
      urbanFuel: ' Cycle urbain',
      extraUrbanFuel: 'Extra urbain',
      combinedFuel: 'Mixte',
      electricRange: 'Autonomie électrique',
      co2EmissionLevel: 'Emission de CO2',
      carbonMonoxide: 'Emission de CO',
      nitrousOxyde: 'Nox emission',
      particulateMatter: 'Emission de particules',
      totalHydrocarbons: 'Emission totale',
    },
  },
};
