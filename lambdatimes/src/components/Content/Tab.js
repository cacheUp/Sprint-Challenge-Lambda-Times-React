import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let selectedClass =
    props.selectedTab === props.tab ? "tab active-lab" : "tab";

  return (
    <div
      className={selectedClass}
      onClick={() => {
        props.changeSelected(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.PropTypes = {
  tab: PropTypes.string
};

export default Tab;
