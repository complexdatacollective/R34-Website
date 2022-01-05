import React from 'react';
import {
  Redirect, Route, Switch, useLocation, useRouteMatch,
} from 'react-router';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import propTypes from 'prop-types';

const Stream = function Stream({ pages, color }) {
  const { path } = useRouteMatch();
  const location = useLocation();

  const currentStream = location.pathname.split('/')[1];
  let prevStream = '';
  let nextStream = '';
  if (currentStream === 'data-quality') {
    nextStream = '/efficiency';
  } else if (currentStream === 'efficiency') {
    prevStream = '/data-quality';
    nextStream = '/trust-and-disclosure';
  } else if (currentStream === 'trust-and-disclosure') {
    prevStream = '/efficiency';
    nextStream = '/resource-access';
  } else if (currentStream === 'resource-access') {
    prevStream = '/trust-and-disclosure';
  }

  const firstPage = React.useMemo(() => pages[0].url, [pages]);

  const currentPageIndex = React.useMemo(() => pages.findIndex(
    (page) => page.url === location.pathname.split('/')[2],
  ), [location.pathname]);

  const nextPageUrl = React.useMemo(() => {
    if (currentPageIndex === pages.length - 1) {
      return `${path}/${firstPage}`;
    }
    return pages[currentPageIndex + 1].url;
  }, [currentPageIndex]);

  const prevPageUrl = React.useMemo(() => {
    if (currentPageIndex === 0) {
      return '';
    }
    return get(pages, [currentPageIndex - 1, 'url'], '');
  }, [currentPageIndex]);

  return (
    <div className={`${color} h-full flex flex-col`}>
      <div className="page flex-1 flex flex-col justify-center content-center">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/${firstPage}`} />
          </Route>
          <Route
            path={`${path}/:subpage`}
            render={({ match: { params: { subpage } } }) => {
              const SubpageComponent = pages.find(
                (page) => page.url === subpage,
              ).component;
              return (<SubpageComponent />);
            }}
          />
        </Switch>
      </div>
      <div className="flex-shrink-0 p-8 flex content-center justify-center">
        <Link to={nextPageUrl}>Next</Link>
        <Link to={prevPageUrl}>Prev</Link>
      </div>
      <div className="flex-shrink-0 p-4 flex content-center justify-center">
        <Link to={prevStream}>Left</Link>
        <Link to={nextStream}>Right</Link>
      </div>
    </div>
  );
};

Stream.propTypes = {
  pages: propTypes.arrayOf(propTypes.shape({
    url: propTypes.string.isRequired,
    component: propTypes.func.isRequired,
  })).isRequired,
  color: propTypes.string.isRequired,
};

export default Stream;
