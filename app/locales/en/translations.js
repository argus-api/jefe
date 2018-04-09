export default {
  application: {
    home: 'Dashbord',
    moreInfo: 'More details',
    noDate: 'No date available',
  },

  index: {
    header: 'API features',
    subheader: 'showcase',
    search: {
      title: 'Vehicle Search',
      description: 'Find a vehicule in Argus database.',
    },
    referential: {
      title: 'Referential',
    },
    quote: {
      title: 'Argus Quote',
      description: 'Argus quote and others maket values.',
    },
    plate: {
      title: 'Search by plate number',
    },
    showroom: {
      title: 'Showroom',
      make: {
        title: 'Make',
        change: 'Change make',
      },
      models: {
        title: 'Models',
      },
      model: {
        title: 'Model',
        change: 'Change model',
        submodels: 'Submodels',
        submodel: {
          title: 'Submodel',
          change: 'Change submodel',
          generations: 'Generations',
          generation: {
            title: 'Generation',
            change: 'Change generation',
            phases: 'Phase',
            phase: {
              title: 'Phases',
              change: 'Change phase',
              versions: 'Versions',
              version: {
                title: 'Version',
                change: 'Change version',
                energy: 'Energy',
                gearbox: 'Gearbox',
                periods: 'Periods',
                period: {
                  title: 'Period',
                  change: 'Change périod',
                  weight: 'Weight',
                  tyres: 'Tyres',
                  transmission: 'Transmission',
                  platform: 'Platform',
                  performances: 'Performances',
                  consumption: 'Consumption',
                  dimensions: 'Dimensions',
                  boot: 'Boot',
                  engine: 'Engine',
                  feature: 'Options',
                  equipments: 'Equipments',
                },
              },
            },
          },
        },
      },
    },
  },

  login: {
    title: {
      signIn: 'Sign in',
    },
    form: {
      applicationId: 'Application Key',
      applicationSecret: 'Application Secret Key',
      username: 'Username',
      password: 'Password',
      isRemembered: 'Remember me?',
    },
    button: {
      signIn: 'Login',
    },
  },

  pageHeader: {
    myProfile: 'My Profile',
    signOut: 'Sign out',
  },

  makeList: {
    title: 'Make List',
    displayDateSince: 'Since {{startDate}}',
    displayDateWithEnd: 'From {{startDate}} to {{endDate}}',
    noMatching: 'No matching entries for this letter.',
  },

  models: {
    base: {
      id: 'Argus ID',
      name: 'Name',
      startDate: 'Start date',
      endDate: 'End date',
      positionQuote: 'Position quote',
      legacyId: 'Argus ID',
    },
  },


  techData: {
    notSpecified: 'Not specified',
    units: {
      liter: 'L',
      cc: 'cm³',
      mm: 'mm',
      kg: 'kg',
      kw: 'kW',
      hp: 'hp',
      cx: 'cx',
      rpm: 'rpm',
      nm: 'Nm',
      cv: 'hp',
      m: 'm',
      degree: 'degree',
      sec: 'sec',
      kph: 'kph',
      l100km: 'L/100km',
      km: 'km',
      gpkm: 'g/km',
    },
    dimensions: {
      title: 'Dimensions',
      length: 'Length',
      width: 'Width',
      height: 'Height',
      heightIncludingRoofRails: 'Height with roof rails',
      wheelBase: 'Wheelbase',
      fuelTank: 'Fuel tank',
      frontOverhang: 'Front overhang',
      rearOverhang: 'Rear overhang',
      frontTrack: 'Front track',
      rearTrack: 'Rear track',
      dragCoefficent: 'Drag coefficient',
    },
    tyre: {
      title: 'Tyres',
      wheelType: 'Wheel type',
      tyreType: 'Tyres type',
      front: 'Front wheels size',
      rear: 'Rear wheels size',
      sparewheelType: 'Spare wheel',
    },
    weight: {
      title: 'Weight',
      kerbweight: 'Kerb weight',
      kerbweightIncludingDriver: 'Kerb weight with driver',
      grossVehicleRating: 'Gross vehicle rating',
      grossCombinedRating: 'Gross combined rating',
      payload: 'Payload',
      unbrakedTrailer: 'Unbraked trailer',
    },
    habitability: {
      title: 'Habitability',
      numberOfPlaces: 'Number of places',
      numberOfDoors: 'Number of doors',
    },
    boot: {
      title: 'Boot',
      capacity: 'Capacity',
      minimumCapacity: 'Minimum capacity',
      maximumCapacity: 'Maximum capacity',
      maximumLength: 'Maximum length',
      usableLength: 'Usable length',
      usableWidth: 'Usable width',
      loadStillHeight: 'Load sill height',
    },
    energy: {
      title: 'Energy',
      name: 'Name',
      code: 'Code',
      masterId: 'Master id',
      masterName: 'Master name',
      masterCode: 'Master code',
      legacyId: 'Legacy id',
    },
    engine: {
      title: 'Engine',
      marketName: 'Name',
      powerMarketName: 'Power market name',
      fullNicename: 'Full nice name',
      acronym: 'Acronym',
      layout: 'Layout',
      configuration: 'Configuration',
      supply: 'Aspiration',
      injectionSystem: 'Fuel System',
      literCapacity: 'Liter displacement',
      cubicCapacity: 'CC Displacement',
      dinHorsepower: 'Din horsepower',
      kilowatt: 'Kilowatt power',
      maxPowerRpm: 'To the regime of',
      torque: 'Torque',
      maxTorqueRpm: 'To the regime of',
      numberOfValves: 'Number of valves',
      boreAndStroke: 'Bore/Stroke',
      compressionRatio: 'Compression ratio',
      emission: 'Anti-pollution standard',
      fiscalHorsepower: 'Fiscal horsepower',
    },
    gearbox: {
      title: 'Gearbox',
      name: 'Name',
      marketingName: 'Market name',
      subtype: 'Type',
      numberOfGears: 'Number of gears',
      code: 'Code',
      legacyId: 'Legacy id',
    },
    transmission: {
      title: 'transmission',
      marketingName: 'Market name',
      drivenWheels: 'Transmission mode',
      numberOfGears: 'Number of gears',
    },
    platform: {
      title: 'Chassis',
      chassisType: 'Type',
      chassisMaterial: 'Material',
      powerSteering: 'Power steering',
      powerSteeringAssistance: 'Steering type',
      powerSteeringType: 'Power steering type',
      turningCircleBetweenKerbs: 'Turning circle (sidewalk)',
      turningCircleWallToWall: 'Turning circle (wall)',
      steeringWheelLockToLockTurns: 'Steering wheel rotation',
      frontSuspension: 'Front suspension type',
      rearSuspensionType: 'Rear suspension type',
    },
    performance: {
      title: 'Performances',
      maximumSpeed: 'Maximum speed',
      da0100kph: 'Acceleration 0-100km/h',
      da01000m: 'Standing 1000m',
    },
    consumption: {
      title: 'Consumption',
      totalFuel: 'Urban cycle',
      extraUrbanFuel: 'Extra urban',
      combinedFuel: 'Mixed',
      electricRange: 'Electrique range',
      co2EmissionLevel: 'CO2 emissions',
      carbonMonoxide: 'CO emissions',
      nitrousOxyde: 'Nox emission',
      particulateMatter: 'Particles emissions',
      totalHydrocarbons: 'Total emissions',
    },
  },
};
