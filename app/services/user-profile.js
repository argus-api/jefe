import Service from '@ember/service';  // eslint-disable-line
import { inject as service } from '@ember/service'; // eslint-disable-line
import { computed } from '@ember/object';

export default Service.extend({
  session: service(),

  userToken: computed('session.isAuthenticated', function () {
    const session = this.get('session');
    if (session.get('isAuthenticated')) {
      return session.get('data').authenticated.access_token;
    }
    return null;
  }),

  userScope: computed('userToken', function () {
    const token = this.get('userToken');
    if (token) {
      return JSON.parse(window.atob(token.split('.')[1])).ctx.scp;
    }
    return [];
  }),

  userId: computed('userToken', function () {
    const token = this.get('userToken');
    if (token) {
      const userId = JSON.parse(window.atob(token.split('.')[1])).ctx.user.id;
      return userId;
    }
    return null;
  }),

});
