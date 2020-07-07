import { useGetPortfolio } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import {getDataFromTree} from '@apollo/react-ssr';
import BaseLayout from '@/layouts/BaseLayout';
import {formatDate} from '@/utils/functions';

const PortfolioDetail = ({query}) => {
    const {data} = useGetPortfolio({variables: {id: query.id}});
    const portfolio = data && data.portfolio || {};

    return (
        <BaseLayout>
            <div className="portfolio-detail">
                <div className="jumbotron" style={{backgroundImage: 'url('+ portfolio.companyWebsite + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div>

                <div className="text-center">
                    <h1 className="display-5">{portfolio.title}</h1>
                    <div className="lead">{portfolio.jobTitle}</div>
                </div>

                <div className="row marketing">
                    <div className="col-md-12 p-0">
                        <div className="col-md-6 float-left pl-1">
                            <h4 className="title">Location</h4>
                            <p className="text">{portfolio.location}</p>
                        </div>
                        <div className="col-md-6 float-right pr-1">
                            <h4 className="title">Days</h4>
                            <p className="text">{portfolio.daysOfPortfolio}</p>
                        </div>
                    </div>
                    <div className="col-md-12 p-0">
                        <div className="col-md-6 float-left pl-1">
                            <h4 className="title">Start Date</h4>
                            <p className="text">{formatDate(portfolio.startDate)}</p>
                        </div>
                        <div className="col-md-6 float-right pr-1">
                            <h4 className="title">End Date</h4>
                            <p className="text">{(portfolio.endDate && formatDate(portfolio.endDate)) || 'Present'}</p>
                        </div>
                    </div>

                    <div className="col-md-12 p-0">
                        <h4 className="title">Description</h4>
                        <p className="text">{portfolio.description}</p>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

PortfolioDetail.getInitialProps = async ({query}) => {
    return {query};
}

export default withApollo(PortfolioDetail, {getDataFromTree});
