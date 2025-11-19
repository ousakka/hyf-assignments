const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeToArrive()
{
   const time= travelInformation.destinationDistance/travelInformation.speed;
   const hours=Math.floor(time);
   const minutes=Math.floor((time-hours)*60);
    return hours+" hours "+minutes+" minutes";
}

const travelTime = timeToArrive(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes