import React from 'react'
import { useState } from 'react'

const Profile = () => {

    const [file,setFile] = useState({});

    const uploadProfile =(e)=>{
        e.preventDefault();
        alert('upload');
    }
    return (
        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div class="d-flex flex-column-fluid">
                <div class="container">
                    <div class="d-flex flex-row">
                        <div class="flex-row-auto  w-100" id="kt_profile_aside">
                            <div class="card card-custom card-stretch">
                                <div class="card-body pt-4">

                                    <div class="d-flex align-items-center">
                                        <div class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                                            <a href="" class="symbol-label" onClick={uploadProfile}>
                                                <img src="/profile.jpg" alt="" />
                                                
                                            </a>
                                            <i class="symbol-badge bg-success"></i>
                                        </div>
                                        <input type="file" id="myFile" name="filename" onChange={(e)=>setFile(e.target.files[0])}/>
                                        <div>
                                            <a href="#" class="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
                                            <div class="text-muted">Application Developer</div>
                                            <div class="mt-2">
                                                <a href="#" class="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Chat</a>
                                                <a href="#" class="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1">Follow</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="py-9">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="font-weight-bold mr-2">Email:</span>
                                            <a href="#" class="text-muted text-hover-primary">matt@fifestudios.com</a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="font-weight-bold mr-2">Phone:</span>
                                            <span class="text-muted">44(76)34254578</span>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <span class="font-weight-bold mr-2">Location:</span>
                                            <span class="text-muted">Melbourne</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
