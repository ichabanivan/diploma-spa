
// outsource dependencies
import React, { memo } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

// local dependencies
import * as ROUTES from '../constants/routes';

import News from './news';
import { ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';

export default memo(() => <>
  <header className="bg-dark p-4 d-flex justify-content-between">
    <h1 className="text-white mb-0">NEWS.com</h1>
    <nav>
      <ListGroup horizontal className="d-flex align-items-center h-100">
        { ['Ukraine', 'Sport', 'Education', 'Cars'].map(item => <ListGroupItem
          key={item}
          tag={Link}
          className="bg-transparent border-0 text-white"
          to={ROUTES.NEWS_EDIT.LINK({ category: item })}
        >
          { item }
        </ListGroupItem>) }
      </ListGroup>
    </nav>
  </header>
  <div className="flex-grow-1">
    <Switch>
      <Route path={ROUTES.NEWS.ROUTE} component={News} />
      <Redirect to={ROUTES.NEWS.LINK()} />
    </Switch>
  </div>
  <footer className="bg-dark p-4 d-flex justify-content-center text-white">
    &copy;
    { moment().format('YYYY') }
  </footer>
</>);
