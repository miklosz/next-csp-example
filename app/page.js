import { headers } from 'next/headers'
import Script from 'next/script'

const scriptSrc = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'

export default function Page() {
  const nonce = headers().get('x-nonce')


  return (
    <div>
      <h1>Page with external script, with nonce</h1>
      <p>So far, so good</p>
      <h2>Check two other examples - both fail due to executed CSP and lack of nonce's</h2>
      <ol>
        <li><a href="/with-styles">Page with CSS attached</a></li>
        <li><a href="/without-scripts">Page with external script, without nonce</a></li>
      </ol>
      <Script src={scriptSrc} strategy="afterInteractive" nonce={nonce} />
    </div>
  )
}
