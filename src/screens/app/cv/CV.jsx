import React, { useContext, useEffect } from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import CVContent from "../../../components/organisms/contents/CVContent";
import { useRecoilState, useRecoilValue } from "recoil";
import { sliderPageCV } from "../../../store/CVSliderState";
import { navState } from "../../../store/NavState";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import { AuthContext } from "../../../utils/context/AuthContext";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import { useIsFocused } from "@react-navigation/native";

const CV = () => {
  const nav = useRecoilValue(navState);
  const [slider, setSlider] = useRecoilState(sliderPageCV);

  const { userId } = useContext(AuthContext);
  const { data, fetchFunction } = useFetchData();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchFunction(API_ACCESS.showUserCV + `/${userId}`, "GET", true);
      setSlider(0);
    }
  }, [isFocused]);

  return (
    <SecondaryContainer>
      <ProfileIoHeader
        title={"CV"}
        btnImage={require("../../../assets/image/plus.png")}
        onSubmit={() => {
          if (slider === 1) {
            nav.navigate("AddPortfolio");
          } else {
            nav.navigate("AddSkill");
          }
        }}
      />
      {data === null ? <LoadingScreen /> : <CVContent data={data[0]} />}
    </SecondaryContainer>
  );
};

export default CV;
