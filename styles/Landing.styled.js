import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const StyledLandingContent = styled.div`
  img {
    width: 80px;
    height: auto;
  }

  h1 {
    margin: 30px 0 20px;
    line-height: 1em;

    ${up('md')} {
      margin: 50px 0;
    }
  }

  ul {
    color: var(--beige);
    list-style: none;

    li {
      display: block;

      ${up('md')} {
        display: inline-block;
      }

      &:not(:last-child)::after {
        ${up('md')} {
          content: '|';
          padding: 0 10px;
        }
      }
    }
  }
`;
