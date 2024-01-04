import React from "react";

export default function OrderHistory() {
  const cols = [
    "№",
    "Дата заказа",
    "Дата доставки",
    "Статус доставки",
    "Вид товара",
    "Кол-во",
    "Стоимость 1 единицы",
    "Сумма к оплате",
    "Действие",
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-h2 font-bold">История заказов</h1>
        <div class="relative">
          <div class="absolute left-2 top-2 flex items-center pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Найти"
          />
        </div>
      </div>

      <div class="relative overflow-x-auto mt-8">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-sm font-bold">
            <tr className="border-b">
              {cols.map((col) => {
                return (
                  <th class="px-6 py-3 border-l first:border-l-0">{col}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              {cols.map((col) => {
                return (
                  <th class="px-6 py-3 border-l first:border-l-0">{col}</th>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
