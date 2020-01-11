import React from "react";
import { connect } from "react-redux";
import Tile from "./tile.js";
import * as Colors from "../styles/colors.js";
import cvGeneratorImage from "../images/cvGeneratorImageFile.png";
import mnemonicImage from "../images/mnemonicImageFile.jpg";
import keymapsImage from "../images/keymapsImageFile.png";
import linuxOddsEndsImage from "../images/linuxOddsEndsImageFile.png";
import pathwayImage from "../images/pathwayImageFile.jpg";
import * as Descriptions from "./componentResources/tileDescriptionText.js";
import * as Links from "../links.js";

class SectionPersonalProjects extends React.Component {
  render() {
    return (
      <div className="sectionDiv sectionPersonalProjectsDiv">
        <a id="sectionPersonalProjectsA" className="sectionA"></a>
        <h1 className="sectionHeader sectionPersonalProjectsH1">
          Personal Coding Projects
        </h1>
        <div className="tilesDiv sectionPersonalProjectsTilesDiv">
          <Tile
            className="tile sectionPersonalProjectsTiles cvGeneratorTile"
            name="Arbitrary CV Generator"
            link={Links.CVGENERATOR}
            descriptionText={Descriptions.CVGENERATOR}
            image={cvGeneratorImage}
            bgColor={Colors.personalColor}
            hoverBgColor={Colors.personalColorLight}
          />
          <Tile
            className="tile sectionPersonalProjectsTiles mnemonicTile"
            name="Mnemonic Sampler"
            link={Links.MNEMONIC}
            descriptionText={Descriptions.MNEMONIC}
            image={mnemonicImage}
            bgColor={Colors.personalColor}
            hoverBgColor={Colors.personalColorLight}
          />
          <Tile
            className="tile sectionPersonalProjectsTiles linuxOddsEndsTile"
            name="Linux Odds and Ends"
            link={Links.LINUX}
            descriptionText={Descriptions.LINUX}
            image={linuxOddsEndsImage}
            bgColor={Colors.personalColor}
            hoverBgColor={Colors.personalColorLight}
          />
          <Tile
            className="tile sectionPersonalProjectsTiles keymapsTile"
            name="MiniVan Config"
            link={Links.KEYMAPS}
            descriptionText={Descriptions.KEYMAPS}
            image={keymapsImage}
            bgColor={Colors.personalColor}
            hoverBgColor={Colors.personalColorLight}
          />
          <Tile
            className="tile sectionPersonalProjectsTiles pathwayTile"
            name="Pathway Sequencer"
            link={Links.PATHWAY}
            descriptionText={Descriptions.PATHWAY}
            image={pathwayImage}
            bgColor={Colors.personalColor}
            hoverBgColor={Colors.personalColorLight}
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
)(SectionPersonalProjects);
