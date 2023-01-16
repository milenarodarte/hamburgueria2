import styled from "styled-components";

const CardContainer = styled.div`
  width: 14.75rem;
  min-width: 14.75rem;
  height: 21.625rem;
  min-height: 21.625rem;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  background-color: #f5f5f5;

  .divText {
    width: 100%;
    padding: 1.344rem 1.188rem 1.344rem 1.188rem;
    background-color: #fff;
    height: 11.85rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    height: 9.375rem;
  }
  .title {
    font-size: var(--18px);
    font-weight: var(--bold);
    line-height: 1.5rem;
  }
  .category {
    font-size: var(--12px);
    font-weight: var(--light);
    line-height: 1rem;
    color: #828282;
    margin-bottom: var(--14px);
    margin-top: 0.25rem;
  }
  .price {
    line-height: 1.5rem;
    color: var(--green);
    font-weight: 600;
    margin-bottom: var(--20px);
  }
  button {
    cursor: pointer;
  }
`;
export default CardContainer;
