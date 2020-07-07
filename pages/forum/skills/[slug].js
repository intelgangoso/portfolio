import {useState} from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import {useGetTopicsByCategory, useGetUser, useCreateTopic} from '@/apollo/actions';
import {useRouter} from 'next/router';
import withApollo from '@/hoc/withApollo';
import {getDataFromTree} from 'react-apollo';
import Replier from '@/components/shared/Replier';

const useInitialData = () => {
    const router = useRouter();
    const {slug} = router.query;
    const {data: dataT} = useGetTopicsByCategory({variables: {category: slug}});
    const {data: dataU} = useGetUser();
    const topicsByCategory = (dataT && dataT.topicsByCategory) || [];
    const user = (dataU && dataU.user) || null;

    return {user, topicsByCategory, slug, router};
}

const Topic = () => {
    const [isReplierOpen, setReplierOpen] = useState(false);
    const {user, topicsByCategory, slug, router} = useInitialData();
    const [createTopic] = useCreateTopic();

    const handleCreateTopic = (topicData) => {
        topicData.forumCategory = slug;
        createTopic({variables: topicData})
            .then(() => {
            setReplierOpen(false);
        })
    }

    const goToTopic = slug => router.push('/forum/topics/[slug]', `/forum/topics/${slug}`);

    return (
        <BaseLayout>
            <section className="section-title">
                <div className="px-2">
                    <div className="pt-5 pb-4">
                        
                        {
                            slug &&
                            <h1 className="text-capitalize mb-5">{slug.replace(/-/gi," ")}</h1>
                        }
                        {
                            user && user.role === 'admin' &&
                            <button className="btn btn-primary"
                            onClick={() => setReplierOpen(true)}>Create Topic</button>
                        }
                    </div>
                </div>
            </section>
            <section className="fj-topic-list">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Topic</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            topicsByCategory.map(topic => 
                                <tr key={topic._id} onClick={() => goToTopic(topic.slug)}>
                                    <th>{topic.title}</th>
                                    <td>{topic.content.split('<===>')[0]}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
            <Replier isOpen={isReplierOpen}
                onSubmit={handleCreateTopic}
                onClose={() => setReplierOpen(false)}
                closeBtn={() => <a onClick={() => setReplierOpen(false)} className="btn py-2 ttu gray-10">Cancel</a>} />
        </BaseLayout>
    )
}

export default withApollo(Topic, {getDataFromTree});