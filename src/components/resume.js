import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-right-col" col={9}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Noroff Oslo"
              schoolDescription="Front-end developement."
            />

            <Education
              startYear={2013}
              endYear={2016}
              schoolName="Frederik II"
              schoolDescription="General studies."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2> Job experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="We are live"
              jobDescription="Brand ambassador"
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Norwegian army"
              jobDescription="Elected representative"
            />
            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Christensen Bakeri"
              jobDescription="Bakery employee"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
