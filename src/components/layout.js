import React from 'react'
import '../styles/locomotive-scroll.min.css'
import '../styles/materialdesignicons.min.css'
import '../styles/global.css'


export default function Layout( { children }) {
    return (
        <div>
            <div className="preloader title-loading">
                <div className="center-loading">
                <div className="h-font slideup-h">C</div><div className="h-font slideup-h">E</div><div className="h-font slideup-h">G</div>
                </div>
            </div>
            <div className="wrapper smooth-scroll" data-scroll-container>
                { children }
            </div>
        </div>
    )
}
