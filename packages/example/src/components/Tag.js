import styled from 'styled-components'
import { Text } from 'flokit'

const Tag = styled(Text)``

Tag.defaultProps = {
  as: 'span',
  fontSize: '3',
  fontWeight: '3',
  color: 'accent',
}

export default Tag
