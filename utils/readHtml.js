const { existsSync, readFileSync } = require("fs");
const { join } = require("path");

const readHtml = (path) => {
    var convert = join("./Pages/" + path);
    if (existsSync(convert)) {
        return readFileSync(convert, { "encoding": "utf8" });
    }
    return false;
};

module.exports = readHtml;