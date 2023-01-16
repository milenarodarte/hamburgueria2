import styled from "styled-components";
const DivInput = styled.div`
  display: flex;
  width: 85%;
  font-size: 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  border: 2px solid #e0e0e0;
  padding: var(--10px);
  background-color: white;
  min-width: 12.5rem;
  height: 95%;

  input {
    border: none;
    color: #e0e0e0;
    background-color: transparent;
    width: 80%;
    height: 95%;
  }
  .buttonSearch {
    height: 80%;
    width: 16%;
    background-color: #27ae60;
  }
  .buttonSearch:hover {
    background-color: var(--green-light);
  }
`;
export default DivInput;
