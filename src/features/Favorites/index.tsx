import React from "react";
import ProductCard from "../../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Products } from "../../utils/types";
import { setCard } from "../Card/cardSlice";
import { addFavoriteProduct, removeFavoriteProduct } from "./favoritesSlice";
import NotFound from "../../assets/notfound.png";

type Props = {};

const Favorites = (props: Props) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);
  const handleFavorite = (item: Products) => {
    if (!favorites?.some((fav: Products) => fav.id === item.id)) {
      dispatch(addFavoriteProduct(item));
    } else {
      dispatch(removeFavoriteProduct(item.id));
    }
  };
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-5 ">
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={NotFound}
            alt="Not Found"
            style={{ height: "50%", width: "40%" }}
          />
          <h2 className="text-lg font-black text-mainBlue">
            There are no favorite products.
          </h2>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-start gap-8 mt-[84px]">
          {favorites.map((fav: Products) => (
            <ProductCard
              item={fav}
              favoriteOnClick={() => handleFavorite(fav)}
              onClick={() => dispatch(setCard(fav))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
