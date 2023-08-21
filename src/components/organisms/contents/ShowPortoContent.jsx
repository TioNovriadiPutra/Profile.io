import { ScrollView } from "react-native";
import React from "react";
import ProfileIoPortoDesc from "../../molecules/ProfileIoPortoDesc";
import ProfileIoPortoGallery from "../../molecules/ProfileIoPortoGallery";

const ShowPortoContent = ({ data }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProfileIoPortoDesc link={data.link} desc={data.desc} />
      <ProfileIoPortoGallery gallery={data.portfolioGalleries} />
    </ScrollView>
  );
};

export default ShowPortoContent;
