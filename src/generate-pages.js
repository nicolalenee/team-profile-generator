const generateHTML = require("../src/page-template");
const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", generateHTML(fileContent), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "HTML file created! Check it out!",
      });
    });
  });
};



module.exports = { writeFile };
