import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        this is the home
        <Link to="/signin1">Signin</Link>
    </div>
  )
}

export default Home