const puppeteer = require('puppeteer');
const fs = require('fs');
const process = require('process');

const file = process.argv[2];
let url_array = fs.readFileSync(`${file}`).toString().split('\n');

let save_path = process.argv[3];
save_path = `${save_path}`;

const create_path = (path, file_name) => {
  return `${path}/${file_name}`;
};

let width = process.argv[4] || 800;
let height = process.argv[5] || 800;

width = parseInt(width);
height = parseInt(height);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (const url of url_array ) {
    await page.setViewport({
      width: width,
      height: height,
    });
    let destination = `https://${url}`;
    if (url.match('http')) {
      destination = url;
    }
    try {
      await page.goto(destination);
      const save_file_name = url.replace(/[\.\/\:]*/g,'') + '.png';
      const save_file_path = create_path(save_path, save_file_name);
      console.log('Saving to: ', save_file_path);
      await page.screenshot({path: save_file_path});
    } catch(err) {
      console.log("*******This url did not work. Sorry bout it.", url, err.message, destination);
    }
  }

  await browser.close();
})();
