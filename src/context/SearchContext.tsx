import React, { createContext, ReactNode, useState } from "react";

interface ContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectRadio: string;
  setSelectRadio: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: ContextProps = {
  searchQuery: "",
  setSearchQuery: () => {},
  selectRadio: "",
  setSelectRadio: () => {},
};

export const SearchRadioContext = createContext(defaultValue);

interface SearchRaioProviderProps {
  children: ReactNode;
}

export const SearchRadioProvider: React.FC<SearchRaioProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectRadio, setSelectRadio] = useState<string>("celsius");

  return (
    <SearchRadioContext.Provider
      value={{ searchQuery, setSearchQuery, selectRadio, setSelectRadio }}
    >
      {children}
    </SearchRadioContext.Provider>
  );
};
