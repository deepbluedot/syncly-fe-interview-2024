import styled from 'styled-components';
import { Feedback } from '../../types';
import { SentimentDic, SourceDic } from '../../types/constants';

const FeedbackItem = (props: Feedback) => {
  return (
    <Style>
      <h3 className="title">{props.title}</h3>
      <div className="meta-list">
        <span className="meta">{SentimentDic[props.sentiment]}</span>
        <span className="meta">{SourceDic[props.source]}</span>
        {props.tags.map((tag) => (
          <span className="meta" key={tag.id} {...tag}>
            # {tag.name}
          </span>
        ))}
      </div>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  box-shadow: 1px 4px 16px var(--gray-300);
  border-radius: 16px;
  background-color: var(--gray-100);
  .title {
    font-size: 16px;
    font-weight: 400;
    color: var(--gray-700);
  }
  .meta-list {
    display: flex;
    gap: 8px;
  }
  .meta {
    color: var(--gray-600);
    font-size: 12px;
    padding: 4px 6px;
    background-color: var(--gray-200);
    border-radius: 4px;
  }
`;

export default FeedbackItem;
