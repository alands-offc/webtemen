import React, { useState, useEffect } from 'react';
import styles from '../styles/CommentSection.module.css';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [username, setUsername] = useState('');
    const [replyTo, setReplyTo] = useState(null);

    // Load comments from localStorage when the component mounts
    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(storedComments);
    }, []);

    // Save comments to localStorage whenever the comments array changes
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim() && username.trim()) {
            const newComment = {
                id: Date.now(),
                text: commentText.trim(),
                username: username.trim(),
                replyTo: replyTo ? replyTo.username : null,
                timestamp: new Date().toLocaleString()
            };
            setComments([newComment, ...comments]);
            setCommentText('');
            setReplyTo(null);
        }
    };

    const handleReply = (comment) => {
        setReplyTo(comment);
        setCommentText(`@${comment.username} `);
    };

    return (
        <div className={styles.commentSection}>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your name"
                    className={styles.usernameBox}
                />
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Leave your comment here"
                    className={styles.commentBox}
                />
                <button type="submit" className={styles.commentButton}>Submit</button>
            </form>
            <div className={styles.commentsList}>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className={styles.comment}>
                            <p><strong>{comment.username}</strong> {comment.replyTo && <span>@{comment.replyTo}</span>} : {comment.text}</p>
                            <span className={styles.timestamp}>{comment.timestamp}</span>
                            <button className={styles.replyButton} onClick={() => handleReply(comment)}>Reply</button>
                        </div>
                    ))
                ) : (
                    <p className={styles.noComments}>No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
