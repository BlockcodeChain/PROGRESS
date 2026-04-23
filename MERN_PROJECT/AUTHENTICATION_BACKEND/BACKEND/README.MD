<!-- FULL BACKEND FLOW -->
1.npm init -y 
2.npm i
3.npm i mongoose cors dotenv nodemon jsonwebtoken bcrytpjs cors express 

->isko module kr lena

mongodb se connect krlo or connectxb bnaalo and serverjs bhi bna lo


model create kregge 
username : type required
email    : type required unique
password  : type required
isverified : boolean default
isloggedin : boolean default
token : string null
otp:  string null
otpexpiry: date null
