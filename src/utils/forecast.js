 const request = require('postman-request')
     // const forecast=(latitude, longitude, callback)=>{
     //     const url = 'http://api.weatherstack.com/current?access_key=d015bdcb6455898099a79093075f7cec&query= '+ latitude + ',' + longitude + '&units=f'
     //     request({url: url, json:true, },(error, response) => {
     //         if(error){
     //             callback('Unable to connect to weather service', undefined )
     //         }else if(response.body.error){
     //             callback('Unable to find location', undefined)
     //         }else{
     //             callback(undefined, response.body.current.weather_descriptions[0]+ ".it is currently " + response.body.current.temperature +" degrees out. it feels like "+ response.body.current.feelslike+ " degrees out.")
     //         }

 //     })
 // }
 // module.exports=forecast


 const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'

     request({ url, json: true }, (error, { body }) => {
         if (error) {
             callback('Unable to connect to weather service!', undefined)
         } else if (body.error) {
             callback('Unable to find location', undefined)
         } else {
             callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
         }
     })
 }

 module.exports = forecast