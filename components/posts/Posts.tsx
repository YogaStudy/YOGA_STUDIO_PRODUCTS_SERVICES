import React from "react";

import PromptCard from "./PromptCard";
import { post_list } from "@components/constants";
const Posts = () => {
  return (
    <div className="my-5">
      {post_list.map((item, index) => (
        <PromptCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Posts;
