import React from "react";
import { BorderlessButton } from 'react-native-gesture-handler';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';
import { Fontisto } from "@expo/vector-icons";
import BannerImg from '../../assets/banner.png';
import { theme } from "../../global/styles/theme";

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Daniel',
            avatar_url: 'https://github.com/b0rgesdaniel.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Daniel 2',
            avatar_url: 'https://github.com/b0rgesdaniel.png',
            status: 'offline'
        }

    ]

    return(
        <Background>
            <Header 
             title="Detalhes"
             action={
                 <BorderlessButton>
                    <Fontisto
                     name="share"
                     color={theme.colors.primary}
                     size={24}
                    />
                 </BorderlessButton>
             }
            />

            <ImageBackground 
             source={BannerImg}
             style={styles.banner}
            >
            <View style={styles.bannerContent}>
                <Text style={styles.title}>
                    Lendários
                </Text>
                <Text style={styles.subtitle}>
                    É hoje que vamos chegar ao challenger sem perder uma partida da md10
                </Text>
            </View>
            </ImageBackground>

            <ListHeader title="Jogadores" subtitle="Total 3"/>

            <FlatList 
             data={members}
             keyExtractor={item => item.id}
             renderItem={({item}) => (
                <Member data={item} />
             )}
             ItemSeparatorComponent={() => <ListDivider />}
             style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida"/> 
            </View>
            
        </Background>
    )
}