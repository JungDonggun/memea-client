import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

class MemeaDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head><title>
          Memea
        </title></Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MemeaDocument
