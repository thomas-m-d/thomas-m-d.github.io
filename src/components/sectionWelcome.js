import React from "react";
import { connect } from "react-redux";

class SectionWelcome extends React.Component {
  render() {
    return (
      <div id="sectionWelcomeDiv" className="sectionWelcomeDiv">
        <a id="sectionWelcomeA" className="sectionA"></a>
        <p className="sectionWelcomeHiP">Hi there, I'm</p>
        <h1 className="sectionWelcomeNameH1 sectionHeader">
          Thomas Museus Dabay, Ph.D.
        </h1>
        <div className="sectionWelcomeTitlesAligner">
          <div className="sectionWelcomeTitlesContainer">
            <p className="sectionWelcomeTitle">Web Developer,</p>
            <p className="sectionWelcomeTitle">Analytic Philosopher,</p>
            <p className="sectionWelcomeTitle">Music Tech Enthusiast</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SectionWelcome);
