import { clsx } from "clsx";
export function charIsNumeric(char) {
    return char[0] >= '0' && char[0] <= '9';
}
function getKeyAndValue(word) {
    var splitted = word.split("-");
    var latestChar = splitted[splitted.length - 1];
    if (splitted[0] === "group") {
        // ex: ["group[.hover]:opacity", "100"]
        return [splitted[0] + "-" + splitted[1], word];
    }
    else if (charIsNumeric(latestChar) && Number(latestChar) > 20) {
        return ["color:" + splitted.slice(0, -2).join("-"), word];
    }
    else if (latestChar.startsWith("[#")) {
        return ["color:" + splitted.slice(0, -1).join("-"), word];
    }
    else {
        return [splitted.slice(0, -1).join("-") || word, word];
    }
}
export function merge() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    var classNamesString = Array.isArray(classNames)
        ? clsx(classNames)
        : classNames;
    var result = {};
    var groupKeys = ["m", "ml", "mr", "mt", "mb", "p", "pl", "pr", "pt", "pb"];
    var resetKeys = ["m", "p"];
    classNamesString.split(" ").forEach(function (word) {
        var _a = getKeyAndValue(word), key = _a[0], value = _a[1];
        if (resetKeys.includes(key)) {
            groupKeys.forEach(function (k) { return delete result[k]; });
        }
        result[key] = value;
    });
    return Object.values(result)
        .map(function (value) { return value.replace("color:", ""); })
        .join(" ");
}
export default merge;
