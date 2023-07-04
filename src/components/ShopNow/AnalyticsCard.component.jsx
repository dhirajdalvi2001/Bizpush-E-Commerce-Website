import React from "react";
import "./AnalyticsCard.styles.css";

function AnalyticsCard(props) {
  return (
    <div id="analytics-card">
      <div className="card-top">
        <div className="card-top-left">
          <div className="h5">{props.title}</div>
          <h3 className="h3">{props.content}</h3>
        </div>
        <div className="card-top-right flexIt">
          <img src={props.img} alt="" srcSet="" className="graph" />
        </div>
      </div>
      <div className="card-bottom flexIt">
        {props.count === 2 && (
          <>
            {props.bottom.map((e) => {
              return (
                <div className="para" key={e}>
                  {e}
                </div>
              );
            })}
          </>
        )}
        {props.count === 3 && (
          <>
            {props.bottom.map((e, i) => {
              return (
                <div key={i}>
                  {i === 0 ? (
                    <div className="para live" key={e}>
                      {e}
                    </div>
                  ) : (
                    <div className="para" key={e}>
                      {e}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.count === "li" && (
          <>
            {props.bottom.map((e, i) => {
              return (
                <li className="para flexIt" key={e}>
                  <div className={i === 0 ? "purple" : "orange"}></div>
                  {e}
                </li>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default AnalyticsCard;
