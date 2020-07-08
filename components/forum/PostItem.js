import {fromNow} from '@/utils/functions'

export default function PostItem({post, onReply, className = '', canCreate = false}) {

    
    return (
        <>
            <div className={`topic-post ${className}`}>
                <article>
                    <div className="row">
                        <div className="topic-body">
                            <div className="topic-content">
                                {
                                    !post.content.includes('<===>') &&
                                    <div className="topic-parent cooked">
                                        <div className="topic-parent-inner cooked">
                                            <div className="topic-parent-header">
                                                <div className="topic-parent-avatar">
                                                    <div className="main-avatar">
                                                        <img
                                                            className="avatar subtle-shadow"
                                                            src={post.user.avatar} />
                                                    </div>
                                                </div>
                                                <div className="date-container">
                                                    <div className="username">{post.user.username}</div>
                                                    {
                                                        post.createdAt &&
                                                        <small className="date">{fromNow(post.createdAt)}</small>
                                                    }
                                                </div>
                                            </div>
                                            <div className="topic-parent-content">
                                                <p className="text">{post.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    post.content.includes('<===>') &&
                                    <div className="cooked">
                                        <div className="text" dangerouslySetInnerHTML={{ __html: post.content.includes('<===>') ? post.content.split('<===>')[1] : post.content  }}></div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
