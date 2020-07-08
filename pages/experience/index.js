import PortfolioCard from '@/components/portfolios/PortfolioCard';
import Link from 'next/link';

import {useGetPortfolios} from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import {getDataFromTree} from '@apollo/react-ssr';
import BaseLayout from '@/layouts/BaseLayout';

const Portfolio = () => {
    const {data} = useGetPortfolios();
    const portfolios = data && data.portfolios || [];
    
    return (
        <BaseLayout>
            <br />
            <section className="pb-5">
                <div className="row">
                    {
                        portfolios.map(p => 
                            <div key={p._id} className="col-md-4 mb-5">
                                <Link href="/experience/[id]"
                                    as={`/experience/${p._id}`}>
                                    <a className="card-link">
                                        <PortfolioCard portfolio={p}/>
                                    </a>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </section>
        </BaseLayout>
    )
}

export default withApollo(Portfolio, {getDataFromTree});