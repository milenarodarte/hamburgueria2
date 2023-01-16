import styled from "styled-components";

const DivCart = styled.div`
  width: 90%;
  height: 5rem;
  display: flex;
  background-color: #f5f5f5;

  align-items: center;
  .imgBorder {
    background-color: #e0e0e0;
    width: 20%;
    border-radius: 0.5rem;
    height: 4.375rem;
  }
  img {
    width: 100%;
  }
  .remove {
    background: none;
    color: #828282;
    padding: 0;
    font-size: var(--12px);
    font-weight: 500;
    height: 1.8rem;
    width: 100%;
  }
  .remove:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .cartElements {
    display: flex;
    margin-left: 0.7rem;
    justify-content: space-between;
    width: 80%;
  }
  .name {
    font-weight: 700;
    font-size: var(--14px);
    margin-bottom: 0.8rem;
  }
  .category {
    font-size: var(--12px);
    color: #828282;
  }

  .divCounter {
    display: flex;
  }
  .buttonSetCounter {
    width: 1rem;
    margin: 0.5rem;
    background-color: var(--green);
    color: white;
    border: none;
    border-radius: 0.2rem;
    font-weight: 700;
    cursor: pointer;
  }
  .buttonSetCounter:hover {
    background-color: var(--light-green);
    color: var(--green);
  }
  .counter {
    margin-top: 0.4rem;
    color: var(--green);
  }
`;
export default DivCart;
