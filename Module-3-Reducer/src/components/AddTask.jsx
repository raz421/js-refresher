import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
}
