
// outsource dependencies
import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// local dependencies
import * as ROUTES from '../../constants/routes';

import List from './list';
import Category from './category';

export default memo(() => <Switch>
  <Route path={ROUTES.NEWS_LIST.ROUTE} component={List} />
  <Route path={ROUTES.NEWS_EDIT.ROUTE} component={Category} />
  <Redirect to={ROUTES.NEWS_LIST.LINK()} />
</Switch>);

