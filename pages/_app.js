import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis";

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
