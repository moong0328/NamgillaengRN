import React, { FC } from "react"
// import * as Application from "expo-application"
import { 
  // Linking, 
  // Platform, 
  TextStyle, 
  View, 
  ViewStyle } from "react-native"
import { 
  // Button, 
  // ListItem, 
  Screen, Text, Icon } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing } from "../theme"
// import { isRTL } from "../i18n"
// import { useStores } from "../models"

function openLinkInBrowser(url: string) {
  alert(url)
}

export const HomeListScreen: FC<DemoTabScreenProps<"HomeList">> = function HomeListScreen(
  _props,
) {
  // const {
  //   authenticationStore: { logout },
  // } = useStores()

  // const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null

  // const demoReactotron = React.useMemo(
  //   () => async () => {
  //     console.tron.display({
  //       name: "DISPLAY",
  //       value: {
  //         appId: Application.applicationId,
  //         appName: Application.applicationName,
  //         appVersion: Application.nativeApplicationVersion,
  //         appBuildVersion: Application.nativeBuildVersion,
  //         hermesEnabled: usingHermes,
  //       },
  //       important: true,
  //     })
  //   },
  //   [],
  // )

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$homeTitle}>
        <View>
          <Text preset="subheading" tx="homeListScreen.subTitle" />
          <Text style={$title} preset="heading" tx="homeListScreen.title" />
        </View>
        <Icon icon="components" onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite/issues")} color={colors.tint}></Icon>
      </View>
      <View style={$homeSection}>
        <Text preset="formLabel" style={$section} text="최신순" />
        <Text preset="formLabel" style={$section} text="과거순" />
        <Text preset="formLabel" style={$section} text="위치별" />
        <Text preset="formLabel" style={$section} text="업종별" />
        <Text preset="formLabel" style={$section} text="가격대별" />
      </View>
      {/* <View style={$itemsContainer}>
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Id</Text>
              <Text>{Application.applicationId}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Name</Text>
              <Text>{Application.applicationName}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Version</Text>
              <Text>{Application.nativeApplicationVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Build Version</Text>
              <Text>{Application.nativeBuildVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">Hermes Enabled</Text>
              <Text>{String(usingHermes)}</Text>
            </View>
          }
        />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="demoDebugScreen.reactotron" onPress={demoReactotron} />
        <Text style={$hint} tx={`demoDebugScreen.${Platform.OS}ReactotronHint` as const} />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="common.logOut" onPress={logout} />
      </View> */}
    </Screen>
  )
}



const $title: TextStyle = {
  marginBottom: 0,
}

const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $homeTitle: ViewStyle = {
  height: 70,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.extraSmall
}

const $homeSection: ViewStyle = {
  height: 70,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: spacing.medium,
}

const $section: TextStyle = {
  marginRight: spacing.extraSmall,
}

// const $reportBugsLink: TextStyle = {
//   color: colors.tint,
//   alignItems: "center"
//   // alignSelf: isRTL ? "flex-start" : "flex-end",
// }

// const $item: ViewStyle = {
//   marginBottom: spacing.medium,
// }

// const $itemsContainer: ViewStyle = {
//   marginBottom: spacing.extraLarge,
// }

// const $button: ViewStyle = {
//   marginBottom: spacing.extraSmall,
// }

// const $buttonContainer: ViewStyle = {
//   marginBottom: spacing.medium,
// }

// const $hint: TextStyle = {
//   color: colors.palette.neutral600,
//   fontSize: 12,
//   lineHeight: 15,
//   paddingBottom: spacing.large,
// }

// @demo remove-file
