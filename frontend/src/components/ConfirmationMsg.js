import React from "react";
import styled from "styled-components";

const ConfirmationMsg = ({ data }) => {
  //console.log(data);
  return (
    <Wrapper>
      <p>Thanks for ordering, {data.givenName}!</p>
      <Conf>
        Your order of {data.order} will be sent to your home in {data.province},
        Canada. Thank you for participating
      </Conf>
    </Wrapper>
  );
};

const Conf = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const Wrapper = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  z-index: 4;
`;

export default ConfirmationMsg;
