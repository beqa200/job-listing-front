import React from "react";
import { BodyWrapper } from "./styled-components";
import { Job } from "./components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { DataType } from "./react-app-env";
function App() {
  const [data, setData] = useState<DataType[]>();
  const [hashtags, setHashtags] = useState<String[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3007/api/jobs").then((jobs) => {
      setData(jobs.data);
    });
  }, []);

  return (
    <BodyWrapper hashtagsLength={hashtags.length}>
      <div className="bg"></div>

      <div className="filters">
        <div className="hash-wrapper">
          {hashtags?.map((hashtag: String) => {
            return (
              <div className="hash" key={Math.random() * Math.random()}>
                <p>{hashtag}</p>
                <img
                  src={process.env.PUBLIC_URL + "/images/icon-remove.svg"}
                  onClick={() => {
                    hashtags.splice(hashtags.indexOf(hashtag), 1);
                    setHashtags([...hashtags]);
                  }}
                />
              </div>
            );
          })}
        </div>
        <p
          className="clear"
          onClick={() => {
            setHashtags([]);
          }}
        >
          Clear
        </p>
      </div>

      {data?.map((job: any) => {
        job.hashs = [job.role, job.level, job.languages, job.tools];
        let newArr = [];
        job.count = 0;
        for (let i = 0; i < job.hashs.length; i++) {
          for (let k = 0; k < job.hashs[i].length; k++) {
            if (typeof job.hashs[i] == "string") {
              newArr.push(job.hashs[i]);
              break;
            } else {
              newArr.push(job.hashs[i][k]);
            }
          }
        }
        job.hashs = newArr;

        if (hashtags.length == 0) {
          return (
            <Job
              key={job.id}
              job={job}
              setHashtags={setHashtags}
              hashtags={hashtags}
            />
          );
        } else {
          for (let i = 0; i < hashtags.length; i++) {
            for (let k = 0; k < job.hashs.length; k++) {
              if (hashtags[i] == job.hashs[k]) {
                job.count++;
              }
            }
          }
          if (job.count == hashtags.length) {
            return (
              <Job
                key={job.id}
                job={job}
                setHashtags={setHashtags}
                hashtags={hashtags}
              />
            );
          }
        }
      })}
    </BodyWrapper>
  );
}

export default App;
