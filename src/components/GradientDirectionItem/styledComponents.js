// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  border: none;
  margin-right: 10px;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${props => (props.selected ? '1' : '0.5')};
`
