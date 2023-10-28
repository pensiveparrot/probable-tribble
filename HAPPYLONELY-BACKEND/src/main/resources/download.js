const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const process = require('process');

async function download() {
    try {
        const url = process.argv[2];
        const type = process.argv[3];
        const output = process.argv[4];

        if (!url || !type || !output) {
            throw new Error('Missing required arguments. Usage: node script.js <url> <type> <output>');
        }

        if (!ytdl.validateURL(url)) {
            throw new Error('Invalid YouTube URL');
        }

        if (type !== 'music' && type !== 'video') {
            throw new Error('Invalid type. Expected "music" or "video".');
        }

        const outputDir = path.dirname(output);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        console.log(`Starting download. URL: ${url}, Type: ${type}, Output: ${output}`);

        const stream = ytdl(url, { filter: type === 'music' ? 'audioonly' : 'video' });
        const writeStream = fs.createWriteStream(output);

        await new Promise((resolve, reject) => {
            stream.pipe(writeStream)
                .on('finish', resolve)
                .on('error', reject);
        });

        console.log('Download finished successfully');
    } catch (error) {
        console.error('An error occurred during the download:', error.message);
        process.exit(1);
    }
}

download();
