import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';

const Secret = withAuth(() => {

    return (
        <BaseLayout>
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5 mx-auto my-5">
                        SECRET PAGE, ONLY AUTHENTICATED USERS ALLOWED
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}, 'guest');

export default withApollo(Secret);