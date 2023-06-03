import React from 'react';
import { 
  BottomSection,
  CTAContent,
  Content,
  IntroContainer,
  MiddleSection,
  MiddleSectionLeftChild,
  MiddleSectionRightChild,
  Title,
  TopSection,
  VideoElement,
  Wrapper 
} from './components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import eltonMain from './img/eltonMain.png';
import elton1 from './img/elton1.jpg';
import elton2 from './img/elton2.jpg';
import elton3 from './img/elton3.jpg';
import eltonVid from './img/eltonVid.mp4';
import eltonVid2 from './img/eltonVid2.mp4';

function App() {
  const slideImages = [
    {
      url: eltonMain,
    },
    {
      url: elton1,
    },
    {
      url: elton2,
    },
    {
      url: elton3,
    },

  ];

  const photoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    backgroundPosition: 'center',
  }

  return (
    <Wrapper>
    <TopSection>
      <Title>
      <span role="img" aria-label="title-w-img">🐾 Adopt Elton 🐾 </span>
      </Title>
      <Slide>
        {slideImages.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...photoStyle, 'backgroundImage': `url(${slideImage.url})` }} >
            </div> 
          </div> 
        ))} 
        </Slide>
        <IntroContainer>
          <Content>Hello! My name is Elton Dog :) </Content>
          <Content>
            I'm a Chow & german shepherd mix in need of a new loving home.
            I'm a 1-2 years old, male (intact), incredibly sweet, and snuggly.
          </Content>
          <Content>
            I'm even house-trained and know some basic commands!
            I could easily be a support dog, or just your best friend.
          </Content>
          <Content>
            My foster family took me in after I was lost wondering around on the streets, scared and in need of TLC.
            A small rehoming fee to ensure I go to a good family.
          <Content>
            I'd be a better fit in a house without cats.
          </Content>
          </Content>
          <div>
            <a style={{color: '#BF4F74'}} href="tel:210-393-0542">CALL OR TEXT NOW: 210-393-0542</a>
          </div>
          <div>
            <a style={{color: '#BF4F74'}} href="mailto:fridacasas.fc@gmail.com">CLICK HERE TO EMAIL</a>
          </div>
        </IntroContainer>
    </TopSection>
    <MiddleSection>
      <MiddleSectionLeftChild>
        <VideoElement controls="controls" autoplay>
          <source src={eltonVid} type="video/mp4" />
        </VideoElement>
      </MiddleSectionLeftChild>
      <MiddleSectionRightChild>
          <CTAContent>
            Check out this video of me being a cute cuddly boy.
          </CTAContent>
      </MiddleSectionRightChild>          
    </MiddleSection>
    <BottomSection>
      <MiddleSectionLeftChild>
        <CTAContent style={{ color: "#203354"}}>
          Check out this video of me being awesome at fetch.
        </CTAContent>
      </MiddleSectionLeftChild>
      
      <MiddleSectionRightChild>
        <VideoElement controls="controls" autoplay>
          <source src={eltonVid2} type="video/mp4" />
        </VideoElement>
      </MiddleSectionRightChild>  
    </BottomSection>
    <MiddleSection>
      <MiddleSectionLeftChild>
        <CTAContent>
          <a style={{color: 'white'}} href="tel:210-393-0542">CALL NOW: 210-393-0542</a>
        </CTAContent>
      </MiddleSectionLeftChild>
    </MiddleSection>
    </Wrapper>
  );
}

export default App;
