//calculates the attack force of a unit
function attackForce (attack, attackerHealth, attackerMaxHealth) {
    var finalAttackForce = attack * (attackerHealth / attackerMaxHealth)
}
document.getElementById("attackForce").innerHTML = attackForce(2, 10, 10)

//calculates the defense force of a unit
function defenseForce (defense, defenderHealth, defenderMaxHealth, defenseBonus) {
    var finalDefenseForce = defense * (defenderHealth / defenderMaxHealth) * defenseBonus
}
document.getElementById("defenseForce").innerHTML = defenseForce(1, 10, 10, 1.5)

//calculates the total damage of the attack
function totalDamage (attackForce, defenseForce) {
    var finalAttackForce = attack * (attackerHealth / attackerMaxHealth)
}
document.getElementById("totalDamage").innerHTML = totalDamage(2, 10, 10)

//calculates the health of the unit being attacked
function attackResult (attack, attackerHealth, attackerMaxHealth) {
    var finalAttackForce = attack * (attackerHealth / attackerMaxHealth)
}
document.getElementById("attackForce").innerHTML = attackForce(2, 10, 10)
