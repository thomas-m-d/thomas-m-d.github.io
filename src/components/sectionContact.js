import React from "react";
import { connect } from "react-redux";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Links from "../links.js";

class SectionContact extends React.Component {
  render() {
    return (
      <div className="sectionContactDiv sectionDiv">
        <a id="sectionContactA" className="sectionA"></a>
        <h1 className="sectionContactH1 sectionHeader">
          For More Information, or to Contact Me:{" "}
        </h1>
        <div className="sectionContactAListDiv">
          <a href={Links.GITHUB} className="sectionContactA">
            <span>
              <FontAwesomeIcon icon={faGithub} /> Github
            </span>
          </a>
          <a href="" className="sectionContactA">
            <span>
              <FontAwesomeIcon icon={faFilePdf} /> Resume
            </span>
          </a>
          <a
            href="Resources/ThomasMuseusDabayCV.pdf"
            className="sectionContactA"
          >
            <span>
              <FontAwesomeIcon icon={faFilePdf} /> Academic CV
            </span>
          </a>
          <a href={Links.EMAIL} className="sectionContactA">
            <span>
              <FontAwesomeIcon icon={faEnvelopeSquare} /> Email
            </span>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SectionContact);
