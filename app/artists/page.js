import ArtistCard from "@/components/ArtistCard";
import React from "react";
async function getArtists() {
  try {
    const response = await fetch("https://qevent-backend.labs.crio.do/artists");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching", error);
    return [];
  }
}
const ArtistPage = async () => {
  const artists = await getArtists();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {artists?.map((artistData) => (
        <ArtistCard key={artistData.id} artistData={artistData} />
      ))}
    </div>
  );
};

export default ArtistPage;
