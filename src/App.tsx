import React from 'react';
import * as styles from './App.module.css';
import Helmet from 'react-helmet';
import Experience from './Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faMapMarkerAlt, faPassport } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import favicon1024 from './favicon.png';
import favicon32 from './favicon-32.png';

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
        <link rel="icon" type="image/png" href={favicon1024} sizes="1024x1024" />
      </Helmet>

      <main>
        <section className={styles.header}>
          <div className={styles.photo}>
            <img src={require('./alex.jpg')} alt="Alex Brombal" />
          </div>

          <div className={styles.name}>
            <h1>Alex Brombal</h1>
            <p className={styles.subtitle}>
              <span>Cloud app architect</span> / <span>Senior software engineer</span> /{' '}
              <span>Team leader</span>
            </p>
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

          <div className={styles.intro}>
            <p>
              Application architect and senior software engineer with over 15 years of experience
              specializing in cloud architecture, full-stack web and mobile development, and
              leadership in software development teams. Expertise in developing large-scale cloud
              applications, predominantly in AWS, and proficient in full-stack web development, from
              creating usability-focused front-ends (both web and mobile) to developing back-end
              APIs, databases, and scalable server architecture.
            </p>

            <p>
              Especially effective at collaborating with product owners and translating business
              needs into technical solutions. Comprehensive experience in the software development
              lifecycle has empowered me to effectively lead and mentor developers, enhancing both
              project outcomes and team collaboration.
            </p>
          </div>
        </section>

        <section>
          <h2>Experience</h2>

          <Experience
            company="CancerLinQ / ConcertAI"
            title="Applications Architect"
            website="http://www.cancerlinq.org/"
            dates="October 2019 - Present"
          >
            <p>
              Lead architect on a team that designs and builds a large-scale data ingest platform
              and web application used by oncologists and hospital administrators for aggregation
              and analysis of cancer regiments and patient treatment journeys.
            </p>

            <ul>
              <li>
                Led a team of developers in architecting and developing a big-data analysis platform
                for analyzing cancer treatment statistics. The system comprised daily processing of
                6+ million live patient records, as well as client web applications and internal
                administration and reporting tools.
              </li>
              <li>
                Responsible for overall architectural direction of the platform, as well as the
                technical design and implementation of client-facing products, internal tools, and
                local development environments.
              </li>
              <li>
                Coordinated engineering best practices, team code reviews, knowledge sharing, and
                developer coaching/mentoring.
              </li>
              <li>
                Worked closely with product owners and designers to translate business requirements
                and visual designs into technical requirements.
              </li>
              <li>
                Platform is built with React, node.js (express), Redshift, hosted on AWS platform
                (ECS, S3, Lambda, EMR, etc).
              </li>
              <li>
                Fully remote work required self-sufficiency, excellent organizational and
                communication skills.
              </li>
            </ul>
          </Experience>

          <Experience
            company="Surge"
            title="Senior Software Engineer"
            dates="September 2016 - Present"
          >
            <p>
              As a contract software engineer, I supported existing software development teams in
              architecting, developing, maintaining, and deploying their projects. I also helped
              define and develop projects from scratch for businesses looking to create web and
              mobile apps that support their businesses.
            </p>
            <p>
              My experience with the clients that Surge has paired me with allowed me to work in
              different industries including insurance underwriting, law enforcement, financial,
              medical, social networking, and others. This has not only expanded my technological
              expertise, but also my ability to adapt to different business models and incorporate
              business logic for a wide array of client needs.
            </p>
            <p>
              This job was entirely remote, which has required a high degree of self-motivation,
              discipline, and communication skills in order to ensure projects are delivered on time
              and that critical issues are resolved in a timely manner.
            </p>
            <p>
              The technologies I used vary widely between clients. These include React (web and
              native), Angular, Node.js, SQL, mongodb, and Wordpress (php).
            </p>
            <ul>
              <li>
                Worked with development teams to provide additional support, consulting, and
                development on web and mobile application projects.
              </li>
              <li>
                Projects ranged from single-developer small custom app development to large
                team-driven multi-discipline web applications.
              </li>
              <li>
                All work is remote and requires self-sufficiency, excellent organizational and
                communication skills.
              </li>
            </ul>
          </Experience>

          <Experience
            company="Brombal, LLC"
            title="Senior Software Engineer (Owner of Brombal, LLC)"
            dates="May 2011 - Present"
          >
            <p>
              Operating as a freelance web developer, with responsibilities ranging from project
              discovery, information architecture, front-end development, user experience and visual
              design, to server-side development, database architecture, and server maintenance.
            </p>
          </Experience>

          <Experience
            company="Commerce House"
            title="Lead Developer / Technical Architect"
            website="http://www.commercehouse.com/"
            dates="March 2014 - August 2016"
          >
            <ul>
              <li>
                Led front-end and back-end development efforts on several client-facing websites and
                native mobile (iOS and Android) apps.
              </li>
              <li>
                Responsible for a team of front-end developers, including managing workflow, code
                reviews, knowledge sharing, etc.
              </li>
              <li>
                In charge of all major technical decisions on client projects, internal projects,
                and development tools.
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
              <li>Led front-end development efforts on gamestop.com and impulsedriven.com.</li>
              <li>Led development on internal OS X desktop applications.</li>
              <li>Mobile application development efforts on GameStop's iOS and Android app.</li>
              <li>
                Worked with a team of front-end developers, including managing workflow, code
                reviews, knowledge sharing, etc.
              </li>
              <li>
                Worked in an agile/scrum and kanban environment with a team of developers,
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
                Developed cutting-edge marketing websites and e-mails with a specific focus on front
                end interactive technologies.
              </li>
              <li>
                Integrated and maintained several open source and proprietary CMS solutions for
                large-scale websites.
              </li>
              <li>
                Worked with php frameworks such as Cake PHP & Zend to boost development times and
                maintain consistent coding standards among a team of developers.
              </li>
              <li>Developed Facebook apps, iPhone and iPad apps for client marketing campaigns.</li>
              <li>
                Maintained strict coding standards for review by a stringent internal peer review
                system.
              </li>
              <li>
                Worked with a team of user experience architects and visual designers to produce the
                highest quality products for many high-profile clients including Capital One,
                American Airlines, The North Face, and Michelob Ultra.
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
                Responsible for production and maintenance of a high-traffic auction website
                processing thousands of live bids daily and a database of nearly 500,000 members.
              </li>
              <li>
                Helped to develop a custom php framework for very specific business requirements in
                order to aid with workflow and integration with old website.
              </li>
              <li>Extensive work in repairing old code and upgrading to PHP 5.</li>
              <li>
                Very controlled and process-centered environment to ensure tasks were completed on
                time.
              </li>
              <li>Required use of CVS for version control among 6-7 other developers.</li>
              <li>
                Worked with a team of developers to ensure consistency and quality coding standards.
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
                Front-end and back-end development of client websites using platforms including
                wordpress, drupal, and magento.
              </li>
              <li>Helped to architect and develop an in-house custom php framework.</li>
              <li>
                Worked with a team of developers to ensure consistency and quality coding standards.
              </li>
            </ul>
          </Experience>
        </section>
      </main>
    </>
  );
}

export default App;
