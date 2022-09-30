import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Segment , Image, Button} from 'semantic-ui-react'

export default function HomePage(){
    return(

        <Container style={{marginTop: 25}}>
            <h1> Home Page</h1>
            <h3> Go to <Link to='/activities'> Activities</Link></h3>
         </Container>
        /*<Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                 <Header as='h1' inverted>
                     <Image size='massive' src='/assets/logo.png' atl='alt' style={ {MarginBottoom: 12}}  />
                 </Header>
                 <Header as='h2'  inverted content='Welscome to Reactivities'/>
                <Button as={{Link}} to='activities' size='huge' inverted>
                    Take me to Activities
                </Button>
            </Container>
        </Segment>*/
    )
}