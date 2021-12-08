function scuberGreetingForFeet(feet){
  if (feet <= 400)
    {return 'This one is on me!'}
  else if (feet > 2000 && feet <=2500)
    {return 'I will gladly take your thirty bucks.'}
  else (feet >= 2500)
    {return 'No can do.'}
}

function ternaryCheckCity(city){
 const cityWording = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
 return cityWording
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip)
  {case 'generous' : 
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.';
    break;}
    tip;
}