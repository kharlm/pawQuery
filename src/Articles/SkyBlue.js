import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>The Science Behind the Blue Sky: Unveiling the Mystery</Title>
        <ImageContainer>
          <Image
            src={
              "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            }
            alt="Sky"
          />
        </ImageContainer>
        <Subtitle>Introduction:</Subtitle>
        <Paragraph>
          The sky has captivated human beings since time immemorial. Whether on
          a sunny day or during a starry night, its beauty and expanse have
          inspired countless works of art, literature, and scientific inquiry.
          One of the most intriguing questions about the sky is why it appears
          blue during the day. While the answer may seem simple, the science
          behind the blue sky is a fascinating tale of light, molecules, and our
          atmosphere.
        </Paragraph>
        <Subtitle>The Nature of Sunlight:</Subtitle>
        <Paragraph>
          To understand why the sky appears blue, we must first delve into the
          nature of sunlight. Sunlight consists of a spectrum of colors, ranging
          from red to violet. This spectrum of colors is collectively known as
          white light. When sunlight enters Earth's atmosphere, it encounters
          various substances and particles, leading to a phenomenon known as
          scattering.
        </Paragraph>
        <Subtitle>Rayleigh Scattering:</Subtitle>
        <Paragraph>
          Scattering is the phenomenon in which light waves interact with
          particles or molecules in the atmosphere, causing the light to change
          direction. The Earth's atmosphere is composed of various gases, such
          as nitrogen, oxygen, and trace amounts of other elements. However, it
          is the interaction of sunlight with nitrogen and oxygen molecules that
          primarily causes the blue color of the sky.
        </Paragraph>
        <Subtitle>The Science Behind the Blue Sky:</Subtitle>
        <Paragraph>
          The scattering of light that primarily affects the color of the sky is
          called Rayleigh scattering. Named after the British physicist Lord
          Rayleigh, who first described it in the 19th century, Rayleigh
          scattering occurs when the size of the particles or molecules causing
          the scattering is much smaller than the wavelength of light.
        </Paragraph>
        <Subtitle>Blue Light and Scattering:</Subtitle>
        <Paragraph>
          Sunlight consists of different colors, each with a specific
          wavelength. Blue light has a shorter wavelength compared to red light.
          When sunlight enters the Earth's atmosphere, the blue light is
          scattered more by the molecules in the atmosphere than any other color
          due to its shorter wavelength. This scattering causes the blue light
          to disperse in all directions, giving the sky its characteristic blue
          appearance.
        </Paragraph>
        <Subtitle>Other Colors and Atmospheric Conditions:</Subtitle>
        <Paragraph>
          While blue light is scattered the most, other colors are also affected
          to varying degrees. However, the human eye is more sensitive to blue
          light, which is why the sky appears blue to us. Colors with longer
          wavelengths, such as red and orange, are scattered less and tend to
          pass through the atmosphere, giving rise to breathtaking sunsets and
          sunrises.
        </Paragraph>
        <Subtitle>Appreciating the Scientific Wonders:</Subtitle>
        <Paragraph>
          The appearance of the sky can vary depending on the atmospheric
          conditions. For example, during sunrise or sunset, when the sun is
          near the horizon, the light has to pass through a larger portion of
          the atmosphere. This longer path causes more scattering, resulting in
          vibrant hues of red, orange, and pink.
        </Paragraph>
        <Subtitle>Conclusion:</Subtitle>
        <Paragraph>
          Understanding the science behind the blue sky not only satisfies our
          curiosity but also highlights the intricate beauty and
          interconnectedness of our natural world. So, the next time you gaze at
          the serene blue sky, you can appreciate the scientific wonders that
          make it so captivating.
        </Paragraph>
      </ArticleContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export default App;
