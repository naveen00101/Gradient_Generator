// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, selected, onSelect} = props

  return (
    <li>
      <DirectionButton
        selected={selected}
        onClick={() => onSelect(direction.directionId)}
        type="button"
      >
        {direction.displayText}
      </DirectionButton>
    </li>
  )
}
export default GradientDirectionItem
