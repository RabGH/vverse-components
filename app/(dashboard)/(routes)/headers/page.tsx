import Heading from "@/components/nav/heading";
import { Heading1 } from "lucide-react";
import React from "react";

const HeaderPage = () => {
  return (
    <div>
      <Heading
        title={"Headers"}
        description={"Headings for different pages."}
        icon={Heading1}
      />
      <div></div>
    </div>
  );
};

export default HeaderPage;
