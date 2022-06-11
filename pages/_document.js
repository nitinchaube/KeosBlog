import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from "next/config"
const {publicRuntimeConfig} =getConfig()

class MyDocument extends Document {
  

  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SN879LPH0V');
        `
      };
    }
  }


  render() {
    return (
      <Html>
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"></link>
            {/* <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link> */}
            <link rel="stylesheet" href="/static/css/styles.css"></link>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-SN879LPH0V"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
           
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument