import {UserType} from '../HW8'

const HW8_SORT_USERS = 'sort';
const HW8_CHECK_USERS = 'check';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up'
                ? [...state.sort((a, b) => a.name > b.name ? 1: -1)]
                : [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            // need to fix
        }
        case 'check': {

            return state.filter((u) => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}


// type SortType = ReturnType<typeof sort>;
export const sort = (value: 'up' | 'down') => {
    return {type: HW8_SORT_USERS, payload: value}
}

// type CheckType = ReturnType<typeof sort>;
export const check = (value: number) => {
    return {type: HW8_CHECK_USERS, payload: value}
}

