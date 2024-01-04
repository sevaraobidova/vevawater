import React from "react";
import Counter from "../../../components/global/Counter/Counter";
import Bottle from "../../../assets/images/temp/Bottle.png";
import { Button } from "../../../components/ui/button";

export default function ShopCard({ product }) {
  return (
    <div className="rounded text-center p-5 hover:shadow-lg">
      <img src={Bottle} alt="bottle img" className="mx-auto" />
      <div className="flex flex-col items-center">
        <p className="text-sm">Вода в бутилированной бутылке</p>
        <span className="text-xl font-bold">18,9 л.</span>
        <ul className="w-full text-sm">
          <li className="flex gap-1 items-end">
            <span>Нагрев</span>
            <span className="grow border-b border-dotted border-b-2 border-gray"></span>
            <span className="font-bold">есть</span>
          </li>
        </ul>
        <div className="flex justify-between w-full my-3">
          <Counter value={1} />

          <div className="flex flex-col text-center">
            <span className="text-gray-inactive text-xs">
              Итоговая стоимость:
            </span>
            <p className="text-blue text-xl">15 000 сум</p>
          </div>
        </div>
        <Button variant="default">Добавить в корзину</Button>
      </div>
    </div>
  );
}
