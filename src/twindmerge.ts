import {clsx} from "clsx";

export function charIsNumeric(char: string): boolean {
  return char[0] >= '0' && char[0] <= '9'
}

function getKeyAndValue(word: string): [string, string] {
  const splitted = word.split("-");
  const latestChar = splitted[splitted.length - 1];

  if (splitted[0] === "group") {
    // ex: ["group[.hover]:opacity", "100"]
    return [splitted[0] + "-" + splitted[1], word];

  } else if (charIsNumeric(latestChar) && Number(latestChar) > 20) {
    return ["color:" + splitted.slice(0, -2).join("-"), word];
  } else if (latestChar.startsWith("[#")) {
    return ["color:" + splitted.slice(0, -1).join("-"), word];
  } else {
    return [splitted.slice(0, -1).join("-") || word, word];
  }
}

export function merge(...classNames: (string | string[])[]): string {
  const classNamesString = Array.isArray(classNames)
    ? clsx(classNames)
    : classNames;
  const result: { [key: string]: string } = {};

  const groupKeys = ["m", "ml", "mr", "mt", "mb", "p", "pl", "pr", "pt", "pb", "px", "py"];
  const resetKeys = ["m", "p"];

  classNamesString.split(" ").forEach((word:string) => {
    const [key, value] = getKeyAndValue(word);

    if (resetKeys.includes(key)) {
      groupKeys.forEach((k) => delete result[k] && delete result[k + '-number']);
    }

    const splitted = word.split("-");
    if (splitted.length > 1 && !isNaN(Number(splitted[1]))) {
      result[key + '-number'] = value;
    } else {
      result[key] = value;
    }
  });

  return Object.values(result)
    .map((value) => value.replace("color:", ""))
    .join(" ");
}

export default merge;
