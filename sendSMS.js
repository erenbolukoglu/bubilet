const axios = require('axios');

const sendSMS = () => {axios.post('https://api.callmebot.com/whatsapp.php?phone=905057897922&text=saygı1&apikey=2888623')
.then(response =>{
    console.log(response.data);
}).catch(err => {
    console.log(err)
});
};