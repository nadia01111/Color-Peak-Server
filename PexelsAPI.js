import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001b48b906dcbea4d05968c4031a18d4633');

// All requests made with the client will be authenticated


const query = 'Nature';

const resulet = client.photos.search({ query, per_page: 1 }).then(photos => {result}); 
return res.status(200).json({status:200, data: result})