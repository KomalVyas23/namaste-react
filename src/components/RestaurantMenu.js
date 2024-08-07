import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const dummy = "Dummy Data";

   const resInfo = useRestaurantMenu(resId);

   const [showIndex, setShowIndex] = useState(null);
   
const name = resInfo?.cards[2].card.card.info?.name;
const cuisines = resInfo?.cards[2].card.card.info?.cuisines;
const costForTwoMessage = resInfo?.cards[2].card.card.info?.costForTwoMessage;

const  itemCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  const categories =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


  if( resInfo === null) return  <Shimmer />;
    return (
        <div className="text-center p-5 font-bold">
            <h1>{ name }</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
           {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
        </div>
    )
}

export default RestaurantMenu;