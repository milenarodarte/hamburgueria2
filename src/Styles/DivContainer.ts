import styled from "styled-components";

const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  .left {
    width: 50vw;
    display: flex;
    justify-content: flex-end;
    height: 100vh;
  }
  .right {
    width: 50vw;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: relative;
  }

  fieldset {
    border-radius: 0.5rem;
    border: 2px solid var(--grey-600);
    width: 100%;
    height: 3.75rem;
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
  }
  legend {
    color: #999999;
    font-size: var(--12px);
  }
  input {
    background-color: transparent;
    border: none;
    width: 96%;
    font-size: 1rem;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .formContainer {
    width: 31.25rem;
    height: 28.813rem;
    border: 1px solid var(--grey-0);
    border-radius: 0.5rem;
    margin-top: var(--98px);
    display: flex;
    flex-direction: column;
    padding: var(--21px);
    align-items: flex-start;
  }
  h1 {
    font-size: var(--18px);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .error {
    font-size: var(--14px);
    color: #999999;
    margin-top: 0rem;
  }
  .loginButton {
    width: 100%;
  }
  .createAccount {
    font-size: var(--14px);
    font-weight: 400;
    line-height: var(--18px);
    color: #999999;
    width: 20.438rem;
    align-self: center;
  }
  .registerButton {
    background-color: #f5f5f5;
    color: #999999;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    margin-top: 1rem;
  }
  .registerButton:hover {
    background-color: #999999;
    color: #f5f5f5;
  }
  .createAccount {
    margin-top: 1.5rem;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5.938rem 0rem 0rem 3.875rem;
  }
  .logo {
    margin-top: var(--98px);
    width: 14.375rem;
  }
  .shopSquare {
    width: 23.563rem;
    height: 5.938rem;
    border: 1px solid #e0e0e0;
    box-shadow: 0.4px 0.4px 3px 0.4px #e0e0e0;
    border-radius: 0.5rem;
    margin-top: 1.875rem;
    display: flex;
    padding: 1.063rem;
  }
  .dots {
    width: 11.313rem;
    margin-top: 1.875rem;
  }
  .greenSquare {
    background-color: rgba(39, 174, 96, 0.1);
    width: 3.75rem;
    display: flex;
    align-items: center;
    height: 3.75rem;
    justify-content: center;
    border-radius: 0.5rem;
  }
  @media (max-width: 930px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .left {
      width: 100vw;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right {
      padding: 0rem;
      margin: 0rem;
      width: 100vw;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo {
      margin-top: 0rem;
    }
    .formContainer {
      margin-top: 0rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem;
    width: 100vw;
    min-height: 100vh;
    overflow-y: scroll;

    .logo {
      margin-left: 1rem;
      margin-top: 4rem;
    }
    .left {
      align-items: center;
      width: 100vw;
    }
    .right {
      width: 100%;
      display: flex;
      align-items: flex-start;
    }
    .leftContainer {
      padding: 0rem;
      margin: 0 auto;
      width: 100vw;
    }
    .dots {
      display: none;
    }
    .formContainer {
      width: 95vw;
      display: flex;
      flex-wrap: wrap;
    }
    .shopSquare {
      width: 100%;
    }
  }
`;
export default DivContainer;
