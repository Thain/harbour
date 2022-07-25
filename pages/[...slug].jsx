import Head from 'next/head';
import content from '../assets/data/archetype-pages.json';
import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../components/meta"
import Filler from "../assets/img/tristan-abt.png";

export default function Page({page}) {

    let [anchorSelect, anchorSelectUpdate] = useState(["select", "", "", ""])

    let listenToScroll = () => {
        const anchor1 = document.getElementById('anchor1').getBoundingClientRect().top + window.scrollY - 50; // find the top position of title block
        const anchor2 = document.getElementById('anchor2').getBoundingClientRect().top + window.scrollY - 50; // find the top position of title block
        const anchor3 = document.getElementById('anchor3').getBoundingClientRect().top + window.scrollY - 50; // find the top position of title block
        const anchor4 = document.getElementById('anchor4').getBoundingClientRect().top + window.scrollY - 50; // find the top position of title block

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if(winScroll < anchor2) { anchorSelectUpdate(["select","","",""]) }
        else if(winScroll > anchor2 && winScroll < anchor3) { anchorSelectUpdate(["","select","",""]) }
        else if(winScroll > anchor3 && winScroll < anchor4) { anchorSelectUpdate(["","","select",""]) }
        else if(winScroll > anchor4) { anchorSelectUpdate(["","","","select"]) }
    }

    // assign the scroll listener and unassign at end
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll, { passive: true });
        return () => { window.removeEventListener('scroll', listenToScroll); };
    }, []);

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title: page.title, desc: page.seoDesc }} />
        <div className="arch-head">
            <Spacer h="30px" />
            <h5 style={{ marginBottom: 0 }}>Your climate archetype is:</h5>
            <h1 style={{ marginTop: 15 }}>{page.title}</h1>
            <Spacer h="5px" />
            <h2 style={{ color: "var(--dorange)", fontStyle: "italic", marginBottom: 0 }} dangerouslySetInnerHTML={{__html: page.quote}}></h2>
            <p className="quoteP">-{page.quoteFrom}</p>

            <Spacer h="5px" />

          <div className="img-con">
            <img src={page.headerimg} />
          </div>
          <Divider b="0px" />
        </div>

        <Spacer h="110px" />
        <div className="your-list">
            <div className="anchor-list-con">
                <ul className="anchor-list">
                    <li className={anchorSelect[0]}><a href="#anchor1">Your Joy</a></li>
                    <li className={anchorSelect[1]}><a href="#anchor2">Your Strength</a></li>
                    <li className={anchorSelect[2]}><a href="#anchor3">Your Quirk</a></li>
                    <li className={anchorSelect[3]}><a href="#anchor4">Your Role</a></li>
                <Spacer h="100px"/>
                </ul>
            </div>
            <div className="anchor-content">
                <img id="anchor1" src="https://res.cloudinary.com/mymediacreative/image/upload/v1657729391/the%20harbour/archetype%20pages/Icon1_pi2feh.png" />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }} dangerouslySetInnerHTML={{__html: page.oneTitle }}></h2>
                <p dangerouslySetInnerHTML={{__html: page.oneP }}></p>
                <Spacer h="50px"/>

                <img id="anchor2" src="https://res.cloudinary.com/mymediacreative/image/upload/v1657729392/the%20harbour/archetype%20pages/Icon2_vxor0i.png" />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>{page.twoTitle}</h2>
                <p>{page.twoP}</p>
                <Spacer h="50px"/>

                <img id="anchor3" src="https://res.cloudinary.com/mymediacreative/image/upload/v1657729391/the%20harbour/archetype%20pages/Icon3_fml8xe.png" />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>{page.threeTitle}</h2>
                <p>{page.threeP}</p>
                <Spacer h="50px"/>

                <img id="anchor4" src="https://res.cloudinary.com/mymediacreative/image/upload/v1657729391/the%20harbour/archetype%20pages/Icon4_wwrkci.png" />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>{page.fourTitle}</h2>
                <p>{page.fourP}</p>
                <Spacer h="100px"/>
                <Divider b="0"/>
            </div>

        </div>

        <Spacer h="50px"/>

      <div style={{ textAlign: "center" }}>
            <Spacer h="30px" />
        <h1>{page.title} in Action</h1>
        <p>We met with dozens of young leaders across the country to explore the different ways you can <br/>
            take action against climate change. Here are some of their stories.</p>
        <img src={Filler}/>

          <Spacer h="100px" />

        <div className="arch-profile">
            <div>
                <img src={Filler} />
                <h3> Name Surname </h3>
                <p> <em> Career Name </em> </p>
                <Spacer h="15px" />
                <a className="arrow-link"> View Profile </a>
            </div>
            <div>
                <img src={Filler} />
                <h3> Name Surname </h3>
                <p> <em> Career Name </em> </p>
                <Spacer h="15px" />
                <a className="arrow-link"> View Profile </a>
            </div>
            <div>
                <img src={Filler} />
                <h3> Name Surname </h3>
                <p> <em> Career Name </em> </p>
                <Spacer h="15px" />
                <a className="arrow-link"> View Profile </a>
            </div>

            <Divider b="-120px"/>
        </div>

          <Spacer h="200px" />

        <div className="starter-pack">
            <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1657729407/the%20harbour/archetype%20pages/StarterPack_gpchsy.png" />
            <h1> Starter Pack </h1>
            <p>You gotta start somewhere. Explore our curated list of resources, <br/>
                tailored specifically for your climate archetype.</p>
            <Spacer h="30px" />
            <a href={page.starterPack} style={{ backgroundColor: "var(--dblue)"}} className="arrow-link">View Starter Pack</a>
            <Spacer h="30px" />
            <Divider b="-100px"/>
        </div>

          <Spacer h="200px" />

        <div className="starter-pack">
            <h1> Careers </h1>
            <h3> {page.careers} </h3>
            <Spacer h="30px" />
        </div>
      </div>


        <Spacer h="50px" />

      <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = content.map(page => {
    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}
