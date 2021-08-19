
// outsource dependencies
import { takeEvery, put } from 'redux-saga/effects';

// local dependencies
import { prepareController } from './services/controller';

// configure
const initial = {
  initialized: false,
  disabled: null,
  errorMessage: '',
};

export const controller = prepareController({
  initial,
  prefix: 'app',
  types: ['INITIALIZE'],
  subscriber: function * () {
    yield takeEvery(controller.TYPE.INITIALIZE, initializeSaga);
  }
});
export default controller;

function * initializeSaga ({ type, payload }) {
  yield put(controller.action.clearCtrl());
  // console.log(`%c ${type} `, 'color: #FF6766; font-weight: bolder; font-size: 12px;'
  //     , '\n payload:', payload
  // );
  // NOTE initialization done
  yield put(controller.action.updateCtrl({ initialized: true }));
}
