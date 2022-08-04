import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme/theme'
import Layout from '../src/components/layout/layout'

import CmdPalete from '../src/components/cmd-palete/cmd-index'
import CmdPaletteProvider from '../src/providers/cmd-palete-provider'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <CmdPaletteProvider>
                <Layout>
                    <CmdPalete />
                    <Component {...pageProps} />
                </Layout>
            </CmdPaletteProvider>
        </ChakraProvider>
    )
}

export default MyApp
