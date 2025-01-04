import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
   const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">Welcome to UOV</Text>
                    <Divider />
                    <Text variant="bodyMedium" style={styles.body}>
                    At University of Vavuniya we are dedicated to fostering a vibrant academic community where students, faculty, and staff collaborate to achieve excellence in education, research, and innovation. With state-of-the-art facilities, diverse programs, and a commitment to holistic development, we aim to empower our students to excel in their chosen fields and become leaders of tomorrow. Join us on a journey of discovery, growth, and success as we strive to make a positive impact on the world through knowledge, creativity, and service. 
                    Welcome to a place where possibilities are endless, and every dream has a chance to shine!

                    </Text>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('contact')}>
                        Contact Us
                    </Button>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('aboutus')}>
                        About Us
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        padding: 10
    },
    body: {
        padding: 8,
        textAlign: 'justify'
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
});