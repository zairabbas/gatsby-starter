import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import {header, btn, art} from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
    <section className={header}>
      <div>
        <h2>Zair Abbas</h2>
        <h3>UI/UX Designer</h3>
        <p>lorem ipsum doler emmet</p>
        <Link to="/about" className={btn}>Explore About Me</Link>
      </div>
      <img src="https://doodleipsum.com/x500/flat" alt="" className={art} />
    </section>
    </Layout>
  )
}
