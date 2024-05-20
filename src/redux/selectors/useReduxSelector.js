import { useSelector } from 'react-redux';

import {
  // header
  headerShrinkSelector,

  // jobs
  jobListSelector,
  selectedJobSelector,
  filteredJobListSelector,
  recommendedJobListSelector,
  skillsSetSelector,

  // filters
  searchTextSelector,
  searchTextErrorSelector,
  locationSelector,
  levelsFilterSelector,
  salaryRangesFilterSelector,
  companyTypesFilterSelector,

  // companies
  companyListSelector,
  topCompanyListSelector,
  selectedCompanySelector,

  // users
  userListSelector,
  currentUserSelector,
} from './index';

const useReduxSelector = () => {
  // header
  const headerShrink = useSelector(headerShrinkSelector);

  // jobs
  const jobList = useSelector(jobListSelector);
  const selectedJob = useSelector(selectedJobSelector);
  const filteredJobList = useSelector(filteredJobListSelector);
  const recommendedJobList = useSelector(recommendedJobListSelector);
  const skillsSet = useSelector(skillsSetSelector);

  // filters
  const searchText = useSelector(searchTextSelector);
  const searchTextError = useSelector(searchTextErrorSelector);
  const location = useSelector(locationSelector);
  const levelsFilter = useSelector(levelsFilterSelector);
  const salaryRangesFilter = useSelector(salaryRangesFilterSelector);
  const companyTypesFilter = useSelector(companyTypesFilterSelector);

  // companies
  const companyList = useSelector(companyListSelector);
  const topCompanyList = useSelector(topCompanyListSelector);
  const selectedCompany = useSelector(selectedCompanySelector);

  // users
  const userList = useSelector(userListSelector);
  const currentUser = useSelector(currentUserSelector);

  return {
    // header
    headerShrink,

    // jobs
    selectedJob,
    jobList,
    filteredJobList,
    recommendedJobList,
    skillsSet,

    // filters
    searchText,
    searchTextError,
    location,
    levelsFilter,
    salaryRangesFilter,
    companyTypesFilter,

    // companies
    companyList,
    topCompanyList,
    selectedCompany,

    // users
    userList,
    currentUser,
  };
};

export default useReduxSelector;
