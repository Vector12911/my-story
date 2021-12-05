import React from 'react'
import './not-found.css';

const NotFound = () => {
    return (
        <div className="not_found_container">
            <div className="not_found">
                <p className="notFound404">Oops.. 404</p>
                <h1>The page you looked not found</h1>
                <button><a href="/">Go back home</a></button>
            </div>
           
        </div>
    )
}

export default NotFound
