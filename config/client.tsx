import { ApolloClient, InMemoryCache, defaultDataIdFromObject } from '@apollo/client';
import typePolicies from './typePolicies';

const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache({
        typePolicies,
        dataIdFromObject(responseObject) {
            switch (responseObject.__typename) {
            case 'Product':
                return `Product:${responseObject.upc}`;
            case 'Person':
                    return `Person:${responseObject.name}:${responseObject.email}`;
            default:
                    return defaultDataIdFromObject(responseObject);
            }
        },
    }),
});

export default client;
