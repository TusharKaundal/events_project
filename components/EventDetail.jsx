import React from "react";
import Tag from "./Tag";

const EventDetail = ({ eventData }) => {
  return (
    <div className="flex flex-col gap-5 px-4 md:px-12 my-3">
      <div className="w-full">
        <img
          src={eventData.image}
          alt="Event"
          width={700}
          height={400}
          className="rounded-lg object-cover md:mx-auto"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {eventData.name}
        </h1>
        <h2 className="text-2xl font-bold max-sm:text-xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {eventData.location}
        </h2>
        <h2 className="text-2xl font-bold max-sm:text-xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {eventData.artist}
        </h2>
      </div>
      <div className="flex flex-wrap gap-1 md:gap-2 items-center">
        {eventData.tags.map((tag, idx) => (
          <Tag text={tag} key={tag + idx} />
        ))}
      </div>
      <p className="text-justify">{eventData.description}</p>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold max-sm:text-2xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
          ₹ {eventData.price}
        </h1>
        <button className="bg-red-500 text-white rounded-lg px-5">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
