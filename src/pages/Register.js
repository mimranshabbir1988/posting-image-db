import axios from "axios";
import React, { useState } from "react";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

console.log("photo_____: ",img)

const registerUser = async (e) =>{
  e.preventDefault()

  // console.log(name, email, password, img)
      let formData = new FormData();
      formData.append("name",name)
      formData.append("email",email)
      formData.append("password",password)
      formData.append("img",img)

      const config = {
        header:{          
          "Content-Type": "multipart/form-data"
        }
      }

        let result = await axios.post("http://localhost:4000/api/v1/auth/register",formData,config)
        if(!result){
          console.log("error in registeration....")
        }else{
          console.log(result)
          console.log("You are registered successfully........!!")
        }

}




  return (
    <div className="container w-25 my-5">
      <h1 className="my-5 text-primary">Sign up Form</h1>
      <form enctype="multipart/form-data">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="type user name"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="type your email"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="type your password"
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => setImg(e.target.files[0])}
            className="form-control"
          />
        </div>

        <button onClick={registerUser} type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
