const {parse} = require("csv-parse/sync");
const fs = require("fs");
function readCSV() {
  const input = fs.readFileSync("./src/site/_data/Contribution_Table_Sample.tsv");
  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: '\t'
  });
  console.log(`${records.length} entries found.`);
  return records;
}

module.exports = function () {
  const data = readCSV();
  return data;
};