import React from "react";
import styled from "styled-components";

function App() {
  return (
    <PageContainer>
      <ArticleContainer>
        <Title>What is Cryptocurrency and How It Works</Title>
        <ImageContainer>
          <Image
            src={
              "https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            }
            alt="Weight loss scrabble word on plate"
          />
        </ImageContainer>
        <Subtitle>Introduction:</Subtitle>
        <Paragraph>
          Cryptocurrency has revolutionized the world of finance and digital
          transactions. It is a decentralized digital currency that uses
          cryptography for secure transactions and control the creation of new
          units. In this article, we will explore the concept of cryptocurrency
          and how it works.
        </Paragraph>
        <Subtitle>What is Cryptocurrency:</Subtitle>
        <Paragraph>
          Cryptocurrency is a form of digital or virtual currency that uses
          cryptography for security. Unlike traditional fiat currencies, such as
          the US Dollar or Euro, cryptocurrencies operate on decentralized
          networks based on blockchain technology. The most well-known
          cryptocurrency is Bitcoin, but there are thousands of other
          cryptocurrencies with different features and purposes.
        </Paragraph>
        <Subtitle>How Cryptocurrency Works:</Subtitle>
        <Paragraph>
          Cryptocurrencies rely on blockchain technology, which is a
          decentralized ledger that records all transactions across a network of
          computers. When a transaction occurs, it is added to a block, and each
          block is linked to the previous one, forming a chain of blocks (hence
          the term blockchain). This decentralized and transparent nature of
          blockchain ensures the security and integrity of cryptocurrency
          transactions.
        </Paragraph>
        <Subtitle>Cryptocurrency Mining:</Subtitle>
        <Paragraph>
          Cryptocurrencies like Bitcoin are created through a process called
          mining. Miners use powerful computers to solve complex mathematical
          problems, and when they find a solution, they are rewarded with a
          certain amount of cryptocurrency. This process verifies and validates
          transactions, maintains the blockchain, and adds new blocks to it.
        </Paragraph>
        <Subtitle>Public and Private Keys:</Subtitle>
        <Paragraph>
          Cryptocurrency transactions involve the use of public and private
          keys. A public key is a unique identifier that represents the user's
          cryptocurrency wallet and is visible to everyone. The private key, on
          the other hand, is kept secret and is used to sign and authorize
          transactions. It is essential to keep the private key secure to
          prevent unauthorized access to the cryptocurrency.
        </Paragraph>
        <Subtitle>Decentralization and Security:</Subtitle>
        <Paragraph>
          One of the key advantages of cryptocurrency is its decentralized
          nature. Unlike traditional banking systems, cryptocurrencies are not
          controlled by any central authority, such as a government or a bank.
          This decentralization ensures that transactions can be conducted
          peer-to-peer without intermediaries, reducing fees and the risk of
          censorship or fraud.
        </Paragraph>
        <Subtitle>Use Cases and Applications:</Subtitle>
        <Paragraph>
          Cryptocurrencies have various use cases and applications. They can be
          used as a medium of exchange for goods and services, an investment
          asset, a store of value, or for remittances. Some cryptocurrencies
          have additional functionalities built on top of their base blockchain,
          such as smart contracts, which enable the execution of self-executing
          contracts without intermediaries.
        </Paragraph>
        <Subtitle>Challenges and Future of Cryptocurrency:</Subtitle>
        <Paragraph>
          While cryptocurrency has gained significant popularity, it also faces
          challenges. These include regulatory concerns, price volatility,
          scalability issues, and energy consumption. However, as technology
          evolves and adoption increases, cryptocurrencies are likely to play an
          increasingly important role in our digital economy.
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
    font-size: 28px;
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
  width: 400px;
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
