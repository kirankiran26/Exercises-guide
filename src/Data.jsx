import React, { useEffect, useState } from 'react';
import './Data.css';
const Data = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  const fetchData = async () => {
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${search}`;
    const apiKey = import.meta.env.VITE_API_KEY;

    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Network error...");
      }
      const results = await response.json();
      setData(results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSearchClick = () => {
    setTriggerSearch(true);
  };

  useEffect(() => {
    if (triggerSearch) {
      fetchData();
      setTriggerSearch(false);
    }
  }, [triggerSearch]);

  return (
    <div>
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search here..."
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {!triggerSearch && !loading && !error && !data.length ? (
        <div id="heading">
          <h1>Welcome...</h1>
        </div>
      ) : (
        <div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          <div className="card">
            {!loading && !error && data.map((exercise, index) => (
              <div key={index}>
                <div id="nametype">
                  <h2>Name: {exercise.name}</h2>
                  <h3>Type: {exercise.type}</h3>
                </div>
                <div id="equipmentdifficulty">
                  <h4>Equipment: {exercise.equipment}</h4>
                  <h4>Difficulty: {exercise.difficulty}</h4>
                </div>
                <div className="instructions">
                  <h1>Instructions</h1>
                  <p>{exercise.instructions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
