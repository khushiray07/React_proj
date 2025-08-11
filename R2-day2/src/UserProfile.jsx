import { useContext } from "react";
import UserContext from "./UserContext";


function UserProfile() {
    const user = useContext(UserContext);

    return (
        <>
        <h2>User Profile</h2>
        <p>User Name:{user.name} </p>
        <p>Email: {user.email} </p>
        </>
    )
}

export default UserProfile;

