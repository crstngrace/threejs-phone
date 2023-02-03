import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.3s;

  img,
  h1,
  p,
  ul {
    transform: ${({ isLoaded }) => !isLoaded && 'translateY(100px)'};
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
    transition: all 0.3s;
  }
`;
