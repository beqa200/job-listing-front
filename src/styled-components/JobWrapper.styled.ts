import styled from "styled-components";

type PropsTypes = {
  new: Boolean;
  featured: Boolean;
};

const JobWrapper = styled.div`
  width: calc(90% - 48px);
  height: 240px;
  padding: 0px 24px;
  background-color: white;
  margin: 40px auto;
  border-radius: 5px;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-left: ${(props: PropsTypes) =>
    props.new == true && props.featured == true ? "5px solid #5CA5A5" : ""};

  .section1 {
    border-bottom: 1px solid #b7c4c4;
    img {
      width: 40px;
      margin-top: -20px;
    }

    .for-flex1 {
      display: flex;
      align-items: center;

      font-size: 14px;
      color: white;
      .company {
        font-size: 13px;
        color: #5ca5a5;
        margin-top: 10px;
        height: 24px;
      }

      .new {
        background-color: ${(props: PropsTypes) =>
          props.new == true ? "#5CA5A5" : ""};
        border-radius: 12px;
        padding: 7px 8px 3px 7px;
        margin-left: 33px;
      }

      .featured {
        background-color: ${(props: PropsTypes) =>
          props.featured == true ? "#2b3939" : ""};
        border-radius: 12px;
        padding: 7px 8px 3px 7px;
        margin-left: 8px;
      }
    }

    .position {
      margin-top: 9px;
      font-size: 15px;
      color: #2b3939;
    }

    .for-flex2 {
      display: flex;
      font-size: 16px;
      color: #7c8f8f;
      margin-top: 10px;
      width: 260px;
      padding-bottom: 15px;
      ul {
        display: flex;
        width: 180px;

        li {
          margin-left: 23px;
        }
      }
    }
  }

  .section2 {
    font-size: 18px;
    color: #5ca5a5;
    font-weight: 700;
  
   

    p {
      margin-top: 16px;
      margin-right: 16px;
      display: inline-block;
      padding: 5px 11px 3px 8px;
      background-color: rgba(92, 165, 165, 0.1);
      border-radius: 4px;
    }
  }
`;

export default JobWrapper;
