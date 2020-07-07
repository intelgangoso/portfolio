import {fromNow} from '@/utils/functions'

export default function PostItem({post, onReply, className = '', canCreate = false}) {

    const {parent} = post;

    return (
        <>
            <div className={`topic-post ${className}`}>
                <article>
                    <div className="row">
                        <div className="topic-body">
                            <div className="topic-header">
                                <div className="topic-meta">
                                    <div className="date-container">
                                        {
                                            post.createdAt &&
                                            <span className="date">{fromNow(post.createdAt)}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="topic-content">
                                {
                                    parent &&
                                    <div className="topic-parent cooked">
                                        <div className="topic-parent-inner cooked">
                                            <div className="topic-parent-header">
                                                <div className="topic-parent-avatar">
                                                    <div className="main-avatar">
                                                        <img
                                                            className="avatar subtle-shadow"
                                                            src="parent.user.avatar" />
                                                    </div>
                                                </div>
                                                <div className="username">{parent.user.username}</div>
                                            </div>
                                            <div className="topic-parent-content">
                                                <p className="text">{parent.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="cooked">
                                    <div className="text" dangerouslySetInnerHTML={{ __html: post.content.split('<===>')[1] }}></div>
                                </div>
                                <section className="post-menu-area">
                                    <nav className="post-controls">
                                        <div className="actions">
                                            {
                                                (onReply && canCreate) &&
                                                <button onClick={() => onReply({...post})} className="btn">
                                                    reply
                                                </button>
                                            }
                                        </div>
                                    </nav>
                                </section>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
