import styled from "styled-components";
const Main = styled.main`
  display: flex;
  height: 88vh;
  width: 100vw;
  padding: 2rem 7.25rem 2rem 7.25rem;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 3.5rem;
  @media (max-width: 760px) {
    padding: 2rem 1rem 2rem 1rem;

    overflow-x: unset;
    height: 400px;
    overflow-x: scroll;
    width: 100%;

    flex-wrap: unset;
    justify-content: start;
  }
`;
export default Main;
