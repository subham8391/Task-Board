import React from 'react'
import { CgProfile } from "react-icons/cg";
function Header() {
    return (
        <>
            <section className="header">
                <h1>TASK BOARD</h1>
                <div className="profile">
                <CgProfile />
                </div>
            </section>
        </>
    )
}

export default Header