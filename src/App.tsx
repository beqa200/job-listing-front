import React from "react";
import { BodyWrapper } from "./styled-components";
import { Job } from "./components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios.get("http://localhost:3007/api/jobs").then((jobs) => {
      setData(jobs.data);
    });
  }, []);
console.log(data);
  return (
    <BodyWrapper>
      <div className="bg"></div>
      {data?.map((job: any) => {
        return <Job key={job.id} job={job} />;
      })}
    </BodyWrapper>
  );
}

export default App;
