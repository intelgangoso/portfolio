import BaseLayout from '@/layouts/BaseLayout';
import {useGetForumCategories} from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import {getDataFromTree} from 'react-apollo';
import Link from 'next/link';

const Categories = () => {
    const {data} = useGetForumCategories();
    const forumCategories = (data && data.forumCategories) || [];

    return (
        <BaseLayout>
            <section className="section-title">
                <div className="px-2">
                    <div className="pt-5 pb-4">
                        <h1>Skills</h1>
                    </div>
                </div>
            </section>
            <section className="fj-category-list">
                <div className="row">
                    {
                        forumCategories.map(fc => 
                            <div key={fc.slug} className="col-md-4">
                                <div className="fj-category-container mb-5">
                                    <Link href="/forum/skills/[slug]"
                                        as={`/forum/skills/${fc.slug}`} >
                                        <a className="fj-category subtle-shadow no-border">
                                            <div className="category-information">
                                                <div className="heading gray-90">
                                                    {fc.title}
                                                </div>
                                                <div className="description">
                                                    {fc.subTitle}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </BaseLayout>
    )
}

export default withApollo(Categories, {getDataFromTree});