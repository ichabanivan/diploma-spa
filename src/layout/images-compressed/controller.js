
// outsource dependencies
import { takeEvery, put } from 'redux-saga/effects';

// local dependencies
import { prepareController } from 'services/controller';

import aside from './aside.json';
import main from './main.json';

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
  prefix: 'data-compressed',
  types: ['INITIALIZE'],
  subscriber: function * () {
    yield takeEvery(controller.TYPE.INITIALIZE, initializeSaga);
  }
});
export default controller;

function * initializeSaga ({ type }) {
  yield put(controller.action.updateCtrl({ disabled: false }));
  yield put(controller.action.updateCtrl({
    list: main?.articles,
    aside: aside?.articles,
  }));
  yield put(controller.action.updateCtrl({ initialized: true, disabled: false }));
}
