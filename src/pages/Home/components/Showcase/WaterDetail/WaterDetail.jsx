import React, { useState } from 'react'
import styled from 'styled-components'
import { X } from "lucide-react";
const StyledSpan = styled.span`
  text-align: right;
  flex-grow: 1;
  text-align: right;
  display: flex;
  &::before {
    content: "";
    background: repeating-linear-gradient(
      to right,
      currentColor,
      currentColor 1px,
      transparent 2px,
      transparent 4px
    );
    height: 1px;
    flex-grow: 1;
    display: inline-block;
    margin-top: 1em;
  }
`;


export default function WaterDetail() {
  const info = [
    { name: "Кальций+", size: "40 мг/л" },
    { name: "Магний", size: "20 мг/л" },
    { name: "Натрий", size: "50 мг/л" },
    { name: "Хлор", size: "200 мг" },
    { name: "Кислотность", size: "5 мг" },
    { name: "Минерализация", size: "2,0" },
  ];

  const [isVisible, setIsVisible] = useState(false)
  const toggleElementVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {!isVisible ? (
        <div className="water-detail h-[400px] bg-blue w-[400px] rounded-full absolute z-[-1] top-8 right-[-45%] md:left-[47%] sm:right-0 sm:left-0   sm:z-[999] sm:top-12  flex items-center justify-end sm:w-screen sm:justify-center ">
          <div className="w-[80%]">
            <h2 className="text-3xl text-black pb-4">
              Вода <br /> в капсулах 18,9 Л
            </h2>
            <ol className="w-[250px] md:w-[200px]">
              {info.map((item, index) => (
                <li key={index} className="text-white w-100 flex text-md">
                  <span className="item flex">{item.name}</span>
                  {""}
                  <StyledSpan>{item.size}</StyledSpan>
                </li>
              ))}
            </ol>
            <X
              color="#1CBBEE"
              size={34}
              className="absolute top-[-2%] right-[46%] bg-white rounded-full p-1 sm:block hidden "
              onClick={toggleElementVisibility}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
