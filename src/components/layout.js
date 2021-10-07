import React from 'react'
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import '../styles/locomotive-scroll.min.css'
import '../styles/materialdesignicons.min.css'
import '../styles/global.css'


export default function Layout( { children }) {
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
            <title>CEG - Dubai</title>
            {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            <script src={withPrefix('../../js/jquery-2.2.3.min.js')} type="text/javascript" />
            <script src={withPrefix('../../js/plugins.js')} type="text/javascript" />
            <script src={withPrefix('../../js/scroll-trigger.js')} type="text/javascript" />
            <script src={withPrefix('../../js/locomotive-scroll.min.js')} type="text/javascript" />
            <script src={withPrefix('../../js/app.js')} type="text/javascript" />
            </Helmet>
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
