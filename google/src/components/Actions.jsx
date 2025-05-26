import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Actions = ()=>{
    return(
        <Container>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<SiLeetcode />} name = {"Leetcode"}/>
            <Card icon = {<RiGeminiFill />} name = {"Gemini"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
            <Card icon = {<FaLinkedin />} name = {"(19) Feed"}/>
        </Container>
    )
}

export default Actions;