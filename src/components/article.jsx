import React from "react";

import { recentArticle } from "../utils/constant";
import { formatDate } from "../utils/common";

import Placeholder from "../assets/placeholder.png";
import Calendar from "../assets/svg/calendar";

export default function Article({
  passArticleData,
  passArticleId,
  onClickArticle,
}) {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center pb-10">
        Most Viewed Articles
      </h1>

      <div className="flex gap-2 justify-center pb-8">
        {recentArticle?.map(({ articledataId, title }, index) => {
          const activeArticle = passArticleId === articledataId;
          return (
            <div
              key={title}
              className={`cursor-pointer relative grid select-none items-center whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-xs font-bold uppercase  ${
                activeArticle
                  ? "text-white  bg-gray-900"
                  : "text-gray-900 border border-gray-900"
              }`}
            >
              <span onClick={() => onClickArticle(articledataId)}>{title}</span>
            </div>
          );
        })}
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-7">
        {passArticleData?.map((val, index) => (
          <div key={index} className="flex flex-col h-full shadow-md">
            <img
              className="w-full aspect-video rounded-lg"
              src={val.media[0]?.["media-metadata"][1]?.url ?? Placeholder}
              alt={`Image ${index}`}
            />
            <div className="flex flex-col justify-around h-full gap-3 p-3">
              <h3 className="text-xl font-medium">{val.title}</h3>

              <p>{val.abstract}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar />
                  <p className="text-sm pl-2">
                    {formatDate(val.published_date)}
                  </p>
                </div>

                <a
                  href={val.url}
                  className="text-gray-900 border border-gray-900 py-1 px-4 rounded-lg transition ease-in-out delay-100 hover:bg-black hover:text-white duration-300"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
