import React from "react";
import styles from "./App.module.css";
import Helmet from "react-helmet";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faPassport
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import favicon1024 from "./favicon.png";
import favicon32 from "./favicon-32.png";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href={favicon32} sizes="16x16" />
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link
          rel="icon"
          type="image/png"
          href={favicon1024}
          sizes="1024x1024"
        />
      </Helmet>

      <main>
        <section className={styles.primary}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img
                src="https://graph.facebook.com/v6.0/561815146/picture?width=1024"
                alt="Alex Brombal"
              />
            </div>
            <div className={styles.contact}>
              <p>
                <a href="mailto:alex@brombal.com">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                  alex@brombal.com
                </a>
              </p>
              <p>
                <a href="https://github.com/brombal">
                  <FontAwesomeIcon icon={faGithub} />
                  brombal
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Dallas, TX
              </p>
              <p>
                <FontAwesomeIcon icon={faPassport} />
                Canada & USA
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <h1>Alex Brombal</h1>
            <p className={styles.subtitle}>Senior Software Engineer</p>
            <p>
              I am a senior-level software engineer with over 13 years of
              professional experience in full-stack development of web and
              mobile apps, and development team leadership.
            </p>

            <p>
              My current focuses include <strong>React</strong> front-ends (web
              and native), <strong>Node.js</strong> APIs, and{" "}
              <strong>Wordpress</strong> custom themes and plugins. I have a
              lifelong passion for writing thoughtful, readable, and practical
              code, and my skill set continuously grows and adapts to the
              current tech trends and standards.
            </p>

            <p>
              As someone who has been a part of the industry’s evolution over
              the last two decades, my experience with the complete software
              development lifecycle has led me to be an effective{" "}
              <strong>team leader</strong> and <strong>coding mentor</strong>.
            </p>

            <p>
              I also specialize in <strong>user experience</strong>. Creating
              successful applications is more than just writing code—an
              understanding of user expectations, an eye for good design, and
              collaboration with the design and UX teams are all essential to
              creating apps that are both beautiful and functional.
            </p>

            <p>
              As a freelancer, I am always looking for new projects of any size.
              If you think I would be a good fit for your project, please
              contact me.
            </p>
          </div>
        </section>
        <section className={styles.experience}>
          <h2>Experience</h2>

          <Experience
            company="Brombal, LLC"
            title="Senior Software Engineer (Owner of Brombal, LLC)"
            dates="May 2011 - Present"
          >
            <p>
              Currently operating as a freelance web developer, with
              responsibilities including project discovery, information
              architecture, user experience, visual design, front-end
              development, server-side development, database architecture, and
              server maintenance.
            </p>
          </Experience>

          <Experience
            company="Commerce House"
            title="Lead Developer / Technical Architect"
            website="http://www.commercehouse.com/"
            dates="March 2014 - August 2017"
          >
            <ul>
              <li>
                Led front-end and back-end development efforts on several
                client-facing websites and native mobile (iOS and Android) apps.
              </li>
              <li>
                Responsible for a team of front-end developers, including
                managing workflow, code reviews, knowledge sharing, etc.
              </li>
              <li>
                In charge of all major technical decisions on client projects,
                internal projects, and development tools.
              </li>
            </ul>
          </Experience>

          <Experience
            company="GameStop, Corp."
            title="Senior Mobile & Front-end Developer"
            website="http://www.gamestop.com/"
            dates="March 2012 - March 2014"
          >
            <ul>
              <li>
                Led front-end development efforts on gamestop.com and
                impulsedriven.com.
              </li>
              <li>
                Led mobile application development efforts on GameStop's iOS and
                Android app.
              </li>
              <li>Led development on internal OS X desktop applications.</li>
              <li>
                Responsible for a team of front-end developers, including
                managing workflow, code reviews, knowledge sharing, etc.
              </li>
              <li>
                Worked in an agile/scrum environment with a team of developers,
                designers, QA analysts, and managers.
              </li>
            </ul>
          </Experience>

          <Experience
            company="Hawkeye interactive (now Publicis Hawkeye)"
            title="Interactive Developer"
            website="http://www.publicishawkeye.com/"
            dates="Jan 2009 - May 2011"
          >
            <ul>
              <li>
                Developed cutting-edge marketing websites and e-mails with a
                specific focus on front end interactive technologies.
              </li>
              <li>
                Integrated and maintained several open source and proprietary
                CMS solutions for large-scale websites.
              </li>
              <li>
                Worked with php frameworks such as Cake PHP & Zend to boost
                development times and maintain consistent coding standards among
                a team of developers.
              </li>
              <li>
                Developed Facebook apps, iPhone and iPad apps for client
                marketing campaigns.
              </li>
              <li>
                Maintained strict coding standards for review by a stringent
                internal peer review system.
              </li>
              <li>
                Worked with a team of user experience architects and visual
                designers to produce the highest quality products for many
                high-profile clients including Capital One, American Airlines,
                The North Face, and Michelob Ultra.
              </li>
            </ul>
          </Experience>

          <Experience
            company="Heritage Auction Galleries"
            title="Web Developer"
            website="http://www.ha.com/"
            dates="October 2007 - September 2008"
          >
            <ul>
              <li>
                Responsible for production and maintenance of a high-traffic
                auction website processing thousands of live bids daily and a
                database of nearly 500,000 members.
              </li>
              <li>
                Helped to develop a custom php framework for very specific
                business requirements in order to aid with workflow and
                integration with old website.
              </li>
              <li>
                Extensive work in repairing old code and upgrading to PHP 5.
              </li>
              <li>
                Very controlled and process-centered environment to ensure tasks
                were completed on time.
              </li>
              <li>
                Required use of CVS for version control among 6-7 other
                developers.
              </li>
              <li>
                Worked with a team of developers to ensure consistency and
                quality coding standards.
              </li>
            </ul>
          </Experience>

          <Experience
            company="LevelTen Design"
            title="Web Developer"
            website="http://www.getlevelten.com/"
            dates="August 2006 - September 2007"
          >
            <ul>
              <li>
                Front-end and back-end development of client websites using
                platforms including wordpress, drupal, and magento.
              </li>
              <li>
                Helped to architect and develop an in-house custom php
                framework.
              </li>
              <li>
                Worked with a team of developers to ensure consistency and
                quality coding standards.
              </li>
            </ul>
          </Experience>
        </section>
      </main>
    </>
  );
}

export default App;
