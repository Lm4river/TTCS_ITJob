import logos from './companyLogo';
import images from './companyImage';
import config from '~/config';

export const companyList = [
  {
    id: 'COM_001',
    name: 'Hanwha Financial Technology',
    slogan: 'We Can Make It',
    website: 'https://www.hanwha.com/en.html',
    logo: logos.COM_01,
    images: images,
    profileLink: config.routes.companyProfile,
    address: 'Tầng 19, 81-85 Ham Nghi Street, P.Nguyen Thai Binh',
    district: 1,
    province: 'Ho Chi Minh',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '1-50',
    overtime: false,
    country: 'Viet Nam',
    countryCode: 'VN',
    overview: [
      {
        subTitle: 'We Can Make It',
        content: [
          'Hanwha Financial Technology is a new company established in September 2020 as a subsidiary of Hanwha Group in Korea.',
          'Currently, we are developing user engagement platforms in the FinTech industry. We are looking for people who are competent and creative for mobile app development just like you',
        ],
      },
      { subTitle: 'Join our journey!' },
    ],
    skills: {
      list: ['Golang', 'MySQL', 'AWS', 'iOS', 'Android', 'ReactJS'],
      detail: [
        'Core tech stack: Golang, Redis, MySQL, Redshift, Postgres, Cassandra, Spark.',
        'AWS cloud infrastructure with auto-scaling abilities.',
        'Mobile app platform coverage: Native iOS and Android.',
        'Web portals are built on React and Redux.',
        'Use Git and we adhere to the basic Continuous Delivery tenets utilising a host of tools to support our release pipeline and code quality. These include Travis CI, Phabricator, Jenkins, Coveralls, and more.',
      ],
    },
    benefit: {
      hightlight: ['13th Month Salary', 'Annual Bonus up to 30% of Annual Salary', 'Premium Health Insurance Package'],
      detail: [
        '14+ annual leaves with flexible leave schedules',
        'Lunch and uniform allowance',
        '100% full salary-based insurance (Social; Health and Unemployment)',
        'Comprehensive annual check-up',
        'Yearly salary review',
        'Work from Home opportunities supported',
        'New, modern laptops, monitors equipped for new staffs',
        'Young, professional but family-alike working environment',
        'Open and honest culture where people are valued, treated fairly, trusted and empowered.',
      ],
    },
    recommendation: {
      ratio: 87,

      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 3.0 },
        { title: 'Đào tạo & học tập', score: 3.5 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 4.6 },
        { title: 'Văn hóa & vui chơi', score: 3.9 },
        { title: 'Văn phòng & không gian làm việc', score: 4.6 },
      ],
    },
    review: [
      {
        score: 5,
        title: 'Tuyệt vời!',
        comment:
          'Mọi người rất thân thiện và đáng yêu! Có mèo 3 con rất cute :3, làm việc mệt mỏi có thể ra vọc tụi nó giải stress :))), mọi người có tinh thần và tính kỉ luật cao trong công việc, làm hết mình, và chơi cũng hết minh! Không có OT. À có hoạt động ng...',
      },
      {
        score: 4.6,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
    ],
    viewNumber: 648,
  },
  {
    id: 'COM_002',
    name: 'Bstar Solutions',
    logo: logos.COM_02,
    website: 'https://bstarsolutions.com/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: '56 Yên Thế, Phường 2',
    district: 'Tan Binh',
    province: 'Ho Chi Minh',
    type: 'Thuê ngoài',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '51-150',
    overtime: false,
    country: 'Viet Nam',
    countryCode: 'VN',
    overview: [
      {
        subTitle: 'Bstar Solutions',
        content: [
          'BStar is pioneering the Silicon Valley of Vietnam and Southeast Asia. Our mission is to solve business and technical problems. We transform clients’ business concepts through the stages of the prototype, minimum viable Sản phẩm (MVP), and Sản phẩmion. Our mastery of global software development processes and business oriented focus allows our clients to achieve their business objectives.',
        ],
      },
      {
        content: ['Customers of BStar are global companies from USA, Singapore, Hong Khong, Japan...'],
      },
    ],
    skills: {
      list: ['ReactJS', 'Java', 'C++', 'AWS', 'AngularJS', 'DevOps'],
    },
    benefit: {
      hightlight: [
        'Attractive income. Pay full probation salary',
        '13th month salary + KPI bonuses',
        'International, dynamic, friendly environment',
      ],
      detail: [
        'Attractive income.',
        'Pay full salary in two months of probation.',
        'Review salary 6th/times with new employees.',
        'Health insurance PVI.',
        'Social, Health and others Insurance base on Labor Law.',
        'Happy Hour every month.',
        'Performance appraisal.',
        '13th month salary and additional bonuses based on the business performance.',
        '12 days of annual leave.',
        'Opportunities to work oversea.',
        'We truly value your thoughts and opinions.',
        'Good work environment and working in a professional, friendly, well-equipped environment.',
        'Chances to work in a big and global team, work directly with customers.',
        'Company budget for team building, year-end party and sport activities (football, badminton), Christmas etc.…',
        'Charity activities.',
      ],
    },
    view: 19160,
    review: [
      {
        score: 4,
        title: 'Thích hợp rèn luyện',
        comment:
          'Văn hóa trẻ trung năng động, hòa đồng. Hay có các party, event. Có các hoạt động internal training. Trả lương thưởng đúng hẹn',
      },
    ],
    recommendation: {
      ratio: 91,

      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 3.5 },
        { title: 'Đào tạo & học tập', score: 4.5 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 3.6 },
        { title: 'Văn hóa & vui chơi', score: 4.5 },
        { title: 'Văn phòng & không gian làm việc', score: 4.7 },
      ],
    },
    review: [
      {
        score: 5,
        title: 'Tuyệt vời!',
        comment:
          'Mọi người rất thân thiện và đáng yêu! Có mèo 3 con rất cute :3, làm việc mệt mỏi có thể ra vọc tụi nó giải stress :))), mọi người có tinh thần và tính kỉ luật cao trong công việc, làm hết mình, và chơi cũng hết minh! Không có OT. À có hoạt động ng...',
      },
      {
        score: 4,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
      {
        score: 4,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
    ],
  },
  {
    id: 'COM_003',
    name: 'ECR VIETNAM CO., LTD',
    slogan: 'Founded in 1973, ECR is one of the oldest EPoS providers in the world',
    logo: logos.COM_03,
    website: 'https://ecr.co.uk/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: '57 Quốc lộ 13, Phường 26',
    district: 'Binh Thanh',
    province: 'Ho Chi Minh',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '51-150',
    overtime: false,
    country: 'United Kingdom',
    countryCode: 'GB',
    overview: [
      {
        subTitle: 'Founded in 1973, ECR is one of the oldest EPoS providers in the world',
        content: [
          'Ban đầu là nhà cung cấp máy tính tiền, chúng tôi đã dành bốn thập kỷ để phát triển chuyên môn của mình để cung cấp các giải pháp được thiết kế hợp lý và phù hợp nhất trong ngành có sẵn trên thị trường điểm bán hàng trên thiết bị di động và máy tính để bàn. Ngày nay, chúng tôi cung cấp cho một số thương hiệu nổi tiếng nhất thế giới và nổi tiếng về chất lượng của cả hệ thống và dịch vụ khách hàng của chúng tôi. - cơ sở vật chất, bảo mật cao và môi trường rộng rãi để làm việc và chào đón khách hàng của chúng tôi.Chúng tôi làm việc với đội ngũ phát triển phần mềm của riêng mình tại ECR Sofia, Bulgaria. Một công ty mà chúng tôi mua lại để mở rộng khả năng phát triển của chúng tôi và là nơi sản xuất tất cả phần mềm của chúng tôi. Chúng tôi không bao giờ thuê ngoài và các đội của chúng tôi ở Vương quốc Anh và Bulgaria thường dành nhiều thời gian làm việc cùng nhau ở Sofia hoặc Kings Langley. Cả hai vẫn là khách hàng cho đến ngày nay. Ngày nay phần mềm mới nhất của chúng tôi được nhiều tổ chức giải trí, khách sạn, vận tải, bán vé và bán lẻ blue-chip sử dụng trên năm châu lục. Chúng tôi tự hào về mọi giải pháp chúng tôi đã cài đặt và chưa bao giờ thất bại khi giao hàng.',
        ],
      },
    ],
    viewNumber: 463,
    recommendation: {
      ratio: 85,

      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 4.5 },
        { title: 'Đào tạo & học tập', score: 3.5 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 4.6 },
        { title: 'Văn hóa & vui chơi', score: 3.5 },
        { title: 'Văn phòng & không gian làm việc', score: 4.2 },
      ],
    },
    review: [
      {
        score: 5,
        title: 'Tuyệt vời!',
        comment:
          'Mọi người rất thân thiện và đáng yêu! Có mèo 3 con rất cute :3, làm việc mệt mỏi có thể ra vọc tụi nó giải stress :))), mọi người có tinh thần và tính kỉ luật cao trong công việc, làm hết mình, và chơi cũng hết minh! Không có OT. À có hoạt động ng...',
      },
      {
        score: 4,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
    ],
  },
  {
    id: 'COM_004',
    name: 'MONEX JSC',
    slogan: 'We Can Make It',
    logo: logos.COM_04,
    images: images,
    profileLink: config.routes.companyProfile,
    address: 'Tầng 17, Tòa nhà Geleximco, Số 36 Hoàng Cầu, Phường Ô Chợ Dừa',
    district: 'Dong Da',
    province: 'Ha Noi',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '151-300',
    overtime: false,
    country: 'Viet Nam',
    countryCode: 'VN',
    overview: [
      {
        subTitle: 'MONEX JOINT STOCK COMPANY',
        content: [
          'MONEX là một công ty công nghệ, cung cấp giải pháp đáp ứng nhu cầu mua sắm của người dùng. MONEX có thể kết nối với các nhà cung cấp dịch vụ thanh toán, giao hàng... để gia tăng tiện ích cho bạn khi thực hiện các hoạt động mua sắm. Chúng tôi không trực tiếp cung cấp các dịch vụ gia tăng tiện ích nêu trên, và cũng không cung cấp dịch vụ tín dụng hoặc dịch vụ ngân hàng. Do đó, khi bạn lựa chọn sử dung bất cứ dịch vụ nào được cung cấp bởi các bên thứ ba đó, chúng tôi sẽ không chịu trách nhiệm đối với chất lượng sản phẩm/dịch vụ mà họ cung cấp cho bạn cũng như các tranh chấp giữa bạn và các nhà cung cấp đó.',
        ],
      },
    ],
    recommendation: {
      ratio: 75,

      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 3.5 },
        { title: 'Đào tạo & học tập', score: 3.5 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 3.9 },
        { title: 'Văn hóa & vui chơi', score: 3.8 },
        { title: 'Văn phòng & không gian làm việc', score: 4.7 },
      ],
    },
    review: [
      {
        score: 5,
        title: 'Tuyệt vời!',
        comment:
          'Mọi người rất thân thiện và đáng yêu! Có mèo 3 con rất cute :3, làm việc mệt mỏi có thể ra vọc tụi nó giải stress :))), mọi người có tinh thần và tính kỉ luật cao trong công việc, làm hết mình, và chơi cũng hết minh! Không có OT. À có hoạt động ng...',
      },
      {
        score: 4,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
    ],
    viewNumber: 38,
  },
  {
    id: 'COM_005',
    name: 'SMART - SOLUTIONS',
    slogan: 'CUNG CẤP GIẢI PHÁP TỐT NHẤT CHO DOANH NGHIỆP',
    logo: logos.COM_05,
    website: 'https://smartsolutionvn.net/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: 'Tầng 6, Tòa nhà Văn phòng 126 Hoàng Ngân',
    district: 'Cau Giay',
    province: 'Ha Noi',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '1-50',
    overtime: false,
    country: 'Viet Nam',
    countryCode: 'VN',
    overview: [
      {
        subTitle: 'CUNG CẤP GIẢI PHÁP TỐT NHẤT CHO DOANH NGHIỆP',
        content: [
          'SMART - SOLUTIONS là doanh nghiệp chuyên về phát triển sản phẩm và cung cấp dịch vụ CNTT trong nước và nước ngoài. Smart Solutions đang từng bước thiết lập mối quan hệ đối tác, kết nối sản phẩm với các hãng công nghệ hàng đầu trên thế giới nhằm cung cấp một hệ sinh thái sản phẩm hoàn thiện đến cho khách hàng..',
        ],
      },
      {
        content: [
          'Tiêu chí kinh doanh hàng đầu của chúng tôi là tạo ra sản phẩm công nghệ, giải pháp tối ưu cho khách hàng và đảm bảo hoàn thành dự án theo đúng ý tưởng thiết kế, chất lượng và tiến độ đã đề ra.',
        ],
      },
    ],
    viewNumber: 29,
  },
  {
    id: 'COM_006',
    name: 'TJ Tech',
    logo: logos.COM_06,
    website: 'https://tjtech.tech/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: '29 P. Liễu Giai, Ngọc Khánh, Hà Nội',
    district: 'Ba Dinh',
    province: 'Ha Noi',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '1-50',
    overtime: 'OT',
    country: 'Japan',
    countryCode: 'JP',
    overview: [
      {
        subTitle: 'TJ Tech Co., Ltd.',
        content: [
          'At TJTECH, we mainly focus on the field of software development specialized in financial assets and securities exchange. Majority of TJTECH’s customers come from overseas countries such as Japan, Hong Kong, Taiwan, Singapore, etc.',
        ],
      },
      {
        content: [
          'At present, financial institutions and intermediaries are growing and developing rapidly. The number of stocks, crypto and as well as forex exchanges are increasing, thus making the financial industry a highly competitive field with various opportunities for IT organizations.',
        ],
      },
      {
        content: [
          'Therefore, we are inviting competent talents to join us in capturing those opportunities and allow the company to expand and be recognized in the global IT industry.',
        ],
      },
    ],
    skills: {
      title: 'Thuật toán nền tảng trao đổi với công nghệ AI',
      list: ['C++', 'NodeJS', 'Python', 'MySQL', 'React', 'Native', 'Angular'],
      detail: [
        'Learn and practice trending technologies of coding such as NodeJS, AngularJS',
        'Receive training on sophisticated tools for quality improvement of coding, testing, reviewing and performance',
        'Work in a professional yet dynamic and youthful environment with Agile process. Employees will have the opportunity to interact with foreign customers during the projects.',
        'Working with veteran investors and traders across Asia which will give employees better knowledge and skills to make profit in financial market.',
      ],
    },
    benefit: {
      title: 'Phúc lợi',
      hightlight: [
        'State-of-the-art algorithm & knowledge of exchange',
        'Dynamic and professional working environment',
        'Strong career paths with well-support policy',
      ],
      detail: [
        'Annual performance appraisal review',
        '2-Month probationary period with 100% salary',
        'Bonus: 13th-month or more depending on company financial performance',
        'Travel opportunities and other social activities (Billiard club)',
        'Attractive company allowances in Vietnamese holidays',
        'Other benefits according to Vietnam Labor Law',
        'Annual Health Coverage/HMO',
        'Free Food/Drinks',
      ],
    },
    viewNumber: 3811,
  },
  {
    id: 'COM_007',
    name: 'bbv Vietnam',
    slogan: 'bbv Vietnam stands for top quality in consulting, first class software engineering',
    logo: logos.COM_07,
    website: 'https://bbv.vn/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: 'Quang Trung software city',
    district: 12,
    province: 'Ho Chi Minh',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '1-50',
    overtime: 'OT',
    country: 'Japan',
    countryCode: 'JP',
    overview: [
      {
        subTitle: 'bbv Vietnam stands for top quality in consulting, first class software engineering',
        content: [
          'bbv Vietnam exists since 2006 and is a subsidiary of the bbv Group, a leading software company in Switzerland. We are a software development Thuê ngoàì company that focuses on custom web and mobile applications. Our customers are mainly from Switzerland and Germany.',
        ],
      },
      {
        content: [
          'We apply agile frameworks such as Scrum and Kanban in our software development process to promote open communication and transparency throughout our processes so we can respond swiftly and successfully to changes. You will learn to be a self-managing and self-responsible professional that shares his valuable expertise with the team.',
        ],
      },
    ],
    skills: {
      list: ['Java', '.NET', 'Agile', 'Java', 'JavaScript'],
    },
    benefit: {
      detail: [
        'Competitive salary and bonuses: You don’t have to pay for your medical – social - unemployment insurance and your personal income tax. We will cover all for you.',
        'Guaranteed 13th month salary.',
        'Loyalty bonus equal to 50% of your monthly NET salary each year after the first working year.',
        'Monthly lunch allowance, free daily fruit – snack – coffee, and sponsored sport clubs.',
        'Premium health insurance & Free annual medical check.',
        '14 days annual leave, add 1 day biennial.',
        'Very clear career path for Engineers so that bbv can offer you many online/in-house training courses, not only hard skills/technical skills, but also soft skills. We also sponsor to get technical certificates that you can use for your qualifications.',
        'Enjoy English speaking environment. You will be more confident in your English skills because we offer tuition fee sponsor and English proficiency bonus.',
        'Regular parties & gifts in yearly special days: Team dinners, End Year Party, company trip, team building activities, Christmas, Tet holiday, etc.…',
        'Chance to work with top talents from Switzerland, Germany, Greece, and challenges with latest technologies (microservices, CI/CD, latest version of .NET Core, Angular…), as well as with different business domains (e-commerce, automotive, logistics, insurance, healthcare).',
        'Professional Agile software development.',
        'Exchanging knowledge with 20 internal communities (Java, .NET, PHP, Cloud Computing, Mobile Development, IoT, Cryptocurrencies).',
      ],
    },
    viewNumber: 26863,
    rating: 4.2,
    recommendation: {
      ratio: 100,
      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 4.2 },
        { title: 'Đào tạo & học tập', score: 3.8 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 4.0 },
        { title: 'Văn hóa & vui chơi', score: 4.1 },
        { title: 'Văn phòng & không gian làm việc', score: 4.0 },
      ],
    },
    review: [
      {
        score: 5,
        title: 'Một công ty nhỏ nhưng tốt',
        comment:
          'Các chế độ cty rất tốt, đều chăm lo cho nhân viên. HR & Admin rất có tâm. Vì là cty nhỏ nên ko hề có yếu tố chính trị nên làm việc rất thoải mái. Chính sách áp dụng cho tất cả mn dù là lâu năm hay mới vào đang probation. Phù hợp cho các bạn vào là...',
      },
      {
        score: 5,
        title: 'Rất ít Ot chỉ Ot khi có yêu cầu',
        comment:
          'Công ty nhỏ nhưng có võ. Tuyển hàng lão làng vô để làm việc. Môi trường già nhưng chất. Chưa bao giờ OT. Thấy mấy team khác có OT và trả tiền OT đầy đủ',
      },
      {
        score: 5,
        title: 'Đánh giá đúng năng lực nhân viên',
        comment:
          'Nếu bạn nổ lực làm tốt công ty sẽ ghi nhận đóng góp và lương thưởng xứng đáng. Sếp hiểu và ghi nhận ý kiến của nhân viên, không có OT. Đc hổ trợ để nâng cao skill',
      },
      {
        score: 5,
        title: 'Một công ty nhỏ nhưng tốt',
        comment:
          'Các chế độ cty rất tốt, đều chăm lo cho nhân viên. HR & Admin rất có tâm. Vì là cty nhỏ nên ko hề có yếu tố chính trị nên làm việc rất thoải mái. Chính sách áp dụng cho tất cả mn dù là lâu năm hay mới vào đang probation. Phù hợp cho các bạn vào là...',
      },
      {
        score: 5,
        title: 'Rất ít Ot chỉ Ot khi có yêu cầu',
        comment:
          'Công ty nhỏ nhưng có võ. Tuyển hàng lão làng vô để làm việc. Môi trường già nhưng chất. Chưa bao giờ OT. Thấy mấy team khác có OT và trả tiền OT đầy đủ',
      },
      {
        score: 5,
        title: 'Đánh giá đúng năng lực nhân viên',
        comment:
          'Nếu bạn nổ lực làm tốt công ty sẽ ghi nhận đóng góp và lương thưởng xứng đáng. Sếp hiểu và ghi nhận ý kiến của nhân viên, không có OT. Đc hổ trợ để nâng cao skill',
      },
      {
        score: 5,
        title: 'Một công ty nhỏ nhưng tốt',
        comment:
          'Các chế độ cty rất tốt, đều chăm lo cho nhân viên. HR & Admin rất có tâm. Vì là cty nhỏ nên ko hề có yếu tố chính trị nên làm việc rất thoải mái. Chính sách áp dụng cho tất cả mn dù là lâu năm hay mới vào đang probation. Phù hợp cho các bạn vào là...',
      },
      {
        score: 5,
        title: 'Rất ít Ot chỉ Ot khi có yêu cầu',
        comment:
          'Công ty nhỏ nhưng có võ. Tuyển hàng lão làng vô để làm việc. Môi trường già nhưng chất. Chưa bao giờ OT. Thấy mấy team khác có OT và trả tiền OT đầy đủ',
      },
      {
        score: 5,
        title: 'Đánh giá đúng năng lực nhân viên',
        comment:
          'Nếu bạn nổ lực làm tốt công ty sẽ ghi nhận đóng góp và lương thưởng xứng đáng. Sếp hiểu và ghi nhận ý kiến của nhân viên, không có OT. Đc hổ trợ để nâng cao skill',
      },
    ],
  },
  {
    id: 'COM_008',
    name: 'VNIB Tech',
    slogan: 'Communicate, Collaborate and Create value',
    logo: logos.COM_08,
    website: 'https://www.vnib.net/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: '307 B Nguyễn Văn Trỗi',
    district: 'Tan Binh',
    province: 'Ho Chi Minh',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '1-50',
    overtime: false,
    country: 'South Korea',
    countryCode: 'KR',
    overview: [
      {
        subTitle: 'Communicate, Collaborate and Create value',
        content: [
          'Innerbus was established in Seoul, Korea in 2001. Now it is a leading supplier of advanced software and solutions, servicing global customers in Log analysis. Innerbus is using industry-standard technology platforms and delivering flexible robust solutions to our global customers. ',
        ],
      },
      {
        subTitle: 'Our Vision, Target and Motto:',
        content: [
          'Vision: To provide the best log analysis service for whole world.',
          'Target: Offer global customers with valuable information after analyzing all logs. Motto: Success appears in sincerity, and profit comes from faithfulness.',
        ],
      },
    ],
    skills: {
      list: ['Android', 'iOS', 'Java', 'System', 'Engineer', 'Designer'],
    },
    benefit: {
      hightlight: [
        'Insurances based on your gross salary',
        'A half year bonus',
        'Comfortable working environment & funny colleagues',
      ],
      detail: [
        '13th month salary',
        'A half year bonus',
        'Insurances base on your gross salary',
        'Annual travel',
        'Salary review once a year',
        'Coffee, snacks in working time',
        'Comfortable working environment and funny colleagues',
      ],
    },
    viewNumber: 13700,
    rating: 2.5,
    recommendation: {
      ratio: 51,
      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 2.0 },
        { title: 'Đào tạo & học tập', score: 2.5 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 2.9 },
        { title: 'Văn hóa & vui chơi', score: 3.1 },
        { title: 'Văn phòng & không gian làm việc', score: 4.1 },
      ],
    },
    review: [
      {
        score: 3,

        title: 'Không phải chen thang máy hằng ngày',
        comment:
          'Văn phòng rộng rãi, ở tầng thấp nên đi thang bộ là đã tới không có OT nên các bạn cứ thoải mái mà làm vì con Sản phẩm',
      },
      {
        score: 4,

        title: 'Sếp khó, văn phòng ok, công việc nhàn hạ, phù hợp với sinh viên ra trường',
        comment:
          '+ Văn phòng rộng rãi, phù hợp với số lượng nhân viên ít, môi trường nhỏ, công việc nhàn, + Công việc nhỏ lẻ, nhàn hạ, việc nhẹ, ko có áp lực, phù hợp với người ổn định gia đình và sinh viên mới ra trường + Sản phẩm nhàn, vào có time, chỉ tiến thủ...',
      },
      {
        score: 3,

        title: 'Văn phòng nhạt, còn người nhàm, ko năng động',
        comment:
          '+ Bãi đỗ xe miễn phí, văn phòng sạch sẽ, thoáng mát, tạm ok, phù hợp với sinh viên mới ra trường vào học học, + Nói chung thì mạnh ai người đó làm việc thôi. + AI muốn ổn định lương cơ bản thì vào đây mà làm (việc nhẹ, lương đủ sống) ko cao. Dự...',
      },
      {
        score: 3,

        title: 'Không phải chen thang máy hằng ngày',
        comment:
          'Văn phòng rộng rãi, ở tầng thấp nên đi thang bộ là đã tới không có OT nên các bạn cứ thoải mái mà làm vì con Sản phẩm',
      },
      {
        score: 4,

        title: 'Sếp khó, văn phòng ok, công việc nhàn hạ, phù hợp với sinh viên ra trường',
        comment:
          '+ Văn phòng rộng rãi, phù hợp với số lượng nhân viên ít, môi trường nhỏ, công việc nhàn, + Công việc nhỏ lẻ, nhàn hạ, việc nhẹ, ko có áp lực, phù hợp với người ổn định gia đình và sinh viên mới ra trường + Sản phẩm nhàn, vào có time, chỉ tiến thủ...',
      },
      {
        score: 3,

        title: 'Văn phòng nhạt, còn người nhàm, ko năng động',
        comment:
          '+ Bãi đỗ xe miễn phí, văn phòng sạch sẽ, thoáng mát, tạm ok, phù hợp với sinh viên mới ra trường vào học học, + Nói chung thì mạnh ai người đó làm việc thôi. + AI muốn ổn định lương cơ bản thì vào đây mà làm (việc nhẹ, lương đủ sống) ko cao. Dự...',
      },
      {
        score: 3,

        title: 'Không phải chen thang máy hằng ngày',
        comment:
          'Văn phòng rộng rãi, ở tầng thấp nên đi thang bộ là đã tới không có OT nên các bạn cứ thoải mái mà làm vì con Sản phẩm',
      },
    ],
  },
  {
    id: 'COM_009',
    name: 'Alpha Networks Solution',
    slogan: 'Alpha Networks is a fully fledged IT solutions and systems integrator in South East Asia.',
    logo: logos.COM_09,
    website: 'https://www.alphanetworks.com.sg/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: '99 Nguyễn Thị Minh Khai, Phường Bến Thành',
    district: 1,
    province: 'Ho Chi Minh',
    type: 'Thuê ngoàì',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '1-50',
    overtime: 'OT',
    country: 'Singapore',
    countryCode: 'SG',
    overview: [
      {
        subTitle: 'Alpha Networks is a fully fledged IT solutions and systems integrator in South East Asia.',
        content: [
          'We ventured into software development in 2014, and we’re now a fully-fledged IT solutions agency. The core of our business lies in software development, bespoke turnkey solutions and system integrations.',
        ],
      },
      {
        content: [
          'We specialize in end-to-end IT solutions, and we aspire to become a one-stop shop for all your IT needs. From hardware to software, network design to security, we’re here to provide solutions for our clients that are both efficient and value-for-money.',
        ],
      },
    ],
    viewNumber: 3452,
  },
  {
    id: 'COM_010',
    name: 'Athena Studio',
    slogan: 'Athena Studio (http://www.athena.studio) - Playful workplace of smart and creative talent',
    logo: logos.COM_10,
    website: 'https://www.athena.studio/',
    images: images,
    profileLink: config.routes.companyProfile,
    address: '40A Lam Sơn, Phường 2',
    district: 'Tan Binh',
    province: 'Ho Chi Minh',
    type: 'Sản phẩm',
    workingDays: 'Thứ 2 - Thứ 6',
    size: '51-150',
    overtime: false,
    country: 'United Arab Emirates',
    countryCode: 'AE',
    overview: [
      {
        subTitle: 'Athena Studio (http://www.athena.studio) - Playful workplace of smart and creative talent',
        content: [
          'Athena is a multi-national mobile gaming company which is creating and delivering Sản phẩms to users worldwide. Millions of users are enjoying our casual games every day. It creates a huge opportunity for us to grow but also creates great challenges to overcome and serve more and more users.',
        ],
      },
      {
        content: [
          'Every day at Athena, we try to apply science and art into our Sản phẩms to make them beautiful, exciting, fun and useful. Our mission is to create 5-star Sản phẩms which entertain and enrich people’s life. We believe that when technology, art, and hard working come together, the masterpieces will be born.',
        ],
      },
      {
        subTitle: 'Athena TechHub:',
        content: [
          'We focus on developing & gathering the best engineering talents from diverse academic backgrounds and industry experiences to innovate & develop potential projects by using trending technologies.',
        ],
      },
      {
        subTitle: 'About Athena team:',
        content: [
          'Athena team is a mix of talented people who are game producers, artists, data scientists, programmers, gamers, and dreamers. We offer lots of room for you to grow with the company and lots responsibility in your role. Beyond personal growth, you will make a great impact on Athena’s success as a whole.',
        ],
      },
    ],
    skills: {
      title: 'Latest Technology We Trust',
      list: ['Unity', 'Agile', 'Games', 'Cloud', 'Tester'],
      detail: [
        'Cocos2dx, Unity, HTML5 at our client side.',
        'Google Cloud and AWS are backing our infrastructure with Big Data processing and Machine Learning jobs.',
        'Gitlab, Jira, Jenkins, Confluence... for process and workflow.',
      ],
    },
    benefit: {
      hightlight: [
        'MacBook Pro/Extra screens & Remote Work policy',
        'Premium health insurance package for you, relative',
        'Company Trip 4-5*, Yoga, Gym/Fitness/English club',
      ],
      detail: [
        'Great facility to work. You will have a MacBook and extra high definition screens',
        'Remote work 12 days / Annual leave 12 days / Sick leave 2 days',
        'Premium health insurance package for you and your relatives',
        'Annual health check-up at the premium clinic',
        'Development opportunity: sponsorship for all training courses includes Business English...',
        'Interesting workout activities: gym/fitness, yoga, kick-boxing, football after work',
        'With regular discussions, you will have a lot of opportunities to learn from experts in their fields',
        '13th-month Salary + Annual bonus + Project bonus',
        'Twice yearly performance review and one-time salary review per year',
        'Reward & Recognition in mobile platform',
        'International opportunity to expose and grow',
        'Professional, creative working environment and talented teams, equal-opportunities & agile culture',
        'At least one abroad travel every year. We often send our elites to international conferences like GDC, WWDC, Google I/O... to update the latest technology',
        '1-2 Annual Luxury Company Trip, Team Building',
        'Free food & drinks, kitchen at work, PlayStation & billiards corner',
        'Friday evening party, happy hours, team activities, and awesome parties',
        'The remaining Annual leave will be transferred to the next working year',
        'Additional allowance, gifts for birthdays, giving-birth, weddings, illness, Mid-Autumn Festival, Lunar New Year, 1/1, 1/5, 1/6…',
        'Paternity Leave policy offers more than 10 days of paid leave, not including days-off according to Vietnam Labor Law regulations',
        'Free parking',
      ],
    },
    viewNumber: 47241,
    recommendation: {
      ratio: 100,
      overallScore: 4.8,
      detail: [
        { title: 'Lương và phúc lợi', score: 2.0 },
        { title: 'Đào tạo & học tập', score: 2.5 },
        { title: 'Ban quản lý quan tâm đến tôi', score: 4.6 },
        { title: 'Văn hóa & vui chơi', score: 4.9 },
        { title: 'Văn phòng & không gian làm việc', score: 4.6 },
      ],
    },
    review: [
      {
        score: 5,
        title: 'Tuyệt vời!',
        comment:
          'Mọi người rất thân thiện và đáng yêu! Có mèo 3 con rất cute :3, làm việc mệt mỏi có thể ra vọc tụi nó giải stress :))), mọi người có tinh thần và tính kỉ luật cao trong công việc, làm hết mình, và chơi cũng hết minh! Không có OT. À có hoạt động ng...',
      },
      {
        score: 5,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
      {
        score: 5,
        title: 'Tuyệt vời!',
        comment:
          'Mọi người rất thân thiện và đáng yêu! Có mèo 3 con rất cute :3, làm việc mệt mỏi có thể ra vọc tụi nó giải stress :))), mọi người có tinh thần và tính kỉ luật cao trong công việc, làm hết mình, và chơi cũng hết minh! Không có OT. À có hoạt động ng...',
      },
      {
        score: 5,
        title: 'Làm ở đây rất mệt',
        comment:
          'Làm ở đây thật sự mệt: - Ăn rất mệt, ăn hoài không thấy hết, từ bánh, trà, cafe, sữa. Lúc nào cũng căng da bụng, chùng da mắt.- Tập thể dụng rất mệt, hôm nào cũng có các lớp yoga, gym, kickboxing, bóng đá xen kẽ nhau, rất tốn sức.- Học rất mệt, ...',
      },
      {
        score: 5,
        title: 'Môi trường làm việc tốt',
        comment:
          'Văn phòng đẹp. Sếp, đồng nghiệp thân thiện. Có nhiều hoạt động ngoài giờ làm. ít khi OT. Tự bản thân đặt ra deadline, nên có OT hay không là do bản thân.',
      },
    ],
  },
];

export const topCompanyList = companyList;
