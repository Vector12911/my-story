import React, { useEffect, useState } from "react";
import { uid } from 'uid';
import axios from 'axios';
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import swal from 'sweetalert';
import moment from 'moment';

const AddStory = () => {
  const [user, setUser] = useState({});

  const [story, setStory] = useState("");
  const [subject, setSubject] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  })

  useEffect(()=>{
      console.log(user)
      if(!user){
        window.location="/login"
      }
  },[user])


  const postStory = () => {
    var body = {
      "user_id": user.uid,
      "user_email": user.email,
      "story": {
        "story_id": uid(),
        "subject": subject,
        "story": story,
        "time":moment()
      }

    }
    
    console.log(body);
    axios.post('http://localhost:5000/add-story', body)
      .then(function (response) {
        console.log(response);
        if(response.data.operation=="success"){
          swal("Hurrayy!", "Your Story Submitted", "success");
        }
        else{
          swal("Opps!", "Something Wrong", "error");
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div class="col-md-12">
      <div class="card card-custom gutter-b example example-compact">
        <div class="card-header">
          <h2 class="display-4 mt-4">Add a story..</h2>
        </div>
        <form class="form">
          <div class="card-body">
            <div class="form-group form-group-last">

            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="email" class="form-control" placeholder="Subject.." onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div class="form-group">
              <label for="exampleTextarea">Your Story</label>
              <textarea class="form-control" rows="3" onChange={(e) => setStory(e.target.value)}></textarea>
            </div>
          </div>
          <div class="card-footer">
            <button type="reset" class="btn btn-primary mr-2" onClick={postStory}>Post</button>
            <button type="reset" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStory
