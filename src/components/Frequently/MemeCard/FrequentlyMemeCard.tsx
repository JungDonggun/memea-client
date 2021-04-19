import React from 'react'
import FrequentlyMemeCardHeader from './FrequentlyMemeCardHeader'
import styled from '@emotion/styled'
import FrequentlyMemeCardContent from './FrequentlyMemeCardContent'

interface Props {
  size?: 'large' | 'medium'
  data: FrequentlyMemeCardData
}

const Container = styled.div(() => ({
  marginRight: 8,
  border: '1px solid Lime'
}))

const FrequentlyMemeCard: React.FunctionComponent<Props> = ({ size, data }) => {

  const resizeSize = React.useMemo(() => {
    let styles = {}

    if (size === 'large') {
      styles = {
        width: 588,
        height: 500
      }
    } else {
      styles = {
        width: 345,
        height: 300
      }
    }

    return styles
  }, [ size ])

  const factoryDataForHeader = React.useMemo(() => {
    const { title, comment, like } = data
    return {
      title,
      comment,
      like
    } as FrequentlyMemeCarHeaderData
  }, [])

  return (
    <Container style={resizeSize}>
      <FrequentlyMemeCardHeader data={factoryDataForHeader}/>
      <FrequentlyMemeCardContent url={data.url} size={resizeSize}/>
    </Container>
  )
}

export default React.memo(FrequentlyMemeCard)
