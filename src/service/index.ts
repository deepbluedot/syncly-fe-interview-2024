import axios from "axios";
import { Feedback, Tag } from "../types";

export const req = axios.create({
  baseURL: "http://localhost:3030",
});

const service = {
  async getFeedbackList(query: string): Promise<Feedback[]> {
    const res = await req.get(`/feedback${query}`);
    return res.data;
  },
  async getTagList(): Promise<Tag[]> {
    const res = await req.get(`/tag`);
    return res.data;
  },
};

export default service;
