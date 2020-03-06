import * as React from "react";
import { List } from "../components/List.js";

export const SubheaderList = ({ dimensions, italicsInput }) =>
  dimensions.map(item => (
    <List
      data-testid="test"
      message="Select zero to N "
      columns={item}
      styling={italicsInput}
      key={item}
    />
  ));
