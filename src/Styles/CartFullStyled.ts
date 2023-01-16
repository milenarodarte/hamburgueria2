import styled from "styled-components";
const ContainerCartFull = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(51, 51, 51, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .cartFull {
    width: 31.25rem;
    height: 12.625rem;
    border-radius: 0.5rem;
    margin-top: 5rem;
  }
  .headerModal {
    background-color: #27ae60;
    display: flex;
    justify-content: space-between;
    padding: 0rem var(--22px) 0rem var(--22px);
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    height: 3.375rem;
    align-items: center;
  }
  .close {
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);
  }
  .cartTitle {
    color: #ffffff;
    font-size: var(--18px);
    font-weight: 700;
  }
  .mainCart {
    background-color: #f5f5f5;
    padding: 1.25rem var(--22px) 1.25rem var(--22px);
    min-height: 16.188rem;
  }
  .cartFull {
    padding: 0rem var(--22px) 0em var(--22px);
  }
  .divTotal {
    display: flex;
    border-top: 2px solid #e0e0e0;
    justify-content: space-between;
    height: 3.688rem;
    align-items: center;
  }
  .btnRemoveAll {
    width: 100%;
    height: 3.75rem;
    background-color: #e0e0e0;
    color: #828282;
    font-size: 1rem;
    font-weight: 600;
  }
  .btnRemoveAll:hover {
    color: #e0e0e0;
    background-color: #828282;
  }
  .cardCart {
    display: flex;
    flex: content;
    gap: 1rem;
  }
`;
export default ContainerCartFull;
