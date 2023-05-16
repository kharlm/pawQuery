import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>
          Understanding the Five Love Languages: A Path to Deeper Connections
        </Title>
        <ImageContainer>
          <Image
            src={
              "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGxhbmd1YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            }
            alt="Hand heart"
          />
        </ImageContainer>
        <Paragraph>
          In the realm of relationships, understanding how to express and
          receive love is paramount. Just as languages vary across cultures, so
          too do the ways in which individuals prefer to give and receive love.
          Developed by Dr. Gary Chapman, the concept of the five love languages
          offers valuable insights into our unique emotional needs and
          communication styles. In this article, we'll explore the five love
          languages and delve into how they can enhance our relationships.
        </Paragraph>
        <SubTitle>1. Words of Affirmation</SubTitle>
        <Paragraph>
          For individuals whose primary love language is words of affirmation,
          verbal expressions of love and appreciation carry great significance.
          Simple yet powerful words like "I love you," "You're amazing," or "I
          appreciate you" can deeply resonate with them. Compliments,
          encouragement, and kind words hold the key to their hearts,
          reinforcing their sense of value and building emotional connections.
        </Paragraph>
        <SubTitle>2. Acts of Service</SubTitle>
        <Paragraph>
          Some people feel most loved when their partner performs acts of
          service for them. These acts can be as simple as making their favorite
          meal, doing household chores, or running errands on their behalf.
          Actions speak louder than words for those who prioritize acts of
          service as their love language, as these gestures demonstrate care,
          thoughtfulness, and a willingness to support and help them.
        </Paragraph>
        <SubTitle>3. Receiving Gifts</SubTitle>
        <Paragraph>
          Gifts are tangible symbols of love for individuals whose primary love
          language is receiving gifts. It's not necessarily about materialism or
          extravagance, but rather the thought and effort put into selecting a
          meaningful gift. The gesture itself, regardless of the monetary value,
          demonstrates attention, consideration, and a deep understanding of
          their desires and preferences.
        </Paragraph>
        <SubTitle>4. Quality Time</SubTitle>
        <Paragraph>
          In our busy lives, undivided attention is a precious gift. Those who
          prioritize quality time as their love language yearn for meaningful
          and uninterrupted moments together. Engaging in shared activities,
          having deep conversations, or simply enjoying each other's presence
          without distractions are powerful ways to connect with them. Investing
          time and energy into building shared experiences is crucial for
          nurturing their love tank.
        </Paragraph>
        <SubTitle>5. Physical Touch</SubTitle>
        <Paragraph>
          Physical touch plays a significant role in expressing love for
          individuals whose primary love language is physical touch. Holding
          hands, hugging, kissing, cuddling, or even a gentle touch on the arm
          can convey love, comfort, and intimacy. These individuals often crave
          physical closeness and thrive on the power of touch to feel deeply
          connected and cherished.
        </Paragraph>

        <Paragraph>
          Recognizing and understanding the five love languages can
          revolutionize our relationships. By identifying our own primary love
          language and learning the love language of our partner, we can bridge
          emotional gaps, enhance communication, and foster deeper connections.
          The key lies in expressing love in a way that resonates with our loved
          ones, acknowledging that we all have unique needs and preferences when
          it comes to feeling cherished and valued. So, let's embark on this
          journey of discovery, speaking the language of love fluently and
          nurturing our relationships with greater understanding, compassion,
          and affection. By doing so, we can create harmonious and fulfilling
          connections that stand the test of time.
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
