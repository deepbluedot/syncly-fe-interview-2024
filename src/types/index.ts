import { SENTIMENT, SOURCE } from './constants';

// FilterOption은 각 필드들의 키 값과 각 필드가 가질 수 있는 값을 정의하는 타입입니다.
export type FilterOption = unknown;

// FilterValue는 현재 선택된 필터 값들입니다. 어떤 필드의 어떤 값인지 정의하여야 합니다.
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
