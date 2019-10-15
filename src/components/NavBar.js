import React from 'react'

export default function NavBar() {
    return (
        <div className="navbar site-header sticky-top py-2 shadow-bottom-lg border-bottom">
            <div className="col-2 container flex-column flex-md-row justify-content-around navbarLeftMenu">
                <a className="py-1 d-none d-md-inline-block text-decoration-none text-dark" href="#">New Game</a>
                <a className="py-1 d-none d-md-inline-block text-decoration-none text-dark" href="#">High Scores</a>
            </div>
            <div className="col-1"></div>

            <div className="logo col-2 container flex-column flex-md-row justify-content-around align-items-center">
                <div className="leftLogo align-self-center">
                    <a href="#"><i class="fas fa-hand-rock fa-2x text-dark icon-default"></i></a>
                    <a href="#"><i class="fas fa-hand-paper fa-2x text-dark icon-change-1"></i></a>
                    <a href="#"><i class="fas fa-hand-scissors fa-2x text-dark icon-change-2"></i></a>
                </div>
                <div className="rightLogo">
                    <a href="#"><i class="fas fa-hand-rock fa-2x text-dark icon-change-2"></i></a>
                    <a href="#"><i class="fas fa-hand-paper fa-2x text-dark icon-default"></i></a>
                    <a href="#"><i class="fas fa-hand-scissors fa-2x text-dark icon-change-1"></i></a>
                </div>
            </div>

            <div className="col-1"></div>
            <div className="col-2 container flex-column flex-md-row justify-content-around navbarRightMenu">
                <a className="py-1 d-none d-md-inline-block text-decoration-none text-dark" href="#">Sign up</a>
                <a className="py-1 d-none d-md-inline-block text-decoration-none text-dark" href="#">Log in</a>
            </div>
        </div>
    )
}

function randomFA() {

}