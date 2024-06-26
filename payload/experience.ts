import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '키트웍스 (Kit Works)',
      position: '백엔드 개발자',
      startedAt: '2023-04',
      descriptions: [
        '스터디 공간 예약 서비스 및 현대 자동차 IT 솔루션(15 ~ 20명)',
        '현대자동차 캐스퍼EV 신규 프로젝트 개발(Java, Spring)',
        '현대자동차 캐스퍼 비즈니스 로직 유지보수 및 신규 API 개발(Java, Spring)',
        '자사 서비스 스터디 모아 신규 서비스 모임 프로젝트 개발(Kotlin, Ktor)',
      ],
      skillKeywords: [
        'Java',
        'Kotlin',
        'Spring Boot',
        'JPA',
        'Mybatis',
        'Tibero',
        'MySQL',
        'Redis',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'MSA',
        'JIRA',
      ],
    },
    // {
    //   title: 'Bar Co., Ltd.',
    //   position: 'Software Engineer',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   descriptions: [
    //     'Online Commerce IT Startup',
    //     'Development of reservation system and service worker',
    //     'AWS infrastructure and RDBMS maintenance and development',
    //   ],
    //   skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    // },
  ],
};

export default experience;
