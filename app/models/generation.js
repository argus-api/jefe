import DS from 'ember-data';
import { computed } from '@ember/object';
import HasManyQuery from 'ember-data-has-many-query';
import DisplayDateMixin from '../mixins/display-date';

export default DS.Model.extend(DisplayDateMixin, HasManyQuery.ModelMixin, {
  name: DS.attr('string'),
  shortNicename: DS.attr('string'),
  fullNicename: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  bodyType: DS.attr('string'),
  legacyId: DS.attr('number'),
  bodyTypeClassifiedAd: DS.attr('string'),
  position: DS.attr('number'),
  segment: DS.attr('string'),
  segmentReferentiel: DS.attr('string'),
  segmentEurope: DS.attr('string'),

  make: DS.belongsTo({ async: true }),
  model: DS.belongsTo({ async: true }),
  submodel: DS.belongsTo({ async: true }),
  phases: DS.hasMany({ async: true }),


  // Computed properties
  phaseSorting: computed('', function () { // eslint-disable-line
    return ['startDate:desc'];
  }),
  sortedPhases: computed.sort('phases', 'phaseSorting'),

});
