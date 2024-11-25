import { useRef, useState } from 'react';
import styled from 'styled-components';
import Dropdown from './components/Dropdown/Dropdown';
import { OptionItem } from './components/Dropdown/DropdownItem';
import FeedbackList from './components/Feedback/FeedbackList';
import { SENTIMENT, SentimentDic, SOURCE, SourceDic } from './types/constants';

//
//
// 제공되는 노션 문서와 피그마를 참조하여
// Filter Component를 구성해주세요
//
// [요구사항]
// - Filter Component 를 작성하여 현재 선택된 필터에 따라 query string을 업데이트하기
// - (Optional) localStorage를 사용하여 브라우저 refresh를 해도 선택된 필터 상태가 유지되도록 작성하기
// - (Optional) Dropdown 컴포넌트를 검색 가능한 형태로 확장하기
//
// [참고사항]
// - css variables는 /src/styles/index.css 를 참고해주세요 (Figma에서 mode_swap/gray/200 === var(--gray-200))
// - 필요한 icon들은 /src/assets 경로에 정의되어 있습니다.
// - Dropdown, Checkbox, OptionItem 등의 공용 컴포넌트는 제공됩니다.
// - 제공되는 컴포넌트 외에 본인이 선호하는 라이브러리가 있다면 사용해도 무방합니다.
//

const tagLis: OptionItem[] = [
  { label: 'Feature', value: '2375533bfc60' },
  { label: 'Bug', value: '8ca853efa283' },
  { label: 'Hotfix', value: '6a6013f92f5fc' },
  { label: 'Design', value: '3c3124f64704' },
  { label: 'Business', value: '3c3124f6470c' },
];

const sentimentList: OptionItem[] = Object.keys(SentimentDic).map((key) => {
  const sentiment = Number(key) as SENTIMENT;
  return {
    label: SentimentDic[sentiment],
    value: sentiment,
  };
});

const sourceList: OptionItem[] = Object.keys(SourceDic).map((key) => {
  const source = Number(key) as SOURCE;
  return {
    label: SourceDic[source],
    value: source,
  };
});

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <AppStyle>
      <h1>Feedback List</h1>
      <AnchorStyle ref={ref} onClick={() => setDropdownOpen(true)}>
        Dropdown Anchor Sample
      </AnchorStyle>
      <Dropdown
        open={dropdownOpen}
        close={() => setDropdownOpen(false)}
        anchorRef={ref}
        options={[
          {
            label: 'Filter A',
            value: 1,
            onClick(value) {
              alert(`click ${value}`);
              // => 1
            },
          },
          {
            label: 'Filter B',
            value: 2,
            onClick(value) {
              alert(`click ${value}`);
              // => 2
            },
          },
          {
            label: 'Value C',
            value: 3,
            enableCheck: {
              checked: false,
              onCheck: (value, status) => {
                alert(`check ${value} ${status}`);
                // => 3, true
              },
            },
          },
          {
            label: 'Value D',
            value: 4,
            enableCheck: {
              checked: true,
              onCheck: (value, status) => {
                alert(`check ${value} ${status}`);
                // => 4, false
              },
            },
          },
        ]}
      />
      <FeedbackList query={query} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

const AnchorStyle = styled.div`
  background-color: var(--primary-100);
  color: var(--gray-100);
  width: fit-content;
  padding: 8px 16px;
  cursor: pointer;
`;

export default App;
