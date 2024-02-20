import { createContext, useReducer } from "react";


export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  addinitialposts: () => {},
  deletepost: () => {},
});

const postlistreducer = (currpostlist,action)=> { 
  let newpostlist = currpostlist;
  if(action.type === 'DELETE_POST'){
     newpostlist = currpostlist.filter((post) => post.id !== action.payload.postid)
  }else if(action.type === "ADD_INITIAL_POSTS"){
    newpostlist = action.payload.posts;
  }
  else if(action.type === "ADD_POST"){
    newpostlist = [action.payload,...currpostlist]
  }
  return newpostlist; 
}

const Postlistprovider = ({children}) => {
  const [postlist,dispatchpostlist] = useReducer(postlistreducer,[]); 

  const addpost = (userid,posttitle,postbody,reactions,tags) => {
    dispatchpostlist({
      type: 'ADD_POST',
      payload:{
        id: Date.now(),
        title: posttitle,
        body: postbody ,
        reactions: reactions,
        userid: userid,
        tags: tags,
      }
    })

  }
   
  const addinitialposts = (posts) => {
    dispatchpostlist({
      type: 'ADD_INITIAL_POSTS',
      payload:{
        posts,
      }
    })

  }
  const deletepost = (postid) => {
     dispatchpostlist(
      {
        type: 'DELETE_POST',
        payload: {
          postid,
        }
      }
     )
  }

   return <Postlist.Provider value={{postlist,
    addpost,addinitialposts,
    deletepost
  }}>{children}</Postlist.Provider>
};



 

export default Postlistprovider;