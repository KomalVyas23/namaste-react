import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
       fetchData();
    }, []);

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0966611&lng=72.9239095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();  
      //  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
       // Optional Chaining
     
       setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };

    // Conditional Rendering

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection.</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4">
                    <input type="text" className="border border-solid border-black" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
             

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}> Search</button>
                </div>
                <button className="filter-btn" onClick={ () => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
              {
                filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant?.info.id} to={"/restaurants/"+ restaurant.info.id}>
                      
                      {(restaurant?.info.avgRating > 4.2) ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
                    </Link>
                ))
              }
            </div>
        </div>
    );
};

export default Body;