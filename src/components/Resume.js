import React, { useState } from 'react';

let activeSection =
  'text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-800 mb-2 mt-6 border-b-8 border-green-200';

let inactiveSection =
  'text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-800 mb-4 mt-6 border-b-2 border-grey-200';

const Resume = () => {
  const [summary, setSummary] = useState(inactiveSection);
  const [skills, setSkills] = useState(inactiveSection);
  const [education, setEducation] = useState(inactiveSection);
  const [experience, setExperience] = useState(inactiveSection);

  return (
    <main className="plex">
      <div className="p-10 container mx-auto relative">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-gray-800 mb-22 md:text-center">
          Alexander Leakos
        </h1>
        <div
          onMouseEnter={() => setSummary(activeSection)}
          onMouseLeave={() => setSummary(inactiveSection)}
        >
          <h2 className={summary}>Summary</h2>
          <p>
            Software Developer with 2+ years of experience leading the design,
            development, and deployment of full stack eCommerce solutions.
            Focused on working with teams solving complex problems for high
            performance, user-focused platforms that unlock efficiency and
            productivity for customers at scale.
          </p>
        </div>
        <div
          onMouseEnter={() => setSkills(activeSection)}
          onMouseLeave={() => setSkills(inactiveSection)}
        >
          <h2 className={skills}>Skills</h2>
          <div className="text-l mb-4">
            <strong>Engineering: </strong>Product Roadmap, Frontend & UI/UX,
            Backend & Infrastructure, Cloud Architecture, API Development &
            Integration, RESTful Web Services, Microservices, Software Design &
            Coding, Testing & Code Coverage, Software Quality, Scalability,
            Performance, Reliability, Automation, Code Reviews, Documentation
          </div>
          <div className="text-l mb-4">
            <strong>Leadership: </strong>Strategic Planning & Execution, Project
            Management, Prioritization, Process Improvement, Cross-functional
            Collaboration, Staff Hiring & Management, Training & Development,
            Coaching & Mentorship, Interdepartmental Alignment, Change
            Management, Business Development, Financial Modeling & Analysis,
            Budgeting & Resource Allocation, Reporting
          </div>
          <div className="text-l">
            <strong>Software: </strong>Python, PySpark, Java, Javascript, React,
            Databricks, C/C++, SQL, Graph QL, Excel/VBA, RDBMS, AWS, Digital
            Ocean, Git
          </div>
        </div>
        <div
          onMouseEnter={() => setEducation(activeSection)}
          onMouseLeave={() => setEducation(inactiveSection)}
        >
          <h2 className={education}>Education</h2>
          <div class="lg:flow-root">
            <p className="lg:float-left mb-2">
              {' '}
              Master's of Software Engineering, University of Calgary
            </p>
            <p className="font-bold mb-2 lg:mb-2 lg:float-right">
              Expected 2022
            </p>
          </div>
          <div class="lg:flow-root">
            <p className="lg:float-left ">
              {' '}
              Bachelor of Science in Mechanical Engineering, University of
              Calgary
            </p>
          </div>
        </div>
        Rele
        <div
          onMouseEnter={() => setExperience(activeSection)}
          onMouseLeave={() => setExperience(inactiveSection)}
        >
          <h2 className={experience}>Relevant Experience</h2>
          <ul>
            <li>
              <div>
                <div className="mb-2">
                  <a
                    href="https://www.bessiebox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 text-xl font-bold"
                  >
                    Bessie Box
                  </a>
                </div>
                <div>
                  <div className="text-m">
                    <div class="lg:flow-root">
                      <p className="lg:float-left font-bold mb-2">
                        {' '}
                        Co-Founder/Software Developer/Operations & Finance
                        Manager
                      </p>

                      <p className="font-bold mb-2 lg:mb-2 lg:float-right">
                        2019-2021
                      </p>
                    </div>
                    <ul>
                      <li className="mb-2 list-disc  list-inside">
                        Grew a local grocery eCommerce brand from $0 to $750K in
                        annualized revenue with a 4-person team
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Sourced products from 12 local farms and producers and
                        coordinated shipping, receiving, and distribution for 3K
                        customers.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Automated SMS communications for subscription delivery
                        scheduling, follow-up feedback, and marketing with
                        historical data using Slack, Twilio, and Shopify APIs to
                        optimize courier routing, enable order/delivery
                        batching, & streamline delivery.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Managed a Digital Ocean server, using Nginx and Gunicorn
                        for load balancing, and built a PostgreSQL database to
                        implement new eCommerce applications from the ground up,
                        serving hundreds of concurrent users.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Designed and created frontends and dashboards for
                        internal apps using Retool, a low code tool that allows
                        non-technical users and marketing teams to interact with
                        customers and product data and utilize the functionality
                        of internal APIs.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Maintained 30%+ gross margins by analyzing and
                        negotiating the cost of products, couriers, packaging,
                        and labor.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Integrated internal apps with 4 other Shopify store
                        owners to streamline inventory management and
                        communications.
                      </li>
                      <li className="list-disc  list-inside">
                        Updated the inventory database automatically to maintain
                        accurate inventory levels using Shopify webhooks and
                        implemented combackend logic for product bundles not
                        available in Shopify natively.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="mt-6 mb-2">
                <div className="">
                  <a
                    href="https://www.roynat.com/ca/en/who-we-are/equity-partners.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 text-xl mb-6 font-bold"
                  >
                    Roynat Equity Partners
                  </a>
                </div>
              </div>
              <div>
                <div class="lg:flow-root">
                  <p className="lg:float-left font-bold mb-2">Senior Analyst</p>

                  <p className="font-bold mb-2 lg:mb-2 lg:float-right">
                    2017-2019
                  </p>
                </div>
                <ul>
                  <li className="mb-2 list-disc  list-inside">
                    Analyzed financial statements and prepared financial models
                    of prospective and current investments for a team deploying
                    $300MM in capital across a wide array of industries
                    resulting in 6 investments and 8 divestments.
                  </li>
                  <li className="mb-2 list-disc  list-inside">
                    Created investment presentations to internally market deals,
                    present business cases for investments, and secure funding.
                  </li>
                  <li className="mb-2 list-disc  list-inside">
                    Evaluated existing portfolios against industry standards
                    using financial modeling to measure and guide current
                    performance and preemptively identify the need for potential
                    exit strategies.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="mt-6 mb-2">
                <a
                  href="https://foragecapitalpartners.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 text-xl mb-6 font-bold"
                >
                  Avrio Capital
                </a>
              </div>
              <div>
                <div class="lg:flow-root">
                  <p className="lg:float-left font-bold mb-2">
                    Research Associate
                  </p>
                  <p className="font-bold mb-2 lg:mb-2 lg:float-right">
                    2016-2017
                  </p>
                </div>
                <div>
                  <div>
                    <ul>
                      <li className="mb-2 list-disc  list-inside">
                        Conducted due diligence for a VC firm with a $200MM
                        fund. Produced research, reports, and models for the
                        fund to evaluate assets within emerging and existing
                        agricultural markets, leading to acquisitions and
                        divestments.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="mt-6 mb-2">
                  <a
                    href="https://www.paramountres.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 text-xl mb-6 font-bold"
                  >
                    Paramount Resources
                  </a>
                </div>
                <div>
                  <div class="lg:flow-root">
                    <p className="lg:float-left font-bold mb-2">
                      Opertations Engineering Intern
                    </p>
                    <p className="font-bold mb-2 lg:mb-2 lg:float-right">
                      2014-2015
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-2 list-disc  list-inside">
                        Coordinated work-overs for 100+ oil wells to ensure
                        on-time repairs and optimize performance.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Performed an economic evaluation of a 30 well field to
                        determine site viability based on current & forecasted
                        market prices.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Developed a database for 300+ wells to ensure compliance
                        with new AER guidelines for suspended and abandoned
                        wells.
                      </li>
                      <li className="mb-2 list-disc  list-inside">
                        Analyzed wellbores and identified a necessary tubing
                        change that reduced shut-in time by 25% and increased
                        profitability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Resume;
