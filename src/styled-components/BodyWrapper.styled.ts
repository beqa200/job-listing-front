import styled from "styled-components";

type PropsType = {
  hashtagsLength: Number;
};

const BodyWrapper = styled.div`
  .bg {
    width: 100%;
    height: 156px;
    background-color: #5ca5a5;
    background-image: url(${process.env.PUBLIC_URL + "/images/bg-header-mobile.svg"});
    background-position: 50%;
  }

  .filters {
    font-size: 18px;
    background-color: white;
    margin: -10px auto 56px;
    border-radius: 5px;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    width: calc(90% - 48px);
    max-width: 1110px;
    padding: 20px 24px 0px;
    display: ${(props: PropsType) =>
      props.hashtagsLength == 0 ? "none" : "flex"};
    align-items: center;
    .hash-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin-left: -16px;
      .hash {
        margin-bottom: 16px;
        display: flex;
        p {
          margin-left: 16px;
          color: #5ca5a5;
          font-weight: 700;
          display: inline-block;
          padding: 8px 11px 3px 8px;
          background-color: rgba(92, 165, 165, 0.1);
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }

      img {
        background-color: #5ca5a5;
        padding: 9px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: #2b3939;
        }
      }
    }
  }

  .clear {
    margin-top: -13px;
    color: #7c8f8f;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: #5ca5a5;
      text-decoration: underline;
    }
  }
`;

export default BodyWrapper;
