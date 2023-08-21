import React, { useEffect, useState } from "react";
import MainContainer from "../../../containers/MainContainer";
import ProfileIoSearchBar from "../../../components/molecules/ProfileIoSearchBar";
import SearchSuggestion from "../../../components/organisms/contents/SearchSuggestion";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import LoadingScreen from "../../../components/templates/LoadingScreen";

const Search = () => {
  const [filteredData, setFilteredData] = useState([]);

  const { fetchFunction, data } = useFetchData();

  useEffect(() => {
    fetchFunction(API_ACCESS.suggestion, "GET", true);
  }, []);

  if (data === null) {
    return <LoadingScreen />;
  }

  return (
    <MainContainer>
      <ProfileIoSearchBar data={data} setFilter={setFilteredData} />
      <SearchSuggestion dataUser={filteredData} />
    </MainContainer>
  );
};

export default Search;
