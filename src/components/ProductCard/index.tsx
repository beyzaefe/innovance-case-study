import React from "react";
import { Products } from "../../utils/types";
import SubTitle from "../SubTitle";
import { Star, Heart } from "react-feather";
import Button from "../Button";
import { useAppSelector } from "../../redux/hooks";
type Props = {
  item: Products;
  favoriteOnClick: any;
  onClick: any;
};

const ProductCard = (props: Props) => {
  const { favorites } = useAppSelector((state) => state.favorites);
  const { card } = useAppSelector((state) => state.card);
  return (
    <div
      key={props.item.id}
      className="w-[45%] h-[350px] md:w-1/6 border flex flex-col border-grey3 rounded-lg md:h-[380px] cursor-pointer  shadow-xl  "
    >
      <div
        onClick={props.favoriteOnClick}
        className="flex items-center justify-end px-3 my-1 cursor-pointer "
      >
        <Heart
          color={
            favorites?.some((fav: Products) => fav.id === props.item.id)
              ? "red"
              : "#0D0E10"
          }
          width={20}
          height={20}
        />
      </div>
      <div className="flex items-center justify-center w-full h-2/5">
        <img
          src={props.item.image}
          style={{ width: "50%", height: "80%" }}
          alt={props.item.title}
        />
      </div>
      <div className="relative flex flex-col px-4 mt-3 h-[196px]">
        <SubTitle className="text-sm line-clamp-1 hover:line-clamp-none">
          <span className="text-xs font-bold text-mainBlue">Category : </span>{" "}
          {props.item.category.toUpperCase()}
        </SubTitle>
        <SubTitle className="text-sm line-clamp-2 hover:line-clamp-none">
          <span className="text-xs font-bold text-orange">Product : </span>{" "}
          {props.item.title}
        </SubTitle>
        <SubTitle className="text-sm font-bold line-clamp-2 hover:line-clamp-none">
          <span className="text-xs font-bold text-green-600 ">Price : </span>{" "}
          {props.item.price} TL
        </SubTitle>
        <div className="flex items-center justify-end gap-1 px-3 ">
          <Star color="red" width={10} height={10} />
          <SubTitle className="text-xs font-medium line-clamp-2 hover:line-clamp-none">
            {props.item.rating.rate} / 5
          </SubTitle>
        </div>
        <Button
          onClick={props.onClick}
          className="absolute left-0 px-2 w-[80%] xl:w-[86%] mx-4 text-xs font-bold text-white rounded bottom-5 h-9 bg-orange"
        >
          {card.findIndex((findItem) => findItem.id === props.item.id) === -1
            ? "Add To Cart"
            : "Added To Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
