import PortfolioForm from '@/components/forms/PortfolioForm';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';
import {useRouter} from 'next/router';
import {useGetPortfolio, useUpdatePortfolio} from '@/apollo/actions';
import {toast} from 'react-toastify';

const PortfolioEdit = withAuth(() => {
    const router = useRouter();
    const [updatePortfolio, {error}] = useUpdatePortfolio();
    const {id} = router.query;
    const {data} = useGetPortfolio({variables: {id}});

    const errorMessage = (error) => {
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops. Something went wrong.';
    }

    const handlePortfolioUpdate = async (data) => {
        await updatePortfolio({variables: {id, ...data}});
        toast.success('Portfolio updated', {autoClose: 2000});
    }

    return (
        <BaseLayout>
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        {
                            data &&
                            <PortfolioForm initialData={data.portfolio} onSubmit={handlePortfolioUpdate}/>
                        }
                        { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}, 'admin', {ssr: true})

export default withApollo(PortfolioEdit);