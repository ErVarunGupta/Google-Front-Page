import React from "react";
import Google from "./Google";
import Search from "./Search";
import Actions from "./Actions";
import styled from "styled-components";

const Container = styled.div`
    background: transparent;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
`

const Hero = () =>{
    return (
        <Container>
            <Google />
            <Search />
            <Actions />
        </Container>
    )
}

export default Hero;