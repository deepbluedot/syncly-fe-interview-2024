import { useRef, useState } from 'react';
import styled from 'styled-components';
import IcPlus from '../../assets/IcPlus';
import { FilterOption, FilterValue } from '../../types';
import Dropdown from '../Dropdown/Dropdown';

type Props = {
  filterOptions: FilterOption[];
  currentFilterValues: FilterValue[];
  onFilterChange: (filterValues: FilterValue[]) => void;
};

//
// 필터 컴포넌트는 도메인에 종속적이지 않은 필터옵션 형식을 props로 받아,
// 필터 값을 선택, 제거 가능하고, 필터 값 사이의 operator (AND, OR) 를 설정할 수 있는 컴포넌트입니다.
// 피그마를 참조하여 이 컴포넌트를 완성해주세요
//
// Dropdown, Checkbox, OptionItem 등의 공용 컴포넌트는 제공됩니다.
//

const FilterComponent = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Style ref={ref} onClick={() => setDropdownOpen(true)}>
        <IcPlus width="16px" height="16px" />
        <span className="label">Filter</span>
      </Style>
      {/* Dropdown sample 입니다 */}
      <Dropdown
        options={[
          {
            label: 'Filter A',
            value: 1,
          },
          {
            label: 'Filter B',
            value: 2,
          },
          {
            label: 'Value C',
            value: 3,
            enableCheck: {
              checked: false,
              onCheck: (value, status) => {
                console.log(value, status);
              },
            },
          },
          {
            label: 'Value D',
            value: 4,
            enableCheck: {
              checked: true,
              onCheck: (value, status) => {
                console.log(value, status);
              },
            },
          },
        ]}
        status={dropdownOpen}
        close={() => setDropdownOpen(false)}
        anchorRef={ref}
      />
    </>
  );
};

const Style = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 24px;
  gap: 4px;
  padding: 8px 12px;
  color: var(--gray-700);
  border: 1px solid var(--gray-400);
  cursor: pointer;
  background-color: var(--gray-100);
  .label {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default FilterComponent;
