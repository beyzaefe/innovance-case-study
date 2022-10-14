import React, { useState } from "react";
import { CartProducts, Products } from "../../utils/types";
import { Trash2, MinusCircle, PlusCircle } from "react-feather";
import SubTitle from "../SubTitle";
import { useAppDispatch } from "../../redux/hooks";
import { changeProductCount } from "../../features/Card/cardSlice";
type Props = {
  item: CartProducts;
  removeCart: any;
};

const CartProductCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    props.item.rating.count >= count ? setCount(count + 1) : setCount(count);
    dispatch(changeProductCount({ id: props.item.id, count: count }));
  };
  const handleDecrement = () => {
    count <= 1 ? setCount(1) : setCount(count - 1);
    dispatch(changeProductCount({ id: props.item.id, count: count }));
  };
  return (
    <div
      className="flex gap-5 px-4 py-3 border border-grey3 shadow-lg rounded-lg cursor-pointer  
     h-[150px] min-w-[30%] "
    >
      <div className="flex items-center justify-center w-1/6">
        <img
          src={props.item.image}
          alt="productcard"
          width={100}
          height={110}
        />
      </div>
      <div className="flex items-center justify-start w-5/6 ">
        <div>
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
          <SubTitle className="text-sm font-bold line-clamp-2 hover:line-clamp-none">
            <span className="text-xs font-bold text-pink-600 ">Count : </span>{" "}
            {count}
          </SubTitle>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between w-1/6 ">
        <Trash2
          width={20}
          height={20}
          color="red"
          className="cursor-pointer "
          onClick={props.removeCart}
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <PlusCircle
            width={22}
            height={22}
            color="#1F2937"
            className="cursor-pointer "
            onClick={handleIncrement}
          />
          <span>{count}</span>
          <MinusCircle
            width={22}
            height={22}
            color="#1F2937"
            className="cursor-pointer "
            onClick={handleDecrement}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
