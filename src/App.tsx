import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import CircularGallery from "./components/CircularGallery";
import "./App.css";

// Import local emotion images
import happyImg from "./img/happy.png";
import sadImg from "./img/sad.png";
import madImg from "./img/mad.png";
import scaredImg from "./img/scared.png";

// Demo data for the ProfileCard
const profile = {
  name: "Jane Doe",
  title: "Frontend Developer",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  description: "Building beautiful UIs with React and Bits.",
  socials: [
    { icon: "github", url: "https://github.com/janedoe" },
    { icon: "twitter", url: "https://twitter.com/janedoe" }
  ]
};

// Demo data for CircularGallery, using local emotion images
const emotionGallery = [
  {
    image: happyImg,
    label: "Happy"
  },
  {
    image: sadImg,
    label: "Sad"
  },
  {
    image: madImg,
    label: "Mad"
  },
  {
    image: scaredImg,
    label: "Scared"
  }
];

export default function App() {
  return (
    <div className="container">
      <ProfileCard {...profile} />
      <h2 className="gallery-title">Emotions</h2>
      <CircularGallery items={emotionGallery} />
    </div>
  );
}