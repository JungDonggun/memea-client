import React from 'react'
import styled from '@emotion/styled'
import FrequentlyLabel from '../FrequentlyLabel'
import { HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons'
import FrequentlyMiddlePosition from '../FrequentlyMiddlePosition'

interface Props {
  data: FrequentlyMemeCarHeaderData
}

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: 20
}))

const CountContainer = styled.div(() => ({
  display: 'flex',
  height: '50%'
}))

const FrequentlyMemeCardHeader: React.FunctionComponent<Props> = ({ data }) => {

  const likeFilter = React.useMemo(() => data.like.like ? <HeartOutlined style={{ fontSize: 24, color: '#CC0000' }}/> :
    <HeartFilled style={{ fontSize: 24, color: '#CC0000' }}/>, [ data.like ])

  return (
    <Container>
      <div>
        <FrequentlyLabel text={data.title} size={14} weight={'bold'}/>
      </div>
      <CountContainer>
        <FrequentlyMiddlePosition containerStyles={{ marginRight: 8, textAlign: 'center' }}>
          <MessageOutlined style={{ fontSize: 24, color: 'white' }}/>
          <FrequentlyLabel text={data.comment.count} size={14} weight={'bold'} containerStyles={{ paddingTop: 4 }}/>
        </FrequentlyMiddlePosition>
        <FrequentlyMiddlePosition containerStyles={{ textAlign: 'center' }}>
          {likeFilter}
          <FrequentlyLabel text={data.like.count} size={14} weight={'bold'} containerStyles={{ paddingTop: 4 }}/>
        </FrequentlyMiddlePosition>
      </CountContainer>
    </Container>
  )
}

export default FrequentlyMemeCardHeader
