import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Wasserstofftechnologie fördern",
  description:
    "Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const possibleChange = startYear + 5 <= currentYear ? 1 : 0
    return {
      stateDebt: 3 as MrdEuro,
      carRenewablePercentage: changePercentBy(data.carRenewablePercentage, possibleChange),
    }
  },

  priority(game) {
    const v = game.values
    const totalUsage = v.localTransportUsage + v.longdistanceTransportUsage + v.carUsage
    const relCarPercentage: Percent = (v.carUsage / totalUsage) * 100
    return linear(40, 90, relCarPercentage)
  },
})
