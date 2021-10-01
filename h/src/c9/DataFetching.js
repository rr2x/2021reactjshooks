import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(()=>{
    const getData = async (postId) => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        setPost(prevPost => (prevPost = res.data))
      } catch (e) {
        console.log(e.toString())
        setPost(prevPost => (prevPost = null))
      }
    }

    getData(idFromButtonClick)
  }, [idFromButtonClick])

  const handleClick = () => setIdFromButtonClick(prevId => (prevId = id))

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={
          e => setId(prevId => (prevId = e.target.value))
        }
      />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      {post &&
        <ul>
          { <li key={post.id}>{post.title}</li> }
        </ul>
      }
    </div>
  )
}

export default DataFetching
