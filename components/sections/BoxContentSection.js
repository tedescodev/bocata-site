import styled from "styled-components";

import BoxContentPage from "../ui/BoxContentPage";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#e5e5e5")};
  position: relative;
  padding-left: 90px;
  padding-right: 90px;
  padding-top: 2%;
  padding-bottom: 5%;
  width: 100%;
  height: 438px;
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 352px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export default function BoxContentSection({ bgColor, children }) {
  return (
    <Section bgColor={bgColor}>
      <BoxContentPage>{children}</BoxContentPage>
    </Section>
  );
}
