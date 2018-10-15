import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { all, hash } from 'rsvp';

export default Route.extend({
  model(params) {
    const model = {
      versions: [],
      trimLevels: [],
      engines: [],
      energies: [],
      gearboxes: [],
      transmissions: [],
    };
    return this.store.peekRecord('phase', params.phase_id).query('versions', {
      include: this.get('includedRelationship').join(','),
      meta: {
        filterable: false,
      },
      page: { size: 500 },
    }).then((versions) => {
      model.versions = versions;
      model.versions.pushObjects(versions);
      model.trimLevels.pushObjects(this._getTrimLevels(versions));
      return hash({
        engines: all(model.versions.mapBy('lastEngine')),
        energies: this._getEnergies(model.versions),
        gearbox: all(model.versions.mapBy('gearbox')),
        transmissions: all(model.versions.mapBy('lastTransmission')),
      });
    }).then((filterable) => {
      model.engines.pushObjects(filterable.engines.uniq());
      model.energies.pushObjects(filterable.energies.uniq());
      model.gearboxes.pushObjects(filterable.gearbox.uniq());
      model.transmissions.pushObjects(filterable.transmissions.uniq());
      return model;
    });
  },
  renderTemplate(controller, model) {
    this.render('lang.referential.model.generation.phase', {
      into: 'lang.referential.model',
      outlet: 'versions',
      model,
    });
  },
  includedRelationship: Object.freeze([
    'periods.engine.energy',
    'periods.transmission',
    'energy',
    'gearbox',
  ]),
  _getTrimLevels(versions) {
    const trimLevels = versions.mapBy('trimLevel').uniq();
    return trimLevels.map(trimLevel => EmberObject.create({
      id: trimLevel,
      name: trimLevel,
    }));
  },

  _getEnergies(versions) {
    return all(versions.mapBy('lastEngine'))
      .then((versionEngines) => {
        const engines = versionEngines.uniq();
        return all(engines.mapBy('energy'));
      })
      .then(engineEnergies => engineEnergies.uniq());
  },
});