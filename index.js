const express = require("express")
const bodyParser = require('body-parser')

let port = 3000;
const app = express()
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`App running on ${port}, http://localhost:${port}`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

app.post("/bfhl", (req, res) => {
    console.log(req.body.data)
    let arra = req.body.data
    let num = [];
    let alphabet =[];
    // Change the user id as per user name and DOB
    let user_id = 'Shubham_Goyal_10072001'
    let email=`shubhamgoyalit19@acropolis.in`
    let rollNo = `0827IT191113`
    // Check whether the given array contains numeric elements or not
    let stat=false
    arra.forEach((ele) => {
        // Check if the number is even or odd
        if(typeof(ele)==="number"){
            console.log(`${ele} is number`)
            num.push(ele)
            stat=true
        } else {
            console.log(`${ele} is alphabet`)
            alphabet.push(ele)
            stat=true
        }
        

    })
    if(stat){
        res.status(200).json({
            "is_success": stat,
            "user_id": user_id,
            "email": email,
            "roll_number":rollNo,
            "numbers": num,
            "alphabets": alphabet
        })
    } else {
        res.status(200).json({
            "is_success": stat,
            "user_id": user_id
        })

    }
})
