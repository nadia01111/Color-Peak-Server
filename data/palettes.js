
const { v4: uuidv4 } = require("uuid");
const randomNum = ()=> {
    let numLikes = Math.floor(Math.random() * 100);
    return numLikes;
}


const palettes = [

    {_id: uuidv4(),
    palette:['#f6bd60', '#f7ede2', '#f5cac3', '#84a59d', '#f28482'],
    isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},

    {_id: uuidv4(),
    palette:['#f08080', '#f4978e', '#f8ad9d', '#fbc4ab', '#ffdab9'],
    isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},
    
    {_id: uuidv4(),
    palette:['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'],
    isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},
    
   
    {_id: uuidv4(),
        palette:['#006d77', '#83c5be', '#edf6f9', '#ffddd2', '#e29578'],
        isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},

        {_id: uuidv4(),
            palette:['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'],
            isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},

            {_id: uuidv4(),
                palette:['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
                isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},

                {_id: uuidv4(),
                    palette:  ['#22577a', '#38a3a5', '#57cc99', '#80ed99', '#c7f9cc'],
                    isLikedBy: "737b6a69-0c7a-4ba4-b4d0-33750a762900"},

]

module.exports = { palettes };