import React, { useState } from 'react';

const Comment = () => {
    const [writer, setWriter] = useState("");
    const [comment, setComment] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        setWriter("");
        setComment("");
    }
    return (
        <div>
            <h3>Please write down your comment as below</h3>
            <form className="comment" onSubmit={handleSubmit}>
                <label>Name
                    <input className="writer"
                        type="text" 
                        name="writer" 
                        value={writer}
                        onChange={e => setWriter(e.target.value)} />
                </label>
                <br />
                <label>Comment
                    <textarea className="message"
                        type="message"
                        name="comment"
                        value={comment}                    
                        rows="4"
                        onChange={e => setComment(e.target.value)} />
                </label>
                <div>
                    <input type="submit" />
                </div>
            </form>
            
        </div>
    )
}

export default Comment;