import {useState, useMemo} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Container,
  Heading,
  SubHead,
  GenerateButton,
  ColorLabel,
  ColorInput,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [colors, setColors] = useState({colorA: '#8ae323', colorB: '#014f7b'})
  const [direction, setDirection] = useState(gradientDirectionsList[0].value)
  const [generateClicked, setGenerateClicked] = useState(false)

  const gradient = useMemo(
    () => ({
      colorA: colors.colorA,
      colorB: colors.colorB,
      gd: direction,
    }), // eslint-disable-next-line
    [generateClicked],
  )

  const handleGenerateClick = () => {
    setGenerateClicked(prevState => !prevState)
  }

  const handleColorChange = (event, colorKey) => {
    setColors({...colors, [colorKey]: event.target.value})
  }

  return (
    <MainContainer
      data-testid="gradientGenerator"
      direction="column"
      {...gradient}
    >
      <Heading>Generate a CSS color Gradient</Heading>

      <SubHead>Choose Direction</SubHead>
      <Container as="ul">
        {gradientDirectionsList.map(each => (
          <GradientDirectionItem
            selected={direction === each.value}
            onSelect={() => setDirection(each.value)}
            direction={each}
            key={each.directionId}
          />
        ))}
      </Container>
      <SubHead as="p">Pick the Colors</SubHead>
      <Container>
        {['colorA', 'colorB'].map(colorKey => (
          <Container key={colorKey} direction="column">
            <ColorLabel as="p" htmlFor={colorKey}>
              {colors[colorKey]}
            </ColorLabel>
            <ColorInput
              id={colorKey}
              type="color"
              value={colors[colorKey]}
              onChange={event => handleColorChange(event, colorKey)}
            />
          </Container>
        ))}
      </Container>
      <GenerateButton onClick={handleGenerateClick}>Generate</GenerateButton>
    </MainContainer>
  )
}

export default GradientGenerator
