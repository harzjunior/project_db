"use client";

import { useEffect, useState } from "react";

export default function Me() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("/api/country");
      if (response.ok) {
        const data = await response.json();
        setCountries(data);
        console.log(data);
      } else {
        console.error("Failed to fetch countries:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country._id}>{country.country_name}</li>
        ))}
      </ul>
    </div>
  );
}
