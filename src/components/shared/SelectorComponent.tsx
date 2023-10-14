import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SelectorComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select a Vehicle" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vehicle</SelectLabel>
          <SelectItem value="apple">🚘 BMW</SelectItem>
          <SelectItem value="banana">🛵 Scooter</SelectItem>
          <SelectItem value="blueberry">🚗 Car</SelectItem>
          <SelectItem value="grapes">🚗 Tesla</SelectItem>
          <SelectItem value="pineapple">🚗 Ferari</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
