const users = [

  { id: 101, name: " Ada ", scores: [10, 20, 30] },

  { id: 102, name: "", scores: [5, 0, 15] },

  { id: 103, name: null, scores: [7, 14] },

  { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },

  { id: 105, name: "Grace", scores: [] }

];

function normalizeName(name) {
    if (typeof name === "undefined" || name === null || name.trim() === "") {
        return "Unknown";
    } else {
        return name.trim();
    }   
}
function averageScore(scores) {
    if (!Array.isArray(scores)) {
        throw new Error("Scores should be an array");
    }
    else if (scores.length === 0) {
        return null;
    } else{
        var result = 0;
        for(var i = 0; i < scores.length; i++){
            result += scores[i];
        }
        result = result / scores.length;
        return Math.round(result * 100) / 100;
    }
}
function buildUserSummary(user){
    if (typeof user === "undefined" || user === null || typeof user !== "object") {
        throw new Error("Invalid input: user should be an object");
    }
    else if(user.scores === undefined || user.scores === null || !Array.isArray(user.scores)){
            return {id: user.id, name: normalizeName(user.name), scoreCount: 0, avg: null};
        }
    else{return {id: user["id"], name: normalizeName(user.name), scoreCount: user.scores.length, avg: averageScore(user.scores)}};
        
}
function summarizeUsers(userArray) {
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }
    return userArray.map(buildUserSummary);
}
function safeSummarizeUsers(userArray) {
    try {
        var x = summarizeUsers(userArray);
        return {ok: true, data: x};
}
    catch (error) {
        return {ok: false, error: error.message};
    }
}
function getUserDisplayNameById(userArray, id) {
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }
    else if (typeof id !== "number") {
        throw new Error("id must be a number");
    }
    else{
        var found = userArray.find(function(user) { return user.id === id; })
        if(found === undefined){
            throw new Error("user not found")
        }
        else{
            return normalizeName(found.name)
        }
    }
    
}

// Part C answers:

// 1) typeof undefined = "undefined"

// 2) typeof null = "object"

// 3) Why treat "" differently than null/undefined in normalizeName (conceptually)? = "" is an intentional empty value — the user exists but chose to leave it blank.

//Required test calls:

console.log(normalizeName(" Ada "));               // expected:"Ada"

console.log(normalizeName("   "));                 // expected:"Unknown"

console.log(normalizeName(null));                  // expected:"Unknown"

console.log(averageScore([10, 20, 30]));           // expected:20

console.log(averageScore([]));                     // expected:null

console.log(buildUserSummary(users[0]));           // expected:{ id: 101, name: 'Ada', scoreCount: 3, avg: 20 }

console.log(buildUserSummary(users[3]));           // expected:{ id: 104, name: 'Unknown', scoreCount: 4, avg: 3 }

console.log(safeSummarizeUsers(users).ok);         // expected:true

console.log(getUserDisplayNameById(users, 105));   // expected:"Grace"

console.log(safeSummarizeUsers("not an array"));   // expected:{ ok: false, error: 'userArray must be an array' }
