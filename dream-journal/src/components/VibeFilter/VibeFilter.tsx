import { ChangeEvent, useContext } from "react";

import { FiltersContext } from "../../providers/FiltersProvider.tsx";

import { Vibe } from "../../types/vibe.ts";

function VibeFilter() {
  const { filters, setFilters } = useContext(FiltersContext);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    const vibe = e.target.value;

    setFilters((old) => {
      if (vibe === "all") {
        return { ...old, vibe: undefined };
      }

      return { ...old, vibe: vibe as Vibe };
    });
  };

  return (
    <select value={filters.vibe} onChange={changeHandler}>
      <option value="all">All</option>
      <option value="good">Good</option>
      <option value="bad">Bad</option>
    </select>
  );
}

export default VibeFilter;
