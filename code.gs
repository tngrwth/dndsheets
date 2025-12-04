function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData(){
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
return sheet.getRange("").getValue();

}

function roll20() {
 const die = Math.floor((Math.random()*20)+1)

 return (die + " (d20)");

}

function roll12() {
 const die = Math.floor((Math.random()*12)+1)

 return (die + " (d12)");

}

function roll10() {
 const die = Math.floor((Math.random()*10)+1)

 return (die + " (d10)");

}

function roll8() {
 const die = Math.floor((Math.random()*8)+1)

 return (die + " (d8)");

}

function roll6() {
 const die = Math.floor((Math.random()*6)+1)

 return (die + " (d6)");

}

function roll4() {
 const die = Math.floor((Math.random()*4)+1)

 return (die + " (d4)");

}

function atk1name(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("L15").getValue(); //attack name

return atk;

}
function atk1bonus(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("V15").getValue(); //attack bonus

return atk;

}

function atk1range(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("AC15").getValue(); //attack range

return atk;

}
function atk1dmg(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("Y15").getValue(); //attack range

return atk;

}

function atk2name(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("L16").getValue(); //attack name

return atk;

}
function atk2bonus(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("V16").getValue(); //attack bonus

return atk;

}

function atk2range(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("AC16").getValue(); //attack range

return atk;

}
function atk2dmg(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("Y16").getValue(); //attack range

return atk;

}

function atk3name(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("L17").getValue(); //attack name

return atk;

}
function atk3bonus(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("V17").getValue(); //attack bonus

return atk;

}

function atk3range(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("AC17").getValue(); //attack range

return atk;

}
function atk3dmg(){
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var atk = ss.getRange("Y17").getValue(); //attack range

return atk;

}

function rollAtkDmg1(){
 var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 var mod = parseInt(ss.getRange("B6").getValue()); //sets STR modifier
 //const d20 = Math.floor((Math.random()*20)+1);
 //var roll = ((d20)+(strmod));
 var atk = 1+mod;

return (atk+" bludgeoning");

}

function rollAtkDmg3(){
 //var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 //var mod = 
 const d8 = Math.floor((Math.random()*8)+1);
 //var roll = ();
 //var atk = 1+mod;

return (d8+" piercing");

}

function rollAtkDmg2(){
 //var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 //var mod = 
 const d4 = Math.floor((Math.random()*4)+1);
 //var roll = ();
 //var atk = 1+mod;

return (d4+" bludgeoning");

}

function processText(textFromUser) {
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var hp = ss.getRange("L7").getValue(); //sets current HP value
var sum = Number(hp-textFromUser);
const fixedsum = isNaN(sum) ? hp : sum;

ss.getRange("L7").setValue(fixedsum);

limithp();

}
function processheal(textFromUser) {
var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
var hp = ss.getRange("L7").getValue(); //sets current HP value
var sum = parseInt(hp)+parseInt(textFromUser);
const fixedsum = isNaN(sum) ? hp : sum;

ss.getRange("L7").setValue(fixedsum);

limithp();

}

function plusexhaust(){
  var ss = SpreadsheetApp.getActive().getSheetByName("MAIN"); // Name of the Sheet
  var exhaustlvl = ss.getRange("Z35").getValue(); // grabs current level of exhaustion

  ss.getRange("Z35").setValue(parseInt(exhaustlvl)+1);

  if (exhaustlvl > 7){
    exhaustlvl = 7;
  };

  limithp();
}

function reduceexhaust(){
  var ss = SpreadsheetApp.getActive().getSheetByName("MAIN"); // Name of the Sheet
  var exhaustlvl = ss.getRange("Z35").getValue(); // grabs current level of exhaustion

  ss.getRange("Z35").setValue(parseInt(exhaustlvl)-1);

  if (exhaustlvl < 0){
    exhaustlvl = 0;
  };
  
  limithp();
}

