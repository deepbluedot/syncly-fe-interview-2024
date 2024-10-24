export enum SENTIMENT {
  VERY_NEGATIVE = 1,
  NEGATIVE = 2,
  NEUTRAL = 3,
  POSITIVE = 4,
  VERY_POSITIVE = 5,
}

export const SentimentDic = {
  [SENTIMENT.VERY_NEGATIVE]: "Very negative",
  [SENTIMENT.NEGATIVE]: "Negative",
  [SENTIMENT.NEUTRAL]: "Neutral",
  [SENTIMENT.POSITIVE]: "Positive",
  [SENTIMENT.VERY_POSITIVE]: "Very positive",
};

export enum SOURCE {
  MANUAL = 1,
  SLACK = 2,
  INTERCOM = 3,
  ZENDESK = 4,
  CHANNEL_TALK = 5,
}

export const SourceDic = {
  [SOURCE.MANUAL]: "Manual",
  [SOURCE.SLACK]: "Slack",
  [SOURCE.INTERCOM]: "Intercom",
  [SOURCE.ZENDESK]: "Zendesk",
  [SOURCE.CHANNEL_TALK]: "Channel talk",
};

export enum FILTER_OPERATOR {
  OR = "||",
  AND = ",",
}
