
// outsource dependencies

// local dependencies
import { defineRoute } from '../services/route';

export const LAYOUT = '/private';

export const NEWS = defineRoute(`${LAYOUT}/news`);
export const NEWS_LIST = defineRoute(`${NEWS.ROUTE}/list`);
export const NEWS_DATA_LOCAL = defineRoute(`${NEWS.ROUTE}/data-local`);
export const NEWS_DATA_API = defineRoute(`${NEWS.ROUTE}/data-api`);
export const NEWS_IMAGES_ORIGINAL = defineRoute(`${NEWS.ROUTE}/images-original`);
export const NEWS_IMAGES_COMPRESSED = defineRoute(`${NEWS.ROUTE}/images-compressed`);
export const NEWS_CATEGORY = defineRoute(`${NEWS.ROUTE}/categories/:category`, {
  params: [
    opt => ({ short: 'c', name: 'category', defaults: '', ...opt }),
  ]
});
