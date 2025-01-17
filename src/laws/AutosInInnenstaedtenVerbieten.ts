import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MioPsgrKm, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Autos in Innenstädten verbieten",
  description:
    "Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    var popularityChange = changePercentBy(data.popularity, -2)
    if (data.localTransportCapacity > data.localTransportUsage * 1.2) {
      popularityChange = changePercentBy(data.popularity, -1)
      if (startYear + 2 < currentYear) popularityChange = changePercentBy(data.popularity, 2)
    }

    const potentialUsageIncrease = (startYear === currentYear ? 0.1 * data.localTransportUsage : 0) as MioPsgrKm
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    return {
      popularity: popularityChange,
      carUsage: -usageIncrease,
      localTransportUsage: usageIncrease,
    }
  },

  priority(game) {
    const relCapacity: Percent = (game.values.localTransportCapacity / game.values.localTransportUsage) * 100
    return linear(90, 120, relCapacity)
  },
})
