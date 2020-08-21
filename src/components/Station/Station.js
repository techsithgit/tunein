import React from "react";
import "./Station.scss";
import "./../../style/scss/main.scss";
import { Label } from "./../Label/Label";
import { Tag } from "./../Tag/Tag";

const playIcon = require("./../../style/imgs/playButton.png");

export function Station({
  title,
  description,
  logo,
  tags,
  onClick,
  streamUrl,
  playing,
  ...props
}) {
  return (
    <div className="station">
      <img
        src={logo}
        alt="station"
        height="50"
        width="50"
        onClick={() => onClick(streamUrl)}
        className="stationImage pointer"
        style={{ opacity: `${playing ? "0.5" : "1"}` }}
        data-testid={props["data-testid"] + "-station-image" ?? null}
      />
      {playing && (
        <img
          src={playIcon}
          alt="play"
          height="40"
          width="40"
          style={{ position: "absolute", top: "15px", left: "15px" }}
          className="playIcon"
          data-testid={props["data-testid"] + "-play-Icon" ?? null}
        />
      )}
      <div className="meta">
        <Label className="title" size={20} extraBold color="darkgray">
          {title}
        </Label>
        {playing && (
          <Label className="description" size={16} color="darkgray">
            {description}
          </Label>
        )}
        <div>
          {tags && (
            <div>
              {tags.map((v, i) => {
                return (
                  <Tag
                    className="margL5"
                    type="white"
                    data-testid="-tag"
                    ket={i}
                  >
                    {v}
                  </Tag>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
