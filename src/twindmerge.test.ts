import {clsx} from "clsx";
import { expect, test } from 'vitest';
import merge, {charIsNumeric} from "./twindmerge";

test("check if input is a numeric", () => {
    expect(charIsNumeric("0")).toBe(true);
    expect(charIsNumeric("1")).toBe(true);
    expect(charIsNumeric("2")).toBe(true);
    expect(charIsNumeric("3")).toBe(true);
    expect(charIsNumeric("4")).toBe(true);
    expect(charIsNumeric("5")).toBe(true);
    expect(charIsNumeric("6")).toBe(true);
    expect(charIsNumeric("7")).toBe(true);
    expect(charIsNumeric("8")).toBe(true);
    expect(charIsNumeric("9")).toBe(true);
    
    expect(charIsNumeric("")).toBe(false);
    expect(charIsNumeric("a")).toBe(false);
    expect(charIsNumeric("z")).toBe(false);
})

test("merge the tailwind classes", () => {

    expect(merge("p-10 m-10")).toBe("p-10 m-10");

    // bug #35
    expect(merge("px-2 py-3 p-10")).toBe("p-10");

    // bug #31
    expect(merge("border-2 border-dashed")).toBe("border-2 border-dashed");
    expect(merge("border-dashed border-2")).toBe("border-dashed border-2");

    // readme tests

    expect(merge("text-gray-100 text-gray-50")).toBe("text-gray-50");
    expect(merge(clsx("text-gray-100", "text-gray-50"))).toBe("text-gray-50");
    expect(merge('bg-blue-500', 'bg-red-500')).toBe("bg-red-500");
    expect(merge(['bg-blue-500', 'bg-red-500'])).toBe("bg-red-500");
    

  // manage groups
  expect(
    merge("group-[.hover]:opacity-100 group-[.selected]:opacity-100"),
  ).toBe("group-[.hover]:opacity-100 group-[.selected]:opacity-100");


  expect(merge('bg-blue-500 text-white p-2 rounded', 'bg-red-500')).toBe("bg-red-500 text-white p-2 rounded");

  // input an array
  expect(merge(["ml-1", "m-2"])).toBe("m-2");

  // input is clsx
  expect(merge(clsx("ml-1", "ml-2"))).toBe("ml-2");

  // input a string
  expect(merge("ml-1 m-2")).toBe("m-2");
  expect(merge("m-1 ml-2")).toBe("m-1 ml-2");

  expect(merge("rounded-layout rounded-none")).toBe("rounded-none");
  expect(merge("!rounded-layout !rounded-none")).toBe("!rounded-none");

  expect(merge("p-1")).toBe("p-1");
  expect(merge("p-1 p-10")).toBe("p-10");
  expect(merge("pl-1 p-1")).toBe("p-1");
  expect(merge("pr-1 p-1")).toBe("p-1");
  expect(merge("pb-1 p-1")).toBe("p-1");
  expect(merge("pt-1 p-1")).toBe("p-1");
  expect(merge("p-1 pl-2 pr-2")).toBe("p-1 pl-2 pr-2");
  expect(merge("p-1 pl-2 p-2")).toBe("p-2");

  expect(merge("text-gray-100 text-gray-50")).toBe("text-gray-50");
  expect(merge("text-gray-50 text-gray-100")).toBe("text-gray-100");

  expect(merge("rounded rounded-l")).toBe("rounded-l");
  expect(merge("rounded-l rounded")).toBe("rounded");
  expect(merge("rounded rounded-none")).toBe("rounded-none");

  expect(merge("p-1 pl-2 pl-3")).toBe("p-1 pl-3");

  expect(merge("text-gray-50 text-[#1c253a]")).toBe("text-[#1c253a]");

  expect(merge("bg-foo dark:bg-foo")).toBe("bg-foo dark:bg-foo");

  expect(merge("text-gray-50 text-xs")).toBe("text-gray-50 text-xs");

  expect(merge("bg-gray-50 text-xs bg-blue-500")).toBe("bg-blue-500 text-xs");

  expect(merge("bg-foo")).toBe("bg-foo");
  expect(merge("bg-foo-bar")).toBe("bg-foo-bar");
  expect(merge("bg-foo dark:bg-foo")).toBe("bg-foo dark:bg-foo");
  expect(merge("bg-foo dark:bg-foo bg-bar")).toBe("bg-bar dark:bg-foo");
  expect(merge("bg-foo-bar dark:bg-foo-bar dark:bg-foo-foo")).toBe(
    "bg-foo-bar dark:bg-foo-foo",
  );

  expect(
    merge(
      "bg-gray-50 hover:bg-gray-100 text-gray-50 dark:text-gray-400 dark:bg-[#1c253a] dark:hover:bg-[#242f49] rounded-e bg-blue-500 hover:bg-blue-500 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-500 text-xs",
    ),
  ).toBe(
    "bg-blue-500 hover:bg-blue-500 text-gray-50 dark:text-gray-400 dark:bg-blue-500 dark:hover:bg-blue-500 rounded-e dark:text-white text-xs",
  );

});
