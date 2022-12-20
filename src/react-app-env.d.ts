/// <reference types="react-scripts" />

import { Method } from "axios";

type JobPropsType = {
  job: any;
  setHashtags: (hashtags: String[]) => void;
  hashtags: String[];
};

type DataType = {
  id: String;
  company: String;
  logo: String;
  new: Boolean;
  featured: Boolean;
  position: String;
  role: String;
  level: String;
  postedAt: String;
  contract: String;
  location: String;
  languages: Array;
  tools: Array;
  map: Function;
  count?: number;
  hashs?: String[];
};
