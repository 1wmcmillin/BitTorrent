//Type your code in this function
function Tracker(){



  let seeds =[];
  let percent = [];

  //implement all six functions below

function numOfSeeds(list, length){
  let found = 0;
    for(let i = 0; i < list.length; i++){
      if(list[i] === value){
        found++;
      }

    }
    return found;
}

function addSeed(s){
  list.push(s);
}


function removeSeed(name){
  
  for(let i = 0; i<seeds.length; i++){
    if(list[i] === name){
      seeds[i] = null;
      percent[i] = 0;
    }
  }
}

function reportHealth(){
  
  let leeches = 0;
  let total = 0;

  for(let i = 0; i < length; i++){

    total = total + percents[i]

    if(percents[i] === 0){
      leeches = leeches + 1
    }
  }
  return total / (percents.length - leeches);

}






}