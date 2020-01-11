import React from "react";
import { connect } from "react-redux";

class TransitionEffect extends React.Component {
  render() {
    console.log(this.props.oddColor);
    return (
      <div className="transitionDiv">
        <hr
          className="transitionHr1"
          style={{ borderColor: this.props.oddColor }}
        />
        <hr
          className="transitionHr2"
          style={{ borderColor: this.props.evenColor }}
        />
        <hr
          className="transitionHr3"
          style={{ borderColor: this.props.oddColor }}
        />
        <hr
          className="transitionHr4"
          style={{ borderColor: this.props.evenColor }}
        />
        <hr
          className="transitionHr5"
          style={{ borderColor: this.props.oddColor }}
        />
        <hr
          className="transitionHr6"
          style={{ borderColor: this.props.evenColor }}
        />
        <hr
          className="transitionHr7"
          style={{ borderColor: this.props.oddColor }}
        />
        <hr
          className="transitionHr8"
          style={{ borderColor: this.props.evenColor }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TransitionEffect);
