import React from 'react'
import styled from 'styled-components'


import downArrow from './images/down-arrow.svg'
import modelS from './images/model-s.jpg'
import model3 from './images/model-3.jpg'
import modelX from './images/model-x.jpg'
import modely from './images/model-y.jpg'
import newInterior from './images/new-interior.jpg'
import solarPanel from './images/solar-panel.jpg'
import solarRoof from './images/solar-roof.jpg'
import accessories from './images/accessories.jpg'

const images = [
  modelS,
  model3,
  modelX,
  modely,
  newInterior,
  solarPanel,
  solarRoof,
  accessories,
]


const Section = (props) => {
  return (
    <Wrap
       >
      <img src={images[props.id]} alt={`'${props.backgroundImg}'`} />
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {props.leftBtn}
          </LeftButton>
          {props.rightBtn && (
            <RightButton>
              {props.rightBtn}
            </RightButton>  
          )}
        </ButtonGroup>
        {props.rightBtn && 
          <DownArrow src={downArrow} /> 
        }
        
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;

  margin: 0px 10px;
  @media (max-width: 768px) {
    margin: 6px 0px;
  }
`
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  margin-top:20px;
  height: 40px;
  animation: animateDown infinite 1.5s;

  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`