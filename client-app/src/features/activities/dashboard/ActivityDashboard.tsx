
import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";



export default observer( function ActivityDashboard()
{
    const {activityStore} = useStore();
    const {selectedActivity,editMode} = activityStore;

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList  />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails  />}
                {editMode &&
                <ActivityForm/>}

                {/* Section 9 */}
                <ActivityFilters/>
            </Grid.Column>
            <Grid.Column>
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
})