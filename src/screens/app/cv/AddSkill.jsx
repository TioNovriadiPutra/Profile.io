import React, { useEffect, useState } from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import useFetchData from "../../../hooks/useFetchData";
import ProfileIoForm from "../../../components/molecules/ProfileIoForm";
import { useForm } from "react-hook-form";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import { useIsFocused } from "@react-navigation/native";
import LoadingModal from "../../../components/templates/LoadingModal";
import { useRecoilState } from "recoil";
import { IsLoadingModal } from "../../../store/LoadingState";

const AddSkill = () => {
  const [isLoadingModal, setIsLoadingModal] = useRecoilState(IsLoadingModal);

  const { data, fetchFunction } = useFetchData();
  const { control, handleSubmit, getValues } = useForm();

  const [subSpec, setSubSpec] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [refreshTwo, setRefreshTwo] = useState(false);

  const isFocused = useIsFocused();

  const addSkill = (data) => {
    setIsLoadingModal(true);
    const body = {
      specialityId: data.skill === null ? null : data.skill.id,
      subSpecialityId: data.subSkill === null ? null : data.subSkill.id,
    };
    fetchFunction(
      API_ACCESS.addSkill,
      "POST",
      true,
      false,
      body,
      "CV",
      "New skill added!"
    );
    setIsLoadingModal(false);
    setRefreshTwo(!refreshTwo);
  };

  useEffect(() => {
    if (isFocused) {
      fetchFunction(API_ACCESS.allSpeciality, "GET");
    }
  }, [isFocused, refreshTwo]);

  useEffect(() => {
    if (Object.keys(getValues()).length === 0 || getValues().skill === null) {
      setSubSpec([]);
    } else {
      setSubSpec(getValues().skill.subSpecialities);
    }
  }, [refresh]);

  if (data === null) {
    return <LoadingScreen />;
  }

  return (
    <SecondaryContainer>
      <ProfileIoHeader
        withBack
        title={"Add Skills"}
        btnLabel={"Add"}
        onSubmit={handleSubmit(addSkill)}
        backDest={"CV"}
      />
      <ProfileIoForm
        dataInput={[
          {
            name: "skill",
            defaultValue: null,
            placeholder: "Choose Skill",
            dataDropdown: data,
            title: "Speciality",
            type: "dropdown",
            customPress: () => setRefresh(!refresh),
          },
          {
            name: "subSkill",
            defaultValue: null,
            placeholder: "Choose Sub Skill",
            dataDropdown: subSpec,
            title: "Sub Speciality",
            type: "dropdown",
          },
        ]}
        withSubmit={false}
        control={control}
      />
      <LoadingModal visible={isLoadingModal} />
    </SecondaryContainer>
  );
};

export default AddSkill;
