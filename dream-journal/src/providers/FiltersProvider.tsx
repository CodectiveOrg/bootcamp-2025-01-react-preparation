import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

import { Dream } from "../types/dream.ts";
import { Filters } from "../types/filters.ts";
import { doesInclude } from "../utils/string-utils.ts";

import { DreamsContext } from "./DreamsProvider.tsx";

type FiltersContextValue = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  filteredDreams: Dream[];
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {},
  setFilters: () => {},
  filteredDreams: [],
});

type Props = PropsWithChildren;

function FiltersProvider({ children }: Props) {
  const { dreams } = useContext(DreamsContext);

  const [filters, setFilters] = useState<Filters>({});

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream) => {
      if (filters.query && !doesInclude(dream.title, filters.query)) {
        return false;
      }

      if (filters.vibe && dream.vibe !== filters.vibe) {
        return false;
      }

      return true;
    });
  }, [dreams, filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, filteredDreams }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
