import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const StyledArticle = styled.article``;

export const StyledArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  ${up('md')} {
    margin-bottom: 100px;
  }

  img {
    width: 40px;
    height: auto;

    ${up('md')} {
      width: 60px;
    }
  }
`;
