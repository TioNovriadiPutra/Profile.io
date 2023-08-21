import React, { useContext, useEffect } from "react";
import MainContainer from "../../../containers/MainContainer";
import AccountHeader from "../../../components/organisms/headers/AccountHeader";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import { AuthContext } from "../../../utils/context/AuthContext";
import AccountContent from "../../../components/organisms/contents/AccountContent";
import { useIsFocused } from "@react-navigation/native";
import { useRecoilState, useSetRecoilState } from "recoil";
import { dataUser, sliderPage } from "../../../store/AccountSliderState";

const Account = () => {
  const setSlide = useSetRecoilState(sliderPage);
  const [user, setUser] = useRecoilState(dataUser);

  const { data, fetchFunction } = useFetchData();
  const { userId } = useContext(AuthContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setSlide(0);
      fetchFunction(API_ACCESS.showUserData + `/${userId}`, "GET", true);
    }
  }, [isFocused]);

  useEffect(() => {
    if (data !== null) {
      setUser({
        firstName: data[0].profile.first_name,
        lastName: data[0].profile.last_name,
        status: data[0].profile.status,
        displayPic: data[0].profile.display_pic,
      });
    }
  }, [data]);

  if (user === null || data === null) {
    return <LoadingScreen />;
  }

  return (
    <MainContainer>
      <AccountHeader data={data[0]} />
      <AccountContent data={data[0]} />
    </MainContainer>
  );
};

export default Account;
