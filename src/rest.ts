import { getFeat, SKILL_CATEGORIES } from './feats'

export function wrapRestForTheNight() {
    const original = game.pf2e.actions.restForTheNight
    game.pf2e.actions.restForTheNight = async (options: ActionDefaultOptions) => {
        const result = await original(options)
        if (result.length && options.actors) afterRest(options.actors)
        return result
    }
}

function afterRest(actors: ActorPF2e | ActorPF2e[]) {
    actors = Array.isArray(actors) ? actors : [actors]

    const characters = actors.filter(x => x.isOfType('character')) as CharacterPF2e[]
    for (const actor of characters) {
        const update: EmbeddedDocumentUpdateData<ItemPF2e>[] = []

        for (const featName of SKILL_CATEGORIES) {
            const feat = getFeat(actor, featName)
            if (!feat) continue

            const rules = deepClone(feat._source.system.rules)
            const ruleIndex = rules.findIndex(x => 'pf2e-dailies' in x)

            if (ruleIndex >= 0) {
                rules.splice(ruleIndex, 1)
                update.push({ _id: feat.id, 'system.rules': rules })
            }
        }

        if (update.length) actor.updateEmbeddedDocuments('Item', update)
    }
}