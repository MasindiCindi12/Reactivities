import React from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

export default function ActivityFilters(){
return(

    <>
    <Menu vertical size='large' style={{width: '100%', MarginTop: 25}}>
        <Header icon='filter' attached color='teal' content='Filter'/>
        <Menu.Item content='All Activities'/>
        <Menu.Item content='I am Going'/>
        <Menu.Item content='I am Hosting'/>
    </Menu>  

    <Header/>
    <Calendar/>
    </>
    

)
}