const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "index.js");
const files = fs.readdirSync(__dirname);

const exportLines = files
  .filter((file) => file.endsWith(".js") && file[0] === file[0].toUpperCase())
  .map((file) => {
    const name = path.basename(file, ".js");
    return `export { default as ${name} } from "./${name}";`;
  });

fs.writeFileSync(indexPath, exportLines.join("\n") + "\n");

console.log("Barrel file generated at:", indexPath);
