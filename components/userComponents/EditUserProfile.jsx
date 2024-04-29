import "./styles/editProfile.css";
// maybe -call redux createUser grab the pre saved values display it in input
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount } from "../../features/user/userSignupSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditUserProfile(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [newPswd, setNewPswd] = useState("");
    const [confirmPaswd, setconfirmPaswd] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [currPassword, setCurrPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const {id} = useParams();

    const updateUserProfile = async () => {

        const data = {
            name,
            email,
            phoneNo,

        };

        

        try{
            const response = await axios.put(`http://localhost:4000/updateUser?id=${id}`, data, {withCredentials: true})
            dispatch(updateAccount(response.data.userUpdated))

            
        }

        catch(e){
            console.log(e);
            setError(e.response.data.message);
        }

    }

    const handleUpdate = () => {
        updateUserProfile();

        setName("");
        setEmail("");
        setNewPswd("");
        setconfirmPaswd("");
        setPhoneNo("");
        setCurrPassword("")
    }
    


    return(

        <div className="main-div">

            <div className="editDiv">
                <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="newPswd" value={newPswd} onChange={(e) =>setNewPswd(e.target.value)} />
                <input type="password" className="confirmPswd" value={confirmPaswd} onChange={(e) => setconfirmPaswd(e.target.value)} />
                <input type="text" className="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                <input type="password" className="pswd" value={currPassword} onChange={(e) => setCurrPassword(e.target.value)} />

                <button className="updateBtn" type="button" onClick={handleUpdate}>Update Profile</button>
            </div>
            <p>{error}</p>
        </div>
    )
}