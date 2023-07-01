import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark">
        <title>HooDog</title>
        <Head></Head>
        <body>
            <Main/>
        </body>
        <NextScript/>
      </Html>
    );
  }
}

export default MyDocument;