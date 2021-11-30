import React from 'react';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href="#top">
                        <i className="bi-alarm" ></i>
                        </a>
                        <a href="#top">
                        <i className="bi-github" role="img" aria-label="GitHub"></i>
                        </a>
                        <a href="#top">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="#top">
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

