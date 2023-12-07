import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { newsBaseUrl } from "../util/helper";
import { Button, Flex } from "antd";
import Navbar from "../components/navBar/Navbar";
import NewsCard from "../components/NewsCard";
import Marquee from "react-fast-marquee";
import Trend from "./Trend";


function NewsList({ category }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Creating global variable

  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  console.log(NEWS_API_KEY);

  // creating an async function

  const getNews = async () => {
    const options = {
      params: {
        language: "en",
        category: category,
        country: "ng",
        sort: "top",
        page: "1",
        limit: "20",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseUrl}category`, options);
      setData(response.data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // To run this function onces for the first time

  React.useEffect(() => {
    getNews();
  }, []);

  // Loading spinner
  // **************************************************
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="spinner"></div>
        </div>
      );
    }

  // ****************************************************

  return (
    <>
      {/* The news section */}
      <section className="max-w-4xl mx-auto mt-10">
        <Marquee
          style={{
            color: "red",
            fontSize: "1em",
            fontFamily: "monospace",
            backgroundColor: "Window",
            borderRadius: "5px",
          }}
        >
          {data?.map((item) => (
            <p>{item.title}. " " </p>
          ))}
        </Marquee>

        <Trend />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
          {/* {Array.isArray(data) &&
            data.map((item) => <NewsCard key={item._id} {...item} />)} */}

          {data && data.length > 0 ? (
            data.map((item) => <NewsCard key={item._id} {...item} />)
          ) : (
            <p>No new news at the moment. Check back later!</p>
          )}

          {/* {data.map((item) => <NewsCard key={item._id} {...item} />
          )} */}
        </div>
      </section>
    </>
  );
}

export default NewsList;
