import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import moment from 'moment';

export default withApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      request: operation => {
        operation.setContext({
          fetchOptions: {
            credentials: 'include'
          },
          headers
        });
      },
      uri: 'http://localhost:3000/graphql',
      // uri: 'http://206.189.85.50:3000',
      cache: new InMemoryCache().restore(initialState || {}),
      resolvers: {
        Portfolio: {
          daysOfPortfolio({startDate, endDate}, args, {cache}) {
            let now = moment().unix();

            if (endDate) {
              now = endDate / 1000;
            }

            return moment.unix(now).diff(moment.unix(startDate / 1000), 'days');
          }
        }
      }
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
