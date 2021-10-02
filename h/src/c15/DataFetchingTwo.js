import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  loading: true, error: '', post: {}
}

const FETCH = Object.freeze({
  SUCCESS: Symbol('SUCCESS'),
  ERROR: Symbol('ERROR'),
})

const reducer = (state, action) => {
  switch(action.type) {
    case FETCH.SUCCESS:
      return { loading: false, post: action.payload.data, error: '' }
    case FETCH.ERROR:
      return { loading: false, post: {}, error: action.payload.error }
    default:
      return state
  }
}

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => dispatch({ type: FETCH.SUCCESS, payload: { data: res.data, error: ''} }))
      .catch(err => dispatch({ type: FETCH.ERROR, payload: { data: {}, error: err.toString()} }))
  }, [])

  return (
    <>
      { state.loading ? 'Loading...' : state.post.title }
      { state.error ? state.error : null }
    </>
  )
}

export default DataFetchingTwo
