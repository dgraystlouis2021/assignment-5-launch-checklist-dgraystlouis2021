// Write your helper functions here!
require('isomorphic-fetch');

// AUTOGRADER SUBMIT TEST

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
                //window.alert("name "+name);
                //window.alert("imagUrl "+imageUrl);
                console.log(imageUrl);
                let missionTarget=document.getElementById("missionTarget");
                /*
                if(missionTarget===null){
                    window.alert("missionTarget is null");
                }else{
                    window.alert(missionTarget);
                }
                */
                missionTarget.innerHTML=`<h2>Mission Destination</h2>
                                             <ol>
                                             <li>Name: ${name}</li>
                                             <li>Diameter: ${diameter}</li>
                                             <li>Star: ${star}</li>
                                             <li>Distance from Earth: ${distance}</li>
                                             <li>Number of Moons: ${moons}</li>
                                             </ol>
                                             <img src="${imageUrl}">`;
                                                        
}

function validateInput(testInput) {
    if(testInput===null || testInput===""){
        return "Empty";
    }else{
        if(isNaN(testInput)){
         return "Not a Number";
        }else{
         return "Is a Number";
        }
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //let pilotName=document.getElementById("pilotName");
   //window.alert("Valid pilot name, copilot name, feul mass and cargo mass inputs must be entered prior to clicking Submit button");
   let flag=true;
   console.log(flag);
   let pilotName=document.querySelector("input[name=pilotName]");
   let str=validateInput(pilotName.value);
   //console.log(str);
   if(str==="Empty"){
       window.alert("All fields are rquired!");
       flag=false;
   }
   if(str==="Is a Number"){
    window.alert("Make sure to enter valid information for each field!");
    flag=false;
    }
   let copilotName=document.querySelector("input[name=copilotName]");
   str=validateInput(copilotName.value);
   console.log(str);
   if(str==="Empty"){
        window.alert("All fields are rquired!");
        flag=false;
    }
    if(str==="Is a Number"){
        window.alert("Make sure to enter valid information for each field!");
        flag=false;
    }
   fuelLevel=document.querySelector("input[name=fuelLevel]");
   let level=fuelLevel.value;
   str=validateInput(level);
   console.log(str);
   if(str==="Empty"){
       window.alert("All fields are rquired");
       flag=false;
   }
   if(str==="Not a Number"){
        window.alert("Make sure to enter valid information for each field!");
        flag=false;
    }
   let cargoMass=document.querySelector("input[name=cargoMass]");
   let mass=cargoMass.value;
   //window.alert("cargoMass "+mass);
   str=validateInput(mass);
   console.log(str);
   if(str==="Empty"){
        window.alert("All fields are rquired");
        flag=false;
    }
    if(str==="Not a Number"){
        window.alert("Make sure to enter valid information for each field!");
        flag=false;
    }
    //window.alert("done");
   if(flag){
        console.log("inside flag");
        //window.alert("inside flag");
       // INSERT REMAINING CODE HERE
        let pilotStatus=document.getElementById("pilotStatus");
        pilotStatus.innerText=`Pilot ${pilotName.value} is ready for launch`;
        let copilotStatus=document.getElementById("copilotStatus");
        copilotStatus.innerText=`Co-pilot ${copilotName.value} is ready for launch`;

        let launchStatus=document.getElementById("launchStatus");
        launchStatus.innerText="Shuttle is ready for launch";
        launchStatus.style.color="green";

        let fuelStatus=document.getElementById("fuelStatus");
        let cargoStatus=document.getElementById("cargoStatus");

        console.log(level);
        if(level<10000){
            let faultyItems=document.getElementById("faultyItems");
            faultyItems.style.visibility="visible";
            fuelStatus.innerText="Fuel level too low for launch";
            launchStatus.innerText="Shuttle not ready for launch";
            launchStatus.style.color="red";
        }else{
            fuelStatus.innerText="Fuel level high enough for launch";
        }
        console.log(mass);
        if(mass>10000){
            let faultyItems=document.getElementById("faultyItems");
            faultyItems.style.visibility="visible";
            cargoStatus.innerText="Cargo mass too high for launch";
            launchStatus.innerText="Shuttle not ready for launch";
            launchStatus.style.color="red";
        }else{
            cargoStatus.innerText="Cargo mass low enough for launch";
        }
    }
   
    //window.alert("submission finished");
    return flag;
}

async function myFetch() {
    /*
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
    */
    let planetsReturned;

    //planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    //let planetsReturnedJson=planetsReturned.json();
    let planetsReturnedJson=await (planetsReturned.json());
    console.log("planetsReturnedJson",planetsReturnedJson);
    return planetsReturnedJson;
}

function pickPlanet(planets) {
    console.log("number of planets",planets.length);
    let index=Math.floor(Math.random()*planets.length);
    console.log(index);
    console.log(planets[index]);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
