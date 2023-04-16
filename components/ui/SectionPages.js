import styled from "styled-components";

const Section = styled.section`
  padding-left: ${(props) => (props.pl ? props.pl : "60px")};
  padding-right: ${(props) => (props.pr ? props.pr : "60px")};
  padding-top: ${(props) => (props.pt ? props.pt : "2%")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "5%")};
  min-height: ${(props) => (props.mh ? props.mh : "45vh")};
  width: ${(props) => (props.w ? props.w : "100%")};
  background-position: center !important;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const SectionPages = ({ pl, pr, pt, pb, mh, w, children }) => {
  return (
    <Section pl={pl} pr={pr} pt={pt} pb={pb} mh={mh} w={w}>
      {children}
    </Section>
  );
};

export default SectionPages;
