import * as React from 'react';
import { View, Text , ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



export default function HomeScreen ({ navigation }) {
    return(
        <ScrollView>
        <View style={{flex: 1,}}>
    
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card>
    <Card.Content>
      <Title>ODC LAUNCHING</Title>
      <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button icon="read" mode="contained"   onPress={() => console.log('Pressed')}>
    Read
  </Button>
      {/* <Button style={{color: '#F66B0E',}}>Read</Button> */}
    </Card.Actions>


    {/* blog 2 */}

    
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>ODC LAUNCHING</Title>
      <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.

</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button icon="read" mode="contained" onPress={() => console.log('Pressed')}>
    Read
  </Button>
      {/* <Button  color="#f194ff"
 >Read</Button> */}
    </Card.Actions>

 {/* blog 3 */}

 <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>ODC LAUNCHING</Title>
      <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button icon="read" mode="contained" onPress={() => console.log('Pressed')}>
    Read
  </Button>
      {/* <Button >Read</Button> */}
    </Card.Actions>


  </Card>

             </View>
             </ScrollView>
    )
}
