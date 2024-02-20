import { useContext, useRef } from "react";
import { Postlist } from "../store/post-list-store";

const Createpost = () => {
  const {addpost} = useContext(Postlist);
 
  const useridelement =  useRef();
  const posttitleelement =  useRef();
  const postbodyelement = useRef();
  const reactionselement =  useRef();
  const tagselement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userid = useridelement.current.value;
    const posttitle = posttitleelement.current.value;
    const postbody = postbodyelement.current.value;
    const reactions = reactionselement.current.value;
    // Split tags by spaces only
    const tags = tagselement.current.value.split(' ');

    useridelement.current.value = "",
    posttitleelement.current.value = "",
    postbodyelement.current.value = "",
    reactionselement.current.value = "",
    tagselement.current.value = "",



  
    addpost(userid, posttitle, postbody, reactions, tags);
  }
  
 
  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">Enter your user-id</label>
        <input 
          type="text" 
          ref={useridelement}
          className="form-control"
          id="userid"
          placeholder="user_id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input 
          type="text" 
          ref={posttitleelement}
          className="form-control" 
          id="title" 
          placeholder="How are you feeling today.."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea 
          rows={8} 
          type="text" 
          ref={postbodyelement}
          className="form-control" 
          id="body" 
          placeholder="Tell us more about it."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input 
          type="text" 
          ref={reactionselement}
          className="form-control" 
          id="reactions" 
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input 
          type="text" 
          ref={tagselement}
          className="form-control" 
          id="tags" 
          placeholder="Please enter tags using space"
        />
      </div>
      
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default Createpost;
