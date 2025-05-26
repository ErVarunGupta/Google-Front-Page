import React from "react";
import { GrTest } from "react-icons/gr";
import { PiDotsNineBold } from "react-icons/pi";
import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: #000;
    background-color: transparent;
    position: relative;
`
const A = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: 500;
`
const Gmail = styled.div``
const Images = styled.div``
const Labs = styled.div``
const Apps = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 700;
`
const SignIn = styled.div``

const Navbar = () =>{
    return (
        <Container>
            <Gmail>
                <A href="#">Gmail</A>
            </Gmail>
            <Images><A href="#">Images</A></Images>
            <Labs>
                <A href="#"><GrTest /></A>
            </Labs>
            <Apps>
                <A href="#"><PiDotsNineBold /></A>
            </Apps>
            <SignIn>
                <A href="#">Sign in</A>
            </SignIn>
        </Container>
    )
}

export default Navbar;