import React from 'react'
import styled from "styled-components";

import Section from './Section';
import { data } from "../data";



const Home = () => {
  return (
    <Container>
      {data.map(item => {
        if(item.display === true) {
          return (
            <Section key={item.title} title={item.title} 
            id={item.id}
            backgroundImg={item.backgroundImg} description='Order Online for Touchless Delivery' leftBtn='Custom Order' rightBtn='Existing Inventory' />
          )
        } else {
          return (
            <Section key={item.title} title={item.title} 
            id={item.id}
            backgroundImg={item.backgroundImg} description='Order Online for Touchless Delivery' leftBtn='Custom Order' />
          )
        }
        
      })}
      
    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh;
`