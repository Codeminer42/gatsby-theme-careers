import styled from 'styled-components'
import { Text } from 'flokit'

const Tag = styled(Text)``

Tag.defaultProps = {
  as: 'span',
  fontSize: '3',
  fontWeight: '3',
  color: '#37352f',
  opacity: '.5',
}

export default Tag
