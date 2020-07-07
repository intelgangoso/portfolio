import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';
import {Card, Button} from 'react-bootstrap';
import {useGetUserPortfolios, useDeletePortfolio} from '@/apollo/actions';
import { getDataFromTree } from 'react-apollo';
import Link from 'next/link';
import {formatDate} from '@/utils/functions';

const AdminDashboard = withAuth(() => {
    const {data} = useGetUserPortfolios();
    const [deletePortfolio] = useDeletePortfolio();
    const userPortfolios = (data && data.userPortfolios) || [];

    return (
        <BaseLayout>
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-12 my-5">
                        {
                            userPortfolios.map(p =>
                                <div className="mb-5 col-md-6">
                                    <Card key={p._id} className="mx-1">
                                        <Card.Header>{p.jobTitle}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{p.title}</Card.Title>
                                            <Card.Text>
                                                {formatDate(p.startDate)} - {(p.endDate && formatDate(p.endDate)) || 'Present'}
                                            </Card.Text>
                                            <Link href="/experience/[id]/edit" as={`/experience/${p._id}/edit`}>
                                                <a className="btn btn-warning mr-1">Update</a>
                                            </Link>
                                            <Button onClick={() => deletePortfolio({variables: {id: p._id}})} variant="danger">Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}, 'admin', {ssr: true})

export default withApollo(AdminDashboard, {getDataFromTree});