import React from 'react';
import {
  Redirect, Route, Switch, useLocation, useRouteMatch, useHistory,
} from 'react-router';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import propTypes from 'prop-types';

const Stream = function Stream({ pages, color }) {
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

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

  function handleWheel(e) {
    if (e.deltaY > 0) {
      history.push(nextPageUrl);
    } else if (e.deltaY < 0) {
      history.push(prevPageUrl);
    }
  }
  return (
    <div
      className={`${color} h-full flex flex-col`}
      onWheel={handleWheel}
    >
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
      <div className="flex-shrink-0 p-12 flex content-center justify-center">
        <Link to={nextPageUrl}>Next</Link>
        <Link to={prevPageUrl}>Prev</Link>
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
