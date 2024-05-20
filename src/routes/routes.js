import config from '~/config';
import JobSearchLayout from '~/layouts/JobSearchLayout';

// pages
import {
  Home,
  SignUp,
  SignIn,
  Profile,
  AppliedJobs,
  SavedJobs,
  MyJobRobot,
  Jobs,
  Job,
  BestCompanies,
  ReviewCompany,
  Blog,
  Employer,
  CompanyProfile,
  Pending,
} from '~/pages';

// public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signUp, component: SignUp },
  { path: config.routes.signIn, component: SignIn },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.appliedJobs, component: AppliedJobs }, // pending apply function
  { path: config.routes.savedJobs, component: SavedJobs },
  { path: config.routes.myJobRobot, component: MyJobRobot }, // pending company recommendation
  { path: config.routes.jobs, component: Jobs, layout: JobSearchLayout },
  { path: config.routes.job, component: Job },
  { path: config.routes.bestCompanies, component: BestCompanies },
  { path: config.routes.reviewCompany, component: ReviewCompany },
  { path: config.routes.blog, component: Blog },
  { path: config.routes.employer, component: Employer },
  { path: config.routes.companyProfile, component: CompanyProfile },
  { path: config.routes.pending, component: Pending },
];

export { publicRoutes };
