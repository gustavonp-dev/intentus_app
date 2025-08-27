
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStaticNavigation } from '@react-navigation/native';
import AppDrawer from '../structures/app_drawer';
import AppBar from '../structures/app_bar';
import PlannerView from '../../../../planner/ui/planner/planner_view';

const Navigator = createStaticNavigation(
    createDrawerNavigator({
        screenOptions: {
            header: () => <AppBar/>
        },
        drawerContent: () => <AppDrawer/>,
        screens: {
            Planner: {
                screen: PlannerView,
                options: {
                    headerRight: () => {
                    return (
                        <Text>Teste</Text>
                    );
                    } 
                }
            }
        }
    })
);

export default function Navigation() {
    return <Navigator/>
}