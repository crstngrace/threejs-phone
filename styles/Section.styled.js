import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  width: 70%;
  min-height: 100vh;

  ${up('md')} {
    width: 60%;
  }
`;
