import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../components"
import { translate } from "../i18n"
import { DemoCommunityScreen, DemoShowroomScreen, DemoDebugScreen } from "../screens"
import { DemoPodcastListScreen } from "../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type DemoTabParamList = {
  DemoCommunity: undefined
  DemoShowroom: undefined
  DemoDebug: undefined
  DemoPodcastList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 80 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="DemoShowroom"
        component={DemoShowroomScreen}
        options={{
          tabBarLabel: ({ focused }) => <Text style={[{color: (focused && colors.tint) || 'black'}, $tabBarLabel]}>{translate("demoNavigator.homeTab")}</Text>,
          tabBarIcon: ({ focused }) => <Icon icon="home" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="DemoCommunity"
        component={DemoCommunityScreen}
        options={{
          tabBarLabel: ({ focused }) => <Text style={[{color: (focused && colors.tint) || 'black'}, $tabBarLabel]}>{translate("demoNavigator.evaluationTab")}</Text>,
          tabBarIcon: ({ focused }) => <Icon icon="evaluation" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="DemoPodcastList"
        component={DemoPodcastListScreen}
        options={{
          tabBarLabel: ({ focused }) => <Text style={[{color: (focused && colors.tint) || 'black'}, $tabBarLabel]}>{translate("demoNavigator.laengstarTab")}</Text>,
          tabBarIcon: ({ focused }) => <Icon icon="laengstargram" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="DemoDebug"
        component={DemoDebugScreen}
        options={{
          tabBarLabel: ({ focused }) => <Text style={[{color: (focused && colors.tint) || 'black'}, $tabBarLabel]}>{translate("demoNavigator.moreTab")}</Text>,
          tabBarIcon: ({ focused }) => <Icon icon="more" color={focused && colors.tint} />,
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopWidth: 0.2,
  borderTopColor: colors.border
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.bold,
  lineHeight: 16,
  flex: 1,
}

// @demo remove-file
