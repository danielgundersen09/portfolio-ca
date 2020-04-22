import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="aboutme-col" col={7}>
            <h1>About me</h1>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <p>
              My name is Daniel Gundersen and i`m a front-end developer student
              at Noroff Oslo. I have a general studies background and a course
              in management. On my spare time i like to hang out with friends
              and also play videogames. Before i went onto studying at Noroff, i
              spent a year in the military in the cold north. I would describe
              myself as a laid-back guy who is independent.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
