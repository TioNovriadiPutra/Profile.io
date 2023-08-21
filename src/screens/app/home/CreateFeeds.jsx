import { StyleSheet } from "react-native";
import React from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import ProfileIoForm from "../../../components/molecules/ProfileIoForm";
import { useForm } from "react-hook-form";
import CreateFeedsFooter from "../../../components/organisms/footers/CreateFeedsFooter";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import { useRecoilState } from "recoil";
import { IsLoadingModal } from "../../../store/LoadingState";
import LoadingModal from "../../../components/templates/LoadingModal";

const CreateFeeds = () => {
  const { control, handleSubmit } = useForm();
  const { fetchFunction } = useFetchData();
  const [loadingModal, setLoadingModal] = useRecoilState(IsLoadingModal);

  const createFeeds = async (data) => {
    setLoadingModal(true);
    if (data.assetUrl === null) {
      await fetchFunction(
        API_ACCESS.storeFeeds,
        "POST",
        true,
        false,
        data,
        "Home",
        "Feed Posted!"
      );
    } else {
      let body = new FormData();
      body.append("desc", data.desc);
      body.append("assetUrl", data.assetUrl);

      await fetchFunction(
        API_ACCESS.storeFeeds,
        "POST",
        true,
        true,
        body,
        "Home",
        "Feed Posted!"
      );
    }
    setLoadingModal(false);
  };

  return (
    <SecondaryContainer>
      <ProfileIoHeader
        withBack
        title={"Create Feeds"}
        btnLabel={"Post"}
        onSubmit={handleSubmit(createFeeds)}
        backDest={"Home"}
      />

      <ProfileIoForm
        dataInput={[
          {
            name: "desc",
            defaultValue: "",
            placeholder: "What's on your mind?",
            type: "textarea",
          },
        ]}
        control={control}
        withSubmit={false}
      />

      <CreateFeedsFooter control={control} />

      <LoadingModal visible={loadingModal} />
    </SecondaryContainer>
  );
};

export default CreateFeeds;
