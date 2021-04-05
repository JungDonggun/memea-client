import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import privateColors from '../common/primaryColors'
import '../styles/globals.css'

const Container = styled.div(() => ({
  backgroundColor: privateColors.black
}))


function MemeaAPP({ Component, pageProps }) {
  return <React.Fragment>
    <Head>
      <title>
        Memea
      </title>
    </Head>
    <Container id={'next'}>
      <Component {...pageProps} />
    </Container>
  </React.Fragment>
}

export default MemeaAPP
