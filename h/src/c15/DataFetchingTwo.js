import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  post: {},
  error: '',
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
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        dispatch({ type: FETCH.SUCCESS, payload: { data: res.data, error: ''} })
      } catch (err) {
        dispatch({ type: FETCH.ERROR, payload: { data: {}, error: err.toString()} })
      }
    }

    fetchData()
  }, [])

  return (
    <>
      { state.loading ? 'Loading...' : state.post.title }
      { state.error ? state.error : null }
    </>
  )
}

export default DataFetchingTwo
