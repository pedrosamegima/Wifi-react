import React, {useEffect, useState} from "react";
import { View } from "react-native";
import Aviso from "./components/aviso";
import NetInfo from '@react-native-community/netinfo';

export default function App(){
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubcribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isConnected === null ? (
      <Aviso texto="Verificando conexão..." isConnected={isConnected}/>
      ) : isConnected ? (
        <Aviso texto="Conectando à internet" isConnected={isConnected}/>
      ) : (
        <Aviso texto="Desconectado da internet" isConnected={isConnected}/>
      )}
    </View>
  );

}