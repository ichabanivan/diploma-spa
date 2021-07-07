
// outsource dependencies

// local dependencies
import { defineRoute } from '../services/route';

export const LAYOUT = '/private';

export const NEWS = defineRoute(`${LAYOUT}/news`);
export const NEWS_LIST = defineRoute(`${NEWS.ROUTE}/list`);
export const NEWS_EDIT = defineRoute(`${NEWS.ROUTE}/:category`, {
  params: [
    opt => ({ short: 'c', name: 'category', defaults: '', ...opt }),
  ]
});
