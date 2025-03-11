import React from "react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, isLoading, error } = useGenres();

  if (isLoading) return <p>Loading genres...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {genres.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
