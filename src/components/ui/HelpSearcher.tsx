import { useState } from "react";

type HelpSearcherProps = {
  minimal?: boolean;
};

const HelpSearcher = ({ minimal = false }: HelpSearcherProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (minimal) {
    return (
      <div className="flex justify-end items-center">
        <input
          id="search_query"
          type="text"
          placeholder="Search for answers…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-primary/10 p-2 md:p-3 rounded-lg w-48 sm:w-56 md:w-64 text-sm md:text-base"
        />
      </div>
    );
  }
  return (
    <div className={`flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 px-4`}>
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary text-center mb-4 sm:mb-6">How can we help you?</h2>
      <div className="w-full max-w-2xl mt-4 sm:mt-6">
        <input
          type="text"
          placeholder="Search for answers…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 border border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-12 sm:h-14 md:h-15 text-sm sm:text-base md:text-lg font-medium font-inter"
        />
      </div>
    </div>
  );
};

export default HelpSearcher;
