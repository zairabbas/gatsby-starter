import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function about() {
    return (
        <><Helmet>
		  <meta charSet="utf-8" />
		  <title>About - CEG - Dubai</title>
		  {/* <link rel="canonical" href="http://mysite.com/example" /> */}
	  </Helmet>
        <Layout>
                <div data-scroll-section>
				  <section className="np-sec light-theme" id="home-welcome">
					  <div className="logo hero-logo" style={{ backgroundImage: `url(img/ceg-logo.png)` }}></div>
					  <div className="para-slide">
						  <div className="bg-slider">
							  <div className="full-bg" style={{ backgroundImage: `url(img/hero.jpeg)` }}></div>
						  </div>
					  </div>
					  <div className="center-content text-center">
						  <h1 className="h-font big-text slideup-h-text" data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-direction="horizontal">CODES</h1>
						  <h1 className="h-font big-text slideup-h-text" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal" data-scroll-position="top">ENGINEERING</h1>
						  <div className="slideup-h-text" data-scroll data-scroll-speed="-0.9" data-scroll-position="top">
							  <p>Backed by a long history, we consistently work to a high operational standard.<br />
								  Fully engaged with our clients for full MEP delivery.
							  </p>
						  </div>
					  </div>
					  <div className="scroll-btn" data-sec="home-about">
						  <div className="down-arrow" style={{ backgroundImage: `url(img/down-arrow.svg)` }}></div>
					  </div>
				  </section>
			  </div>
        </Layout></>
    )
}
