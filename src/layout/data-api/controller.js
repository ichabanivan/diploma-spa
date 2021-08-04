
// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';

// local dependencies
import instanceNEWS from 'services/api.service';
import { prepareController } from 'services/controller';

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
  prefix: 'data-api',
  types: ['INITIALIZE'],
  subscriber: function * () {
    yield takeEvery(controller.TYPE.INITIALIZE, initializeSaga);
  }
});
export default controller;

function * initializeSaga ({ type }) {
  yield put(controller.action.updateCtrl({ disabled: false }));
  try {
    const main = yield call(instanceNEWS, {
      url: '/everything',
      params: {
        q: 'Ukraine',
        sortBy: 'publishedAt',
        apiKey: 'f01c948178be420fb162319fa7f9ff37'
      }
    });
    console.log(JSON.stringify(main))
    const aside = yield call(instanceNEWS, {
      url: '/everything',
      params: {
        q: 'sport',
        pageSize: 10,
        sortBy: 'publishedAt',
        apiKey: 'f01c948178be420fb162319fa7f9ff37'
      }
    });
    console.log(JSON.stringify(aside))

    yield put(controller.action.updateCtrl({
      list: main?.articles,
      aside: aside?.articles,
    }));
  } catch (error) {
    console.error(error);
  }
  yield put(controller.action.updateCtrl({ initialized: true, disabled: false }));
}
