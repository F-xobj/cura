import moment from "moment";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";

import LeftArrow from "../../assets/svg/left.svg";
import RightArrow from "../../assets/svg/right.svg";

import { DataToRenderProps, DateCarouselProps } from "../../types";
import { prepareDataToRender } from "../../utils";

import "./DateCarousel.css";

const DateCarousel: FC<DateCarouselProps> = ({ clinic }) => {
  const dataToRender = prepareDataToRender(clinic);

  const [active, setActive] = useState<number | null>();

  useEffect(() => {
    setActive(
      dataToRender.findIndex((item: DataToRenderProps) => !item.isDisable)
    );
  }, []);

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: false,
    nextArrow: <img src={RightArrow} alt="RightArrow" className="arrow" />,
    prevArrow: <img src={LeftArrow} alt="LeftArrow" className="arrow" />,
  };

  return (
    <>
      {dataToRender.length > 0 ? (
        <>
          <Slider {...settings}>
            {dataToRender?.map((item) => (
              <div
                onClick={() => {
                  if (!item.isDisable) {
                    setActive(item.key);
                  }
                }}
                className={
                  item.isDisable
                    ? "disable"
                    : item.key === active
                    ? "active"
                    : "dateBox"
                }
                key={item.key}
              >
                <h6 className="dayName">{item.date.substring(0, 3)}</h6>
                <h6 className="dayDate">{item.day}</h6>
              </div>
            ))}
          </Slider>
          <div className={"Schedule spaceUp"}>
            <h4>Choose time</h4>
            <div className="timeCardContainer">
              {dataToRender[active || 0]?.availableTimes?.map(
                (item: { time: string; isDisable: boolean }) => {
                  return (
                    <div
                      key={item.time}
                      className={`timeCard ${
                        item.isDisable ? "timeCardDisable" : ""
                      }`}
                    >
                      {item.time}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DateCarousel;
