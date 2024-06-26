
//app.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Profile from "./screens/profile/Profile";
import DeleteProfile from "./screens/profile/DeleteProfile";
import UpdateProfile from "./screens/profile/UpdateProfile";
import { Ionicons } from '@expo/vector-icons';
import ForgotPassword from "./screens/auth/ForgotPassword";
import GroupChat from "./screens/GroupChat";
import GroupChatScreen from "./screens/GroupChatScreen";
import Album from "./screens/Album";
// import Calendar from "./screens/Calendar";
// import AppointmentCalendar from "./screens/AppointmentCalendar";
import CalendarScreen from "./screens/CalendarScreen";
import Calendar from "./screens/Calendar";
// import VideoCall from "./screens/videoCall/VideoCall";
// import AudioCall from "./screens/AudioCall";




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerBackVisible: false,
          //   title: "Active users",
          //   headerTitleAlign: "center",
          //   headerTitleStyle: { fontWeight: 900 },
          //   headerRight: () => (
          //     <TouchableOpacity onPress={() => alert('This is a button!')} style={styles.headerRightBtn}>
          //       <Ionicons name="search" size={30} color="black" style={{ paddingRight:20 }} />
          //       <Ionicons name="ellipsis-vertical" size={30} color="black"/>
          //     </TouchableOpacity>
          //   ),
          // }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ route }) => ({
            headerBackVisible: false,
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: route.params.avatar }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {route.params.name}
                </Text>
              </View>
            ),
            headerTitleAlign: "left",
            headerTitleStyle: { fontWeight: "bold" },
          })}
        />
        <Stack.Screen
          name="GroupChatScreen"
          component={GroupChatScreen}
          options={({ route }) => ({
            headerBackVisible: false,
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* <Image
                  source={{ uri: route.params.avatar }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                /> */}
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {route.params.name}
                </Text>
              </View>
            ),
            headerTitleAlign: "left",
            headerTitleStyle: { fontWeight: "bold" },
          })}
        />
        {/* <Stack.Screen name="AudioCall" component={AudioCall} />
        <Stack.Screen name="VideoCall" component={VideoCall} /> */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="GroupChat" component={GroupChat} />
       <Stack.Screen name="Album" component={Album} />
       {/* <Stack.Screen name="AppointmentCalendar" component={AppointmentCalendar} /> */}
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="DeleteProfile" component={DeleteProfile} />
        <Stack.Screen name="Calendar" component={Calendar} />
        {/* <Stack.Screen name="CalendarScreen" component={CalendarScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightBtn: {
    flexDirection: 'row',
}
});
