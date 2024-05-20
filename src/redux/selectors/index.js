import { createSelector } from '@reduxjs/toolkit';

// custom hook: useReduxSelector
export { default as useReduxSelector } from './useReduxSelector';

// header selector
export const headerShrinkSelector = (state) => state.header.shrink;

// jobs selectors
export const jobListSelector = (state) => state.jobs.jobList;
export const selectedJobSelector = (state) => state.jobs.selectedJob;

// companies selectors
export const companyListSelector = (state) => state.companies.companyList;
export const topCompanyListSelector = (state) => state.companies.topCompanyList;

// users selectors
export const userListSelector = (state) => state.users.userList;
export const currentUserIdSelector = (state) => state.users.currentUserId;

// filters selectors
export const searchTextSelector = (state) => state.filters.search;
export const searchTextErrorSelector = (state) => state.filters.searchTextError;
export const locationSelector = (state) => state.filters.location;
export const levelsFilterSelector = (state) => state.filters.levelsFilter;
export const salaryRangesFilterSelector = (state) => state.filters.salaryRangesFilter;
export const companyTypesFilterSelector = (state) => state.filters.companyTypesFilter;

// ===> custom selectors
export const selectedCompanySelector = createSelector(
  companyListSelector,
  selectedJobSelector,
  (companyList, selectedJob) => {
    if (!!selectedJob) {
      return companyList.find((company) => company.id === selectedJob.companyId);
    }
  },
);

export const currentUserSelector = createSelector(userListSelector, currentUserIdSelector, (userList, userId) => {
  return userList.find((user) => user.id === userId);
});

export const recommendedJobListSelector = createSelector(
  jobListSelector,
  searchTextErrorSelector,
  currentUserSelector,
  (jobList, searchTextError, currentUser) => {
    return currentUser?.skills && !searchTextError
      ? jobList.filter((job) =>
          job.skills.some((jobSkill) =>
            currentUser.skills.map((userSkill) => userSkill.toLowerCase()).includes(jobSkill.toLowerCase()),
          ),
        )
      : currentUser?.skills && searchTextError
      ? jobList
          .filter((job) =>
            job.skills.some((jobSkill) =>
              currentUser.skills.map((userSkill) => userSkill.toLowerCase()).includes(jobSkill.toLowerCase()),
            ),
          )
          .slice(0, 5)
      : [];
  },
);

export const filteredJobListSelector = createSelector(
  jobListSelector,
  searchTextSelector,
  locationSelector,
  levelsFilterSelector,
  salaryRangesFilterSelector,
  companyListSelector,
  companyTypesFilterSelector,
  (jobList, searchText, location, levels, salaryRanges, companyList, companyTypes) => {
    return jobList.filter((job) => {
      return (
        //filter by textSearch
        (job.title.toLowerCase().includes(searchText.toLowerCase()) ||
          job.skills.map((skill) => skill.toLowerCase()).includes(searchText.toLowerCase())) &&
        //filter by location
        (location !== 'Tất cả thành phố' ? job.location === location : true) &&
        //filter by levels
        (levels.length ? levels.map((level) => level.toLowerCase()).includes(job.jobLevel.toLowerCase()) : true) &&
        //filter by salaryRanges
        (salaryRanges.length && typeof job.salaryMax === 'number'
          ? job.salaryMax >= Math.min(...salaryRanges)
          : true) &&
        //filter by companyTypes
        (companyTypes.length
          ? companyTypes
              .map((type) => type.toLowerCase())
              .includes(companyList.find((company) => company.id === job.companyId).type.toLowerCase())
          : true)
      );
    });
  },
);

export const skillsSetSelector = createSelector(jobListSelector, (jobList) => {
  let result = [];
  jobList.forEach((job) => {
    result = [...result, ...job.skills];
  });
  return [...new Set(result)];
});
