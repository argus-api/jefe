import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { isEmpty } from '@ember/utils';
import moment from 'moment';
import $ from 'jquery';


export function formatDate([date], args) {
  const format = 'MMMM YYYY';
  moment.locale($('html').attr('lang'));

  if (isEmpty(date)) {
    return htmlSafe(`<span class="font-grey-silver">${args.noDateText}</span>`);
  }
  return moment(date).format(format);
}

export default Helper.helper(formatDate);
