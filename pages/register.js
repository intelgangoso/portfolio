import RegisterForm from '@/components/forms/RegisterForm';
import {Mutation} from 'react-apollo';
import {SIGN_UP} from '@/apollo/queries';
import withApollo from '@/hoc/withApollo';
import Redirect from '@/components/shared/Redirect';
import BaseLayout from '@/layouts/BaseLayout';

const Register = () => {
    const errorMessage = (error) => {
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops. Something went wrong.';
    }

    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto my-5">
                        <Mutation mutation={SIGN_UP}>
                            {
                                (registerUser, {data, error}) => 
                                <>
                                    <RegisterForm onSubmit={registerData => {
                                        registerUser({variables: registerData});
                                    }}/>
                                    { data && data.signUp && <Redirect path="/login" query={{message: 'LOGGED_IN'}} />}
                                    { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
                                </>
                            }
                        </Mutation>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default withApollo(Register);