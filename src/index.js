
// outsource dependencies
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import React, { memo, useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';

// STYLES inject ...
import './style';

// local dependencies
import { history, store } from './store';

import controller from './controller';
import { useController } from './services/controller';

import Layout from './layout';
import Preloader from './components/preloader';

import reportWebVitals from './reportWebVitals';


const App = memo(() => {
  // NOTE subscribe app controller
  const [{ initialized }, { initialize }, isControllerConnected] = useController(controller);
  // NOTE initialize business logic
  useEffect(() => { initialize(); }, [initialize]);
  // NOTE select view based on application state
  // if (!health) { return <Maintenance />; }
  if (!initialized || !isControllerConnected) { return <Preloader active={true} />; }
  return <>
    <ConnectedRouter history={history} location={history.location}>
      <Layout />
    </ConnectedRouter>
    <ReduxToastr
      progressBar
      timeOut={2000}
      preventDuplicates
      newestOnTop={false}
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  </>;
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
