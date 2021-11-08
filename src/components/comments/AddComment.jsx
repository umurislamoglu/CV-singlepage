import React, {useState} from 'react'

const AddComment = () => {

    const [title, setTitle] = useState("");
    const [commentText, setcommentText] = useState("")


const handleClick = () => {
    
}


    return (
        <form className="d-flex flex-column">
            <input type="text" placeholder="Nickname" className="mb-2 form-control" />
            <textarea className="mb-4 form-control" name="comment" id="comment" cols="80" rows="5" placeholder="Leave a comment..."></textarea>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Send</button>
        
        </form>
    )
}

export default AddComment