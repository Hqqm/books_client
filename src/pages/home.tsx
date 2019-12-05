import * as React from "react";

import { Header } from "@features/shared/header";
import { MainTemplate } from "@ui/templates";

export const HomePage = () => (
  <MainTemplate header={<Header />} main={<div>home page</div>} />
);
