import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const News = () => {

  const [user, setUser] = useState({});
  const [newsArray, setNewsArray] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  })

  useEffect(()=>{
      console.log(user)
      if(!user){
        window.location="/login"
      }
  },[user])

  

  const loaderstyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    with: "3rem",
  };

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: { safeSearch: 'Off', textFormat: 'Raw' },
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'ad83168eb0msh401424ef00cfc36p1c3fcejsn6c434dab84f2'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setNewsArray(response.data.value);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  console.log(newsArray);


  return (
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <div class="d-flex flex-column-fluid">
        <div class="container">

          <div class="row">
            {
              newsArray.length > 0 ? newsArray.map((obj, index) => {
                return (
                  <div class="col-lg-6" key={index}>

                    <div class="card mb-8">

                      <div class="card-body">
                        <div class="d-flex align-items-center">

                          <div class="d-flex flex-column flex-grow-1">
                            <span class="text-muted font-weight-bold">{moment(obj.datePublished).startOf('day').fromNow()}</span>
                          </div>
                        </div>
                        <div class="p-4">
                          <a href={obj.url} class="d-flex justify-content-between align-items-center mb-8" target="_blank">
                            <h1 class="display-4 text-dark text-hover-primary">{obj.name}</h1>
                          </a>
                          {obj.image ? <img src={obj.image.thumbnail.contentUrl} alt="Responsive image" class="img-thumbnail" /> : ''}
                          <div class="text-dark-50 font-size-lg">
                            <a class="font-weight-bold" data-toggle="collapse" href={`#collapseExample${index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                              Read More..
                            </a>
                            <div class="collapse" id={`collapseExample${index}`}>
                              {obj.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
                :
                <div style={loaderstyle} class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default News
