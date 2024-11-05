import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import service from '../../service';
import { Feedback } from '../../types';
import List from '../List/List';
import FeedbackItem from './FeedbackItem';

type Props = {
  query: string;
};

//
// FeedbackList 컴포넌트는 currentFilterValues를 props으로 받아,
// utils.buildQueryFromFilter 유틸함수를 사용하여 query로 변환한 뒤
// 해당 쿼리로 피드백 리스트를 받아오는 컴포넌트입니다.
//
// 이 컴포넌트는 수정하지 말아야 합니다.
//

const FeedbackList = (props: Props) => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFeedbackList = useCallback(async () => {
    setLoading(true);
    const res = await service.getFeedbackList(props.query);
    setLoading(false);
    setFeedbackList(res);
  }, [props.query]);

  useEffect(() => {
    fetchFeedbackList();
  }, [fetchFeedbackList]);

  return (
    <Style>
      <List
        data={feedbackList}
        isLoading={loading}
        style={{ gap: 16, minHeight: 300, width: 600 }}
        render={(el) => {
          const feedback = el as Feedback;
          return <FeedbackItem key={feedback.id} {...feedback} />;
        }}
      />
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default FeedbackList;
