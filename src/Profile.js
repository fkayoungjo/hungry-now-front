import React from 'react';
import { Button} from 'reactstrap';


export const Profile = (props) => {


  let showProfile = () => {
  if(props.user) {
  return (
    <div>
    <img src={props.user.avatar} alt="profile"/>
    <h1>{props.user.name}</h1>
    <h4>{props.user.email}</h4>
    <h4>Favorites</h4>
    <Button onClick={props.logout}>Log Out </Button>
    </div>
  );
}else {
  return (
    <div>Hi</div>
    )}
  }
  return (
    showProfile()
  )}



export default Profile;
