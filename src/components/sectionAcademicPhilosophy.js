import React from "react";
import { connect } from "react-redux";
import Tile from "./tile.js";
import * as Colors from "../styles/colors.js";
import antiskepticismImage from "../images/antiskepticismImageFile.jpg";
import peirceAntiCartesianImage from "../images/peirceAntiCartesianImageFile.jpg";
import inconsistencyNaturalismExpressivismImage from "../images/inconsistencyNaturalismExpressivismImageFile.png";
import knowabilityImage from "../images/knowabilityImageFile.png";
import transpositionImage from "../images/transpositionImageFile.png";
import * as Descriptions from "./componentResources/tileDescriptionText.js";
import * as Links from "../links.js";

class SectionAcademicPhilosophy extends React.Component {
  render() {
    return (
      <div className="sectionDiv sectionAcademicPhilosophyDiv">
        <a id="sectionAcademicPhilosophyA" className="sectionA"></a>
        <h1 className="sectionAcademicPhilosophyH1 sectionHeader">
          Academic Philosophy Publications
        </h1>
        <div className="tilesDiv sectionAcademicPhilosophyTilesDiv">
          <Tile
            className="tile sectionAcademicPhilosophyTile antiskepticismTile"
            name="Pragmatist Anti-Skepticism"
            link={Links.ANTISKEPTICISM}
            descriptionText={Descriptions.ANTISKEPTICISM}
            image={antiskepticismImage}
            bgColor={Colors.academicColor}
            hoverBgColor={Colors.academicColorLight}
          />
          <Tile
            className="tile sectionAcademicPhilosophyTile peirceAntiCartesianTile"
            name="Why Peirce's Anti-Intuitionism Is Not Anti-Cartesian"
            link={Links.PEIRCE}
            descriptionText={Descriptions.PEIRCE}
            image={peirceAntiCartesianImage}
            bgColor={Colors.academicColor}
            hoverBgColor={Colors.academicColorLight}
          />
          <Tile
            className="tile sectionAcademicPhilosophyTile inconsistencyNaturalismExpressivismTile"
            name="On the Inconsistency of Naturalism and Global Expressivism"
            link={Links.INCONSISTENCY}
            descriptionText={Descriptions.INCONSISTENCY}
            image={inconsistencyNaturalismExpressivismImage}
            bgColor={Colors.academicColor}
            hoverBgColor={Colors.academicColorLight}
          />
          <Tile
            className="tile sectionAcademicPhilosophyTile knowabilityTile"
            name="Knowability, the End of Inquiry, and Epistemic Hope"
            link={Links.KNOWABILITY}
            descriptionText={Descriptions.KNOWABILITY}
            image={knowabilityImage}
            bgColor={Colors.academicColor}
            hoverBgColor={Colors.academicColorLight}
          />
          <Tile
            className="tile sectionAcademicPhilosophyTile transpositionTile"
            name="Transposition as Naturalistic Metaphysics"
            link={Links.TRANSPOSITION}
            descriptionText={Descriptions.TRANSPOSITION}
            image={transpositionImage}
            bgColor={Colors.academicColor}
            hoverBgColor={Colors.academicColorLight}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionAcademicPhilosophy);
