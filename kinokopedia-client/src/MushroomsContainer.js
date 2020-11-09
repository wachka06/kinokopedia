import React from "react";
import MushroomCard from "./MushroomCard";

const MushroomsContainer = ({ mushrooms, handleClick, handleForm }) => {
  return (
    <>
      <button className="create-button" onClick={() => handleForm()}>
        Create a new mushroom
      </button>
      <div className="mushrooms-container">
        {mushrooms.map((mushroom) => (
          <MushroomCard
            key={mushroom.id}
            mushroom={mushroom}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default MushroomsContainer;
