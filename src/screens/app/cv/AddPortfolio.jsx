import React from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import ProfileIoForm from "../../../components/molecules/ProfileIoForm";
import { useForm } from "react-hook-form";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import LoadingModal from "../../../components/templates/LoadingModal";
import { useRecoilState } from "recoil";
import { IsLoadingModal } from "../../../store/LoadingState";

const AddPortfolio = () => {
  const { control, handleSubmit } = useForm();

  const { fetchFunction } = useFetchData();
  const [isLoadingModal, setIsLoadingModal] = useRecoilState(IsLoadingModal);

  const postPorto = (data) => {
    setIsLoadingModal(true);
    let body = new FormData();
    body.append("thumbnail", data.thumbnail);
    body.append("visibility", data.visibility);
    body.append("title", data.title);
    body.append("subTitle", data.subTitle);
    body.append("link", data.link);
    body.append("desc", data.desc);
    for (let i = 0; i < data.photoGallery.length; i++) {
      body.append(`gallery[${i}]`, data.photoGallery[i]);
    }

    fetchFunction(
      API_ACCESS.createPorto,
      "POST",
      true,
      true,
      body,
      "CV",
      "Portfolio posted!"
    );
    setIsLoadingModal(false);
  };

  return (
    <SecondaryContainer>
      <ProfileIoHeader
        withBack
        title={"Add Project"}
        btnLabel={"Post"}
        onSubmit={handleSubmit(postPorto)}
        backDest={"CV"}
      />
      <ProfileIoForm
        dataInput={[
          {
            name: "thumbnail",
            defaultValue: null,
            placeholder: require("../../../assets/image/camera.png"),
            type: "thumbnail",
          },
          {
            name: "visibility",
            defaultValue: false,
            label: "Visibility",
            type: "switch",
          },
          {
            name: "title",
            defaultValue: "",
            placeholder: "Project Title",
            type: "text",
          },
          {
            name: "subTitle",
            defaultValue: "",
            placeholder: "Project Sub Title",
            type: "text",
          },
          {
            name: "link",
            defaultValue: "",
            placeholder: "Link",
            type: "text",
          },
          {
            name: "desc",
            defaultValue: "",
            placeholder: "Description",
            type: "textarea",
            withBorder: true,
          },
          {
            name: "photoGallery",
            defaultValue: [],
            type: "gallery",
          },
        ]}
        control={control}
        withSubmit={false}
      />
      <LoadingModal visible={isLoadingModal} />
    </SecondaryContainer>
  );
};

export default AddPortfolio;
