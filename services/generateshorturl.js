const shortUrlDoa = require('../doa/shorturl.js');
const { generateid } =require('../utili/nanoid.js');
module.exports.generateShortUrl = async (fullUrl, userId) => {
    const shortUrl = generateid(7);
    return await shortUrlDoa.async(shortUrl,fullUrl,userId);
}