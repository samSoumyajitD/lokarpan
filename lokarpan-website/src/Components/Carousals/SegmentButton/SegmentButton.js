import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SegmentButton.css";

const SegmentButton = () => {
  const [active, setActive] = useState("deadline");

  const handleSegmentClick = (segment) => {
    setActive(segment);
  };

  return (
    <>
      <div className="segment-button">
        <div className="menu-items-seg">
          <div className="items-seg">
            <div
              className={
                active === "deadline"
                  ? "element-seg btn-active-seg"
                  : "element-seg"
              }
              onClick={() => handleSegmentClick("deadline")}
            >
              Deadline
            </div>
            <div
              className={
                active === "process"
                  ? "element-seg btn-active-seg"
                  : "element-seg"
              }
              onClick={() => handleSegmentClick("process")}
            >
              Process
            </div>
            <div
              className={
                active === "scholarships"
                  ? "element-seg btn-active-seg"
                  : "element-seg"
              }
              onClick={() => handleSegmentClick("scholarships")}
            >
              Scholarships
            </div>
          </div>
        </div>
        <div className="segments">
          {active === "deadline" && (
            <div className="segment-button-text">
              <div>
                <h3>Applicants to HBS must have the following:</h3>
                <ul>
                  <li>+A four-year undergraduate degree or its equivalent</li>
                  <li>+GMAT or GRE test results</li>
                  <li>
                    +English language test results if you attended a non-English
                    undergraduate program
                  </li>
                </ul>
              </div>
              <div>
                <h3>Written application</h3>
                <p>
                  To apply to Harvard Business School, we ask you to assemble
                  and prepare a variety of materials that will help us assess
                  your qualifications. Remember, all materials must be submitted
                  to HBS online by the application deadlines. The following
                  serves as a preview of what you need to prepare.
                </p>
              </div>
              <div>
                <h3>
                  We will accept the new, shorter GRE beginning September 2023.
                  We will accept the GMAT Focus beginning with the 2+2 round in
                  April 2024.
                </h3>
                <p>
                  When submitting your application, you may report the
                  unofficial GMAT or GRE score given on the day of the test, or
                  your official score if you have received it. Every applicant
                  must request that the testing agency sends an official score
                  report directly to HBS. We accept online versions of the GMAT
                  or GRE.
                </p>
              </div>
              <div>
                <h3>Interview</h3>
                <p>
                  After your written application has been submitted and
                  reviewed, you may be invited to interview. Interviews are 30
                  minutes and are conducted by an MBA Admissions Board member
                  who has reviewed your application. Your interview will be
                  tailored to you and is designed for us to learn more about you
                  in the context of a conversation.
                </p>
              </div>
              <div>
                <h3>Post-interview Reflection</h3>
                <p>
                  Within 24 hours of the interview, candidates are required to
                  submit a written reflection through our online application
                  system. Detailed instructions will be provided to those
                  applicants who are invited to interview.
                </p>
              </div>
            </div>
          )}
          {active === "process" && (
            <div className="segment-button-text">
              <div>
                <h3>Written application</h3>
                <p>
                  To apply to Harvard Business School, we ask you to assemble
                  and prepare a variety of materials that will help us assess
                  your qualifications. Remember, all materials must be submitted
                  to HBS online by the application deadlines. The following
                  serves as a preview of what you need to prepare.
                </p>
              </div>
              <div>
                <h3>
                  We will accept the new, shorter GRE beginning September 2023.
                  We will accept the GMAT Focus beginning with the 2+2 round in
                  April 2024.
                </h3>
                <p>
                  When submitting your application, you may report the
                  unofficial GMAT or GRE score given on the day of the test, or
                  your official score if you have received it. Every applicant
                  must request that the testing agency sends an official score
                  report directly to HBS. We accept online versions of the GMAT
                  or GRE.
                </p>
              </div>
              <div>
                <h3>Interview</h3>
                <p>
                  After your written application has been submitted and
                  reviewed, you may be invited to interview. Interviews are 30
                  minutes and are conducted by an MBA Admissions Board member
                  who has reviewed your application. Your interview will be
                  tailored to you and is designed for us to learn more about you
                  in the context of a conversation.
                </p>
              </div>
              <div>
                <h3>Post-interview Reflection</h3>
                <p>
                  Within 24 hours of the interview, candidates are required to
                  submit a written reflection through our online application
                  system. Detailed instructions will be provided to those
                  applicants who are invited to interview.
                </p>
              </div>
            </div>
          )}
          {active === "scholarships" && (
            <div className="segment-button-text">
              <div>
                <h3>
                  We will accept the new, shorter GRE beginning September 2023.
                  We will accept the GMAT Focus beginning with the 2+2 round in
                  April 2024.
                </h3>
                <p>
                  When submitting your application, you may report the
                  unofficial GMAT or GRE score given on the day of the test, or
                  your official score if you have received it. Every applicant
                  must request that the testing agency sends an official score
                  report directly to HBS. We accept online versions of the GMAT
                  or GRE.
                </p>
              </div>
              <div>
                <h3>Interview</h3>
                <p>
                  After your written application has been submitted and
                  reviewed, you may be invited to interview. Interviews are 30
                  minutes and are conducted by an MBA Admissions Board member
                  who has reviewed your application. Your interview will be
                  tailored to you and is designed for us to learn more about you
                  in the context of a conversation.
                </p>
              </div>
              <div>
                <h3>Post-interview Reflection</h3>
                <p>
                  Within 24 hours of the interview, candidates are required to
                  submit a written reflection through our online application
                  system. Detailed instructions will be provided to those
                  applicants who are invited to interview.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SegmentButton;
