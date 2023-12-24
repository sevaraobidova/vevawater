import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { appFetch } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

export default function ShopProduct() {
  const navigate = useNavigate();

  const getNavStyle = (isActive) => {
    const defaultStyle = "inline-block p-4 rounded-t-lg";
    return isActive ? defaultStyle + " text-black bg-gray-light" : defaultStyle;
  };

  const {
    data: categories,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await appFetch("/category");
      if (res.length) {
        navigate(`/shop/${res[0].id}?type=${res[0].categoryType}`, {
          replace: true,
        });
      }
      return res || [];
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container">
      <h1>Магазин товаров</h1>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-inactive border-b border-black">
        <li className="me-2">
          {categories.map((category) => {
            return (
              <NavLink
                key={category.id}
                to={`/shop/${category.id}?type=${category.categoryType}`}
                className={({ isActive }) => getNavStyle(isActive)}
              >
                {category.nameRu}
              </NavLink>
            );
          })}
        </li>
      </ul>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}
