import styled from 'styled-components'
import { Text } from 'flokit'

const Bold = styled(Text)``

Bold.defaultProps = {
  as: 'span',
  fontWeight: '4',
}

export default Bold
