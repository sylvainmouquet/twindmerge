import { expect, test } from "vitest";
import {merge} from "./twmerge";

test("merge the tailwind classes", () => {
  // manage groups
  expect(
    merge("group-[.hover]:opacity-100 group-[.selected]:opacity-100"),
  ).toBe("group-[.hover]:opacity-100 group-[.selected]:opacity-100");


  // input an array
  expect(merge(["ml-1", "m-2"])).toBe("m-2");

  // input a string
  expect(merge("ml-1 m-2")).toBe("m-2");
  expect(merge("m-1 ml-2")).toBe("m-1 ml-2");

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
