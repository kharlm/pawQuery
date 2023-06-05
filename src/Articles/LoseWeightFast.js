import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>How to Lose Weight Fast</Title>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80"
            alt="Weight loss scrabble word on plate"
          />
        </ImageContainer>
        <Paragraph>
          Losing weight quickly is a goal that many people have, especially when
          they want to get in shape for a special occasion or improve their
          overall health. While it's understandable to desire fast results, it's
          crucial to approach weight loss with a healthy and sustainable
          mindset. Rapid weight loss methods can be tempting, but they often
          lead to short-term outcomes and may have adverse effects on your
          health. This article will provide you with practical tips on how to
          lose weight efficiently while maintaining your well-being.
        </Paragraph>
        <SubTitle>Set realistic goals:</SubTitle>
        <Paragraph>
          Before embarking on a weight loss journey, it's important to establish
          realistic goals. Aim to lose weight gradually, focusing on one to two
          pounds per week. Setting unattainable goals can lead to disappointment
          and may even harm your health in the process. Remember, sustainable
          weight loss is about making lasting lifestyle changes rather than
          seeking instant transformations.
        </Paragraph>
        <SubTitle>Create a balanced diet plan:</SubTitle>
        <Paragraph>
          The foundation of any successful weight loss plan is a balanced and
          nutritious diet. Focus on consuming whole foods such as fruits,
          vegetables, lean proteins, whole grains, and healthy fats. Opt for
          portion control, and avoid processed foods, sugary snacks, and
          beverages high in calories. Consulting a registered dietitian can be
          beneficial in creating a personalized meal plan that suits your needs
          and preferences.
        </Paragraph>
        <SubTitle>Prioritize hydration:</SubTitle>
        <Paragraph>
          Drinking an adequate amount of water is crucial for overall health and
          can aid in weight loss. Water helps to boost metabolism, flush out
          toxins, and reduce hunger pangs. Replace sugary drinks with water,
          herbal teas, or infused water for a refreshing and low-calorie
          alternative.
        </Paragraph>
        <SubTitle>Increase physical activity:</SubTitle>
        <Paragraph>
          Incorporating regular exercise into your routine is essential for
          weight loss and overall well-being. Engage in activities that you
          enjoy, such as brisk walking, jogging, swimming, cycling, or dancing.
          Aim for at least 150 minutes of moderate-intensity aerobic exercise
          per week, combined with strength training exercises to build muscle
          and increase metabolism.
        </Paragraph>
        <SubTitle>Practice mindful eating:</SubTitle>
        <Paragraph>
          Slowing down and paying attention to your eating habits can
          significantly impact your weight loss journey. Engage in mindful
          eating by savoring each bite, eating slowly, and listening to your
          body's hunger and fullness cues. Avoid distractions like television or
          smartphones during meals, as they can lead to overeating.
        </Paragraph>
        <SubTitle>Get enough sleep:</SubTitle>
        <Paragraph>
          Adequate sleep is often overlooked but plays a vital role in
          maintaining a healthy weight. Lack of sleep disrupts hormones
          responsible for appetite regulation, leading to increased cravings and
          a higher likelihood of overeating. Aim for 7-9 hours of quality sleep
          each night to support your weight loss efforts.
        </Paragraph>
        <SubTitle>Manage stress:</SubTitle>
        <Paragraph>
          Chronic stress can contribute to weight gain and hinder weight loss
          progress. Find healthy ways to manage stress, such as practicing yoga,
          meditation, deep breathing exercises, or engaging in hobbies that
          bring you joy. Prioritizing self-care and relaxation techniques can
          help reduce emotional eating and support your weight loss goals.
        </Paragraph>
        <SubTitle>Seek support:</SubTitle>
        <Paragraph>
          Embarking on a weight loss journey can be challenging, and having a
          support system can make a significant difference. Share your goals
          with friends, family, or join a support group where you can find
          motivation, accountability, and encouragement throughout your journey.
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

const SubTitle = styled.h2`
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
