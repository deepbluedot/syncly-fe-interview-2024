import { useState } from 'react';
import styled from 'styled-components';
import FeedbackList from './components/Feedback/FeedbackList';
import FilterComponent from './components/Filter/Filter';
import { FilterOption, FilterValue } from './types';

//
//
// 제공되는 노션 문서와 피그마를 참조하여
// 재사용 가능한 FilterComponent를 구성해주세요
//
// [요구사항]
// - /types/index.ts FilterOption, FilterValue type 정의 (현재 unknown으로 정의됨)
//
// - /components/Filter/Filter.tsx 에서 필터 컴포넌트 작성
//   - /types/constants.ts 파일을 참조하여 필터 옵션 리스트 구성 및 Operator selector 구성
//
// - /utils/index.ts 에서 filterValue를 이용해 queryString을 만들어내는
//    buildQueryFromFilter 유틸리티 함수 작성
//
// - (Optional) currentFilterValues를 localStorage를 사용하여 브라우저 refresh를 해도 유지되도록 작성하기
// - (Optional) Dropdown 컴포넌트를 검색 가능한 형태로 확장하기
//
// [참고사항]
// - css variables는 /src/styles/index.css 를 참고해주세요 (Figma에서 mode_swap/gray/200 === var(--gray-200))
// - 필요한 icon들은 /src/assets 경로에 정의되어 있습니다.
//
//

const tagList = [
  { label: 'Feature', id: '2375533bfc60' },
  { label: 'Bug', id: '8ca853efa283' },
  { label: 'Hotfix', id: '6a6013f92f5fc' },
  { label: 'Design', id: '3c3124f64704' },
  { label: 'Business', id: '3c3124f6470c' },
];

function App() {
  const filterOptions: FilterOption[] = [];
  const [currentFilterValues, setCurrentFilterValues] = useState<FilterValue[]>(
    [],
  );

  return (
    <AppStyle>
      <h1>Feedback List</h1>
      <FilterComponent
        filterOptions={filterOptions}
        currentFilterValues={currentFilterValues}
        onFilterChange={(filter) => {
          setCurrentFilterValues(filter);
        }}
      />
      <FeedbackList currentFilterValues={currentFilterValues} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

export default App;
