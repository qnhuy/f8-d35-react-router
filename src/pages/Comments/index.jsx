import React from "react"
import styles from './Comment.module.scss'

function Comments() {
    const [comments, setComments] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [comment, setComment] = React.useState('')

    const date = ['1 minute ago', '2 minutes ago', '5 minutes ago', '2 hours ago', '3 hours ago', '1 day ago', '2 days ago', '3 days ago']

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(comments => setComments(comments))
            .finally(() => setLoading(false))
    }, [])

    function handleSubmitComment(e) {
        e.preventDefault()
        setComments([{ name, email, body: comment }, ...comments])
        setName('')
        setEmail('')
        setComment('')
    }

    function getRandomCommentDate() {
        const index = Math.floor(Math.random() * date.length)
        return date[index]
    }

    return (
        <div className={styles.commentWrapper}>
            <ul>
                <div className={styles.addCommentWrapper}>
                    <form className={styles.addComment}
                        onSubmit={e => handleSubmitComment(e)}
                    >
                        <div className={styles.inputField}>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" className={styles.input} required
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" className={styles.input} required
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="comment">Comment: </label>
                            <textarea type="text" id="comment" className={styles.input} required
                                value={comment}
                                onChange={e => setComment(e.target.value)} />
                        </div>
                        <button type='submit' className={styles.submitComment}>Add Comment</button>
                    </form>
                </div>

                {loading && (
                    <div className={styles.loaderBox}>
                        <div className={styles.loader}></div>
                    </div>
                )}

                {comments.map((comment, index) => (
                    <li key={index} className={styles.commentItem}>
                        <div className={styles.userInfo}>
                            <div className={styles.userAvatar}>
                                <img src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`} alt={`${comment.name} avatar`} />
                            </div>
                            <div className={styles.userTextInfo}>
                                <p className={styles.userName}>{comment.name}</p>
                                <i className={styles.userEmail}>{comment.email}</i>
                            </div>
                        </div>
                        <p className={styles.commentDate}>{getRandomCommentDate()}</p>
                        <div className={styles.commentBody}>{comment.body}</div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Comments