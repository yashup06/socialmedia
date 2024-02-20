import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { Postlist as Postlistdata } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import Loadingspinner from "./Loadingspinner";

const Postlist = () => {
  const {postlist,addinitialposts} = useContext(Postlistdata);
  const [fetching,setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data => {
      addinitialposts(data.posts);
      setfetching(false);
     });

     return () => {
      console.log("cleaning up useeffect");
      controller.abort();
    };
  },[]);

 

  return (
    <>
    {fetching && <Loadingspinner/>}
    {
      !fetching && postlist.length === 0 && <Welcomemessage />
    }
    {!fetching && postlist.map((post) => ( <Post key={post.id} post={post} />  ))}
    </>
  )
};

export default Postlist;