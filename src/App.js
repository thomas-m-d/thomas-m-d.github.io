import React from "react";

import "./styles/App.scss";
import "./styles/navBarHeader.scss";
import "./styles/tile.scss";
import "./styles/sectionWelcome.scss";
import "./styles/sectionWebDevProjects.scss";
import "./styles/sectionPersonalProjects.scss";
import "./styles/sectionPopPhilosophy.scss";
import "./styles/sectionAcademicPhilosophy.scss";
import "./styles/sectionContact.scss";
import * as Colors from "./styles/colors.js";

import NavBarHeader from "./components/navBarHeader.js";
import TransitionEffect from "./components/transitionEffect.js";
import SectionWelcome from "./components/sectionWelcome.js";
import SectionWebDevProjects from "./components/sectionWebDevProjects.js";
import SectionPersonalProjects from "./components/sectionPersonalProjects.js";
import SectionPopPhilosophy from "./components/sectionPopPhilosophy.js";
import SectionAcademicPhilosophy from "./components/sectionAcademicPhilosophy.js";
import SectionContact from "./components/sectionContact.js";

function App() {
  return (
    <div className="App">
      <NavBarHeader className="navBarHeader" />
      <SectionWelcome className="sectionWelcome" />
      <TransitionEffect
        oddColor={Colors.webDevColorDark}
        evenColor={Colors.welcomeColor}
      />
      <SectionWebDevProjects id="sectionWebDevProjects" />
      <TransitionEffect
        oddColor={Colors.personalColorDark}
        evenColor={Colors.webDevColorDark}
      />
      <SectionPersonalProjects className="sectionPersonalProjects" />
      <TransitionEffect
        oddColor={Colors.popularColorDark}
        evenColor={Colors.personalColorDark}
      />
      <SectionPopPhilosophy className="sectionPopPhilosophy" />
      <TransitionEffect
        oddColor={Colors.academicColorDark}
        evenColor={Colors.popularColorDark}
      />
      <SectionAcademicPhilosophy className="sectionAcademicPhilosophy" />
      <TransitionEffect
        oddColor={Colors.contactColor}
        evenColor={Colors.academicColorDark}
      />
      <div className="academicSpacerDiv" />
      <TransitionEffect
        oddColor={Colors.academicColorDark}
        evenColor={Colors.contactColor}
      />
      <div className="contactSpacerDiv" />
      <TransitionEffect
        oddColor={Colors.contactColor}
        evenColor={Colors.academicColorDark}
      />
      <div className="academicSpacerDiv" />
      <TransitionEffect
        oddColor={Colors.academicColorDark}
        evenColor={Colors.contactColor}
      />
      <div className="contactSpacerDiv" />
      <TransitionEffect
        oddColor={Colors.contactColor}
        evenColor={Colors.academicColorDark}
      />
      <SectionContact />
      <TransitionEffect
        oddColor={Colors.academicColorDark}
        evenColor={Colors.contactColor}
      />
      <div className="contactSpacerDiv" />
      <TransitionEffect
        oddColor={Colors.contactColor}
        evenColor={Colors.academicColorDark}
      />
    </div>
  );
}

export default App;
