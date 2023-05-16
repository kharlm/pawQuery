import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>A Step-by-Step Guide: How to Screenshot on a Mac</Title>
        <ImageContainer>
          <Image
            src={
              "https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80"
            }
            alt="Mac Screenshot"
          />
        </ImageContainer>
        <Paragraph>
          Screenshots are incredibly useful for capturing and sharing
          information on your Mac. Whether you want to capture a funny moment
          from a video, save an important document, or share an interesting
          webpage, knowing how to take screenshots on your Mac can come in
          handy. In this article, we will walk you through the various methods
          of taking screenshots on a Mac, providing you with a comprehensive
          guide to capture your screen effortlessly.
        </Paragraph>
        <SubTitle>Taking a Full-Screen Screenshot:</SubTitle>
        <Paragraph>
          The simplest way to capture your entire screen on a Mac is by taking a
          full-screen screenshot. Follow these steps:
          <br />
          a) Press Command + Shift + 3 simultaneously.
          <br />
          b) You will hear a camera shutter sound, indicating that the
          screenshot has been taken.
          <br />
          c) Locate the screenshot as a PNG file on your desktop labeled with
          the current date and time.
        </Paragraph>
        <SubTitle>Capturing a Selected Area:</SubTitle>
        <Paragraph>
          If you only need to capture a specific portion of your screen, you can
          use the "Selected Area" method. Here's how:
          <br />
          a) Press Command + Shift + 4 together. Your cursor will turn into a
          crosshair pointer.
          <br />
          b) Click and drag the crosshair to select the area you want to
          capture.
          <br />
          c) Release the mouse button to take the screenshot.
          <br />
          d) Find the saved screenshot as a PNG file on your desktop.
        </Paragraph>
        <SubTitle>Snapping a Window Screenshot:</SubTitle>
        <Paragraph>
          Sometimes, you may want to capture a specific window rather than the
          entire screen. Follow these steps to take a window screenshot:
          <br />
          a) Press Command + Shift + 4 + Spacebar simultaneously. The cursor
          will change into a camera icon.
          <br />
          b) Move the camera icon over the desired window and click to capture
          the screenshot.
          <br />
          c) Locate the saved screenshot as a PNG file on your desktop.
        </Paragraph>
        <SubTitle>
          Taking a Screenshot of the Touch Bar (for MacBook Pro users):
        </SubTitle>
        <Paragraph>
          MacBook Pro users with a Touch Bar can capture screenshots of this
          handy feature. Here's how:
          <br />
          a) Press Command + Shift + 6 keys together.
          <br />
          b) The screenshot will be saved as a PNG file on your desktop.
        </Paragraph>
        <SubTitle>Utilizing Keyboard Shortcut Modifications:</SubTitle>
        <Paragraph>
          You can customize the keyboard shortcuts for taking screenshots by
          following these steps:
          <br />
          a) Go to "System Preferences" from the Apple menu.
          <br />
          b) Select "Keyboard" and then click on the "Shortcuts" tab.
          <br />
          c) Choose "Screen Shots" from the left-hand menu and modify the
          shortcuts as per your preference. Remember, the methods mentioned
          above work on macOS Mojave (10.14) and later versions. In earlier
          macOS versions, the process may vary slightly.
        </Paragraph>
        <Paragraph>
          Learning how to take screenshots on a Mac is a valuable skill that can
          enhance your productivity and help you share information effectively.
          Whether you need to capture your entire screen, a specific area, or a
          window, using the various methods mentioned in this guide will enable
          you to take screenshots effortlessly. Now, armed with this knowledge,
          you can capture and share important moments, information, and visuals
          with ease.
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
  width: 700px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
`;
export default App;
