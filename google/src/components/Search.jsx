import React from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { MdImageSearch } from "react-icons/md";

const Container = styled.div`
    width: 70%;
`
const InputBox = styled.div`
    width: 100%;
    padding: 0 0;
    border-radius: 30px;
    border: none;
    outline: none;
    margin: 20px 0;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`

const SearchIcon = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-left: 5px;
`
const Input = styled.input`
    width: 80%;
    height: 50px;
    padding: 0 10px;
    border: none;
`
const Mic = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    border-radius-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: blue;
    cursor: pointer;
`
const Lenc = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: blue;
    cursor: pointer;
    margin-right: 5px;
`

const Search = ()=>{
    return (
        <Container>
            <InputBox>
                <SearchIcon><IoSearchSharp /></SearchIcon>
                <Input placeholder="Search Google or type a URL" />
                <Mic><FaMicrophone /></Mic>
                <Lenc><MdImageSearch /></Lenc>
            </InputBox>
        </Container>
    )
}

export default Search;