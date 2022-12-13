function scuberGreetingForFeet(number){
  let result
  if (number <= 400) {
    result = "This one is on me!";
  }
  else if (number > 400 && number <= 2000) {
    result = "That will be twenty bucks.";
  }
  else if (number > 2000 && number <=2500) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city){
  let result
  if (city === "NYC") {
    result = "Ok, sounds good.";
  }
  else {
    result = "No go."
  }
  return result
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}