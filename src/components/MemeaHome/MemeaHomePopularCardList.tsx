import React from 'react'
import styled from '@emotion/styled'
import FrequentlyMemeCard from '../Frequently/MemeCard/FrequentlyMemeCard'


const dummy: FrequentlyMemeCardData[] = [
  {
    pk: '1',
    title: '제목1',
    url: 'https://www.youtube.com/watch?v=E24mc9jkBQM&list=RDE24mc9jkBQM&start_radio=1&ab_channel=FlippytheDoomMarine',
    comment: { reply: false, count: '11.8K' },
    like: { like: false, count: '27.5K' }
  },
  {
    pk: '2',
    title: '제목2',
    url: 'https://www.youtube.com/watch?v=E24mc9jkBQM&list=RDE24mc9jkBQM&start_radio=1&ab_channel=FlippytheDoomMarine',
    comment: { reply: true, count: '24.1K' },
    like: { like: true, count: '97.5K' }
  },
  {
    pk: '3',
    title: '제목3',
    url: 'https://www.youtube.com/watch?v=E24mc9jkBQM&list=RDE24mc9jkBQM&start_radio=1&ab_channel=FlippytheDoomMarine',
    comment: { reply: true, count: '2.81M' },
    like: { like: false, count: '1.5M' }
  }
]

const Container = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: 90
}))

const MemeaHomePopularCardList: React.FunctionComponent = () => {
  return (
    <Container>
      {
        dummy.map((information) => <FrequentlyMemeCard key={information.pk} data={information} size={'large'}/>)
      }
    </Container>
  )
}

export default MemeaHomePopularCardList
