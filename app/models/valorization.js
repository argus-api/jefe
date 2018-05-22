import DS from 'ember-data';

export default DS.Model.extend({
  offer: DS.attr('string'),
  mileage: DS.attr('number'),
  releasedAt: DS.attr('date'),
  businessTarget: DS.attr('string'),

  order: DS.belongsTo({ async: true }),
  values: DS.hasMany({ async: true }),

  version: DS.belongsTo(),
  features: DS.hasMany(),
});