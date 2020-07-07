import {useEffect} from 'react';
import {useRouter} from 'next/router';
import withApollo from '@/hoc/withApollo';
import {useSignOut} from '@/apollo/actions';
import BaseLayout from '@/layouts/BaseLayout';

const Logout = ({apollo}) => {
    const [signOut] = useSignOut();
    const router = useRouter();

    useEffect(() => {
        signOut().then(() => {
            apollo.resetStore().then(() => router.push('/login'));
        });
    }, []);

    return (
        <BaseLayout>
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5 mx-auto my-5">
                        <p>Signing out...</p>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default withApollo(Logout);