import styled from 'styled-components'
import { Button as B } from 'flokit'

const Button = styled(B)`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  minWidth: '122px',
  height: '48px',
  padding: '0 2.8rem',
  borderRadius: '50vh',
  borderWidth: '2px',
  borderStyle: 'solid',
  fontSize: 4,
  fontWeight: 3,
  letterSpacing: '1px',
  color: 'white',
  backgroundColor: 'black',
  borderColor: 'black',
}

export default Button
