import React from "react";
import { getEvents } from "../page";
import EventDetail from "@/components/EventDetail";

async function getEventById(id) {
  const res = await fetch(`https://qevent-backend.labs.crio.do/events/${id}`);
  const data = await res.json();
  return data;
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    eventId: event.id.toString(),
  }));
}

export default async function EventDetailPage({ params }) {
  const { eventId } = await params;
  const eventData = await getEventById(eventId);
  return <EventDetail key={eventData.id} eventData={eventData} />;
}
