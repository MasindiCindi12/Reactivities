import React from "react";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSideBar";


export default function ActivityDetails()
{
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm,cancelSelectedActivity} = activityStore;

    if (!activity) return <LoadingComponent/>;
    
    return(
       
            /* <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description} 
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={()=>openForm(activity.id)} basic color="blue" content='Edit'/>
                    <Button onClick={cancelSelectedActivity} basic color="grey" content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    */


        <Grid>
         <Grid.Column width={10}>
            <ActivityDetailedHeader activity={activity}/>
            <ActivityDetailedInfo activity={activity} />
            <ActivityDetailedChat />
          
         </Grid.Column>
         <Grid.Column width={6}>
         <ActivityDetailedSidebar/>
         </Grid.Column>
        </Grid>
    )
}