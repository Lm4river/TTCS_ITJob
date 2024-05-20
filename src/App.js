import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import config from './config';
import { publicRoutes } from '~/routes';
import MainLayout from '~/layouts/MainLayout';
import PageNotFound from '~/pages/PageNotFound';
import { setupServer } from '~/utils/fakeApis';
import { useReduxSelector } from '~/redux/selectors';
import { jobsSlice, jobsSliceActions, usersSliceActions, companiesSliceActions } from '~/redux/slices';

setupServer();

function App() {
  const dispatch = useDispatch();
  const { jobList, userList, recommendedJobList } = useReduxSelector();

  useEffect(() => {
    dispatch(jobsSliceActions.fetchJobs());
    dispatch(companiesSliceActions.fetchCompanies());
    dispatch(companiesSliceActions.fetchTopCompanies());
    userList.length === 0 && dispatch(usersSliceActions.fetchUsers()); // only fetUsers for the very first time as it will overwrite the list if perform fetUsers from 2nd time
    // dispatch(usersSliceActions.fetchUsers());
  }, []);

  useEffect(() => {
    if (window.screen.availWidth < 993) {
      dispatch(jobsSlice.actions.selectJob({}));
    } else if (window.location.pathname === config.routes.home && recommendedJobList.length > 0) {
      dispatch(jobsSlice.actions.selectJob(recommendedJobList[0]));
    }
  }, [jobList]);

  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout ? route.layout : route.layout === null ? Fragment : MainLayout;

            return (
              <Route
                key={index}
                path={route.path}
                exact
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
