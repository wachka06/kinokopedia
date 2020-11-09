import React, { useEffect } from "react";

const MushroomRecipe = () => {
  async function fetchData() {
    const mushroom = "shimeji";
    const res = await fetch(
      `https://api.edamam.com/search?q=${mushroom}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEYS}`
    );
    const data = await res.json();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
};

export default MushroomRecipe;
