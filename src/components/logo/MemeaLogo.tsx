import React from 'react'
import FrequentlyLabel from '../Frequently/FrequentlyLabel'
import primaryColors from '../../../common/primaryColors'
import styled from '@emotion/styled'

const Container = styled.div(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const MemeaLogo: React.FunctionComponent = () => {
  return (
    <Container>
      <FrequentlyLabel text={'M'} size={24} color={primaryColors.lime} weight={900}/>
      <FrequentlyLabel text={'emea'} size={24} weight={800}/>

    </Container>
  )
}

export default MemeaLogo
