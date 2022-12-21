import '../styles/index.less';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../config/client';
import LayoutContextProvider from '../context/LayoutContext';

interface MyAppProps extends Omit<AppProps, 'Component'> {
    Component: any;
}
function App({ Component, pageProps }: MyAppProps) {
    return (
        <ApolloProvider client={client}>
            <LayoutContextProvider>
                <Component {...pageProps} />
            </LayoutContextProvider>
        </ApolloProvider>
    );
}

export default App;
