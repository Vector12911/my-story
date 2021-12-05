import React from 'react'
import './left-bar.css';
import profile from './dog.jpg';
const LeftBar = () => {
    return (
        <div className="left_bar">

            <div className="profile_img">
                <img src={profile} alt="" width="150px" height="150px" />
            </div>
            <div className="follow">
                <div className="follower follow_items" >
                    1M
                </div>
                <div className="following follow_items">
                    1k
                </div>
            </div>
            <div className="side-bar">
                <div className="list-menu">
                    <div className="list-items">
                        <p><i class="fas fa-home"></i></p>
                        <p className="icon-text">Home</p>
                    </div>
                    <div className="list-items">
                        <p><i class="fas fa-heart"></i></p>
                        <p className="icon-text">Saved</p>
                    </div>
                    <div className="list-items">
                        <p><i class="fas fa-book-reader"></i></p>
                        <p className="icon-text">Read</p>
                    </div>
                    <div className="list-items">
                        <p><i class="fas fa-cog"></i></p>
                        <p className="icon-text">Setting</p>
                    </div>
                </div>
            </div>
            <div className="side-bar">
                <div className="list-menu">
                    <div className="list-items">
                        <p><i class="fas fa-home"></i></p>
                        <p className="icon-text">Home</p>
                    </div>
                    <div className="list-items">
                        <p><i class="fas fa-heart"></i></p>
                        <p className="icon-text">Saved</p>
                    </div>
                    <div className="list-items">
                        <p><i class="fas fa-book-reader"></i></p>
                        <p className="icon-text">Read</p>
                    </div>
                    <div className="list-items">
                        <p><i class="fas fa-cog"></i></p>
                        <p className="icon-text">Setting</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
