import { ScrollView } from "react-native";
import React from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import ProfileIoForm from "../../../components/molecules/ProfileIoForm";
import LoadingModal from "../../../components/templates/LoadingModal";
import { useForm } from "react-hook-form";
import useFetchData from "../../../hooks/useFetchData";
import { useRecoilState } from "recoil";
import { IsLoadingModal } from "../../../store/LoadingState";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import ProfileIoDeleteButton from "../../../components/atoms/ProfileIoDeleteButton";

const EditPorto = ({ route }) => {
  const { dataPorto, previousPorto } = route.params;

  const [isLoadingModal, setIsLoadingModal] = useRecoilState(IsLoadingModal);

  const { control, handleSubmit } = useForm();
  const { fetchFunction } = useFetchData();

  const editPorto = (data) => {
    setIsLoadingModal(true);
    let body = new FormData();
    body.append("thumbnail", data.thumbnail);
    body.append("visibility", data.visibility);
    body.append("title", data.title);
    body.append("subTitle", data.subTitle);
    body.append("link", data.link);
    body.append("desc", data.desc);
    // for (let i = 0; i < data.photoGallery.length; i++) {
    //   body.append(`gallery[${i}]`, data.photoGallery[i]);
    // }

    fetchFunction(
      API_ACCESS.createPorto + `/${dataPorto.id}`,
      "PUT",
      true,
      true,
      body,
      "CV",
      "Portfolio updated!"
    );
    setIsLoadingModal(false);
  };

  const deletePorto = () => {
    setIsLoadingModal(true);
    fetchFunction(
      API_ACCESS.deletePorto + `/${dataPorto.id}`,
      "DELETE",
      true,
      false,
      null,
      "CV",
      "Portfolio deleted!"
    );
    setIsLoadingModal(false);
  };

  return (
    <SecondaryContainer>
      <ProfileIoHeader
        withBack
        backDest={"ShowPorto"}
        backExtraData={{ data: dataPorto, previous: previousPorto }}
        title={"Edit Project"}
        btnLabel={"Edit"}
        onSubmit={handleSubmit(editPorto)}
      />
      <ScrollView>
        <ProfileIoForm
          dataInput={[
            {
              name: "thumbnail",
              defaultValue: dataPorto.thumbnail,
              placeholder: require("../../../assets/image/camera.png"),
              type: "thumbnail",
            },
            {
              name: "visibility",
              defaultValue: dataPorto.visibility,
              label: "Visibility",
              type: "switch",
            },
            {
              name: "title",
              defaultValue: dataPorto.title,
              placeholder: "Project Title",
              type: "text",
            },
            {
              name: "subTitle",
              defaultValue: dataPorto.sub_title,
              placeholder: "Project Sub Title",
              type: "text",
            },
            {
              name: "link",
              defaultValue: dataPorto.link,
              placeholder: "Link",
              type: "text",
            },
            {
              name: "desc",
              defaultValue: dataPorto.desc,
              placeholder: "Description",
              type: "textarea",
              withBorder: true,
            },
            {
              name: "photoGallery",
              defaultValue: dataPorto.portfolioGalleries,
              type: "gallery",
            },
          ]}
          control={control}
          withSubmit={false}
          scrollEnable={false}
        />

        <ProfileIoDeleteButton onPress={deletePorto} />
      </ScrollView>

      <LoadingModal visible={isLoadingModal} />
    </SecondaryContainer>
  );
};

export default EditPorto;
