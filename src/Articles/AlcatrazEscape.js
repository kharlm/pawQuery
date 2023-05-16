import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>Who Escaped from Alcatraz</Title>
        <ImageContainer>
          <Image
            src={
              "https://images.unsplash.com/photo-1544535654-6ecd175ea2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt="Alcatraz Escape"
          />
        </ImageContainer>
        <Paragraph>
          Alcatraz Island, situated in the chilly waters of the San Francisco
          Bay, has long held a reputation as one of the most impenetrable
          prisons in the world. Its isolated location and formidable security
          measures made escape seem nearly impossible. However, on the night of
          June 11, 1962, three inmates embarked on a daring and enigmatic escape
          that would captivate the world and leave behind a trail of unanswered
          questions. This article delves into the infamous Alcatraz escape and
          explores the mysteries that surround it.
        </Paragraph>
        <SubTitle>The Escape Plan:</SubTitle>
        <Paragraph>
          The masterminds behind the audacious escape were Frank Morris and
          brothers John and Clarence Anglin. Over several months, they
          meticulously crafted an intricate plan to break free from their prison
          cells. Using common tools such as spoons and makeshift drills, they
          slowly chipped away at the concrete walls, concealed their activities
          with cardboard and paint, and fashioned lifelike dummy heads to
          deceive the guards during nightly checks.
        </Paragraph>
        <SubTitle>The Escape:</SubTitle>
        <Paragraph>
          On that fateful night, after months of meticulous preparation, the
          trio finally put their plan into action. Slipping through the holes
          they had created in their cells, they climbed through a ventilation
          shaft and emerged onto the prison roof. From there, they descended to
          the ground and made their way to the shoreline, where they inflated a
          makeshift raft constructed from raincoats. With their raft and
          rudimentary paddles, they set off into the treacherous waters of the
          bay, disappearing into the night.
        </Paragraph>
        <SubTitle>The Investigation:</SubTitle>
        <Paragraph>
          The discovery of the empty cells the next morning sparked an intense
          manhunt and a thorough investigation. The authorities found evidence
          suggesting that the escapees had managed to reach the mainland,
          including a raft paddle and personal belongings. However, despite
          extensive searches and investigations, no conclusive proof of their
          fate or whereabouts was ever found. The case remains one of the
          greatest unsolved mysteries in the history of American prisons.
        </Paragraph>
        <SubTitle>Theories and Speculations:</SubTitle>
        <Paragraph>
          Over the years, numerous theories and speculations have emerged
          regarding the fate of the escapees. Some believe they successfully
          reached the mainland and started new lives under assumed identities,
          while others speculate that they perished in the treacherous waters of
          the bay. The lack of definitive evidence has fueled countless debates
          and captured the imagination of true crime enthusiasts and conspiracy
          theorists alike.
        </Paragraph>
        <SubTitle>The Legend Lives On:</SubTitle>
        <Paragraph>
          The Alcatraz escape continues to capture public fascination,
          immortalized in books, documentaries, and even movies. The daring
          nature of the escape, combined with the mystery surrounding its
          outcome, has turned it into a legendary tale of defiance and audacity.
          Alcatraz may have closed its prison doors in 1963, but the story of
          the escapees lives on, forever etched in the annals of history.
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
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
`;
export default App;
