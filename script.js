// Write your JavaScript code here!

window.addEventListener("load", function() {
/*
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   */

   let formSubmit=document.getElementById("formSubmit");
   formSubmit.addEventListener("click", function(event){
       
        console.log("calling formSubmission");
        let submissionCheck=formSubmission(document,"faultyItems","Dave","Hope","10","20");
        console.log(submissionCheck);
        //window.alert("submissionCheck "+submissionCheck);

        //let submissionCheck=true;
        if(submissionCheck){

            let listedPlanets;
            console.log("listedPlanets");
            //window.alert("in submissionCheck");
            // Set listedPlanetsResponse equal to the value returned by calling myFetch()
            let listedPlanetsResponse=myFetch();
            console.log("listedPlanetsResponse",listedPlanetsResponse);
            //window.alert("start listedPlanets");
            listedPlanetsResponse.then(function (result) {
                listedPlanets = result;
                console.log("listedPlanetsA",listedPlanets);
            }).then(function () {
                console.log("listedPlanetsB",listedPlanets);
                // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
                let planet=pickPlanet(listedPlanets);
                console.log("planet",planet);
                console.log("planet name",planet.name);
                //console.log("planet url",planet.image);
                //window.alert(planet.name);
                //window.alert(planet.image);
                addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
            });

            //window.alert("finished true");
            event.preventDefault();
        }else{
            //window.alert("finished false");
            event.preventDefault();
        }
    });
});