function rollhitdie1() {
  var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
  var hit = ss.getRange("S11").getValue(); // sets current hit die value
  var hp = Number(ss.getRange("L7").getValue()); //sets current HP value
  var con = ss.getRange("AW4").getValue(); // sets constitution bonus  
  var maxhp = Number(ss.getRange("L10").getValue()); //sets max hp value
  var die = ss.getRange("V10").getValue(); // sets value of hit die
  const d6 = Math.floor((Math.random()*die)+1); // hit die. 
    ss.getRange("R8:W8").setValue("FALSE"); // resets death saving throws


   if (hit > 0 && hp < maxhp){
    ss.getRange("S11").setValue(hit-1); // Reduces current hit die total by 1
    ss.getRange("L7").setValue(hp+d6+con); // adds hp equal to rolling one hit die
    };

    if (hp > maxhp){
      ss.getRange("L7").setValue(maxhp); // sets hp = max hp      
    };
  
  limithp();
}

function shortr(){
  var ss = SpreadsheetApp.getActive().getSheetByName("MAIN"); // Name of the Sheet
  var exhaustlvl = ss.getRange("Z35").getValue(); // grabs current level of exhaustion

  if (exhaustlvl > 0){
    ss.getRange("Z35").setValue(exhaustlvl-1)
  } 
}

function longr() {

  var ss = SpreadsheetApp.getActive().getSheetByName("MAIN"); // Name of the Sheet
  var n = ss.getRange("L10").getValue(); // sets max hp value
  var maxhitdice = ss.getRange("T13").getValue(); // fetches max possible hit dice
  var hitdice = ss.getRange("S11").getValue(); // sets current hit die value
 // var exhaustlvl = ss.getRange("Z35").getValue(); // grabs current level of exhaustion
  const half = Math.floor(maxhitdice/2); // divides that number by two
  
    ss.getRange("L7:N8").setValue(n); // Resets health to max
    ss.getRange("Spells!E6:J7").setValue("FALSE"); // 1st level Spell slots.
    ss.getRange("Spells!E15:J16").setValue("FALSE"); // level 2
    ss.getRange("Spells!E24:J25").setValue("FALSE"); // level 3
    ss.getRange("Spells!E33:J34").setValue("FALSE"); // level 4
    ss.getRange("Spells!E42:J43").setValue("FALSE"); // level 5
    ss.getRange("Spells!E51:J52").setValue("FALSE"); // level 6
    ss.getRange("Spells!E60:J61").setValue("FALSE"); // level 7
    ss.getRange("Spells!E69:J70").setValue("FALSE"); // level 8
    ss.getRange("Spells!E78:J79").setValue("FALSE"); // level 9
    ss.getRange("R8:W8").setValue("FALSE"); // resets death saving throws
    ss.getRange("Abilities!M3").setValue("FALSE"); // Resets Skill Expertise
    ss.getRange("Abilities!M17").setValue("FALSE"); // Resets Healing Hands
    ss.getRange("Abilities!M23").setValue("FALSE"); // Channel Divinity
    if(hitdice<maxhitdice){
      ss.getRange("S11").setValue(hitdice+half); // adds half of possible hit dice (rounded down) to current hit dice.
    }
//    if(exhaustlvl>0){ // checks if exhaustion != 0
  //    ss.getRange("Z35").setValue(exhaustlvl-4);
    //}
    limithp();
  } 

  // COMPLETE REST

