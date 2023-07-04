import React from "react";
import "./RightContainer.styles.css";
import graph1 from "./svgs/graph1.svg";
import graph2 from "./svgs/graph2.svg";
import graph3 from "./svgs/graph3.svg";
import dots from "./svgs/threeverticaldots.svg";
import AnalyticsCard from "./AnalyticsCard.component";
import Actions from "./Actions.component";

function RightContainer() {
  let analytics = [
    {
      title: "Total Sales",
      content: "$281.90",
      img: graph1,
      count: 2,
      para: ["6 total orders", "View report"],
    },
    {
      title: "Total Sessions",
      content: "$281.90",
      img: graph2,
      count: 3,
      para: ["Live", "4 visitors", "See Live View"],
    },
    {
      title: "Customer rate",
      content: "5.43%",
      img: graph3,
      count: "li",
      para: ["First Time", "Returning"],
    },
  ];
  let actions = [
    {
      time: "11:32",
      title: "New Category Added",
      content: "<<Mobile Phones>>",
    },
    {
      time: "11:21",
      title: "New Product Added",
      content: "<<Apple iPhone 9>>",
    },
    {
      time: "10:54",
      title: "New Product Added",
      content: "<<Apple iPad Pro 12.9>>",
    },
    {
      time: "09:45",
      title: "New Product Added",
      content: "<<Apple iPad Pro 12.9>>",
    },
    {
      time: "09:45",
      title: "New Category Added",
      content: "<<Smart Watches>>",
    },
    {
      time: "09:45",
      title: "New Category Added",
      content: "<<Smart Watches>>",
    },
  ];
  return (
    <div id="right-container">
      <div className="top-right">
        {analytics.map((e, i) => {
          return (
            <div key={i}>
              <AnalyticsCard
                title={analytics[i].title}
                content={analytics[i].content}
                img={analytics[i].img}
                count={analytics[i].count}
                bottom={analytics[i].para}
              />
            </div>
          );
        })}
      </div>
      <div className="bottom-right">
        <div className="bottom-title">
          <div className="head-text flexIt">
            <h4 className="heading4">Actions</h4>
            <h4 className="heading4 purple">Orders</h4>
          </div>
          <img src={dots} alt="" srcSet="" className="three-dots" />
        </div>
        <div className="bottom-actions">
          {actions.map((e, i) => {
            return (
              <div key={i}>
                <Actions
                  time={actions[i].time}
                  title={actions[i].title}
                  content={actions[i].content}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
