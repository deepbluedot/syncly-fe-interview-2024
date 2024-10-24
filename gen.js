const tagList = [
  {
    id: "2375533bfc60",
    name: "Feature",
  },
  {
    id: "8ca853efa283",
    name: "Bug",
  },
  {
    id: "6a6013f92f5fc",
    name: "Hotfix",
  },
  {
    id: "3c3124f64704",
    name: "Design",
  },
  {
    id: "3c3124f6470c",
    name: "Business",
  },
];

const feedbackList = [
  {
    title: "의미 불명확한 피드백",
    id: "671861277668ec2172fe7d93",
    sentiment: 1,
    source: 3,
    tags: [],
  },
  {
    title: "국내 고객 리텐션 기능 요청 정리 필요",
    id: "671844977668ec2172fe7cdd",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "미국 고객 요청사항 우선순위 전달",
    id: "671843de7668ec2172fe7cdb",
    sentiment: 5,
    source: 3,
    tags: [],
  },
  {
    title: "고객 피드백 및 문제 해결 요청",
    id: "671826d87668ec2172fe7c80",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "법인카드 한도 초과로 조정 요청",
    id: "671776cb7668ec2172fe798a",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "프로젝트 요구사항 및 리팩토링 요청",
    id: "6717681b7668ec2172fe7958",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "DM 확인 요청",
    id: "6717516d7668ec2172fe7907",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "방문자에 대한 궁금증",
    id: "67173b8c7668ec2172fe7852",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "스탠드업 미팅 불참 안내",
    id: "671725a97668ec2172fe7804",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "연차휴가 신청 및 휴가 캘린더 홍보",
    id: "6717207d7668ec2172fe77b1",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "예약 확인 및 온라인 미팅 안내",
    id: "671712a87668ec2172fe775e",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "컨디션 불량으로 재택 근무",
    id: "6716febd7668ec2172fe76ee",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "구글밋으로 참석 요청",
    id: "6716ed2e7668ec2172fe7672",
    sentiment: 5,
    source: 3,
    tags: [],
  },
  {
    title: "미국 리드 소스 총정리 자료 공유",
    id: "67169b5f7668ec2172fe7615",
    sentiment: 4,
    source: 3,
    tags: [],
  },
  {
    title: "자비스앤빌런즈 향 제안서 공유 요청",
    id: "671632c2b8b42d511ee50bcd",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "구글밋 조인 안내",
    id: "671613cfb8b42d511ee50bb6",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "제품 리뷰 분석 및 모니터링 필요성",
    id: "6716035fb8b42d511ee50baf",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "예비군 훈련 참가 일정 안내",
    id: "6715f87ab8b42d511ee50b94",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "URL 리다이렉트 수정 요청",
    id: "6715efe9b8b42d511ee50b8e",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "재택 근무 요청 및 자전거 파츠 반납",
    id: "6715da30b8b42d511ee50b73",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "수상한 검색 결과 문제",
    id: "6715d64eb8b42d511ee50b70",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "감기몸살로 재택근무 요청",
    id: "6715d016b8b42d511ee50b68",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "URL Weekly Growth To Do 업데이트 필요",
    id: "6715a79fb8b42d511ee50b48",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "실적 확인을 위한 URL 안내",
    id: "6715999fb8b42d511ee50b43",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "CX팀의 Tech Stack 및 Pain Point 분석",
    id: "6715170ab8b42d511ee508c4",
    sentiment: 4,
    source: 3,
    tags: [],
  },
  {
    title: "실적 업데이트 요청",
    id: "6712f694b8b42d511ee50567",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "고객 피드백 및 요구 사항 분석",
    id: "6712ed96b8b42d511ee50564",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "고객 관리 및 분석에 대한 피드백",
    id: "6712ec13b8b42d511ee50560",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "Gong 기반 자동화 분석 피드백",
    id: "6712eb15b8b42d511ee5055c",
    sentiment: 5,
    source: 3,
    tags: [],
  },
  {
    title: "피드백 요청에 대한 긍정적 반응",
    id: "6712e0e9b8b42d511ee50556",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "Sentiment 필터링 문제 재보고",
    id: "6712df2db8b42d511ee50554",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title:
      "Thanks for trying out email with Intercom.This is a test email. Send it now to r",
    id: "6712d94a36b8df0343e32505",
    sentiment: 1,
    source: 0,
    tags: [],
  },
  {
    title: "Trend Chart의 자동 테마 선택 요청",
    id: "6712d291b8b42d511ee50543",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "End sentiment 추가 요청 및 메시지 수정 필요",
    id: "6712d0dfb8b42d511ee50541",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "AI 싱클리 문제 및 데모 결과 불만",
    id: "67123415b5d41f93687c7522",
    sentiment: 5,
    source: 3,
    tags: [],
  },
  {
    title: "허들로 채널 접속 예정",
    id: "67121fa3b5d41f93687c716a",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "스탠드업 미팅 구글밋 확인 요청",
    id: "67121f8bb5d41f93687c7168",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "휴가 일정 공유",
    id: "67121df3b5d41f93687c7164",
    sentiment: 1,
    source: 3,
    tags: [],
  },
  {
    title: "피드백 블락의 노이즈 필터링 장점",
    id: "6711ebb0b5d41f93687c711a",
    sentiment: 4,
    source: 3,
    tags: [],
  },
  {
    title: "앞이 안 보여도 전진!",
    id: "6711e39cb5d41f93687c710a",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "서울 교통 혼잡 문제",
    id: "6711e354b5d41f93687c7108",
    sentiment: 5,
    source: 3,
    tags: [],
  },
  {
    title: "이상한 날씨에 대한 불만",
    id: "6711e22cb5d41f93687c7106",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "재택 근무 요청 및 컨디션 문제",
    id: "6711dfcab5d41f93687c7104",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "인사이트 개편 방향성과 Bottleneck 해결 방안",
    id: "6711db3fb5d41f93687c70f2",
    sentiment: 5,
    source: 3,
    tags: [],
  },
  {
    title: "RC 프로젝트 팀의 연구소 방향성 및 분석 요구",
    id: "6711dac0b5d41f93687c70ef",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "인사이트 개편 방향에 대한 피드백",
    id: "67114380b5d41f93687c709a",
    sentiment: 3,
    source: 3,
    tags: [],
  },
  {
    title: "유머가 가득한 피드백",
    id: "6710d249191c60b7cb863f93",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "토픽 정보 Export 요청",
    id: "6710c43a191c60b7cb863f7d",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "크롤링 요금 및 자사몰 데이터 분석",
    id: "6710c1c9191c60b7cb863f78",
    sentiment: 2,
    source: 3,
    tags: [],
  },
  {
    title: "AI 테마 세팅 및 데이터 분석 개선 요청",
    id: "6710b572191c60b7cb863f5f",
    sentiment: 2,
    source: 3,
    tags: [],
  },
];

function getRandomInteger(minNumber, maxNumber) {
  const random = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(random);
}

const result = feedbackList.map((f) => {
  let tags = [];
  const tagLen = getRandomInteger(0, 3);
  const getRandomTag = (excludes) => {
    const randomIndex = getRandomInteger(0, 4);
    if (excludes?.includes(randomIndex)) {
      return getRandomTag(excludes);
    }
    const target = tagList[randomIndex];
    return target;
  };
  for (let i = 0; i < tagLen; i++) {
    const tag = getRandomTag([...tags]);
    tags.push(tag.id);
  }

  return {
    ...f,
    sentiment: getRandomInteger(1, 5),
    source: getRandomInteger(1, 5),
    tags: [...new Set(tags)],
  };
});

console.log(result);
