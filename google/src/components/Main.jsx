import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: space-between;
    background-image: url("https://www.nasa.gov/wp-content/uploads/2023/05/background-01.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
    overflow: hidden;
    top: 0;
    left: 0;
    position: absolute;
`
const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    background: transparent;
    border: none;
`

const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: none;
`
const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    background: transparent;
    border: none;
`


const Main = () =>{
    return (
        <Container>
            <NavContainer>
                <Navbar/>
            </NavContainer>
            <HeroContainer>
                <Hero/>
            </HeroContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    )
}

export default Main;