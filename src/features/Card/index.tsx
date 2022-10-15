import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CartProducts } from "../../utils/types";
import NotCart from "../../assets/notCart.png";
import CartProductCard from "../../components/CartProductCard";
import { removeCard } from "./cardSlice";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {};

const Card = (props: Props) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { card } = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();
  const handleComplete = () => toast("Order completed");
  useEffect(() => {
    if (card.length > 0) {
      var total: number = 0;
      for (let index = 0; index < card.length; index++) {
        total += card[index].price * card[index].count;
        console.log("Total", total);
      }
      setTotalPrice(total);
    }
  }, [card]);
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-5 ">
      {card.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={NotCart}
            alt="Not Cart"
            style={{ height: "50%", width: "40%" }}
          />
          <h2 className="text-lg font-black text-mainBlue">
            There is no product in the cart
          </h2>
        </div>
      ) : (
        <div className="relative flex flex-col justify-start h-full mt-[84px]">
          <div className="flex items-start justify-center h-5/6">
            <div className={`flex flex-wrap justify-start  gap-8 w-full  `}>
              {card.map((product: CartProducts) => (
                <CartProductCard
                  item={product}
                  removeCart={() => dispatch(removeCard(product.id))}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-3 h-1/6">
            <div className="text-lg font-extrabold ">
              Total Price: {totalPrice.toFixed(2)} TL{" "}
            </div>
            <Button
              onClick={handleComplete}
              className="w-[20%] h-[50%] text-xsfont-bold text-white rounded px-6 py-4 bg-orange"
            >
              Complete Your Shopping
            </Button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Card;
