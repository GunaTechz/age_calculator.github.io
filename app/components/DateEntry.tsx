"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import moment from 'moment';
import icon from '../../public/icon-arrow.svg';

export type Inputs = {
  day: string;
  month: string;
  year: string;
};

interface DateEntryProps {
  handleDates: (data: Inputs) => void;
}

const DateEntry: React.FC<DateEntryProps> = ({ handleDates }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (inputData) => {
    handleDates(inputData);
  };

  const isError =
    errors.day?.message ||
    errors.month?.message ||
    errors.year?.message ||
    errors.root?.message;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row align-middle gap-4 bg-white">
        <div className="flex flex-col gap-1">
          {isError ? (
            <label className="text-lightRed tracking-widest text-xs font-bold">
              DAY
            </label>
          ) : (
            <label className="text-smokeyGrey tracking-widest text-xs font-bold">
              DAY
            </label>
          )}

          <input
            type="text"
            placeholder="DD"
            {...register("day", {
              required: "This field is required",
              pattern: {
                value: /0[1-9]|\b(?:[0-9]|1[0-9]|2[0-9]|3[0-1])\b/,
                message: "Must be a valid day",
              },
              maxLength: {
                value: 2,
                message: "Must be a valid day",
              },
              validate: (value, formValues) => {
                const validDate = moment([
                  Number(formValues.year),
                  Number(formValues.month) - 1,
                  Number(formValues.day),
                ]).isValid();

                if (
                  formValues.day === "" ||
                  formValues.month === "" ||
                  formValues.year === ""
                ) {
                  return true;
                }

                return validDate || "Must be a valid date";
              },
            })}
            className={
              isError
                ? "p-3 w-[100%] desktop:w-[150px] mb-2 h-14 border rounded-md border-lightRed text-xl desktop:text-3xl font-bold cursor-pointer"
                : "p-3 w-[100%] desktop:w-[150px] h-14 border rounded-md hover:border-purple text-xl desktop:text-3xl font-bold cursor-pointer"
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          {isError ? (
            <label className="text-lightRed tracking-widest text-xs font-bold">
              MONTH
            </label>
          ) : (
            <label className="text-smokeyGrey tracking-widest text-xs font-bold">
              MONTH
            </label>
          )}
          <input
            placeholder="MM"
            {...register("month", {
              required: "This field is required",
              pattern: {
                value: /0[1-9]|\b(?:[0-9]|1[0-2])\b/,
                message: "Must be a valid month",
              },
              maxLength: {
                value: 2,
                message: "Must be a valid month",
              },
            })}
            className={
              isError
                ? "p-3 w-[100%] desktop:w-[150px] h-14 mb-2 border rounded-md border-lightRed text-xl desktop:text-3xl font-bold cursor-pointer"
                : "p-3 w-[100%] desktop:w-[150px] h-14 border rounded-md hover:border-purple text-xl desktop:text-3xl font-bold cursor-pointer"
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          {isError ? (
            <label className="text-lightRed tracking-widest text-xs font-bold">
              YEAR
            </label>
          ) : (
            <label className="text-smokeyGrey tracking-widest text-xs font-bold">
              YEAR
            </label>
          )}
          <input
            placeholder="YYYY"
            {...register("year", {
              required: "This field is required",
              pattern: {
                value: /[0-9]+/,
                message: "Must be a valid year",
              },
              maxLength: {
                value: 4,
                message: "Must be a valid year",
              },
              validate: (value, formValues) => {
                const dateNow = +new Date();
                const checkDate = +new Date(
                  Number(formValues.year),
                  Number(formValues.month) - 1,
                  Number(formValues.day)
                );
                return checkDate < dateNow || "Must be in the past";
              },
            })}
            className={
              isError
                ? "p-3 w-[100%] desktop:w-[150px] mb-2 h-14 border rounded-md border-lightRed text-xl desktop:text-3xl font-bold cursor-pointer"
                : "p-3 w-[100%] desktop:w-[150px] h-14 border rounded-md hover:border-purple text-xl desktop:text-3xl font-bold cursor-pointer"
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-[100px] desktop:w-[150px] leading-3">
          {errors.day && (
            <label className="text-lightRed italic text-xs">
              {errors.day.message}
            </label>
          )}
          {errors.root?.message && (
            <label className="text-lightRed italic text-xs">
              {errors.root.message}
            </label>
          )}
        </div>
        <div className="absolute left-[38%] desktop:left-[230px] w-[100px] desktop:w-[150px] leading-3">
          {errors.month && (
            <label className="text-lightRed italic text-xs">
              {errors.month.message}
            </label>
          )}
          {errors.root?.message && (
            <label className="text-lightRed italic text-xs">
              {errors.root.message}
            </label>
          )}
        </div>
        <div className="absolute left-[68%] desktop:left-[415px] w-[100px] desktop:w-[150px] leading-3">
          {errors.year && (
            <label className="text-lightRed italic text-xs">
              {errors.year.message}
            </label>
          )}
          {errors.root?.message && (
            <label className="text-lightRed italic text-xs">
              {errors.root.message}
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center mt-16 mb-16 desktop:mt-10 desktop:mb-10">
        <hr className=" w-[100%] border-lightGrey" />
        <div className="absolute  inset-x-[calc(50%-33px)] desktop:inset-x-[calc(90%-33px)] z-10 h-[66px] w-[66px] bg-purple rounded-full">
          <button type="submit" className="relative top-[22px] left-[21px]">
            <Image src={icon} width={24} height={24} alt="Stylised Enter Button" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default DateEntry;
