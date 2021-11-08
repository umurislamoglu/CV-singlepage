import React , {useState, useEffect} from 'react'
import Comment from "./Comment"

const CommentList = () => {

const [title , setTitle] = useState("")
const [commentText , setCommentText] = useState("")
const [comments , setComments] = useState([{
    title : "Nelson Mandela",
    commentText : "The greatest glory in living lies not in never falling, but in rising every time we fall."

},
{ 
    title : "Lao Tzu",
    commentText : "The journey of a thousand miles begins with one step."

}])



const commentsArr = comments
    
    const getComments = (commentsArr) => {setComments(commentsArr)}


    const handleClick = (e) => {
        e.preventDefault();

        if(title.trim() && commentText.trim()){
            let userComment = {
                title : title,
                commentText : commentText
        
            }
            commentsArr.push(userComment);
            getComments(commentsArr);
        }
        
    

        setTitle("")
        setCommentText("")
    }

    const handleDelete = (val) => {

       let filteredArr =  commentsArr.filter(comment => comment.commentText !==val)
       getComments(filteredArr);
    
      
    }



    useEffect(()=>{
        getComments(comments)
    },[ ])


    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 container"  >
            <h3 className="fw-normal mb-5 px-5  fs-1">Comments</h3>

            {
                comments.length>0?comments.map((comment,idx) => {
                    return  <Comment title={comment.title} commentText={comment.commentText} key={idx} handleDelete = {handleDelete}/>
                }):<div class="alert alert-warning w-75" role="alert">
                There is no comment
              </div>
            }



           
            
            
            <form className="d-flex flex-column w-75 mt-5">
            <input type="text" placeholder="Nickname" className="mb-2 form-control" value={title}  onChange={(e)=>{setTitle(e.target.value)}} />
            <textarea className="mb-4 form-control" name="comment" id="comment" value={commentText}  placeholder="Leave a comment..." onChange={(e)=>{setCommentText(e.target.value)}}></textarea>
            <button type="submit" className="btn btn-primary w-50 rounded-pill align-self-center" onClick={handleClick} >Send</button>
        
        </form>
        </div>
    )
}

export default CommentList