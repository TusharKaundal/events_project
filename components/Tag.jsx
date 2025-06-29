"use client";
import { useRouter } from "next/navigation";

const Tag = (props) => {
  const { text } = props;
  const router = useRouter();

  function handleTagClick() {
    router.push(`/events?tag=${text}`);
  }
  return (
    <div
      onClick={handleTagClick}
      className="bg-gradient-to-r from-orange-400 to-teal-600 text-white text-[12px] rounded-2xl w-fit px-3 py-1 text-center font-bold hover:scale-110 hover:cursor-pointer transition-transform duration-200"
    >
      # {text}
    </div>
  );
};

export default Tag;
