import { SENTIMENT, SOURCE } from './constants';

// FilterOption은 필드의 키 값 ( ex> source, sentiment, tag...)과
// 필드가 가질 수 있는 값의 리스트 ( ex> SOURCE.MANUAL, SOURCE.SLACK...)
// 그리고 필드의 기타 속성들을 정의하는 타입입니다.
export type FilterOption = unknown;

// FilterValue는 현재 선택된 필터 값들입니다. 어떤 필드의 어떤 값들과 operator가 선택되었는지가 정의될 수 있어야 합니다.
export type FilterValue = unknown;

export type Feedback = {
  id: string;
  title: string;
  sentiment: SENTIMENT;
  source: SOURCE;
  tags: Tag[];
};

export type Tag = {
  name: string;
  id: string;
};

export type StringNumberValue = string | number;
