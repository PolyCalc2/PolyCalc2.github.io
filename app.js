// determines the defense bonus
var standardDefenseBonus = false;
var cityWall = false;

// calculates attackForce
function attackForce(attack, attackerHealth, attackerMaxHealth) {
    var finalAttackForce = attack * (attackerHealth / attackerMaxHealth)

    return finalAttackForce
}
var attackForceValue = attackForce(2, 10, 10);
document.getElementById("attackForce").innerHTML = attackForceValue

// calculates defenseForce
function defenseForce(defense, defenderHealth, defenderMaxHealth, defenseBonus) {
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
function attackResult(attackForce, totalDamage, attack, accelerator) {
    var finalAttackResult = Math.round((attackForce / totalDamage)) * (attack * accelerator)

    return finalAttackResult;
}
document.getElementById("attackResult").innerHTML = attackResult(attackForceValue, totalDamageValue, defenseForce(1, 10, 10, 1.5)), 2, 1)

// calculates how much return damage is dealt by the defender
function defenseResult(defenseForce, totalDamage, defenderDefense) {
    var finalDefenseResult = round((defenseForce / totalDamage) * defender.defense * accelerator)
    
    return finalDefenseResult;
}
document.getElementById("defenseResult").innerHTML = defenseResult

// calculates the new health of the attacker
function 
