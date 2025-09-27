import React from "react";
import { useParams } from "react-router-dom";
import Microsoft from "./Microsoft";
import Google from "./Google";
import Amazon from "./Amazon";
import Visa from "./Visa";
import BNY from "./BNY"
import Cisco from "./Microsoft";
import Deutsche from "./Deutsche";
import Intuit from "./Intuit";
import Jlr from "./Jlr";
import MasterCard from "./MasterCard";
import MediaNet from "./MediaNet";
import Salesforce from "./Salesforce";
import UiPath from "./UiPath";
import UnifyApps from "./UnifyApps";
import WellsFargo from "./WellsFargo";

const NotFound = () => <div>Topic not found!</div>;
const componentMap = {
  Microsoft,
  Google,
  Amazon,
  Visa,
  BNY,
  Cisco,
  Deutsche,
  Intuit,
  Jlr,
  MasterCard,
  MediaNet,
  Salesforce,
  UiPath,
  UnifyApps,
  WellsFargo
};


const TopicPage = () => {
  const { topicName } = useParams();
  const ComponentToRender = componentMap[topicName] || NotFound;
  return <ComponentToRender />;
};

export default TopicPage;