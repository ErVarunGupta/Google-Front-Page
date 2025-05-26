import React from "react";
import { IoLink } from "react-icons/io5";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 0 0 20px 20px;
`

const A = styled.a`
    display: flex;
    gap: 10px;
    color: black;
    font-weight: 600;
`
const Span = styled.span``

const Footer = () =>{
    return(
        <Container>
            <A href="#">
                <Span><IoLink /></Span>
                <Span>Photo by NASA Image Library</Span>
            </A>
        </Container>
    )
}

export default Footer;