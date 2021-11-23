import React, { useState } from "react";
import { nData } from "./navData";
import "./navbar.css";

function Navbar() {
  const [mainData, setMainData] = useState(nData);

  const MouseOver = (id) => {
    const shallowCopy = [...mainData];

    if (id === "1") {
      console.log(id, "id");

      shallowCopy[0].children = [
        {
          name: "Home Child 1",
        },
        {
          name: "Home Child 2",
        },
        {
          name: "Home Child 3",
        },
      ];
      setMainData(shallowCopy);
    }
    if (id === "2") {
      shallowCopy[1].children = [
        {
          name: "About Child 1",
        },
        {
          name: "About Child 2",
        },
      ];
      setMainData(shallowCopy);
    }
    if (id === "3") {
      shallowCopy[2].children = [
        {
          name: "Contact Child 1",
        },
        {
          name: "Contact Child 2",
        },
      ];
      setMainData(shallowCopy);
    }
    if (id === "4") {
      shallowCopy[3].children = [
        {
          name: "Services Child 1",
        },
        {
          name: "Services Child 2",
        },
      ];
      setMainData(shallowCopy);
    }
  };
  const MouseOut = () => () => {
    const shallowCopy = [...mainData];
    shallowCopy[0].children = [];
    shallowCopy[1].children = [];
    shallowCopy[2].children = [];
    shallowCopy[3].children = [];
    setMainData(shallowCopy);
  };

  console.log(mainData, "mainData");

  return (
    <>
      <div className="container">
        <img src={"http://s.cdpn.io/3/kiwi.svg"} alt="logo" />
        <div className="navItems">
          {mainData.map((data) => {
            return (
              <div
                className="navChild"
                onMouseEnter={() => MouseOver(data.id)}
                onMouseLeave={MouseOut()}
              >
                {data.name} &#9660;
                {data.children && data.children.length > 0 && (
                  <div className="subMenu">
                    
                    {data.children.map((indata) => {
                      return <li className="subsubMenu">{indata.name}</li>;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// {/* <div className = "subsubmenu"> */}

export default Navbar;
