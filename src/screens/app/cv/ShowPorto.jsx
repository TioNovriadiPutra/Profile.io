import React from "react";
import MainContainer from "../../../containers/MainContainer";
import ShowPortoHeader from "../../../components/organisms/headers/ShowPortoHeader";
import ShowPortoContent from "../../../components/organisms/contents/ShowPortoContent";

const ShowPorto = ({ route }) => {
  const { data, previous } = route.params;

  return (
    <MainContainer>
      <ShowPortoHeader previous={previous} data={data} />
      <ShowPortoContent data={data} />
    </MainContainer>
  );
};

export default ShowPorto;
