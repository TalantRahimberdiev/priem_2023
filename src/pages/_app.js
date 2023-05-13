import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';

const App = (props) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>

      <Head>
        <title>Material UI</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </div>
  )
}

export default App;
