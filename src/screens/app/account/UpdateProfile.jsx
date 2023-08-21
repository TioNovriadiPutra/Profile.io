import React, { useContext } from "react";
import MainContainer from "../../../containers/MainContainer";
import ProfileIoHeader from "../../../components/organisms/headers/ProfileIoHeader";
import ProfileIoForm from "../../../components/molecules/ProfileIoForm";
import { useForm } from "react-hook-form";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import { AuthContext } from "../../../utils/context/AuthContext";

const UpdateProfile = ({ route }) => {
  const { dataProfile } = route.params;

  const { control, handleSubmit } = useForm();
  const { fetchFunction } = useFetchData();
  const { userId } = useContext(AuthContext);

  const updateProfile = async (data) => {
    if (data.displayPic === dataProfile.profile.display_pic) {
      const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        status: data.status,
      };

      fetchFunction(
        API_ACCESS.updateUserData + `/${userId}`,
        "PUT",
        true,
        false,
        body,
        "Account",
        "Account updated!"
      );
    } else {
      let body = new FormData();
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("status", data.status);
      body.append("displayPic", data.displayPic);

      fetchFunction(
        API_ACCESS.updateUserData + `/${userId}`,
        "PUT",
        true,
        true,
        body,
        "Account",
        "Account updated!"
      );
    }
  };

  return (
    <MainContainer>
      <ProfileIoHeader
        withBack
        title={"Edit Profile"}
        btnLabel={"Edit"}
        onSubmit={handleSubmit(updateProfile)}
        backDest={"Account"}
      />

      <ProfileIoForm
        dataInput={[
          {
            name: "displayPic",
            defaultValue: dataProfile.profile.display_pic,
            placeholder: require("../../../assets/image/profilePic.png"),
            type: "display",
          },
          {
            name: "firstName",
            defaultValue: dataProfile.profile.first_name,
            placeholder: "First Name",
            type: "text",
          },
          {
            name: "lastName",
            defaultValue: dataProfile.profile.last_name,
            placeholder: "Last Name",
            type: "text",
          },
          {
            name: "status",
            defaultValue: dataProfile.profile.status,
            placeholder: "Status",
            type: "text",
          },
        ]}
        control={control}
        withSubmit={false}
      />
    </MainContainer>
  );
};

export default UpdateProfile;
