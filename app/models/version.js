import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  shortNicename: DS.attr('string'),
  fullNicename: DS.attr('string'),
  numberOfDoors: DS.attr('number'),
  trimLevel: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  legacyId: DS.attr('number'),
  position: DS.attr('number'),
  numberOfPlaces: DS.attr('string'),
  quotable: DS.attr('boolean'),
  prevarable: DS.attr('boolean'),
  firstQuoteAt: DS.attr('date'),
  positionQuote: DS.attr('number'),
  quoteRatio: DS.attr('number'),

  phase: DS.belongsTo({ async: true }),
  generation: DS.belongsTo({ async: true }),
  submodel: DS.belongsTo({ async: true }),
  model: DS.belongsTo({ async: true }),
  make: DS.belongsTo({ async: true }),
  periods: DS.hasMany({ async: true }),
  features: DS.hasMany({ async: true }),
  standardFeatures: DS.hasMany({ async: true }),
  optionalFeatures: DS.hasMany({ async: true }),
  equipments: DS.hasMany({ async: true }),
  standardEquipments: DS.hasMany({ async: true }),
  optionalEquipments: DS.hasMany({ async: true }),
  packs: DS.hasMany({ async: true }),
  standardPacks: DS.hasMany({ async: true }),
  optionalPacks: DS.hasMany({ async: true }),
  energy: DS.belongsTo({ async: true }),
  gearbox: DS.belongsTo({ async: true }),

  // Computed properties

  lastPeriod: computed('periods', function () {
    return DS.PromiseObject.create({
      promise: this.get('periods')
        .then((periods) => {
          const periodsArray = periods.toArray().sortBy('id');
          return periodsArray.lastObject;
        }),
    });
  }),
  lastEngine: computed('lastPeriod', function () {
    const lastPeriodPromise = this.get('lastPeriod');
    return DS.PromiseObject.create({
      promise: lastPeriodPromise.then((lastPeriod) => lastPeriod.get('engine')),
    });
  }),
  lastTransmission: computed('lastPeriod', function () {
    const lastPeriodPromise = this.get('lastPeriod');
    return DS.PromiseObject.create({
      promise: lastPeriodPromise.then((lastPeriod) => lastPeriod.get('transmission')),
    });
  }),
});
