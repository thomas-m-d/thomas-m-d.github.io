import React from "react";
import { connect } from "react-redux";

class NavBarHeader extends React.Component {
  render() {
    return (
      <div className="navBarHeaderDiv">
        <header className="navBarHeaderHeader">
          <p className="navBarHeaderP">Site Navigation</p>
          <nav className="navBarHeaderNav">
            <a href="#sectionWelcomeA" className="navBarHeaderA">
              Welcome
            </a>
            <a href="#sectionWebDevProjectsA" className="navBarHeaderA">
              WebDev Coding
            </a>
            <a href="#sectionPersonalProjectsA" className="navBarHeaderA">
              Personal Coding
            </a>

            <a href="#sectionPopPhilosophyA" className="navBarHeaderA">
              Pop Philosophy
            </a>
            <a href="#sectionAcademicPhilosophyA" className="navBarHeaderA">
              Academic Philosophy
            </a>
            <a href="#sectionContactA" className="navBarHeaderA">
              Contact Info
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarHeader);
