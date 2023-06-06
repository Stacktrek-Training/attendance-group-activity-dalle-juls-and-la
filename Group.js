function attendance(status) {
    const statusPresent = ["minahal", "nasaktan", "nagmahal"];
    const lowercaseStatus = status.toLowerCase();
    let response = "Absent";

    if (statusPresent.some(s => s.toLowerCase() === lowercaseStatus)) {
        response = "Present";
    }

    return response;
}

console.log(attendance("minahal"));
console.log(attendance("NASAKTAN"));
console.log(attendance("NagMAhal"));

// attendance function
