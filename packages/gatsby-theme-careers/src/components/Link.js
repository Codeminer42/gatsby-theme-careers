import styled from 'styled-components'
import { Link as A } from 'gatsby'
import { Text } from 'flokit'

const Link = styled(Text)`
  color: inherit;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    opacity: 0.6;
  }
`

Link.defaultProps = {
  as: A,
}

export default Link
