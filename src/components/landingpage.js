import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>My projects</h1>
            </div>
          </Cell>

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(/images/boardgame-portfolio.png) center / cover"
              }}
            >
              Boardgame project
            </CardTitle>
            <CardText>
              Game of thrones boardgame. A game i made for the first semester
              project, second year.
            </CardText>
            <CardActions border>
              <Button colored href="/">
                GitHub
              </Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(/images/spacex-portfolio.png) center / cover"
              }}
            >
              SpaceX project
            </CardTitle>
            <CardText>
              A SpaceX webpage i made for the semester project 2, first year.
            </CardText>
            <CardActions border>
              <Button colored href="/">
                GitHub
              </Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(/images/homefair-portfolio.png) center / cover"
              }}
            >
              Homefair project
            </CardTitle>
            <CardText>
              A Course assignment i made for a firm called Homefair.
            </CardText>
            <CardActions border>
              <Button colored href="/">
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Landing;
