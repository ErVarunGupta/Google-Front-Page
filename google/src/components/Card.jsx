import React from "react";

import styled from "styled-components";

const CardContainer = styled.div`
    height: 112px;
    width: 112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    gap: 10px;
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
`
const Icon = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color:rgb(104, 87, 87);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #fff;
`

const Name = styled.div`
    font-weight: 600;
    color: white;
`

const Card = ({icon, name}) =>{
    return(
        <CardContainer>
            <Icon>{icon}</Icon>
            <Name>{name}</Name>
        </CardContainer>
    )
}

export default Card;