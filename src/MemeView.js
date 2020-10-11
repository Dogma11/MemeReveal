import React from "react";
import MemePlayer from "./MemePlayer.js";
import "./App.css";

class MemeView extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Meme List for this {this.props.day}</h1>
        <ul>
          <MemePlayer
            name="RICARDO"
            url="https://www.youtube.com/watch?v=O_IYLqIjtMg"
          />
          <MemePlayer
            name="EVO TAXIS"
            url="https://www.youtube.com/watch?v=0kDKycNbopM"
          />
          <MemePlayer
            name="DAVID GOOD ENOUGH"
            url="https://www.youtube.com/watch?v=ho4W5LnFl6s"
          />
        </ul>
      </div>
    );
  }
}

export default MemeView;
