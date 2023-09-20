// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'column' ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  color: white;
  margin: 20px;
`

export const MainContainer = styled(Container)`
  background-image: linear-gradient(
    ${props => {
      console.log(props)
      return `${props.gd}, ${props.colorA}, ${props.colorB}`
    }}
  );
  margin: 0;
  min-height: 100vh;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 35px;
  margin-bottom: 0px;
`
export const SubHead = styled.p`
  font-size: 23px;
  font-weight: 300;
  font-family: Roboto;
  margin-top: 70px;
  margin-bottom: 10px;
`
export const ColorLabel = styled.label`
  font-size: 17px;
  font-family: Roboto;
  margin-bottom: 30px;
`
export const ColorInput = styled.input`
  width: 120px;
  height: 60px;
  border: none;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: black;
  border: none;
  width: 120px;
  height: 50px;
  font-weight: 600;
  font-size: 17px;
  font-family: Roboto;
  border-radius: 10px;
  cursor: pointer;
`
