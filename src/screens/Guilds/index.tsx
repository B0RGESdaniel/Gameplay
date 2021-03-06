import React from "react";

import { View, FlatList } from 'react-native'
import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
    handleGuildSelect: (guildSelected: GuildProps) => void;
}

export function Guilds({handleGuildSelect} : Props){
    
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Fracassados',
            icon: 'image.png',
            owner: false
        }
    ]
    
    return(
        <View style={styles.container}>
            <FlatList
             data={guilds}
             keyExtractor={item => item.id}
             renderItem={({item}) => (
                <Guild 
                 data={item}
                 onPress={() => handleGuildSelect(item)}
                />
             )}
             showsVerticalScrollIndicator={false}
             ItemSeparatorComponent={() => <ListDivider />}
             style={styles.guilds}
            />
        </View>
    )
}