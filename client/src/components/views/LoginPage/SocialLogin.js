import React from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
import { KAKAO_KEY } from "../../../Config";

const KaKaoBtn = styled(KaKaoLogin)`
  width: 100%;
  height: 38px;
  color: #783c00;
  background-color: #efefef;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ButtonText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #5c3c00;
`;
const SocialLogin = ({responseKaKao}) => {

  return (
    <>
      <KaKaoBtn
        //styled component 통해 style을 입혀 줄 예정
        jsKey={KAKAO_KEY}
        //카카오에서 할당받은 jsKey를 입력
        buttonText="Kakao 로그인"
        //로그인 버튼의 text를 입력
        onSuccess={responseKaKao}
        //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
        getProfile={true}
      />
    </>
  );
};

export default SocialLogin;
