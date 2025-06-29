"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateEventForm() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (!session || status === "unauthenticated") {
    router.replace("/");
  }

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    tags: "",
    image: "",
    artist: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    const eventData = {
      ...formData,
      id: uuidv4(),
      tags: [...formData.tags.split(",").map((tag) => tag.trim())],
      price: Number(formData.price),
      image: `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`,
    };
    // You can replace this with a POST request to your API
    const response = await fetch("https://qevent-backend.labs.crio.do/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      alert("Event creation failed");
    } else {
      router.replace("/events");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mb-4">
        Create New Event
      </h2>

      <input
        name="name"
        type="text"
        placeholder="Event Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="location"
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <div className="flex gap-4">
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-1/2 border p-2 rounded"
          required
        />
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          className="w-1/2 border p-2 rounded"
          required
        />
      </div>

      <input
        name="tags"
        type="text"
        placeholder="Tags (comma-separated)"
        value={formData.tags}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="artist"
        type="text"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={6}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Submit Event
      </button>
    </form>
  );
}
