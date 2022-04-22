import { createModel } from '@rematch/core'
import { RootModel } from '.'

type MessagesModel = {
    messages: Array<string>,
    replacingMode: boolean
}

const initialState: MessagesModel = {
    messages: [],
    replacingMode: false
}

export const messages = createModel<RootModel>()({
    state: initialState,
    reducers: {
        add (state, payload: string) {
            const { messages, replacingMode } = state
            let newMessages = replacingMode ? [payload] : [...messages, payload]

            return { ...state, messages: newMessages }
        },

        clear (state) {
            return { ...state, messages: [] }
        },

        changeMode (state) {
            const { replacingMode } = state
            return { ...state, replacingMode: !replacingMode }
        }
    },
    effects: (dispatch) => ({
        addMessage(payload: string) {
            dispatch.messages.add(payload)
        },

        clearMessages() {
            dispatch.messages.clear()
        },

        changeReplacingMode() {
            dispatch.messages.changeMode()
        }
    }),
})
