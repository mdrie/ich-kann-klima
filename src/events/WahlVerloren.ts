import { createEvent } from "../Factory"
import { Store } from "../store"

export default createEvent({
  title: "Wahl verloren",
  description: `Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.
  `,

  apply(context) {
    context.dispatch("gameOver")
  },

  probability(store: Store) {
    return store.state.game && store.state.game.values.popularity <= 0 ? 1 : 0
  },
})
