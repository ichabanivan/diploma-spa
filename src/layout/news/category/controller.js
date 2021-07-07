
// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';

// local dependencies
import { prepareController } from '../../../services/controller';
import instanceNEWS from '../../../services/api.service';

// configure
const initial = {
  initialized: false,
  disabled: null,
  errorMessage: '',

  list: [],
  aside: [],
};

export const controller = prepareController({
  initial,
  prefix: 'category',
  types: ['INITIALIZE'],
  subscriber: function * () {
    yield takeEvery(controller.TYPE.INITIALIZE, initializeSaga);
  }
});
export default controller;

function * initializeSaga ({ type, payload }) {
  yield put(controller.action.updateCtrl({ disabled: false }));
  try {
    const main = yield call(instanceNEWS, {
      url: '/everything',
      params: {
        q: payload?.category || 'all',
        sortBy: 'publishedAt',
        apiKey: 'f01c948178be420fb162319fa7f9ff37'
      }
    });
    const aside = yield call(instanceNEWS, {
      url: '/everything',
      params: {
        q: 'all',
        pageSize: 10,
        sortBy: 'publishedAt',
        apiKey: 'f01c948178be420fb162319fa7f9ff37'
      }
    });
    yield put(controller.action.updateCtrl({
      list: main?.articles,
      aside: aside?.articles,
      category: payload.category,
    }));
  } catch (error) {
    console.error(error);
  }
  yield put(controller.action.updateCtrl({ initialized: true, disabled: false }));
}
