import React, { useState } from "react";
import PropTypes from "prop-types";
import Button2 from "../button/Button2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
Jobs.propTypes = {};

function Jobs(props) {
  const { data } = props;
  const { className } = props;

  const [dataBlock] = useState({
    title: "Featured Jobs",
    text: "Find the job that’s perfect for you. about 800+ new jobs everyday",
  });

  let [getFeaturedJobData, setGetFeaturedJobData] = useState([])
  let [getTotalJob, setGetTotalJob] = useState([])

  async function getFeaturedJob() {
    const getFeaturedJob = await fetch('http://localhost:4500/getAllData', {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const response = await getFeaturedJob.json()
    setGetFeaturedJobData(response.jobsData)
    // setGetTotalJob(response.jobForEachCountry[0])

}
console.log(getFeaturedJobData)
useEffect(() => {

  getFeaturedJob()
}, []);

  return (
    <section className={className}>
      <div className="tf-container">
        <div className="tf-title style-2">
          <div className="group-title ">
            <h1>{dataBlock.title}</h1>
            <p>{dataBlock.text}</p>
          </div>
        </div>
        <div className="row wow fadeInUp">
          {getFeaturedJobData.slice(0, 6).map((idx) => (
            <div key={idx.id} className="col-lg-6 ">
              <div className="features-job">
                <div className="job-archive-header">
                  <div className="inner-box">
                    <div className="logo-company">
                      <img src={idx.img} alt="jobtex" />
                    </div>
                    <div className="box-content">
                      <h4>
                        <Link to="/jobsingle_v1">{idx.jobTitle}</Link>
                      </h4>
                      <h3>
                        <Link to="/jobsingle_v1"> {idx.category} </Link>
                        <span className="icon-bolt"></span>
                      </h3>
                      <ul>
                        <li>
                          <span className="icon-map-pin"></span>
                          {idx.location}
                        </li>
                        <li>
                          <span className="icon-calendar"></span>
                          {idx.date}
                        </li>
                      </ul>
                      <span className="icon-heart"></span>
                    </div>
                  </div>
                </div>
                <div className="job-archive-footer">
                  <div className="job-footer-left">
                    <ul className="job-tag">

                      {/* <li>
                        {idx.type}
                      </li> */}
                      <li>
                        <Link to="#">{idx.type}</Link>
                      </li>
                      {/* <li>
                        <Link to="#">{idx.jobs2}</Link>
                      </li> */}
                    </ul>
                    <div className="star">
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                    </div>
                  </div>
                  <div className="job-footer-right">
                    <div className="price">
                      <span className="icon-dolar1"></span>
                      <p>
                        {idx.price}
                        <span className="year">${idx.minSalary}-${idx.maxSalary} /year</span>
                      </p>
                    </div>
                    <p className="days">{idx.apply}</p>
                  </div>
                </div>
                <Link
                  to="/jobsingle_v1"
                  className="jobtex-link-item"
                  tabIndex="0"
                ></Link>
              </div>
            </div>
          ))}

          <div className="col-md-12">
            <div className="wrap-button">
              <Button2 title="See more Jobs" link="/joblist_v1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
