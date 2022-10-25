import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu,Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer( function NavBar(){
    const {userStore: {user, logout}} = useStore();

    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name= 'Activities'/>
                <Menu.Item as={NavLink} to='/errors' name= 'Errors'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image src={ '/assets/user.png'} avatar spaced='right'/>
                      {/* user?.image || */}
                    <Dropdown pointing='top left'>
                      {/* text={user?.displayName}> */}
                        <Dropdown.Menu>
                          <Dropdown.Item  as={Link} to={`/profile/`} text='My Profile' icon='user'/>
                          {/* ${user?.username} */}
                          <Dropdown.Item onClick={logout} text='Logout' icon=''/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})