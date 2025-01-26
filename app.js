const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config()

var urlTicket = "https:/apiv2.bubilet.com.tr/api/v2/search/web/sayg%C4%B11";

axios.get(urlTicket, {headers:{'user-agent': 'not axios'}}).then((res) => {
    if(res.data.length>0 || process.env.SENDOK=='ok'){
        console.log("ok");
        axios.post('https://api.callmebot.com/whatsapp.php?phone=905057897922&text=saygı1&apikey=2888623');
    }
    else{
        axios.post('https://api.callmebot.com/whatsapp.php?phone=905057897922&text=bilet yok&apikey=2888623');
        console.log("not ok");
    }
}).catch((err) => {
    console.log(err);
})