// Style your elements here
import React, {useState} from 'react'
import styled from 'styled-components'


const StyledHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
`

const HeadingComponent = () => {
  return <StyledHeading>React Hooks</StyledHeading>
}

export default HeadingComponent
