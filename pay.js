// const https = require('https')
// const params = JSON.stringify({
//   "email": "customer@email.com",
//   "amount": "20000",
//   "callback_url":"http:localhost:3000/dashboard/user/dashboard/active-plan"
// })
// const options = {
//   hostname: 'api.paystack.co',
//   port: 443,
//   path: '/transaction/initialize',
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer sk_test_876a88ad79c77f3336551a0e4815efffc68440d0',
//     'Content-Type': 'application/json'
//   },
    
// }
// const req = https.request(options, res => {
//   let data = ''
//   res.on('data', (chunk) => {
//     data += chunk
//   });
//   res.on('end', () => {
//     let response = JSON.parse(data)
//     console.log(response)
    
//   })
// }).on('error', error => {
//   console.error(error)
// })
// req.write(params)
// req.end()

let PayStack = require('paystack-node')
require("dotenv").config()
let APIKEY = 'sk_test_876a88ad79c77f3336551a0e4815efffc68440d0'
const environment = process.env.NODE_ENV
 
const paystack = new PayStack(APIKEY, environment)
const promise6 = paystack.initializeTransaction({
  reference: "7PVGX8MEk85tgeEpVDtD",
  amount: 500000, // 5,000 Naira (remember you have to pass amount in kobo)
  email: "emmanueltech2019@gmail.com",
})
 
promise6.then(function (response){
  console.log(response);
}).catch(function (error){
  // deal with error
})