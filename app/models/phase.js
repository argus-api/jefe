import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  shortNicename: DS.attr('string'),
  fullNicename: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  legacyId: DS.attr('number'),
  position: DS.attr('number'),

  make: DS.belongsTo({ async: true }),
  model: DS.belongsTo({ async: true }),
  submodel: DS.belongsTo({ async: true }),
  generation: DS.belongsTo({ async: true }),
  versions: DS.hasMany({ async: true })
});
