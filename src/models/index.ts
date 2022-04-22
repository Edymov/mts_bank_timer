// @filename: models.ts
import { Models } from '@rematch/core'
import { messages } from './messages'

export interface RootModel extends Models<RootModel> {
    messages: typeof messages
}

export const models: RootModel = { messages }
