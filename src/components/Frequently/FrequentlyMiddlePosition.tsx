import React from 'react'
import styled from '@emotion/styled'


interface Props {
  children: any
  alignItems?: 'center'
  containerStyles?: Record<string, any>
}

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center'
}))


const FrequentlyMiddlePosition: React.FunctionComponent<Props> = ({ children, alignItems, containerStyles }) => {
  return (
    <Container style={{ alignItems, ...containerStyles }}>
      <div>
        {children}
      </div>
    </Container>
  )
}

export default FrequentlyMiddlePosition
