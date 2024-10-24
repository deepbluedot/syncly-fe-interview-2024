import cors from 'cors';
import express from 'express';
import fs from 'fs';

const loadJSON = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const feedbackList = loadJSON('./database/feedbackList.json');
const tagList = loadJSON('./database/tagList.json');

const port = process.env.PORT || 3030;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.get('/check', (req, res) => {
  return res.send('check');
});

const typeConverter = (string, type) => {
  if (type === 'number') return Number(string);
  return string.toString();
};

const valueParser = (value, type) => {
  let operator = false;
  let result = [];
  if (!value) return false;

  if (value.includes('||')) {
    operator = '||';
  }
  if (value.includes(',')) {
    operator = ',';
  }

  if (operator) {
    result = value.split(operator);
  } else {
    result = [value];
  }

  result = result.map((e) => typeConverter(e, type));

  return {
    result,
    operator,
  };
};

app.get('/feedback', (req, res) => {
  const sourceValues = valueParser(req.query.source, 'number');
  const sentimentValues = valueParser(req.query.sentiment, 'number');
  const tagValues = valueParser(req.query.tag, 'string');

  const filtered = feedbackList.filter((f) => {
    if (sourceValues && !sourceValues.result.includes(f.source)) return false;
    if (sentimentValues && !sentimentValues.result.includes(f.sentiment))
      return false;
    if (tagValues) {
      let condition = false;
      for (const v of tagValues.result) {
        if (tagValues.operator === ',') {
          condition = true;
          if (!f.tags.includes(v)) return false;
        } else {
          if (f.tags.includes(v)) return true;
        }
      }
      return condition;
    }
    return true;
  });

  const mapped = filtered.map((f) => ({
    ...f,
    tags: f.tags
      .map((id) => tagList.find((tag) => tag.id === id))
      .filter((v) => !!v),
  }));

  setTimeout(() => {
    res.send(mapped);
  }, 500);
});

app.get('/tag', (req, res) => {
  setTimeout(() => {
    res.send(tagList);
  }, 500);
});

app.listen(port);
