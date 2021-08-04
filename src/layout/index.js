
// outsource dependencies
import moment from 'moment';
import React, { memo } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

// local dependencies
import * as ROUTES from '../constants/routes';

import DataApi from './data-api';
import DataLocal from './data-local';
import ImagesOriginal from './images-original';
import ImagesCompressed from './images-compressed';

import List from './list';
import Category from './category';

export default memo(() => <>
  <header className="bg-dark p-4 d-flex justify-content-between">
    <h1 className="text-white mb-0">NEWS.com</h1>
    <nav>
      <ListGroup horizontal className="d-flex align-items-center h-100">
        <ListGroupItem
          tag={Link}
          className="bg-transparent border-0 text-white"
          to={ROUTES.NEWS_DATA_LOCAL.LINK()}
        >
          Local Data
        </ListGroupItem>
        <ListGroupItem
          tag={Link}
          className="bg-transparent border-0 text-white"
          to={ROUTES.NEWS_DATA_API.LINK()}
        >
          API Data
        </ListGroupItem>
        <ListGroupItem
          tag={Link}
          className="bg-transparent border-0 text-white"
          to={ROUTES.NEWS_IMAGES_ORIGINAL.LINK()}
        >
          Images Original
        </ListGroupItem>
        <ListGroupItem
          tag={Link}
          className="bg-transparent border-0 text-white"
          to={ROUTES.NEWS_IMAGES_COMPRESSED.LINK()}
        >
          Images Compressed
        </ListGroupItem>
      </ListGroup>
    </nav>
  </header>
  <div className="flex-grow-1">
    <Switch>
      <Route path={ROUTES.NEWS_LIST.ROUTE} component={List} />
      <Route path={ROUTES.NEWS_DATA_API.ROUTE} component={DataApi} />
      <Route path={ROUTES.NEWS_CATEGORY.ROUTE} component={Category} />
      <Route path={ROUTES.NEWS_DATA_LOCAL.ROUTE} component={DataLocal} />
      <Route path={ROUTES.NEWS_IMAGES_ORIGINAL.ROUTE} component={ImagesOriginal} />
      <Route path={ROUTES.NEWS_IMAGES_COMPRESSED.ROUTE} component={ImagesCompressed} />
      <Redirect to={ROUTES.NEWS_LIST.LINK()} />
    </Switch>
  </div>
  <footer className="bg-dark p-4 d-flex justify-content-center text-white">
    &copy;
    { moment().format('YYYY') }
  </footer>
</>);
