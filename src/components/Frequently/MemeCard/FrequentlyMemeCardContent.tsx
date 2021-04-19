import React from 'react'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

interface Props {
  url: string
  size: Record<string, number | string>
}

const Container = styled.div(() => ({
  position: 'relative',
  top: 0,
  left: 0
}))

const FrequentlyMemeCardContent: React.FunctionComponent<Props> = ({ url, size }) => {
  return (
    <Container>
      <ReactPlayer url={url} width={Number(size.width) - 4} height={((size.height ? Number(size.height) : 500) - 90)}/>
    </Container>
  )
}

export default FrequentlyMemeCardContent

