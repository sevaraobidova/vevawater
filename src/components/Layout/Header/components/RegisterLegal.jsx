import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MyButton from "../../../global/Button/Button";

export default function RegisterLegal() {
  const formScheme = yup.object().shape({
    name: yup.string().required("The name field is required").min(3),
    number: yup
      .number()
      .integer("The number field should be an integer")
      .required("The number field should be filled"),

    location: yup.string().required("Location should be entered").min(3),
    remember: yup.boolean().required(),
  });

  const methods = useForm({
    resolver: yupResolver(formScheme),
    defaultValues: {
      name: "",
      number: +9989,
      location: "",
      remember: false,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  function onSubmit(value) {
    console.log(value);
    reset();
  }
  return (
    <div className="container w-[464px] h-[462px] bg-white border rounded-[20px] pt-5">
      <h1 className="text-3xl font-black my-5 font-rf ">Регистрация</h1>
      <FormProvider {...methods} className="grid gap-6 mb-6 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  // style={style}
                  placeholder="Ваша фамилия и имя"
                  type="text"
                  {...field}
                  className="bg-rgb-2 text-black text-lg rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-rgb-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5"
                />
                <p className="text-red">{errors.name?.message}</p>
              </div>
            )}
          />

          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  // style={style}
                  placeholder="00 000-00-00"
                  type="number"
                  {...field}
                  className="bg-rgb-2 text-black text-lg rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-rgb-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5"
                />
                <p>{errors.number?.message}</p>
              </div>
            )}
          />

          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  // style={style}
                  placeholder="Укажите адрес доставки"
                  type="text"
                  {...field}
                  className="bg-rgb-2 text-black text-lg rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-rgb-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5"
                />
                <p>{errors.location?.message}</p>
              </div>
            )}
          />
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <div className="flex items-center">
                <div className="flex">
                  <input
                    id="remember"
                    type="checkbox"
                    {...field}
                    className="bg-rgb-2 text-black text-lg rounded-[10px] focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-rgb-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5"
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Я согласен на обработку персональных данных
                </label>
                <p>{errors.remember?.message}</p>
              </div>
            )}
          />

          <button type="submit">Submit</button>
          <MyButton className="w-full">Зарегистрироваться</MyButton>
        </form>
      </FormProvider>
    </div>
  );
}