function completer() {

 var ss = SpreadsheetApp.getActive().getSheetByName("MAIN"); // Name of the Sheet
 var n = ss.getRange("L10").getValue(); // sets max hp value
 var x = ss.getRange ("AC2").getValue(); // sets max hit die value
 var y = ss.getRange("S11").getValue(); // sets current hit die value
// var exhaustlvl = ss.getRange("Z35").getValue(); // grabs current level of exhaustion
 var insp1 = ss.getRange("Y7").getValue(); 
 var insp2 = ss.getRange("Z7").getValue(); //checks if you have any points of Inspiration

    ss.getRange("L7:N8").setValue(n); // Resets health to max
    ss.getRange("Spells!E6:J7").setValue("FALSE"); // 1st level Spell slots.
    ss.getRange("Spells!E15:J16").setValue("FALSE"); // level 2
    ss.getRange("Spells!E24:J25").setValue("FALSE"); // level 3
    ss.getRange("Spells!E33:J34").setValue("FALSE"); // level 4
    ss.getRange("Spells!E42:J43").setValue("FALSE"); // level 5
    ss.getRange("Spells!E51:J52").setValue("FALSE"); // level 6
    ss.getRange("Spells!E60:J61").setValue("FALSE"); // level 7
    ss.getRange("Spells!E69:J70").setValue("FALSE"); // level 8
    ss.getRange("Spells!E78:J79").setValue("FALSE"); // level 9
    ss.getRange("R8:W8").setValue("FALSE"); // resets death saving throws
    ss.getRange("Abilities!M3").setValue("FALSE"); // Resets Skill Expertise
    ss.getRange("Abilities!M17").setValue("FALSE"); // Resets Healing Hands
    ss.getRange("Abilities!M23").setValue("FALSE"); // Channel Divinity

    if (y<x){
      ss.getRange("S11").setValue(x) // resets hit dice to max
    }
   // if(exhaustlvl>0){
   //   ss.getRange("Z35").setValue(0); // resets exhaustion to min
   // }
    if (insp1==false){
      ss.getRange("Y7").setValue("TRUE"); // awards 1 point of inspiration
    }
    if (insp1==true){
      ss.getRange("Z7").setValue("TRUE"); // awards an additional point if you already had one
    }
    if (insp2==true){
      ss.getRange("AA7").setValue("TRUE"); // finally, awards a third point if you already had two
    };

    limithp();
} 


function limithp(){
  var ss = SpreadsheetApp.getActive().getSheetByName("MAIN");  // Name of the Sheet
  var hp = ss.getRange("L7").getValue(); //sets current HP value
  var maxhp = ss.getRange("L10").getValue(); //sets max hp value
  var exhaustlvl = ss.getRange ("Z35").getValue(); // sets exhaustion level

  if (hp > maxhp){
        ss.getRange("L7").setValue(maxhp); // sets hp = max hp
  };
  if (hp < 0){
    ss.getRange("L7").setValue(0); // if hp < 0, sets = 0
  };

  if (exhaustlvl > 7){
    ss.getRange ("Z35").setValue(7);
  };
  if (exhaustlvl < 0){
    ss.getRange ("Z35").setValue(0);
  };

}

function rollspells(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("G8").getValue(); //sets spcst modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return ("Spell ATK roll: "+roll);

}

function rollAtk1(){
 var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 var mod = ss.getRange("V15").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" to hit");

}

function rollAtk2(){
 var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 var mod = ss.getRange("V16").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" to hit");

}

function rollAtk3(){
 var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 var mod = ss.getRange("V17").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" to hit");

}

function rollStrength(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var strmod = ss.getRange("C8").getValue(); //sets STR modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(strmod));

 return (roll+" STR");

}
function rollDexterity(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C9").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" DEX");

}

function rollConstitution(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C10").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" CON");

}
function rollIntelligence(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C11").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" INT");

}
function rollWisdom(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C12").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" WIS");

}

function rollCharisma(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C13").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" CHA");

}

function rollAthl(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C16").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Athletics");

}

function rollAcro(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C17").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Acrobatics");

}

function rollSleight(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C18").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Sleight of Hand");

}
function rollStl(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C19").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Stealth");

}

function rollArca(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C20").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Arcana");

}

function rollHist(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C21").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" History");

}

function rollInve(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C22").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Investigation");

}

function rollNatu(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C23").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Nature");

}

function rollReli(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C24").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Religion");

}

function rollAnim(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C25").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Animal Handling");

}

function rollInsi(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C26").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Insight");

}

function rollMedi(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C27").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Medicine");

}

function rollPerc(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C28").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Perception");

}

function rollSurv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C29").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Survival");

}

function rollDece(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C30").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Deception");

}

function rollInti(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C31").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Intimidation");

}

function rollPerf(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C32").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Performance");

}

