import { View, StyleSheet } from 'react-native'

interface SpacerProps {
    horizontal?: number
    vertical?: number
}

export default function Spacer({horizontal = 0, vertical = 0}: SpacerProps) {
    return <View style={{width: horizontal, height: vertical}}/>
}