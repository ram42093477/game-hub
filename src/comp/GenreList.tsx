import React from "react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, error, isLoading } = useGenres(); // ✅ Correct destructuring

  if (isLoading) return <p>Loading genres...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
