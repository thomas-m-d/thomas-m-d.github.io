import React from "react";
import { connect } from "react-redux";
import Tile from "./tile.js";
import * as Colors from "../styles/colors.js";
import goldilocksNaturalismImage from "../images/goldilocksNaturalismImageFile.jpg";
import justifyingMoralJudgmentsImage from "../images/justifyingMoralJudgmentsImageFile.jpg";
import * as Descriptions from "./componentResources/tileDescriptionText.js";
import * as Links from "../links.js";

class SectionPopPhilosophy extends React.Component {
  render() {
    return (
      <div className="sectionDiv sectionPopPhilosophyDiv">
        <a id="sectionPopPhilosophyA" className="sectionA"></a>
        <h1 className="sectionHeader sectionPopPhilosophyH1">
          Popular Philosophy Publications
        </h1>
        <div className="tilesDiv sectionPopPhilosophyTilesDiv">
          <Tile
            className="tile sectionPopPhilosophyTile goldilocksNaturalismTile"
            name="Goldilocks Naturalism"
            link={Links.GOLDILOCKS}
            descriptionText={Descriptions.GOLDILOCKS}
            image={goldilocksNaturalismImage}
            bgColor={Colors.popularColor}
            hoverBgColor={Colors.popularColorLight}
          />
          <Tile
            className="tile sectionPopPhilosophyTile justifyingMoralJudgmentsTile"
            name="Justifying Our Moral Judgments"
            link={Links.JUSTIFYING}
            descriptionText={Descriptions.JUSTIFYING}
            image={justifyingMoralJudgmentsImage}
            bgColor={Colors.popularColor}
            hoverBgColor={Colors.popularColorLight}
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
)(SectionPopPhilosophy);
