import React from "react";
import styled from "styled-components";

function App() {
  return (
    <>
      <PageContainer>
        <ArticleContainer>
          <Title>
            Intermittent Fasting: Exploring the Benefits and Drawbacks
          </Title>
          <ImageContainer>
            <Image
              src={
                "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJtaXR0ZW50JTIwZmFzdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="Weight loss scrabble word on plate"
            />
          </ImageContainer>
          <Subtitle>Benefits of Intermittent Fasting:</Subtitle>
          <Paragraph>
            Intermittent fasting has gained significant attention in recent
            years as a popular dietary approach for weight loss and overall
            health. It involves alternating periods of fasting and eating within
            a specific time window. While intermittent fasting offers several
            potential benefits, it also comes with certain drawbacks that
            individuals should consider. Let's explore both sides of the
            intermittent fasting coin.
          </Paragraph>
          <List>
            <ListItem>
              Weight Loss: One of the primary reasons people turn to
              intermittent fasting is for its potential to aid weight loss. By
              restricting the eating window, it helps control calorie intake,
              leading to a calorie deficit and subsequent weight loss.
              Additionally, fasting may increase metabolism and promote fat
              burning.
            </ListItem>
            <ListItem>
              Insulin Sensitivity: Intermittent fasting has been shown to
              improve insulin sensitivity. By allowing periods of fasting, it
              helps regulate blood sugar levels, reduce insulin resistance, and
              potentially lower the risk of type 2 diabetes.
            </ListItem>
            <ListItem>
              Cellular Repair and Autophagy: During fasting periods, the body
              initiates autophagy, a process that removes damaged cells and
              promotes cellular repair. This may have anti-aging effects,
              enhance brain function, and protect against certain diseases.
            </ListItem>
            <ListItem>
              Simplified Eating Patterns: For some individuals, following a
              structured eating schedule can simplify their daily routine and
              reduce the time spent on meal planning and preparation. It
              eliminates the need for constant snacking and may promote mindful
              eating habits.
            </ListItem>
          </List>
          <Subtitle>Drawbacks of Intermittent Fasting:</Subtitle>
          <Paragraph>
            While intermittent fasting has its benefits, it also comes with
            certain drawbacks that individuals should be aware of.
          </Paragraph>
          <List>
            <ListItem>
              Hunger and Cravings: Extended periods of fasting can lead to
              increased hunger and cravings, especially in the beginning stages.
              This may make it challenging for some individuals to adhere to the
              fasting window and could potentially lead to overeating during
              eating periods.
            </ListItem>
            <ListItem>
              Nutrient Deficiencies: With a restricted eating window, there is a
              risk of inadequate nutrient intake, particularly if a person does
              not focus on consuming a balanced diet during their eating window.
              It is essential to prioritize nutrient-dense foods and ensure
              sufficient intake of vitamins, minerals, and other essential
              nutrients.
            </ListItem>
            <ListItem>
              Potential Disruption of Social Life: Following intermittent
              fasting may impact social interactions, especially if your fasting
              window conflicts with social gatherings or family meals. It
              requires planning and communication to accommodate social events
              while adhering to the fasting schedule.
            </ListItem>
            <ListItem>
              Unsuitability for Everyone: Intermittent fasting may not be
              suitable for everyone, including individuals with certain medical
              conditions, pregnant or breastfeeding women, and those with a
              history of disordered eating. It is crucial to consult with a
              healthcare professional before embarking on any fasting regimen.
            </ListItem>
            <ListItem>
              Lack of Long-Term Research: While intermittent fasting shows
              promise, there is still a need for more long-term studies to fully
              understand its effects on different populations and determine its
              sustainability and safety over extended periods.
            </ListItem>
          </List>
          <Conclusion>Conclusion:</Conclusion>
          <Paragraph>
            Intermittent fasting can be a beneficial dietary approach for weight
            loss, insulin sensitivity, and cellular repair. However, it may not
            be suitable for everyone, and there are potential drawbacks to
            consider, such as hunger, nutrient deficiencies, and disruptions to
            social life. It is important to approach intermittent fasting with
            awareness, listen to your body, and seek guidance from a healthcare
            professional if needed. As with any dietary change, finding a
            balanced and sustainable approach is key to long-term success.
          </Paragraph>
        </ArticleContainer>
      </PageContainer>
    </>
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

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-bottom: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Conclusion = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
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
`;
export default App;
