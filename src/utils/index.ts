import { FilterValue } from "../types";

const buildQueryFromFilter = (filterValues: FilterValue[]): string => {
  console.log(filterValues);

  //
  // 출력 기댓값
  // ?source=1||2||3&&sentiment=1&&tag=2375533bfc60,8ca853efa283
  // 물음표를 포함한 문자열
  //

  return "";
};

const utils = {
  buildQueryFromFilter,
};

export default utils;
