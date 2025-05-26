import React from 'react'
import Main from './components/Main'
import styled from 'styled-components'

const Brouse = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

`

function App() {
  return (
    <>
      <Brouse>
        <Main/>
      </Brouse>
    </>
  )
}

export default App
