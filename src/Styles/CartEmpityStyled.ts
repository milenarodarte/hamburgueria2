import styled from "styled-components";

const ContainerCartEmpity = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(51, 51, 51, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .cartEmpity {
    width: 31.25rem;
    height: 12.625rem;
    border-radius: 0.5rem;
    margin-top: 5rem;
  }

  header {
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
  .divEmpityCart {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 9.875rem;
  }
  .addItens {
    color: #828282;
    font-size: var(--14px);
    font-weight: 400;
    margin-top: 0.6rem;
  }
`;
export default ContainerCartEmpity;
