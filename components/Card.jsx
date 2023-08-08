import Image from "next/image"
import { styled } from "styled-components"
import { useState, useEffect } from "react"
import React from "react"
import { useCardEffect } from "@/hooks/useCardEffect"


const StyledCard = styled.div`
 
  border-radius: 10px;
  height: 400px;
  margin: 10px;

  padding: 10px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  transform: ${(props) => props.transform || 'none'};

  box-shadow: -2px 7px 39px -11px rgba(133,91,28,0.62);
  
  user-select: none;

  background: hsla(27, 100%, 61%, 1);
  background: linear-gradient(135deg, hsla(27, 100%, 61%, 1) 0%, hsla(34, 100%, 64%, 1) 22%, hsla(43, 100%, 89%, 1) 24%, hsla(40, 100%, 97%, 1) 29%, hsla(39, 100%, 64%, 1) 56%, hsla(35, 100%, 95%, 1) 57%, hsla(27, 100%, 61%, 1) 82%);
  background: -moz-linear-gradient(135deg, hsla(27, 100%, 61%, 1) 0%, hsla(34, 100%, 64%, 1) 22%, hsla(43, 100%, 89%, 1) 24%, hsla(40, 100%, 97%, 1) 29%, hsla(39, 100%, 64%, 1) 56%, hsla(35, 100%, 95%, 1) 57%, hsla(27, 100%, 61%, 1) 82%);
  background: -webkit-linear-gradient(135deg, hsla(27, 100%, 61%, 1) 0%, hsla(34, 100%, 64%, 1) 22%, hsla(43, 100%, 89%, 1) 24%, hsla(40, 100%, 97%, 1) 29%, hsla(39, 100%, 64%, 1) 56%, hsla(35, 100%, 95%, 1) 57%, hsla(27, 100%, 61%, 1) 82%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF9137", endColorstr="#FFAF47", GradientType=1 );
  
  .card-content {
    padding: 15px;
    box-sizing: border-box;

    background-color: #ffe6c5ef;

    width: 100%;
    height: 100%;
    border-radius: 10px;  


  }

  .image-background {
    background-color: #ff9253;
    border-radius: 8px; 
    overflow: hidden;
    height: 250px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    image-rendering: pixelated;
    user-select: none;
  }

  .pokemon-name {
    margin: 15px 0px;
    color: #303030;
    font-size: 1.2rem;
    text-transform: capitalize;
    font-family: 'Sen', sans-serif;
    font-weight: 700;
  }

  .pokemon-type {
    color: #303030;
    font-size: 1.05rem;
  }
`

const Card = ({ children, data }) => {

  const [ transform, cardRef,  handleMouseEnter, handleMouseLeave ] = useCardEffect()

  return(
    <StyledCard 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      transform={transform}
    >
      <div className='card-content'>
        <div className='image-background'>
          <Image className='pokemon-image' alt={data.name} src={ data.sprites.front_default || '/pokeball.png' } width={300} height={300}></Image>
        </div>
        <div className='pokemon-name'>{ data.name }</div>
        <div>{data.types.map((type) => <span className="pokemon-type">{ `${ type.type.name } ` }</span> )}</div>
      </div>
      { children }
    </StyledCard>
  )
}

export default Card