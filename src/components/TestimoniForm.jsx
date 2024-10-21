import React, { useState } from "react";
import { Label, Textarea, Rating } from "flowbite-react";
import DarkButton from "./DarkButton"; // Import your DarkButton

export default function TestimoniForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [testimoni, setTestimoni] = useState("");

  const handleRating = (value) => {
    setRating(value + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset the form fields after submission
    setTestimoni("");
    setRating(0);

    // Call the onSubmit function passed from the parent component
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <section className="w-[50vw] mx-auto my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <Label htmlFor="testimoni" value="Masukan Testimoni Anda" />
        </div>
        <Textarea
          id="testimoni"
          value={testimoni}
          onChange={(e) => setTestimoni(e.target.value)}
          placeholder="masukan pesanmu disini...."
          required
          rows={4}
        />
        <div className="mt-2">
          <Rating>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Rating.Star
                  key={index}
                  filled={index < rating}
                  onClick={() => handleRating(index)}
                  className="cursor-pointer"
                />
              ))}
          </Rating>
        </div>
        <div className="mt-4 flex justify-center">
          <DarkButton
            Title="Kirim"
            type="submit"
            className={"px-4 py-2 rounded-2xl w-[50%] "}
          />
        </div>
      </form>
    </section>
  );
}
