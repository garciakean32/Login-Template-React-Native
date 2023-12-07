import * as React from 'react';
import { SafeAreaView, useState, Alert, TouchableOpacity, TextInput, StyleSheet, Text, View, Image, ScrollView, SafeAreaProvider, useSafeAreaInsets } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const showAlert = () =>
  Alert.alert(
    'Request Confirmed',
    'Please check your E-mail',
  )

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name=" " component={LandingPage} options={{
          headerTransparent: true,
          headerBackImage: () => <Icon name={'arrowLeft'} />,
        }} />
        <Stack.Screen name="  " component={LoginPage} options={{
          headerTransparent: true,
          headerBackImage: () => <Icon name={'arrowLeft'} />,
        }} />
        <Stack.Screen name="    " component={AccountRecoveryPage} options={{
          headerTransparent: true,
          headerBackImage: () => <Icon name={'arrowLeft'} />,
        }} />
        <Stack.Screen name="     " component={RegistrationPage} options={{
          headerTransparent: true,
          headerBackImage: () => <Icon name={'arrowLeft'} />,
        }} />
        <Stack.Screen name="      " component={HomePage} options={{
          headerTransparent: true,
          headerBackImage: () => <Icon name={'arrowLeft'} />,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LandingPage({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.pageImage} source={require('./assets/matsuri.gif')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textDesign]}
          >Login Template</Text>
          <Text style={[styles.smallTextDesign]}>Placeholder ni kean para sa login slogan.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginDesign} onPress={() => navigate('  ')}>
            <Text style={styles.loginTextDesign}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupDesign} onPress={() => navigate('     ')}>
            <Text style={styles.signupTextDesign}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function LoginPage({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.pageImage} source={require('./assets/matsuri.gif')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textDesign]}>Login Page.</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
          />
          <View style={styles.forgotPasswordTextContainer}>
            <Text style={styles.forgotPasswordText} onPress={() => navigate('    ')}>
              Forgot your password?
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginDesign} onPress={() => navigate('      ')}>
            <Text style={styles.loginTextDesign}>ENTER</Text>
          </TouchableOpacity>
          <View style={styles.noAccountContainter}>
            <Text style={styles.noAccountText} >
              Don't have an account?
            </Text>
            <Text style={styles.signUpText} onPress={() => navigate('     ')}>
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </ScrollView >
  );
}

function AccountRecoveryPage({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.pageImage} source={require('./assets/matsuri.gif')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textDesign]}>Account Recovery Page</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputEmail}
            placeholder="E-mail address"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetDesign} onPress={showAlert}>
            <Text style={styles.resetTextDesign}>SEND RESET INSTRUCTIONS</Text>
          </TouchableOpacity>
          <View style={styles.noAccountContainter}>
            <Text style={styles.textBacktoLogin} onPress={() => navigate('  ')}>
              ⬅ Back to login
            </Text>
          </View>
        </View>
      </View>
    </ScrollView >
  );
}

function RegistrationPage({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.pageImage} source={require('./assets/matsuri.gif')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textDesign]}>Sign up Page</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputName}
            placeholder="Set Name"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Set Email"
          />
          <TextInput secureTextEntry={true}
            style={styles.inputPassword}
            placeholder="Set Password"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginDesign} onPress={() => navigate(' ')}>
            <Text style={styles.loginTextDesign}>Submit</Text>
          </TouchableOpacity>
          <View style={styles.noAccountContainter}>
            <Text style={styles.noAccountText} >
              Already have an account?
            </Text>
            <Text style={styles.signUpText} onPress={() => navigate('  ')}>
              Login
            </Text>
          </View>
        </View>
      </View>
    </ScrollView >
  );
}

function HomePage({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.pageImage} source={require('./assets/matsuri.gif')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textDesign]}
          >Home Page</Text>
          <Text style={[styles.smallTextDesign]}>This is the amazing placeholder of kean's homepage slogan. Created for the purpose of practice and button for you to log out</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.logoutDesign} onPress={() => navigate(' ')}>
            <Text style={styles.logoutTextDesign}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    marginTop: 110,
    marginBottom: 40,
  },
  imageContainer: {
    flex: 1,
  },
  pageImage: {
    width: 280,
    height: 250,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  textDesign: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: 'rgba(0, 0, 10, .5)',
    textShadowRadius: 2,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  smallTextDesign: {
    fontSize: 17,
    color: '#696969',
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 15,
  },
  loginDesign: {
    alignItems: 'center',
    backgroundColor: '#bc8f8f',
    padding: 15,
    paddingHorizontal: 110,
    borderRadius: 15,
    maxWidth: 390,
  },
  loginTextDesign: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000000'
  },
  signupDesign: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 15,
    maxWidth: 285,
  },
  signupTextDesign: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#bc8f8f'
  },
  inputContainer: {
    flex: 1,
    gap: 15,
  },
  inputName: {
    fontSize: 20,
    padding: 15,
    width: 285,
    borderRadius: 5,
    maxWidth: 300,
    borderWidth: 1,
  },
  inputEmail: {
    fontSize: 20,
    padding: 15,
    width: 285,
    borderRadius: 5,
    maxWidth: 300,
    borderWidth: 1,
  },
  inputPassword: {
    fontSize: 20,
    padding: 15,
    width: 285,
    borderRadius: 5,
    maxWidth: 300,
    borderWidth: 1,
  },
  forgotPasswordTextContainer: {
    flex: 1,
  },
  forgotPasswordText: {
    color: '#696969',
    textAlign: 'right'
  },
  noAccountContainter: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: 35,
  },
  noAccountText: {
    color: '#696969'
  },
  signUpText: {
    color: '#bc8f8f',
    fontWeight: 'bold',
  },
  textBacktoLogin: {
    flex: 1,
    color: '#000000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  resetDesign: {
    flex: 1,
    color: '#bc8f8f',
    justifyContent: 'center',
    backgroundColor: '#bc8f8f',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    minWidth: 280,
  },
  resetTextDesign: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000'
  },
  logoutDesign: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal: 110,
    borderRadius: 15,
    maxWidth: 390,
  },
  logoutTextDesign: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#bc8f8f'
  },

});