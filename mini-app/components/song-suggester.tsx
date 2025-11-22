"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SongSuggester() {
  const [emotion, setEmotion] = useState("");
  const [song, setSong] = useState("");

  const suggest = () => {
    let suggestion = "";
    switch (emotion.toLowerCase()) {
      case "happy":
        suggestion = "Here is a happy song: Happy - Pharrell Williams";
        break;
      case "sad":
        suggestion = "Here is a sad song: Someone Like You - Adele";
        break;
      case "angry":
        suggestion = "Here is an angry song: Break Stuff - Limp Bizkit";
        break;
      default:
        suggestion = "Here is a neutral song: Imagine - John Lennon";
    }
    setSong(suggestion);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="text"
        placeholder="Enter emotion"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <Button onClick={suggest}>Suggest Song</Button>
      {song && <p className="mt-2">{song}</p>}
    </div>
  );
}
