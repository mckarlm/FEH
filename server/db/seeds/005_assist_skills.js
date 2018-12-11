
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assist_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('assist_skills').insert([
        {
          name: `Ardent Sacrifice`,
          description: `Restores 10 HP to target ally. Unit loses 10 HP but cannot go below 1.`
        },
        {
          name: `Draw Back`,
          description: `Unit moves 1 space away from target ally. Ally moves to unit\'s previous space.`
        },
        {
          name: `Harsh Command`,
          description: `Converts penalties on target into bonuses.`
        },
        {
          name: `Pivot`,
          description: `Unit moves to opposite side of target ally.`
        },
        {
          name: `Reciprocal Aid`,
          description: `Unit and target ally swap HP. (Neither can go above their max HP.)`
        },
        {
          name: `Reposition`,
          description: `Target ally moves to opposite side of unit.`
        },
        {
          name: `Shove`,
          description: `Pushes target ally 1 space away.`
        },
        {
          name: `Smite`,
          description: `Pushes target ally 2 spaces away.`
        },
        {
          name: `Swap`,
          description: `Unit and target ally swap spaces.`
        },
        // ====================== //
        {
          name: `Rally Attack`,
          description: `Grants Atk+4 to target ally for 1 turn.`
        },
        {
          name: `Rally Up Atk`,
          description: `Grants Atk+4 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Up Atk+`,
          description: `Grants Atk+6 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Speed`,
          description: `Grants Spd+4 to target ally for 1 turn.`
        },
        {
          name: `Rally Up Spd`,
          description: `Grants Spd+4 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Up Spd+`,
          description: `Grants Spd+6 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Defense`,
          description: `Grants Defense+4 to target ally for 1 turn.`
        },
        {
          name: `Rally Up Def`,
          description: `Grants Def+4 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Up Def+`,
          description: `Grants Def+6 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Resistance`,
          description: `Grants Res+4 to target ally for 1 turn.`
        },
        {
          name: `Rally Up Res`,
          description: `Grants Res+4 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Up Res+`,
          description: `Grants Res+6 to target ally and allies within 2 spaces of target (excluding unit) for 1 turn.`
        },
        {
          name: `Rally Atk/Spd`,
          description: `Grants Atk/Spd+3 to target ally for 1 turn.`
        },
        {
          name: `Rally Atk/Spd+`,
          description: `Grants Atk/Spd+6 to target ally for 1 turn.`
        },
        {
          name: `Rally Atk/Def`,
          description: `Grants Atk/Def+3 to target ally for 1 turn.`
        },
        {
          name: `Rally Atk/Def+`,
          description: `Grants Atk/Def+6 to target ally for 1 turn.`
        },
        {
          name: `Rally Atk/Res`,
          description: `Grants Atk/Res+3 to target ally for 1 turn.`
        },
        {
          name: `Rally Atk/Res+`,
          description: `Grants Atk/Res+6 to target ally for 1 turn.`
        },
        {
          name: `Rally Spd/Def`,
          description: `Grants Spd/Def+3 to target ally for 1 turn.`
        },
        {
          name: `Rally Spd/Def+`,
          description: `Grants Spd/Def+6 to target ally for 1 turn.`
        },
        {
          name: `Rally Spd/Res`,
          description: `Grants Spd/Res+3 to target ally for 1 turn.`
        },
        {
          name: `Rally Spd/Res+`,
          description: `Grants Spd/Res+6 to target ally for 1 turn.`
        },
        {
          name: `Rally Def/Res`,
          description: `Grants Def/Res+3 to target ally for 1 turn.`
        },
        {
          name: `Rally Def/Res+`,
          description: `Grants Def/Res+6 to target ally for 1 turn.`
        },
        // ====================== //
        {
          name: `Heal`,
          description: `Restores 5 HP to target ally.`
        },
        {
          name: `Mend`,
          description: `Restores 10 HP to target ally.`
        },
        {
          name: `Reconcile`,
          description: `Restores 7 HP to unit and target ally.`
        },
        {
          name: `Martyr`,
          description: `Slow Special trigger (cooldown count+1). Restores HP = damage dealt to unit+7. Restores HP to unit = half damage dealt to unit.`
        },
        {
          name: `Martyr+`,
          description: `Restores HP = damage dealt to unit + 50% of unit\'s Atk. (Minimum of 7 HP.) Restores HP to unit = half of damage dealt to unit.`
        },
        {
          name: `Physic`,
          description: `Restores 8 HP to target ally. Range = 2.`
        },
        {
          name: `Physic+`,
          description: `Restores HP = 50% of Atk. (Minimum of 8 HP.) Range = 2.`
        },
        {
          name: `Recover`,
          description: `Slows Special trigger (cooldown count+1). Restores 15 HP to target ally.`
        },
        {
          name: `Recover+`,
          description: `Restores HP = 50% of Atk+10. (Minimum of 15 HP.)`
        },
        {
          name: `Rehabilitate`,
          description: `Slows Special trigger (cooldown count+1). If target\'s HP is ≤ 50%, the lower the target\'s HP, the more HP is restored. (Minimum of 7 HP.)`
        },
        {
          name: `Rehabilitate+`,
          description: `Restores HP = 50% of Atk-10. (Minimum of 7 HP.) If target\'s HP is ≤ 50%, the lower the target\'s HP, the more HP is restored.`
        },
        {
          name: `Restore`,
          description: `Restores 8 HP. Neutralizes ally\'s penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally\'s next action.`
        },
        {
          name: `Restore+`,
          description: `Restores HP = 50& of Atk. (Minimum of 8 HP.) Neutralizes ally\'s penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally\'s next action.`
        },
        // ================ PRF ================ //
        {
          name: `Dance`,
          description: `Grants another action to target ally. (Cannot target an ally with Sing or Dance.)`,
          prf: true
        },
        {
          name: `Sacrifice`,
          description: `Convert penalties on target to bonuses. Restores HP to target = unit\'s current HP-1. Reduces unit\'s HP by amount restored.`,
          prf: true
        },
        {
          name: `Future Vision`,
          description: `Unit and target ally swap spaces. Grants another action to unit. (Additional action granted once per turn only.)`,
          prf: true
        },
        {
          name: `Sing`,
          description: `Grants another action to target ally. (Cannot target an ally with Sing or Dance.)`,
          prf: true
        }
      ]);
    });
};