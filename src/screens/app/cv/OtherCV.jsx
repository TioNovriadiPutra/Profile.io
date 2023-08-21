import React, { useEffect } from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import CVContent from "../../../components/organisms/contents/CVContent";
import { useRecoilState, useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";
import { sliderPageCV } from "../../../store/CVSliderState";
import { useIsFocused } from "@react-navigation/native";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";

const OtherCV = ({ route }) => {
  const { dataId } = route.params;

  const nav = useRecoilValue(navState);
  const [slider, setSlider] = useRecoilState(sliderPageCV);

  const { data, fetchFunction } = useFetchData();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchFunction(API_ACCESS.showUserCV + `/${dataId}`, "GET", true);
      setSlider(0);
    }
  }, [isFocused]);

  return (
    <SecondaryContainer>
      <ProfileIoHeader
        title={"CV"}
        btnImage={require("../../../assets/image/backWhite.png")}
      />
      {data === null ? <LoadingScreen /> : <CVContent data={data[0]} other />}
    </SecondaryContainer>
  );
};

export default OtherCV;
