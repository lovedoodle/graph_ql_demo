const ApolloClient = require('apollo-client').ApolloClient;
const HttpLink = require('apollo-link-http').HttpLink;
const setContext = require('apollo-link-context').setContext;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;

const token = process.env.REACT_APP_GITHUB_TOKEN;

const authLink = setContext((_, {
    headers
}) => {
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        }
    }
});

const apolloClient = new ApolloClient({
    link: authLink.concat(new HttpLink({
        uri: 'https://api.github.com/graphql'
    })),
    cache: new InMemoryCache()
});

export default apolloClient

