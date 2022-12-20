import { JobWrapper } from "../styled-components";
import { useState } from "react";
import { JobPropsType } from "../react-app-env";
const Jobs = (props: JobPropsType) => {
  function addHash(hash: String) {
    let copied = [...props.hashtags, hash];
    copied = copied.filter((item, index) => copied.indexOf(item) === index);
    props.setHashtags(copied);
  }

  return (
    <JobWrapper new={props.job.new} featured={props.job.featured}>
      <img src={process.env.PUBLIC_URL + props.job.logo} />

      <section className="section1">
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
        <p
          onClick={() => {
            addHash(props.job.role);
          }}
        >
          {props.job.role}
        </p>
        <p
          onClick={() => {
            addHash(props.job.level);
          }}
        >
          {props.job.level}
        </p>
        {props.job.languages.map((language: String) => {
          return (
            <p
              key={props.job.languages.indexOf(language)}
              onClick={() => {
                addHash(language);
              }}
            >
              {language}
            </p>
          );
        })}
        {props.job.tools.map((tool: String) => {
          return (
            <p
              key={props.job.tools.indexOf(tool)}
              onClick={() => {
                addHash(tool);
              }}
            >
              {tool}
            </p>
          );
        })}
      </section>
    </JobWrapper>
  );
};

export default Jobs;
