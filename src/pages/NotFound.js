import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='container '>
      <div className='flex'>
        <div className='N-found'>
          <h1>404: Page Not Found</h1>
          <Link to="/" className="add-movie-button">Return to home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
