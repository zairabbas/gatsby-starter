import React from "react"
import { Helmet } from "react-helmet"
import { Link, withPrefix } from "gatsby"
import Layout from "../components/layout"

export default function about() {
    return (
        <><Helmet>
		  <meta charSet="utf-8" />
		  <title>About - CEG - Dubai</title>
		  {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <script src={withPrefix('../../js/app.js')} type="text/javascript" /> 
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
              <div data-scroll-section>
				  <section className="body-sec about-us" id="about">
					  <div className="h-left-img" data-scroll data-scroll-speed="2">
						  <div className="o-image_wrapper" data-scroll data-scroll-repeat>
							  <div className="o-image" data-scroll data-scroll-speed="-2">
								  <img className="c-speed-block_image" alt="" src="img/about-us.jpeg" />
							  </div>
						  </div>
					  </div>
					  <div className="h-right-content">
						  <h1 className="h-font slideup-a">About us</h1>
						  <div className="sm-space"></div>
						  <p className="p-w slideup-a">We are a Responsible safe working contractor with a Focused commitment to building a strong company. A Trusted brand, backed by a history of 13 years, providing Smart, innovative and inspiring solutions, Passionate about every project we deliver. Our annual turnover is more than AED200 million.</p>
						  <p className="p-w slideup-a">Established in 2006, CEG | Codes Engineering operates across a diverse range of construction sectors, such as high-spec residential, hospitality, education, commercial fit-out, infrastructure and the fast-paced retail sector.</p>
						  <div className="sm-space"></div>
						  <Link to="/" className="btn btn-primary slideup-a">Read More</Link>
						  {/* <a href="/" className="btn btn-primary slideup-a">Read More</a> */}
					  </div>
				  </section>
			  </div>
        </Layout></>
    )
}
