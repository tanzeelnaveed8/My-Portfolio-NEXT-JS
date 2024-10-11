// pages/_app.tsx
import '../styles/globals.css'; // Import global CSS styles
import { AppProps } from 'next/app'; // Import the type for AppProps

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Render the page component with its props
}

export default MyApp; // Export the MyApp component as default
