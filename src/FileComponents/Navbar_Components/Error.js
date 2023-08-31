import React from 'react'

const Error = () => {
    return (
        <div className='error-page'>
            <h1>404</h1>
            <p>Oops! The page you are looking for could not be found.</p>
            <p class="error-code">Error 404</p>
            <a class="home-link" href="/">Go to Home</a>
        </div>
    )
}

export default Error
