import { AppStateType } from 'store/store'

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('app-state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: AppStateType) => {
  try {
    const serializedState = JSON.stringify(state)

    sessionStorage.setItem('app-state', serializedState)
  } catch {
    // ignore write errors
  }
}
