// attacker stats
var attackerHealth = 10;
var attackerMaxHealth = 10;
var attackerAttack = 2;

// defender stats
var defenderHealth = 10;
var defenderMaxHealth = 10;
var defenderDefense = 2;

// determines the defense bonus
var standardDefenseBonus = false;
var cityWall = false;

// calculates attackForce
function attackForce(attackerAttack, attackerHealth, attackerMaxHealth) {
    var finalAttackForce = attack * (attackerHealth / attackerMaxHealth)

    return finalAttackForce
}
var attackForceValue = attackForce(attackerAttack, defenderDefense, 10);
document.getElementById("attackForce").innerHTML = attackForceValue

// calculates defenseForce
function defenseForce(defenderDefense, defenderHealth, defenderMaxHealth, defenseBonus) {
    /*if (standardDefenseBonus) {
        defenseBonus = 1.5
    } else if (cityWall) {
        defenseBonus = 4
    }*/
    
    var finalDefenseForce = defense * (defenderHealth / defenderMaxHealth) * defenseBonus

    return finalDefenseForce;
}
var defenseForceValue = defenseForce(2, 10, 10, 0);
document.getElementById("defenseForce").innerHTML = defenseForceValue

// calculates totalDamage
function totalDamage(attackForce, defenseForce) {
    var finalTotalDamage = attackForce + defenseForce

    return finalTotalDamage;
}
var totalDamageValue = totalDamage(attackForceValue, defenseForceValue);
document.getElementById("totalDamage").innerHTML = totalDamageValue

// calculates how much damage is dealt by the attacker
function attackResult(attackForce, totalDamage, attackerAttack) {
    var finalAttackResult = Math.round((attackForce / totalDamage)) * (attackerAttack * 4.5)

    return finalAttackResult;
}
var attackResultValue = attackResult(attackForceValue, totalDamageValue, attackerAttack);
document.getElementById("attackResult").innerHTML = attackResultValue

// calculates how much return damage is dealt by the defender
function defenseResult(defenseForce, totalDamage, defenderDefense) {
    var finalDefenseResult = round((defenseForce / totalDamage) * defender.defense * accelerator)
    
    return finalDefenseResult;
}
var defenseResultValue = defenseResult(defensekForceValue, totalDamageValue, defenderDefense);
document.getElementById("defenseResult").innerHTML = defenseResult

// calculates the new health of the attacker
function attackerNewHealth(attackerHealth, defenseResult) {
    return attackerHealth - defenseResult;
}
var attackerNewHealthValue = attackerNewHealth(attackerHealth, defenseResultValue);
document.getElementById("attackerNewHealth)

// calculates the new health of the defender
function defenderNewHealth(defenderHealth, attackResult) {
    var defenderFinalHealth = defenderHealth - attackResult;
    
    if (defenderFinalHealth < 1) {
        
}
