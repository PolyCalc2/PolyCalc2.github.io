//calculates attackForce
function attackForce(attack, attackerHealth, attackerMaxHealth) {
    var finalAttackForce = attack * (attackerHealth / attackerMaxHealth)

    return finalAttackForce
}
document.getElementById("attackForce").innerHTML = attackForce(2, 10, 10)

//calculates defenseForce
function defenseForce(defense, defenderHealth, defenderMaxHealth, defenseBonus) {
    var finalDefenseForce = defense * (defenderHealth / defenderMaxHealth) * defenseBonus

    return finalDefenseForce;
}
document.getElementById("defenseForce").innerHTML = defenseForce(1, 10, 10, 1.5)

//calculates totalDamage
function totalDamage(attackForce, defenseForce) {
    var finalTotalDamage = attackForce + defenseForce

    return finalTotalDamage;
}
document.getElementById("totalDamage").innerHTML = totalDamage(attackForce(2, 10, 10), defenseForce(1, 10, 10, 1.5))

//calculates how much damage is dealt by the attacker
function attackResult(attackForce, totalDamage, attack, accelerator) {
    var finalAttackResult = Math.round((attackForce / totalDamage)) * (attack * accelerator)

    return finalAttackResult;
}
document.getElementById("attackResult").innerHTML = attackResult(attackForce(2, 10, 10), totalDamage(attackForce(2, 10, 10), defenseForce(1, 10, 10, 1.5)), 2, 1)

//calculates how much return damage is dealt by the defender
function defenseResult(defenseForce, totalDamage, defenderDefense) {
    var finalDefenseResult = round((defenseForce / totalDamage) * defender.defense * accelerator)
    
    return finalDefenseResult;
}
