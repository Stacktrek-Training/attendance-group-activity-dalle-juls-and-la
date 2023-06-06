function attendance(status){
    let response = "Absent"
    if(("minahal" === status) || ("nasaktan" === status) || ("nagmahal" === status)){
        response = "Present"
    }
    return response
}

console.log(attendance("minahal"))
console.log(attendance("nasaktan"))
console.log(attendance("nagmahal"))

// attendance function
