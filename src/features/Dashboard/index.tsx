import React, { useEffect, useState } from "react";
import { Star, Heart } from "react-feather";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";

import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Products } from "../../utils/types";
import { setCard } from "../Card/cardSlice";
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from "../Favorites/favoritesSlice";
import {
  getCategories,
  getCategoryProducts,
  getProducts,
  setSelectCategory,
} from "./dashboardSlice";

type Props = {};

const Dashboard = (props: Props) => {
  const dispatch = useAppDispatch();
  const { categories, products, productsOfTheCategory, selectedCategory } =
    useAppSelector((state) => state.dashboard);
  const { favorites } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [productsOfTheCategory]);
  const handleFavorite = (item: Products) => {
    if (!favorites?.some((fav: Products) => fav.id === item.id)) {
      dispatch(addFavoriteProduct(item));
    } else {
      dispatch(removeFavoriteProduct(item.id));
    }
  };
  return (
    <div className=" flex flex-col h-[calc(100vh-64px)] p-5 ">
      {/* <div className="flex items-center justify-center my-6">
        <Title>Categories</Title>
      </div> */}
      {/* Category List */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-[84px] ">
        {categories.map((item: string) => (
          <button
            onClick={() => {
              dispatch(setSelectCategory(item));
              dispatch(getCategoryProducts(item));
            }}
            className={`w-[14%] h-12 px-3 text-white truncate border ${
              selectedCategory === item
                ? " opacity-75 border-mainBlue "
                : " opacity-100"
            } rounded bg-mainBlue hover:bg-opacity-60 `}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      {/* Product List */}
      <div className="flex flex-col items-center justify-center my-6 ">
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between md:gap-y-3 md:gap-x-2 lg:justify-center lg:gap-8">
          {productsOfTheCategory === null
            ? products.map((item: Products) => (
                <ProductCard
                  item={item}
                  favoriteOnClick={() => handleFavorite(item)}
                  onClick={() => dispatch(setCard({ ...item, count: 1 }))}
                />
              ))
            : productsOfTheCategory.map((product: Products) => (
                <ProductCard
                  item={product}
                  favoriteOnClick={() => handleFavorite(product)}
                  onClick={() => dispatch(setCard({ ...product, count: 1 }))}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
