const { nanoid } = require('nanoid');
const generateid = (Length)=>{
    return nanoid(Length);
}
module.exports = {generateid};