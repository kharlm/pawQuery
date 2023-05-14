import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>How to Clean a Dog's Ears</Title>
        <ImageContainer>
          <Image
            src={
              "https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="Dog ear"
          />
          {/* <Image
            src={
              "https://plus.unsplash.com/premium_photo-1677234146706-9593d685317c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZyUyMGNsZWFuaW5nJTIwc3VwcGxpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
            alt="Supplies"
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1632236705239-ac6f4908638d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsZWFuaW5nJTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="Cleaning"
          /> */}
        </ImageContainer>
        <Paragraph>
          If you are a dog owner, you know that ear infections are a common
          problem for dogs. Keeping your dog's ears clean is an important part
          of their overall health and well-being. However, cleaning a dog's ears
          can be tricky and should be done carefully to avoid hurting your furry
          friend. In this article, we will guide you on how to clean a dog's
          ears effectively and safely.
        </Paragraph>
        <SubTitle>1. Gather Supplies</SubTitle>
        <Paragraph>
          Before you start, make sure you have all the necessary supplies. You
          will need cotton balls or gauze pads, a cleaning solution specifically
          made for dogs, and some treats to reward your dog for being
          cooperative during the cleaning process.
        </Paragraph>
        <SubTitle>2. Get Your Dog Ready</SubTitle>
        <Paragraph>
          Choose a comfortable and calm location for your dog and make sure they
          are relaxed before starting. You can also have a second person to help
          you hold your dog still if needed.
        </Paragraph>
        <SubTitle>3. Examine the Ears</SubTitle>
        <Paragraph>
          Start by examining your dog's ears to check if there are any signs of
          redness, discharge, or inflammation. If you notice any of these signs
          or if your dog has been scratching their ears excessively, it's best
          to take them to the vet for a check-up before cleaning their ears.
        </Paragraph>
        <SubTitle>4. Apply the Cleaning Solution</SubTitle>
        <Paragraph>
          Next, apply the cleaning solution to a cotton ball or gauze pad. Be
          careful not to use a cotton swab, as this can push debris further into
          the ear canal and cause injury. Gently lift your dog's ear flap and
          wipe the inside of the ear with the cleaning solution.
        </Paragraph>
        <SubTitle>5. Massage the Base of the Ear</SubTitle>
        <Paragraph>
          After applying the cleaning solution, gently massage the base of the
          ear for about 30 seconds. This helps to distribute the solution
          throughout the ear canal and loosen any debris or wax buildup.
        </Paragraph>
        <SubTitle>6. Wipe the Ear Clean</SubTitle>
        <Paragraph>
          Use a fresh cotton ball or gauze pad to wipe away any remaining
          cleaning solution and debris from the ear. Be gentle and do not insert
          anything into the ear canal.
        </Paragraph>
        <SubTitle>7. Reward Your Dog</SubTitle>
        <Paragraph>
          After cleaning your dog's ears, give them a treat and plenty of praise
          for being a good boy or girl.
        </Paragraph>
        <SubTitle>8. Repeat as Needed</SubTitle>
        <Paragraph>
          You should clean your dog's ears once a week or as recommended by your
          veterinarian. If your dog is prone to ear infections or has a lot of
          hair in their ears, you may need to clean them more frequently.
        </Paragraph>
        <Paragraph>
          In conclusion, cleaning your dog's ears is an essential part of their
          grooming routine. With the right supplies and technique, you can help
          prevent ear infections and keep your furry friend healthy and happy.
          Remember to be gentle and take your time, and always reward your dog
          for their cooperation. If you have any concerns about your dog's ear
          health, consult with your veterinarian.
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
  width: 300px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
`;
export default App;
