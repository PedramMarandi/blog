import styled from "styled-components"
import { mediumUp } from "../../style/breakpoints"

export const H1 = styled('h1')`
  font-size: 1.618rem;
  line-height: calc(3 * var(--base-line));
  color: ${props => props.theme.textColor};
  @media ${mediumUp} {
    font-size: 2.618rem;
  }
`;
