import { Dimensions } from 'react-native'

export const VIEWPORT  = Dimensions.get('window')

// headerbar height = 64 points in iphone 6
export const HEADERBAR_HEIGHT = VIEWPORT.height * 64 / 667
