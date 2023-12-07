import React from "react";
import { Card } from "antd";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";

const { Meta } = Card;


// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
const NewsCard = ({
  image,
  link,
  publishedAt,
  sourceName,
  title,
  publishedTimestamp,
  _id,
  shortLink,
}) => {
  // const articleLink = `/data/${_id}`;
  return (
    <>
      <div className="my-5">
        <Card
          hoverable
          cover={
            <img
              alt="example"
              width={40}
              height={200}
              className="h-40 object-cover"
              src={
                image !== ""
                  ? image
                  : "data:image/png;base64,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"
              }
            />
          }
        >
          <Meta title={title} description={shortLink} />
          {/* <p className="mt-4 text-red-500 tracking-wider antialiased font-mono">
          {sourceName}
        </p> */}
          <Button type="dashed" className="mt-6 bg-blue-300 text-white">
            {" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </Button>
          
          <small className="text-orange-500 mx-3 font-mono shadow-sm p-2">
            {timeAgo.format(
              new Date(publishedAt) 
             
            )}
          </small>
          
        </Card>
      </div>
    </>
  );
};

export default NewsCard;