function rollPers(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("C33").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" Persuasion");

}

function rollSTRsv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("E8").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" STR save");

}

function rollDEXsv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("E9").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" DEX save");

}

function rollCONsv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("E10").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" CON save");

}

function rollINTsv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("E11").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" INT save");

}

function rollWISsv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("E12").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" WIS save");

}

function rollCHAsv(){
 var ss = SpreadsheetApp.getActive().getSheetByName("app");  // Name of the Sheet
 var mod = ss.getRange("E13").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+" CHA save");

}

function rollInit(){
 var ss = SpreadsheetApp.getActive().getSheetByName("main");  // Name of the Sheet
 var mod = ss.getRange("U2").getValue(); //sets modifier
 const d20 = Math.floor((Math.random()*20)+1);
 var roll = ((d20)+(mod));

 return (roll+"  Initiative");

}

function getName() {
  return SpreadsheetApp.getActiveSheet().getRange("app!C2").getValue();
}
function getLvl() {
  return SpreadsheetApp.getActiveSheet().getRange("app!C3").getValue();
}
function getClass() {
  return SpreadsheetApp.getActiveSheet().getRange("app!C4").getValue();
}
function getPlayer() {
  return SpreadsheetApp.getActiveSheet().getRange("INFO!H4").getValue();
}
function getRace() {
  return SpreadsheetApp.getActiveSheet().getRange("app!c5").getValue();
}
function getSTR() {
  return SpreadsheetApp.getActiveSheet().getRange("app!d8").getValue();
}
function getSTRbon() {
  return SpreadsheetApp.getActiveSheet().getRange("app!c8").getValue();
}
function getDEX() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B12").getValue();
}
function getDEXbon() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B10").getValue();
}
function getCON() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B16").getValue();
}
function getCONbon() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B14").getValue();
}
function getINT() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B20").getValue();
}
function getINTbon() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B18").getValue();
}
function getWIS() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B26").getValue();
}
function getWISbon() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B24").getValue();
}
function getCHA() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B32").getValue();
}
function getCHAbon() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!B30").getValue();
}
function getATHLscore() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F6").getValue();
}
function getACROscore() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F10").getValue();
}
function getSOHscore() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F11").getValue();
}
function getStealthscore() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F12").getValue();
}
function getArcana() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F18").getValue();
}
function getHistory() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F19").getValue();
}
function getInvestigation() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F20").getValue();
}
function getNature() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F21").getValue();
}
function getReligion() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F22").getValue();
}
function getAnimals() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F24").getValue();
}
function getInsight() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F25").getValue();
}
function getMedicine() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F26").getValue();
}
function getPerception() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F27").getValue();
}
function getSurvival() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F28").getValue();
}
function getDeception() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F30").getValue();
}
function getIntimidation() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F31").getValue();
}
function getPerformance() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F32").getValue();
}
function getPersuasion() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!F33").getValue();
}
function getInitiative() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!U2").getValue();
}
function getProficiency() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!M2").getValue();
}
function getArmorClass() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!O7").getValue();
}
function getPassivePerception() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!Q2").getValue();
}
function getMovement() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!Y2").getValue();
}
function getSpellcasting() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!X11").getValue();
}
function getSpellSave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!AB11").getValue();
}
function getSpellCastMod() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!AC7").getValue();
}
function getMaxHP() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!L10").getValue();
}
function getTHP() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!O10").getValue();
}
function getHP() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!L7").getValue();
}
function getHitDice() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!S11").getValue();
}
function getMaxHitDice() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!AC2").getValue();
}
function getExhaustion() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!Z35").getValue();
}

function getSTRsave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!J5").getValue();
}

function getDEXsave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!J9").getValue();
}

function getCONsave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!J13").getValue();
}

function getINTsave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!J17").getValue();
}

function getWISsave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!J23").getValue();
}

function getCHAsave() {
  return SpreadsheetApp.getActiveSheet().getRange("MAIN!J29").getValue();
}

function getCharbg() {
  return SpreadsheetApp.getActiveSheet().getRange("INFO!V9").getValue();
}
