import React from "react";
import type { ITopAPI } from "../types";

interface Props {
  data: ITopAPI[];
}
const List: React.FC<Props> = ({ data }) => {
  const showInfo = (item: ITopAPI) => {
    console.log(item);
  };
  return (
    <div className="mt-5 flex items-center justify-between flex-wrap">
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <div
              className="w-[calc(50%-16px)] h-[250px] mx-2 my-2 bg-slate-500"
              key={item.id}
              onClick={() => showInfo(item)}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-[100%] h-[100%] object-contain"
              />
            </div>
          );
        })}
    </div>
  );
};

export default List;
