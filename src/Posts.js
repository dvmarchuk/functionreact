import React, {useState, useEffect} from 'react'
import Post from "./Post";



export default function Posts(){

    let[posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(() => value);
            });
    }, []);

    return(
      <div>
          {
              posts.map(post => <Post item={post} key={post.id}/>)
          }
      </div>
    );
}