import React from "react";
import SecondaryContainer from "../../../containers/SecondaryContainer";
import ShowSkillHeader from "../../../components/organisms/headers/ShowSkillHeader";
import ShowSkillContent from "../../../components/organisms/contents/ShowSkillContent";

const ShowSkill = ({ route }) => {
  const { dataSkill } = route.params;

  return (
    <SecondaryContainer>
      <ShowSkillHeader
        title={dataSkill.subSpeciality.label}
        score={
          dataSkill.level === "Beginner"
            ? dataSkill.score / 100
            : dataSkill.level === "Intermediate"
            ? dataSkill.score / 100 + 1
            : dataSkill.score / 100 + 2
        }
      />
      <ShowSkillContent
        level={dataSkill.level}
        ratingId={dataSkill.id}
        dataTake={dataSkill.takeQuizzes}
      />
    </SecondaryContainer>
  );
};

export default ShowSkill;
