import React from "react"
import Image from "next/image"
import Link from "next/link"

const AboutCard = ({ person }) => {
  return (
    <div className="abt-row">
        <div className="profile-img">
            <Image src={person.image}
                   alt={person.name}
                   width={500}
                   height={500}
            />
        </div>
        <div className="profile-content">
            <h1>{person.name}</h1>
            <h5>{person.desc}</h5>
            <Link href={person.li}>
                <a target="_blank">
                  <svg xmlns="http://www.w3.org/1999/xlink" viewBox="-55 0 579 504.4">
                      <path className="st2" d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6 C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8 c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6			c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"/>
                  </svg>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default AboutCard