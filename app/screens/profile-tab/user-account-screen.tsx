import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
//user defined components
import AppIconButton from '@/components/shared/AppIconButton'
import useAppStore from '@/store/app-store'
import { useShallow } from 'zustand/react/shallow'

const UserAccountScreen = () => {
  const setAuthSession = useAppStore(
    useShallow((state) => state.setAuthSession)
  );
  const handleLogout = () => {
    setAuthSession(null);
      ToastAndroid.show("User Logged out", ToastAndroid.SHORT);
  };
  return (
    <View>
      <Text>UserAccountScreen</Text>
      <AppIconButton onPress={() => handleLogout()}>
        <MaterialCommunityIcons name="logout" size={30} />
      </AppIconButton>
    </View>
  )
}

export default UserAccountScreen

const styles = StyleSheet.create({})