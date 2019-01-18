import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tabOnMap => (
          <Tab
            tab={tabOnMap}
            changeSelected={props.changeSelected}
            selectedTab={props.selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.PropTypes = {
  tab: PropTypes.string
};

export default Tabs;
