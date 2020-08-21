import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Station } from "./../../components/Station/Station";
import { Tag } from "./../../components/Tag/Tag";
import { Label } from "../../components/Label/Label";

export default function Home() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [tags, setTags] = useState();
  const [filtered, setFiltered] = useState();
  const [selectedTag, setSelectedTag] = useState("All");
  const [playing, setPlaying] = useState();

  async function fetchData() {
    try {
      const res = await fetch(
        `https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json`
      );
      const json = await res.json();
      const filters = [];
      console.log(json.data);

      json.data.forEach((element) => {
        filters.push(...element.tags);
      });

      setTags([...new Set(filters)]);
      setData(json.data);
      setFiltered(json.data);
    } catch (e) {
      setError(
        "OOOPS! Stations are not available at the moment, Please, try again little later!"
      );
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  function filterHandle(val) {
    setSelectedTag(val);

    let copyData;
    if(val !== "All"){
         copyData = data.filter((v, i) => v.tags.includes(val));
    } else {
        copyData = [...data]
    }
    
    setFiltered(copyData);
  }

  function streamPlayHandle(val){
    setPlaying(val)
  }
  return (
    <div>
      <Label size={30} color="tealBlue">
        Radio Stations
      </Label>
      <div className="filters">
        {tags && (
          <div>
            <Tag
              onClick={filterHandle}
              className="margL5"
              type={selectedTag === "All" ? "white" : "blue"}
              data-testid="-tag"
            >
              All
            </Tag>
            {tags.map((v, i) => {
              return (
                <Tag
                  onClick={filterHandle}
                  className="margL5"
                  type={selectedTag === v ? "white" : "blue"}
                  data-testid="-tag"
                  key={i}
                >
                  {v}
                </Tag>
              );
            })}
          </div>
        )}
      </div>
      <div className="stationList">
        {!filtered && !error && <div>Loading....</div>}
        {filtered && (
          <div>
            {filtered.map((v, i) => {
              return (
                <Station
                  title={v.name}
                  description={v.description}
                  streamUrl={v.streamUrl}
                  logo={v.imgUrl}
                  key={v.id}
                  tags={v.tags}
                  onClick={streamPlayHandle}
                  playing={v.streamUrl === playing ? true :false}
                />
              );
            })}
          </div>
        )}

        {error && (
          <Label size={36} extraBold color="darkgray">
            {error}
          </Label>
        )}
      </div>
    </div>
  );
}
