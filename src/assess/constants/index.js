import config from '~/config';

// header
const CITIES = ['Tất cả thành phố', 'Ho Chi Minh', 'Ha Noi', 'Da Nang','Khác'];

const JOBS = [
  {
    title: 'Việc làm theo kỹ năng',
    searchBy: 'skills',
    data: [
      'Java',
      'PHP',
      'JavaScript',
      'HTML5',
      'Manager',
      'SQL',
      'Android',
      'iOS',
      'MySQL',
      'Tester',
      'English',
      'Ruby',
      'Python',
      'Mobile Apps',
      'Ruby on Rails',
      'QA QC',
      'Database',
      '.NET',
      'Business Analyst',
      'Linux',
      'Team Leader',
      'NodeJS',
      'System Engineer',
      'Designer',
      'UI-UX',
      'Project Manager',
      'OOP',
      'Oracle',
      'MVC',
      'ReactJS',
      'Embedded',
      'J2EE',
    ],
    viewAll: 'skill',
  },
  {
    title: 'Việc làm theo chức danh',
    searchBy: 'title',
    data: [
      'Java Developer',
      'PHP Developer',
      'Javascript Developer',
      'ReactJS Developer',
      'HTML5 Developer',
      'SQL Developer',
      'Android Developer',
      'iOS Developer',
      'Ruby Developer',
      'Python Developer',
      'Ruby On Rails Developer',
      '.NET Developer',
      'NodeJS Developer',
      'Linux Developer',
      'OOP Developer',
      'Oracle Developer',
      'C++ Developer',
      'Wordpress Developer',
      'Designer',
      'Database Administrator',
      'Mobile Apps Developer',
      'Project Manager',
      'Sản phẩm Owner',
      'Bridge Engineer',
    ],
    viewAll: 'title',
  },
  {
    title: 'Việc làm theo công ty',
    searchBy: 'company',
    data: [
      'Hanwha Financial Technology',
      'Bstar Solutions',
      'ECR VIETNAM CO., LTD',
      'MONEX JSC',
      'SMART - SOLUTIONS',
      'TJ Tech',
      'bbv Vietnam',
      'VNIB Tech',
      'Alpha Networks Solution',
      'Athena Studio',
      'PVcomBank',
      'Parcel Perform',
      'Zalo',
      'Simple Tech Investment',
      'ShopBack',
      'Saigon Technology',
    ],
    viewAll: 'company',
  },
  {
    title: 'Việc làm theo thành phố',
    searchBy: 'location',
    data: CITIES,
  },
];

const IT_COMPANIES = [
  {
    title: 'Công ty IT tốt nhất',
    to: config.routes.bestCompanies,
    data: ['Công ty IT tốt nhất 2022', 'Công ty IT tốt nhất 2021', 'Công ty IT tốt nhất 2020', 'Công ty IT tốt nhất 2019'],
  },
  { title: 'Review Công ty', to: config.routes.reviewCompany },
];

const HEADER_MOBILE_MENU = [
  { title: 'Tất cả việc làm', to: config.routes.jobs },
  ...JOBS,
  {
    title: 'Công ty IT tốt nhất',
    data: [
      { title: 'Công ty IT tốt nhất 2022', to: config.routes.bestCompanies },
      { title: 'Công ty IT tốt nhất 2021', to: config.routes.bestCompanies },
      { title: 'Công ty IT tốt nhất 2020', to: config.routes.bestCompanies },
      { title: 'Công ty IT tốt nhất 2019', to: config.routes.bestCompanies },
    ],
  },
  { title: 'Reviews Công ty', to: config.routes.reviewCompany },
  { title: 'Blog', to: config.routes.blog },
];

// filtered jobs
const FILTER_TITLES = {
  level: 'Cấp bậc',
  salary: 'Mức lương',
  companyType: 'Loại công ty',
};

const FILTERS = [
  {
    title: FILTER_TITLES.level,
    data: ['Fresher', 'Junior', 'Senior', 'Manager'],
  },
  {
    title: FILTER_TITLES.salary,
    data: [500, 1000, 2000, 2500],
    leftCharacter: '>=',
    rightCharacter: 'USD',
  },
  {
    title: FILTER_TITLES.companyType,
    data: ['Thuê ngoàì', 'Sản phẩm'],
  },
];

// export
export { CITIES, JOBS, IT_COMPANIES, FILTERS, FILTER_TITLES, HEADER_MOBILE_MENU };
