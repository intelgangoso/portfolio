import PortfolioForm from '@/components/forms/PortfolioForm';
import {useCreatePortfolio} from '@/apollo/actions';
import {useRouter} from 'next/router';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';

const CreatePortfolio = withAuth(() => {
    const [createPortfolio, {error}] = useCreatePortfolio();
    const router = useRouter();

    const errorMessage = (error) => {
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops. Something went wrong.';
    }

    const handleCreatePortfolio = async (data) => {
        await createPortfolio({variables: data});
        router.push('/experience');
    }

    return (
        <BaseLayout>
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5 mx-auto my-5">
                        <PortfolioForm onSubmit={handleCreatePortfolio}/>
                        { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}, 'admin', {ssr: true})

export default withApollo(CreatePortfolio);