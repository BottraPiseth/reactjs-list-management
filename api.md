//student
create_at: "2022-12-08T15:58:53.000Z"


"firstname": "Lukas"
"lastname": "Graham"
"gender": 0
"tel": "9876545678"
"description": "7 years old"
"email": "lukas@gmail.com"



//teacher
create_at
"firstname": "Lukas"
"lastname": "Graham"
"gender": 0
"tel": "9876545678"
"description": "7 years old"
"email": "lukas@gmail.com"
"tel": "9876545678"

/////////////////////////
# student
    + list
        url: https://school-nit-api.cleverapps.io/api/student
        method : GET,
        body : {}
    + create
        url: https://school-nit-api.cleverapps.io/api/student
        method : POST,
        body : {
            "firstname" : "Jon",
            "lastname" : "Jon",
            "gender" : 1,
            "tel" : "0888888",
            "email" : "jon@gmail",
            "description" : ""
        }
    + getOne
        url: https://school-nit-api.cleverapps.io/api/student/{paramId}
        method : GET,
        body : {}
    + update
        url: https://school-nit-api.cleverapps.io/api/student
        method : PUT,
        body : {
            "student_id": 5,
            "firstname" : "Sok",
            "lastname" : "Sarom",
            "gender" : 1,
            "tel" : "9999999",
            "email" : "somang@gmail",
            "description" : ""
        }
    + remove
        url: https://school-nit-api.cleverapps.io/api/student
        method : DELETE,
        body : {
            "student_id": 106
        }
//////////////////
"create_at": "2022-12-07T07:03:08.000Z"
"description": "Test"
"email": "kokdara@gmail.com"
"firstname": "kok"      .
"gender": 0............
"status": 1
"lastname": "dara"     ....
"student_id": 17
"tel": "099222222".............