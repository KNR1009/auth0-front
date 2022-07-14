import { useAuth0 } from "@auth0/auth0-react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// recoil
import { useRecoilValue } from "recoil";
import tokenState from "../recoil/atoms/tokenState";

const BlogPage: NextPage = () => {
  const token = useRecoilValue(tokenState);

  console.log(token);

  return <div>ブログ投稿</div>;
};

export default BlogPage;
