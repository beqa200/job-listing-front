import styled from "styled-components";

type PropsTypes = {
  new: Boolean;
  featured: Boolean;
};

const JobWrapper = styled.div`
  width: calc(90% - 48px);
  max-width: 1110px;
  height: 240px;
  padding: 0px 24px;
  background-color: white;
  margin: 40px auto;
  border-radius: 5px;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-left: ${(props: PropsTypes) =>
    props.new == true && props.featured == true ? "5px solid #5CA5A5" : ""};

  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    height: 152px;
  }

  img {
    width: 40px;
    margin-top: -20px;

    @media(min-width: 1300px) {
        width: 88px;
        height: 88px;
        margin-top: 0px;
    }
  }
  .section1 {
    border-bottom: 1px solid #b7c4c4;

    @media (min-width: 1300px) {
      border: none;
      margin-left: 24px;
    }

    .for-flex1 {
      display: flex;
      align-items: center;
      font-weight: 700;
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
      font-size: 22px;
      color: #2b3939;
      font-weight: 700;
      cursor: pointer;

    

      &:hover {
        color: #5ca5a5;
      }
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
    font-size: 16px;
    color: #5ca5a5;
    font-weight: 700;

    
    @media(min-width: 1300px) {
        margin-left: 263px;
      }

    p {
      margin-top: 16px;
      margin-right: 16px;
      display: inline-block;
      padding: 5px 11px 3px 8px;
      background-color: rgba(92, 165, 165, 0.1);
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        color: white;
        background-color: #5ca5a5;
      }
    }
  }
`;

export default JobWrapper;
