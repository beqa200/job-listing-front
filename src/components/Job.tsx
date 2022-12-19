import { JobWrapper } from "../styled-components";
import { useState } from "react";

const Jobs = (props: JobPropsType) => {
  return (
    <JobWrapper new={props.job.new} featured={props.job.featured}>
      <section className="section1">
        <img src={process.env.PUBLIC_URL + props.job.logo} />
        <div className="for-flex1">
          <p className="company">{props.job.company}</p>
          <p className="new">{props.job.new == true ? "NEW!" : null}</p>
          <p className="featured">
            {props.job.featured == true ? "FEATURED" : null}
          </p>
        </div>

        <p className="position">{props.job.position}</p>

        <div className="for-flex2">
          <p>{props.job.postedAt}</p>
          <ul>
            <li>{props.job.contract}</li>
            <li>{props.job.location}</li>
          </ul>
        </div>
      </section>
      <section className="section2">
        <p>{props.job.role}</p>
        <p>{props.job.level}</p>
        {props.job.languages.map((language: String) => {
          return <p>{language}</p>;
        })}
        {props.job.tools.map((tool: String) => {
          return <p>{tool}</p>;
        })}
      </section>
    </JobWrapper>
  );
};

export default Jobs;
