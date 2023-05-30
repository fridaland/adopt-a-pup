import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: #BF4F74;
  font-family: gill sans, sans-serif;
  font-weight: bold;
`;

export const Content = styled.p`
  font-family: gill sans, sans-serif;
`

export const CTAContent = styled.p`
  font-family: gill sans, sans-serif;
  color: papayawhip;
  font-size: 3.5em;
`

export const Wrapper = styled.div`
  height: 100%;
  background: papayawhip;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const TopSection = styled.section`
  height: 900px;
  background: papayawhip;

`;

export const IntroContainer = styled.div`
  margin: 20px 20% 0px 20%;
  font-family: oswald;
`;

export const MainPhoto = styled.img`
  height: 600px;
`;

export const MiddleSection = styled.section`
  height: 600px;
  background: #203354;
`;

export const MiddleSectionLeftChild = styled.section`
  width: 40%;
  float: left;
  padding: 3% 2%;
`;

export const MiddleSectionRightChild = styled.section`
  width: 40%;
  float: right;
  padding: 3% 2%;
`;

export const VideoElement = styled.video`
  height: 500px;
`

export const BottomSection = styled.section`
  height: 600px;
  background: papayawhip;;
`;
