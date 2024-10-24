import { SENTIMENT, SOURCE } from './constants';

export type FilterOption = unknown;
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
