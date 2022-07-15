import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { NextPage } from "next";

import React, { useEffect, useState } from "react";
// recoil
import { useRecoilValue } from "recoil";
import tokenState from "../recoil/atoms/tokenState";

const BlogPage: NextPage = () => {
  const token = useRecoilValue(tokenState);

  const [title, setTitle] = useState<string>("");
  const [caption, setCaption] = useState<string>("");

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/posts");
      console.log(res.data);
    };
    getPosts();
  });
  const onClick = () => {
    const params = {
      title: title,
      caption: caption,
    };
    console.log(token);

    axios
      .post("http://127.0.0.1:3000/api/v1/posts", params, {
        // headers: {
        //   Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjV1Q0FWZ1NOS3ZvTl9BM3h6ZmF1ZSJ9.eyJpc3MiOiJodHRwczovL2Rldi1rNHF3dHJocC5qcC5hdXRoMC5jb20vIiwic3ViIjoiQkNpeVdtaXNGbDdRZjRJaGNVcml6ZEoxMnlPSEIwVWZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXV0aC1hcHAiLCJpYXQiOjE2NTc4MDgyNjQsImV4cCI6MTY1Nzg5NDY2NCwiYXpwIjoiQkNpeVdtaXNGbDdRZjRJaGNVcml6ZEoxMnlPSEIwVWYiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.QoDttO0HArN4L0KwiFh5ERBwMvDVJE6moUFQZEIVdGHRMFMZ9Lvg9Do4KHOqJ5WT_HNKQBQp-z356650Mtr2iIwX-AuT77Nf0IwKDrtr7Sc4miqeHVKVhiHdN28cUbkHnl-Rq4xoYODXaqVL_yfiX-ltJ5xfNXlvZ6Es54VYlmTgQQIJ6Csc4jMau1WfnVqmn9SPyzS8EA921sYglncGuXG2FjtQGAwy8y_WznAi2YO3XxJNGN6qdKPiusSgMWcKHlabMZBpjkXQpg8rDhVRAO2ichdjJnayjY9diDKBaJJla2kw0i4QaIFqqAmVE8aRANdES51G2Ekwbq1jIFiCvA`,
        // },
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const createPosts = () => {
  //   const headers = {
  //     headers: {
  //       Authorization: token,
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const data = {
  //     title: "タイトル3",
  //     caption: "説明3",
  //   };
  //   axios.post("http://localhost:3000/api/v1/posts", data, headers);
  // };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  return (
    <div>
      <label htmlFor="">タイトル</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          onChange(e, setTitle);
        }}
      />
      <br />
      <label htmlFor="">本文</label>
      <input
        type="text"
        value={caption}
        onChange={(e) => {
          onChange(e, setCaption);
        }}
      />
      <br />
      <button onClick={onClick}>新規投稿</button>
    </div>
  );
};

export default BlogPage;
