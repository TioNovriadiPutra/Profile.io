import { Colors } from "../../themes/Colors";

export const RegisterDataPage = [
  {
    title: "Set up your email and password first",
    background: Colors.Brown,
    dataInput: [
      {
        name: "email",
        defaultValue: "",
        placeholder: "Email",
        type: "text",
      },
      {
        name: "password",
        defaultValue: "",
        placeholder: "Password",
        type: "password",
      },
      {
        name: "password_confirmation",
        defaultValue: "",
        placeholder: "Confirm Password",
        type: "password",
      },
    ],
  },
  {
    title: "Fill your identity, so we can know you well.",
    background: Colors.Blue,
    dataInput: [
      {
        name: "firstName",
        defaultValue: "",
        placeholder: "First Name",
        type: "text",
      },
      {
        name: "lastName",
        defaultValue: "",
        placeholder: "Last Name",
        type: "text",
      },
      {
        name: "gender",
        defaultValue: null,
        placeholder: "Gender",
        dataDropdown: [
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Female",
            value: "female",
          },
        ],
        title: "Gender",
        type: "dropdown",
      },
      {
        name: "dob",
        defaultValue: null,
        placeholder: "Date of Birth",
        type: "date",
      },
    ],
  },
  {
    title: "Let us know what your speciality is.",
    background: Colors.Purple,
    dataInput: [
      {
        name: "speciality",
        defaultValue: null,
        placeholder: "Choose your speciality",
        dataDropdown: null,
        title: "Speciality",
        type: "dropdown",
      },
    ],
  },
];
