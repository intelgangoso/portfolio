import {useGetUser} from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
import WaitLoader from '@/components/shared/Loader';

export default (WrappedComponent, role, options = {ssr: false}) => {
    function WithAuth(props) {
        const {data: {user} = {}, loading, error} = useGetUser({fetchPolicy: 'network-only'});

        if (!loading && (!user || error) && typeof window !== 'undefined') {
            return <Redirect path="/login" query={{message: 'NOT_AUTHENTICATED'}} />;
        }

        if (user) {
            if (role && !role.includes(user.role)) {
                return <Redirect path="/login" query={{message: 'NOT_AUTHORIZED'}} />;
            }
            return <WrappedComponent {...props} />
        }

        return (
            <div className="loader-container">
                <WaitLoader variant="large" />
            </div>
        );
    }

    if (options.ssr) {
        const serverRedirect = (res, to) => {
            res.redirect(to);
            res.end();
            return {};
        }

        WithAuth.getInitialProps = async (ctx) => {
            const {req, res} = ctx;

            if (req) {
                const {user} = req;

                if (!user) {
                    serverRedirect('/login?message=NOT_AUTHENTICATED');
                }

                if (role && !role.includes(user.role)) {
                    serverRedirect('/login?message=NOT_AUTHORIZED');
                }
            }

            const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx);
            return {...pageProps};
        } 
    }

    return WithAuth;
}
    
