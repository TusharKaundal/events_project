import React from "react";
import Tag from "@/components/Tag";
async function getTags() {
  try {
    const response = await fetch("https://qevent-backend.labs.crio.do/tags");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching", error);
    return [];
  }
}

const TagPage = async () => {
  const tags = await getTags();
  return (
    <div className="flex flex-wrap justify-center gap-3 mx-[10%] mt-[10%] h-fit">
      {tags?.map((tag) => (
        <Tag key={tag.id} text={tag.name} />
      ))}
    </div>
  );
};

export default TagPage;
