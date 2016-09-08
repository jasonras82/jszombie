alert("Hello Colonel Mustard, welcome to the Clue Zombie Apocalypse.  You are roaming the Conservatory and suddenly a zombie comes running from the library next door!");

var weapon = '',
weaponArr = ['wrench', 'candlestick', 'lead pipe', 'rope', 'revolver', 'knife'],
weaponPosition = '';

function chooseWeapon(str) {
  weapon = prompt(str);
  if (weapon === '' || weapon === null || weapon === undefined){
    throw new Error ('You\'re no fun. ' + goodNight());
}
  
  weapon.toLowerCase();
  weaponPosition = weaponArr.indexOf(weapon);
  return weaponArr[weaponPosition];
}

function goodNight() {
  alert('Goodnight. You\'re dead.');
}

alert('You attack the zombie with your ' + chooseWeapon("You search around frantically for a weapon.  What do you choose?  The wrench? Candlestick? Lead Pipe? Rope? Revolver? What about the knife?"));

switch(weaponArr[weaponPosition]) {
  case 'wrench':
    var wrenchAttack = prompt('Where do you hit the zombie? In the head or the gut?');
    if(wrenchAttack === 'head') {
      alert('You killed the zombie but lost the wrench in his squishy head, another zombie enters the room and you reach for another weapon.');
      var weapon2 = chooseWeapon('Do you choose the Rope or the Lead Pipe?')
      if(weapon2 === 'rope') {
        alert('Really?  A rope? A zombie comes out from around the corner, sees your rope, laughs and eats your brains.');
        goodNight();
      }
      else {
        alert('Nice, that sucker works great as you fight off a few more zombies on the way to your underground bunker via the secret door in the Billard Room.');
        alert('Unfortunately, you got lead poisoning from the pipe, and died a slow and painful death a few months later.');
        goodNight();
      }
    }
    else {
      alert('Nice shot! He doubles over and you kick him in the head.  His head falls off and you run out of the room.');
      alert('Unfortunately, after the hit to the Zombie\'s stomach, your wrench is bent and useless. After running frantically towards the door of the mansion you meet another zombie, but having left the room with all of the weapons, the next zombie comes and eats your brains.')
      goodNight();
    }
  }
