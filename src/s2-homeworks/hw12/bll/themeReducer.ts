
type InitialStateType = {
    themeId: number
}
const initState: InitialStateType = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ChangeThemeId): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }


        default:
            return state
    }
}

type ChangeThemeId = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): ChangeThemeId => ({ type: 'SET_THEME_ID', id }) // fix any
