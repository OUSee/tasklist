import { useState } from "react";
import React from "react";
import { Head } from "../Head/Head";
import { BodySection } from "../BodySection/BodySection";
import { Foot } from "../Foot/Foot";

export const MainBody = () => {
  return (
    <div className="main-body">
      <Head />
      <BodySection />
      <Foot />
    </div>
  );
};
