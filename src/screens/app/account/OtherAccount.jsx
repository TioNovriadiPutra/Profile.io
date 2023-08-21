import React, { useContext, useEffect, useState } from "react";
import MainContainer from "../../../containers/MainContainer";
import AccountHeader from "../../../components/organisms/headers/AccountHeader";
import AccountContent from "../../../components/organisms/contents/AccountContent";
import useFetchData from "../../../hooks/useFetchData";
import { useIsFocused } from "@react-navigation/native";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { dataUser, sliderPage } from "../../../store/AccountSliderState";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import { AuthContext } from "../../../utils/context/AuthContext";
import { refreshState } from "../../../store/RefreshState";
import OtherAccountFooter from "../../../components/organisms/footers/OtherAccountFooter";

const OtherAccount = ({ route }) => {
  const { dataId } = route.params;

  const refresh = useRecoilValue(refreshState);
  const setSlide = useSetRecoilState(sliderPage);
  const [user, setUser] = useRecoilState(dataUser);

  const { data, fetchFunction } = useFetchData();
  const { userId } = useContext(AuthContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setSlide(0);
      fetchFunction(API_ACCESS.showOtherUserData + `/${dataId}`, "GET", true);
    }
  }, [isFocused, refresh]);

  useEffect(() => {
    if (data !== null) {
      setUser({
        firstName: data.dataUser[0].profile.first_name,
        lastName: data.dataUser[0].profile.last_name,
        status: data.dataUser[0].profile.status,
        displayPic: data.dataUser[0].profile.display_pic,
      });
    }
  }, [data]);

  if (user === null || data === null) {
    return <LoadingScreen />;
  }

  return (
    <MainContainer>
      <AccountHeader
        data={data.dataUser[0]}
        other={true}
        followStatus={data.myFollowing.length > 0 ? true : false}
      />
      <AccountContent data={data.dataUser[0]} other />
      <OtherAccountFooter dataId={dataId} />
    </MainContainer>
  );
};

export default OtherAccount;
