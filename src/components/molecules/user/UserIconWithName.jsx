import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UseProvider";

export const UserIconWithName = (props) => {
  const { src, name, isAdmin } = props;
  const context = useContext(UserContext);
  console.log(context);
  return (
    <Scontainer>
      <SImg height={160} width={160} src={src} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scontainer>
  );
};

const SImg = styled.img`
  border-radius: 50%;
`;

const Scontainer = styled.div`
  text-align: center;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #45014e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
