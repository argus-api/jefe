import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    console.log(params);
    return RSVP.hash({
      make: this.get('store').findRecord('make', params.id, {
        include: 'models,models.submodels,categories',
        reload: true,
      }),
      topMakeVehicles: this.get('store').query('version', {
        sort: '-quote-ratio',
        include: 'make,submodel',
        page: { size: 5 },
        filter: {           //Need API update
          // quotable: true,
          // make: params.id
        },
        meta: {
          filterable: false,
        },
      }),
      latestMakeVehicles: this.get('store').query('version', {
        sort: '-id',
        include: 'make,submodel',
        page: { size: 5 },
        meta: {
          filterable: false,
        },
        // filter: {           //Need API update
        //   make: params.id
        // },
      }),
    });
  },
});
