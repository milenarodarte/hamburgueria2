import styled from "styled-components";
const DivHeader = styled.div`
  .divContainerHeader {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 12vh;
    background-color: #f5f5f5;
    align-items: center;
    padding: 0rem 7.25rem 0rem 7.25rem;
  }

  button {
    background-color: transparent;
    border: none;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    position: relative;
  }
  button:hover {
    background-color: transparent;
  }
  .buttonLogout {
    margin-top: 0.5rem;
  }
  .btnSearch {
    margin-top: 0.3rem;
    display: none;
  }
  .logo {
    width: 200px;
    margin: 0rem;
  }
  .searchButtons {
    display: flex;
    justify-content: space-around;
    width: 35vw;
    align-items: center;

    height: 80%;
  }
  .counterCart {
    position: absolute;
    top: 3px;
    left: 24px;
    font-weight: 700;
  }

  @media (max-width: 760px) {
    .divContainerHeader {
      padding: 0rem 1rem 0rem 1rem;
    }

    .btnSearch {
      display: flex;
    }
    .divInput {
      display: none;
    }
    .logo {
      width: 7.5rem;
    }
    .divInput2 {
      width: 90%;
    }
    .btnClose {
      font-size: 1.2rem;
      font-weight: 700;
      background-color: #f5f5f5;
      color: #bdbdbd;
    }
  }
`;
export default DivHeader;
