import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UseProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo(true);
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo(false);
    history.push("/users");
  };
  return (
    <SContainer>
      <h2>トップページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
