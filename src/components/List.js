import styled from 'styled-components'
import { Box } from 'flokit'

const List = styled(Box)`
  list-style: none;
`

List.defaultProps = {
  as: 'ul',
  margin: 0,
  padding: 0,
}

export default List
