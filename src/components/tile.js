import React from "react";
import { connect } from "react-redux";
import "../styles/tile.scss";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAHovered: false };
  }

  render() {
    return (
      <div className="tileDiv">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.link}
          className="tileA"
          onMouseEnter={() => {
            this.setState({ ...this.state, isAHovered: true });
            console.log("mouse entered tileDiv, state is: " + this.state);
          }}
          onMouseLeave={() => {
            this.setState({ ...this.state, isAHovered: false });
            console.log("mouse left tileDiv, state is: " + this.state);
          }}
          style={{
            backgroundColor: this.state.isAHovered
              ? this.props.hoverBgColor
              : this.props.bgColor
          }}
        >
          <p className="tileP">{this.props.name}</p>
          <div className="tileImgDiv">
            <img src={this.props.image} alt="" className="tileImg" />
            <div className="tileImgDescriptionDiv">
              {this.props.descriptionText}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
