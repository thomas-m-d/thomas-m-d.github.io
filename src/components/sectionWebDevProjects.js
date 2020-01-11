import React from "react";
import { connect } from "react-redux";
import Tile from "./tile.js";
import * as Colors from "../styles/colors.js";
import polishCalcImage from "../images/polishCalcImageFile.png";
import brandomTributeImage from "../images/brandomTributeImageFile.png";
import kantProductImage from "../images/kantProductImageFile.png";
import * as Descriptions from "./componentResources/tileDescriptionText.js";
import * as Links from "../links.js";

class SectionWebDevProjects extends React.Component {
  render() {
    return (
      <div className="sectionDiv sectionWebDevProjectsDiv">
        <a id="sectionWebDevProjectsA" className="sectionA"></a>
        <h1 className="sectionWebDevProjectsH1 sectionHeader">
          Web Development Coding Projects
        </h1>
        <div className="tilesDiv sectionWebDevProjectsTilesDiv">
          <Tile
            className="tile sectionWebDevProjectsTile polishCalcTile"
            name="Learn Polish Calculator"
            link={Links.POLISH}
            descriptionText={Descriptions.POLISH}
            image={polishCalcImage}
            bgColor={Colors.webDevColor}
            hoverBgColor={Colors.webDevColorLight}
          />
          <Tile
            className="tile sectionWebDevProjectsTile brandomTributeTile"
            name="Robert Brandom Tribute Page"
            link={Links.BRANDOM}
            descriptionText={Descriptions.BRANDOM}
            image={brandomTributeImage}
            bgColor={Colors.webDevColor}
            hoverBgColor={Colors.webDevColorLight}
          />
          <Tile
            className="tile sectionWebDevProjectsTile kantProductTile"
            name="Kant Product Landing Page"
            link={Links.KANT}
            descriptionText={Descriptions.KANT}
            image={kantProductImage}
            bgColor={Colors.webDevColor}
            hoverBgColor={Colors.webDevColorLight}
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
)(SectionWebDevProjects);
