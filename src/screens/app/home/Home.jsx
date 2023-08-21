import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "../../../store/NavState";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../../themes/Colors";
import useFetchData from "../../../hooks/useFetchData";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import FeedsContent from "../../../components/organisms/contents/FeedsContent";
import { useIsFocused } from "@react-navigation/native";
import { refreshState } from "../../../store/RefreshState";

const Home = ({ navigation }) => {
  const setNav = useSetRecoilState(navState);
  const refresh = useRecoilValue(refreshState);

  const { data, fetchFunction } = useFetchData();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setNav(navigation);
      fetchFunction(API_ACCESS.allFeeds, "GET", true);
    }
  }, [isFocused, refresh]);

  return (
    <SecondaryContainer>
      <StatusBar backgroundColor={Colors.White} />
      <ProfileIoHeader
        home
        btnImage={require("../../../assets/image/plus.png")}
        onSubmit={() => navigation.navigate("CreateFeeds")}
        withSearch
      />
      {data === null ? <LoadingScreen /> : <FeedsContent data={data} />}
    </SecondaryContainer>
  );
};

export default Home;
