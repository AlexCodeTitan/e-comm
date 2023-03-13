import React from "react";
import "./HomePage.styles.scss";
import MenuItem from "./../../components/menu-item/MenuItem";
import Directory from "../../components/directory/Directory";

function HomePage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
