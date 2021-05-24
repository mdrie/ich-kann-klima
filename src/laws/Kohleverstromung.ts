import { LawDefinition } from "../types"

export default {
  title: "Kohleverstromung einstellen",
  description: "Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",

  effects(data, startYear, currentYear) {
    const yearsActive = currentYear - startYear

    const compensation = yearsActive < 18 ? 4300 / 18 : 0 // Mio €
    const subventions = 2500 // Mio €

    const directJobsInvolved = 20 // Tsd people
    const indirectJobsInvolved = 60
    const settlingFactor = (10 - yearsActive) / 10
    const jobs = Math.max((directJobsInvolved + indirectJobsInvolved / 2) * settlingFactor, 0)

    return {
      co2emmissions: -data.electricityCoal * 0.399,
      stateDebt: -compensation + subventions,
      unemployment: jobs,
      electricityCoal: -data.electricityCoal,
    }
  },

  priority(game) {
    return 100 - game.values.unemployment / 100 // Not allowed if unemployment over 10 000 000
  },
} as LawDefinition