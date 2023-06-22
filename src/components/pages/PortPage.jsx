import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import PortTag from "../portfolio/PortTag";
import PortCont from "../portfolio/PortCont";

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title="portfolio" />
      <PortTag />
      <PortCont />
    </Contents>
  );
};

export default PortPage;
