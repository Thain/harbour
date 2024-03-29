import React, { useState } from "react"
import Link from "next/link"
import { Seo } from "./seo"
import { useRouter } from "next/router";
import { Divider } from "./divider"

export const Nav = (props) => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
    <nav className="topbar">
    <Seo seo={props.seo} />

        <div className="logo">
          <Link passhref href="/">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 600 456.9">
                <rect fill="black" x="1.1" width="91.7" height="319.4"/>
                <rect fill="black" x="131.5" width="91.7" height="319.4"/>
                <path fill="black" d="M355.2,93.5v225.9h-91.7V0C314.4,1,355.2,42.5,355.2,93.5z"/>
                <circle cx="425.7" cy="289.3" r="30.2" fill="#E16D4B"/>
                <path fill="black" d="M80.4,431.7l-0.1-58l-28.8,48h-7.3l-28.8-47.3v57.3H0v-87.6h13.4l34.8,58l34.1-58h13.4l0.1,87.6H80.4z"/>
                <path fill="black" d="M180.5,364.9l-31.3,72.2c-2.9,7.3-6.5,12.4-10.6,15.3s-9.2,4.4-15.1,4.4c-3.3,0-6.6-0.5-9.9-1.6c-3.3-1.1-5.9-2.6-8-4.5
                  l6.3-11.5c1.5,1.4,3.3,2.5,5.3,3.4c2,0.8,4.1,1.3,6.2,1.3c2.8,0,5-0.7,6.8-2.1c1.8-1.4,3.4-3.8,4.9-7.1l1.1-2.6l-29.1-67h16.3
                  l21,49.4l21.1-49.4H180.5z"/>
                <path fill="black" d="M306.7,431.7l-0.1-58l-28.8,48h-7.3l-28.8-47.3v57.3h-15.5v-87.6h13.4l34.8,58l34.1-58H322l0.1,87.6H306.7z"/>
                <path fill="black" d="M406.8,403.3h-52.4c0.9,4.9,3.3,8.8,7.2,11.7c3.9,2.9,8.7,4.3,14.4,4.3c7.3,0,13.4-2.4,18.1-7.3l8.4,9.6
                  c-3,3.6-6.8,6.3-11.4,8.1c-4.6,1.8-9.8,2.8-15.5,2.8c-7.3,0-13.8-1.5-19.4-4.4c-5.6-2.9-9.9-7-12.9-12.2c-3-5.2-4.6-11.1-4.6-17.7
                  c0-6.5,1.5-12.4,4.4-17.6c3-5.2,7.1-9.3,12.3-12.2c5.3-2.9,11.2-4.4,17.8-4.4c6.5,0,12.3,1.4,17.5,4.3c5.1,2.9,9.1,6.9,12,12.1
                  c2.9,5.2,4.3,11.2,4.3,18.1C407,399.8,406.9,401.3,406.8,403.3z M360.5,381.1c-3.5,3-5.6,6.9-6.3,11.8h37.9
                  c-0.7-4.8-2.7-8.8-6.1-11.8c-3.4-3-7.7-4.5-12.8-4.5C368.2,376.7,364,378.2,360.5,381.1z"/>
                <path fill="black" d="M487.4,338.9v92.8h-15v-8.6c-2.6,3.2-5.8,5.5-9.6,7.1c-3.8,1.6-8,2.4-12.6,2.4c-6.4,0-12.2-1.4-17.3-4.3
                  c-5.1-2.8-9.2-6.9-12.1-12.1c-2.9-5.2-4.4-11.2-4.4-17.9c0-6.8,1.5-12.7,4.4-17.9c2.9-5.2,6.9-9.2,12.1-12
                  c5.1-2.8,10.9-4.3,17.3-4.3c4.4,0,8.5,0.7,12.1,2.3c3.7,1.5,6.8,3.8,9.4,6.8v-34.3H487.4z M462.3,416.7c3-1.7,5.4-4.1,7.1-7.3
                  c1.7-3.2,2.6-6.8,2.6-11c0-4.2-0.9-7.8-2.6-11c-1.7-3.2-4.1-5.6-7.1-7.3c-3-1.7-6.4-2.6-10.1-2.6c-3.8,0-7.1,0.9-10.1,2.6
                  c-3,1.7-5.4,4.1-7.1,7.3c-1.7,3.2-2.6,6.8-2.6,11c0,4.2,0.9,7.8,2.6,11c1.7,3.2,4.1,5.6,7.1,7.3c3,1.7,6.4,2.6,10.1,2.6
                  C455.9,419.2,459.3,418.4,462.3,416.7z"/>
                <path fill="black" d="M508.7,351.2c-1.9-1.8-2.9-4-2.9-6.7c0-2.7,1-4.9,2.9-6.7c1.9-1.8,4.3-2.7,7.1-2.7c2.8,0,5.2,0.9,7.1,2.6
                  c1.9,1.7,2.9,3.9,2.9,6.4c0,2.8-0.9,5.1-2.8,6.9c-1.9,1.9-4.3,2.8-7.2,2.8C513,353.9,510.6,353,508.7,351.2z M507.9,364.9h15.6
                  v66.8h-15.6V364.9z"/>
                <path fill="black" d="M592.2,371.2c5.2,4.7,7.8,11.8,7.8,21.3v39.1h-14.8v-8.1c-1.9,2.9-4.7,5.1-8.2,6.7c-3.5,1.5-7.8,2.3-12.8,2.3
                  c-5,0-9.4-0.9-13.1-2.6c-3.8-1.7-6.6-4.1-8.7-7.1c-2-3-3.1-6.5-3.1-10.3c0-6,2.2-10.8,6.7-14.4c4.5-3.6,11.5-5.4,21.1-5.4h17.3v-1
                  c0-4.7-1.4-8.3-4.2-10.8c-2.8-2.5-6.9-3.8-12.4-3.8c-3.8,0-7.4,0.6-11.1,1.7c-3.6,1.2-6.7,2.8-9.2,4.9l-6.1-11.4
                  c3.5-2.7,7.7-4.7,12.6-6.1c4.9-1.4,10.1-2.1,15.6-2.1C579.4,364.2,587,366.5,592.2,371.2z M577.9,418.5c3-1.8,5.2-4.4,6.4-7.7v-7.8
                  h-16.1c-9,0-13.5,3-13.5,8.9c0,2.8,1.1,5.1,3.4,6.8c2.2,1.7,5.4,2.5,9.4,2.5C571.4,421.2,574.9,420.3,577.9,418.5z"/>
              </svg>
            </a>
          </Link>
        </div>

        <div className="menu reg">
          <ul>
            <li>
              <Link href={`/about`}>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href={`/archetypes`}>
                <a>Archetypes</a>
              </Link>
            </li>
            <li className="quizBtn">
              <Link href={`/quiz`}>
                <a>Take the Test</a>
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleToggle} className="hamburger mobile">
          <svg height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="26" fill="#E26E4B"/>
            <path d="M16 18H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 26.0667H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 34.1333H36.5722" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
        </div>
        <Divider />

      </nav>

      <div id="nav-overlay" className={ navbarOpen ? "nav-open" : "nav-close" }>
        <div className="topbar-hamb">
          <div onClick={handleToggle} className="hamburger-x">
            <svg height="100%" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.25 9.75L9.75 29.25" stroke="#E26E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 9.75L29.25 29.25" stroke="#E26E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="nav-overlay-menu">
          <ul>
            <li>
              <Link href={`/`}>
                <a className="">Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/about`}>
                <a className="">About</a>
              </Link>
            </li>
            <li>
              <Link href={`/archetypes`}>
                <a className="">Archetypes</a>
              </Link>
            </li>
            <li>
              <Link href={`/quiz`}>
                <a className="">Take the Test</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

// this is pretty cool. wanna keep this code around in case
//            {categories.map((category) => {
//              return (
//                <li key={category.id}>
//                  <Link href={`/category/${category.attributes.slug}`}>
//                    <a className="uk-link-reset">{category.attributes.name}</a>
//                  </Link>
//                </li>
//              )
//            })}
