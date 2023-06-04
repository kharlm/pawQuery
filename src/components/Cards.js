import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these articles! More to come</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGxhbmd1YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              text="What are the 5 Love Languages"
              label=""
              path="/lovelanguage"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80"
              text="How to Screenshot on a Mac"
              label=""
              path="/screenshotmac"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1572525557337-8d520106d8fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              text="Who Escaped from Alcatraz"
              label=""
              path="/alcatrazescape"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
