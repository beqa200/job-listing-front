import { JobWrapper } from "../styled-components";

import {useState} from "react";

const Jobs = (props: JobPropsType) => {
 
  
  return (
    <JobWrapper>
      <section className="section1">
        <img src={process.env.PUBLIC_URL + props.job.logo}/>
        <div>
          <p>{props.job.company}</p>
          <p>{props.job.new == true ? "NEW!" : null}</p>
          <p>{props.job.featured == true ? "FEATURED" : null}</p>
        </div>

        <p>{props.job.position}</p>

        <div>
            <p>{props.job.postedAt}</p>
            <p>{props.job.contract}</p>
            <p>{props.job.location}</p>

        </div>
        <section className="section2">
            <p>{props.job.role}</p>
            <p>{props.job.level}</p>
            {props.job.languages.map((language: String) => {
                return <p>{language}</p>
            })}
            {props.job.tools.map((tool: String) => {
                return <p>{tool}</p>
            })}
        </section>
      </section>
    </JobWrapper>
  );
};

export default Jobs;
