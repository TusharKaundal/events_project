import EventCard from "@/components/EventCard";

export async function getEvents(artist, tag) {
  try {
    const response = await fetch("https://qevent-backend.labs.crio.do/events", {
      cache: "no-cache",
    });
    const data = await response.json();
    const filteredEvents = data.filter((event) => {
      const isValid =
        event &&
        typeof event === "object" &&
        Object.keys(event).length === 10 &&
        Array.isArray(event.tags);

      if (!isValid) return false;

      if (!artist && !tag) return true;

      return (
        (artist && event.artist === artist) || (tag && event.tags.includes(tag))
      );
    });
    return filteredEvents;
  } catch (error) {
    console.error("Error while fetching", error);
    return [];
  }
}

const EventPage = async ({ searchParams }) => {
  const { artist = "", tag = "" } = searchParams;
  const events = await getEvents(artist, tag);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {events?.map((eventData) => (
        <EventCard eventData={eventData} key={eventData.id} />
      ))}
    </div>
  );
};

export default EventPage;
