import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter deve ser usado dentro de um FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
  };

  const value = {
    selectedCategory,
    setCategory,
    clearFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
