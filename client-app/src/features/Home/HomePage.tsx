import React from 'react'
import { Container, Header, Segment , Image, Button} from 'semantic-ui-react'

export default function HomepAge(){
    return(
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                 <Header as='h1' inverted>
                     <Image size='massive' src='/assets/logo.png' atl='alt' style={ {MarginBottoom: 12}}  />
                 </Header>
                 <Header as='h2'  inverted content='Welscome to Reactivities'/>
                <Button as={{}} to='activities' size='huge' inverted>
                    Take me to Activities
                </Button>
            </Container>
        </Segment>
    )
}