import React from "react";


import "./header.css"

const Header = () => {
    return (
        <div className="max-width header">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-Logo" className="header-logo" />

            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fi fi-sr-marker absolute-center location-icon"></i>
                            <div>Pune</div>

                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>

                    </div>
                    <div className="location-search-separator"></div>

                    <div className="header-searchbar">
                        <i className="fi fi-rr-search absolute-center search-icon"></i>

                    </div>
                    <input placeholder="search for a restauren, cusine or a dish" className="search-input absolute-center"></input>




                </div>
                <div className="profile-wapper">
                    <img src="https://static.wikia.nocookie.net/disney/images/b/bf/Mickey_Mouse_Disney_1.png" alt="Profile" className="header-profile-image"></img>

                    <span className="header-user-name">Sneha</span>
                    <i className="fi fi-rr-caret-down absolue-center profile-options-icon"></i>

                </div>

            </div>
        </div>
    )
}

export default Header;