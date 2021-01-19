const path = require('path');
const fs = require('fs').promises;

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

(async () => {
    const files = await imagemin(['public/assets/images/**/!(*.min).{jpg,png,svg,gif}'], {
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                strip: true,
                quality: [0.2, 0.6]
            }),
            imageminSvgo({
              plugins: [
                  {removeViewBox: false}
              ]
            }),
            imageminGifsicle()
        ]
    }).then((files) => {
      files.forEach(async (file) => {
        const source = path.parse(file.sourcePath);
        file.destinationPath = `${source.dir}/${source.name}.min${source.ext}`;
        await fs.writeFile(file.destinationPath, file.data);
      });
    });
})();