import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES, FONTS } from '../constants';
import { 
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';
import { ImageBackground } from 'react-native';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <SafeAreaView style = {{ flex: 1 }}>
            <ImageBackground
                source={images.background}
                style={{ flex: 1, resizeMode: "cover" }}
            >
                <Stack.Screen
                options= {{
                    headerStyle: { backgroundColor: "transparent" },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = { icons.menu } dimension = "60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = { images.profile } dimension = "100%"/>
                    ),
                    headerTitle: "SUPERARE"
                }}
            />

                <ScrollView showsVerticalScrollIndicator = {false}>

                    <View
                        style = {{flex: 1, 
                        padding: SIZES.medium,
                        backgroundColor: "rgba(255, 255, 255, 0.8)" /*set opacity here */
                        }}
                    >
                        <Welcome 
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClick={() => {
                                if(searchTerm) {
                                    router.push(`/search/${searchTerm}`)
                                }
                            }}
                        />

                        <Popularjobs/>
                        <Nearbyjobs/>

                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Home;