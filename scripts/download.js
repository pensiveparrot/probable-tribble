const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');

async function download() {
    try {
        const [url, type, output] = process.argv.slice(2);

        if (!url || !ytdl.validateURL(url)) {
            throw new Error('Invalid or missing URL.');
        }

        if (!type || !output) {
            throw new Error('Usage: node script.js <url> <type> <output>');
        }

        if (!['music', 'video'].includes(type)) {
            throw new Error('Type must be "music" or "video".');
        }

        await fs.promises.mkdir(path.dirname(output), { recursive: true });
        const stream = ytdl(url, { filter: type === 'music' ? 'audioonly' : 'video' });

        await pipeline(stream, fs.createWriteStream(output));

        console.log('Download finished successfully');
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

download();
