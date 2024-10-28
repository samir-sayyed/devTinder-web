import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {

    console.log(user)
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender)
    const [photo, setPhoto] = useState(user.photo);
    const [about, setAbout] = useState(user.about);

    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const saveProfile = async () =>{
        setError("");
        try{
          const res = await axios({
            method: "patch",
            url: BASE_URL + "/profile/edit",
            data: {
              firstName: firstName,
              lastName: lastName,
              age: age,
              gender: gender,
              photo: photo,
              about: about,
            },
            withCredentials: true,
          });
          if(res.status == 200) {
            dispatch(addUser(res.data.user));
          }else{
            alert(res.data.message);
          }
        }catch(error){
          setError(error?.response?.data ?? "Something went wrong");
        }
      }

    return (
        <div className="flex justify-center gap-8 mb-8">
        <div className="flex justify-center my-8">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title flex justify-center">Edit Profile</h2>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="grow"
                placeholder="First Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="grow"
                placeholder="Last Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="grow"
                placeholder="Photo URL"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="grow"
                placeholder="Gender"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="grow"
                placeholder="Age"
              />
            </label>

            <textarea
             className="textarea textarea-bordered"
             placeholder="Bio"
             value={about}
             onChange={(e) => setAbout(e.target.value)}
             ></textarea>
            <div className="form-control">
             <p className="text-red-500">{error}</p>
            </div>
  
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary w-full" onClick={saveProfile}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{firstName, lastName, age, gender, photo, about}} hideButtons={true} />
      </div>
    );
}

export default EditProfile;