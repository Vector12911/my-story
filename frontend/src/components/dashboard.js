import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';
import swal from 'sweetalert';
import cogoToast from 'cogo-toast';
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const Dashboard = () => {


    const [storyArray, setStoryArray] = useState([]);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState({});
    const [story_id, setStory_id] = useState("");

    const loaderstyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        with: "3rem",
    };

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })


    const commentSend = async (e,id) => {
        e.preventDefault();

        const res = await fetch(
            "https://writeyourownstory-a477d-default-rtdb.firebaseio.com/userComments.json",
            {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    "story_id": id,
                    "comment": comment,
                })
            }
        )

        if(res){
            cogoToast.success('comment sent!');
            setComment("");
        }
        else{
            alert("error..")
        }
        // TODO TASK 
        // const getRes = await this.http.get("https://writeyourownstory-a477d-default-rtdb.firebaseio.com/userComments.json"+id)
        // const getRes = await fetch(
        //     "https://writeyourownstory-a477d-default-rtdb.firebaseio.com/userComments.json"+id,
        //     {
        //         method : "GET",
        //         headers:{
        //             "Content-Type" : "application/json"
        //         },
        //     }
        // )
        // if(getRes){
        //     cogoToast.success('get success!');
        //     console.log(getRes);
        // }
        // else{
        //     alert("get error..");
        // }

        // axios.post('http://localhost:5000/comment', body)
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.data.operation == "success") {
        //             swal("Hurrayy!", "Your Story Submitted", "success");
        //         }
        //         else {
        //             swal("Opps!", "Something Wrong", "error");
        //         }

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    useEffect(() => {
        async function getallStory() {
            var body = {
                "user_id": user.uid,
            }

            console.log(body);
            axios.post('http://localhost:5000/get-allstory', body)
                .then(function (response) {
                    console.log(response);
                    if (response.data.operation == "success") {
                        setStoryArray(response.data.data);
                    }
                    else {
                        swal("Opps!", "Something Wrong", "error");
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        user && getallStory();

    }, [user]);

    return (
        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div class="d-flex flex-column-fluid">
                <div class="container">
                    <div class="card card-custom overflow-hidden position-relative mb-8">
                        <div class="position-absolute bottom-0 left-0 right-0 d-none d-lg-flex flex-row-fluid">

                        </div>
                        <div class="position-absolute d-flex top-0 right-0 offset-lg-5 col-lg-7 opacity-30 opacity-lg-100">
                            <span class="svg-icon svg-icon-full flex-row-fluid p-15">
                                <svg xmlns="http://www.w3.org/2000/svg" id="e66d77ca-31e8-442d-a5de-b801817c4280" data-name="Layer 1" width="1024.7" height="671.65" viewBox="0 0 1024.7 671.65">
                                    <circle cx="720.55" cy="430.76" r="105" fill="url(#a374d817-ded2-4154-8f0a-fb69bb0241af)" />
                                    <circle cx="720.55" cy="430.76" r="100" fill="#f5f5f5" />
                                    <g opacity="0.5">
                                        <path d="M811,482.47a62.52,62.52,0,0,0-64.27,55.82h-18a3.64,3.64,0,0,0-3.64,3.64v6a3.65,3.65,0,0,0,3.64,3.65h18A62.5,62.5,0,1,0,811,482.47Z" transform="translate(-87.65 -114.18)" fill="url(#fd39efba-8078-41b8-857e-e17431406f47)" />
                                    </g>
                                    <path d="M810.19,486.22a58.75,58.75,0,0,0-60.41,52.47H732.36a2.91,2.91,0,0,0-2.91,2.91v6.67a2.91,2.91,0,0,0,2.91,2.92h17.42a58.75,58.75,0,1,0,60.41-65Z" transform="translate(-87.65 -114.18)" fill="#fff" />
                                    <circle cx="720.55" cy="430.76" r="41.25" fill="#795548" />
                                    <path d="M829.45,524.94s11.77,18.28,8.4,32.5C837.85,557.44,851.3,535.09,829.45,524.94Z" transform="translate(-87.65 -114.18)" fill="#fff" opacity="0.2" />
                                    <circle cx="746.8" cy="453.26" r="3.75" fill="#fff" opacity="0.2" />
                                    <rect x="119.09" y="182.63" width="213.27" height="308.72" transform="translate(-156.47 -56.04) rotate(-12.75)" fill="url(#b2bf7fa1-65c2-4695-aeca-af8d6fc55ae3)" />
                                    <rect x="334.38" y="133.91" width="213.27" height="308.72" transform="translate(-140.4 -9.72) rotate(-12.75)" fill="url(#a8abeec4-29f5-4a5c-9a38-56f560b9b0a3)" />
                                    <rect x="122.15" y="186.27" width="207.97" height="302.01" transform="translate(-156.52 -55.94) rotate(-12.75)" fill="#6c63ff" />
                                    <rect x="336.06" y="137.86" width="207.97" height="302.01" transform="translate(-140.56 -9.92) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="135.55" y="222.61" width="124.88" height="20.81" transform="translate(-134.2 -64.73) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="124.12" y="271.86" width="166.5" height="5.2" transform="translate(-143.12 -61.63) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="126.8" y="283.7" width="166.5" height="5.2" transform="translate(-145.67 -60.75) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="129.48" y="295.54" width="166.5" height="5.2" transform="translate(-148.21 -59.87) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="133.23" y="316.95" width="79.78" height="5.2" transform="translate(-153.92 -68.08) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="135.76" y="327.46" width="91.92" height="5.2" transform="translate(-156.02 -65.92) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="137.52" y="331.07" width="166.5" height="5.2" transform="translate(-155.86 -57.21) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="140.2" y="342.91" width="166.5" height="5.2" transform="translate(-158.4 -56.33) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="143.03" y="356.09" width="154.36" height="5.2" transform="translate(-161.39 -56.72) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="145.56" y="366.59" width="166.5" height="5.2" transform="translate(-163.5 -54.56) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="149.22" y="387.24" width="86.72" height="5.2" transform="translate(-168.95 -62.05) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="372.13" y="350.43" width="91.92" height="5.2" transform="translate(-155.26 -13.18) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="373.89" y="354.04" width="166.5" height="5.2" transform="translate(-155.1 -4.47) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="376.57" y="365.88" width="166.5" height="5.2" transform="translate(-157.64 -3.59) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="379.4" y="379.06" width="154.36" height="5.2" transform="translate(-160.63 -3.98) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="381.93" y="389.56" width="166.5" height="5.2" transform="translate(-162.74 -1.82) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="385.59" y="410.21" width="86.72" height="5.2" transform="translate(-168.19 -9.31) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="221.62" y="391.43" width="100.59" height="69.38" transform="translate(-175 -43.64) rotate(-12.75)" fill="#f5f5f5" />
                                    <rect x="337.76" y="165.98" width="100.59" height="69.38" transform="translate(-122.37 -23.57) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="433.79" y="236.72" width="100.59" height="69.38" transform="translate(-135.62 -0.63) rotate(-12.75)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="410.68" y="203.79" width="213.27" height="308.72" rx="13.44" transform="translate(-153.95 8.85) rotate(-12.75)" fill="url(#af3e6cbd-120e-45f3-bb1d-3967e91ae903)" />
                                    <rect x="412.36" y="207.74" width="207.97" height="302.01" rx="13.44" transform="translate(-154.1 8.65) rotate(-12.75)" fill="#6c63ff" />
                                    <g opacity="0.5">
                                        <rect x="220.35" y="542.11" width="3" height="17" fill="#47e6b1" />
                                        <rect x="308" y="656.29" width="3" height="17" transform="translate(886.64 241.11) rotate(90)" fill="#47e6b1" />
                                    </g>
                                    <g opacity="0.5">
                                        <rect x="726.55" y="32.76" width="3" height="17" fill="#47e6b1" />
                                        <rect x="814.2" y="146.94" width="3" height="17" transform="translate(883.49 -774.44) rotate(90)" fill="#47e6b1" />
                                    </g>
                                    <g opacity="0.5">
                                        <rect x="636.55" y="249.76" width="3" height="17" fill="#47e6b1" />
                                        <rect x="724.2" y="363.94" width="3" height="17" transform="translate(1010.49 -467.44) rotate(90)" fill="#47e6b1" />
                                    </g>
                                    <g opacity="0.5">
                                        <rect x="894.15" y="288.76" width="3" height="17" fill="#47e6b1" />
                                        <rect x="981.8" y="402.94" width="3" height="17" transform="translate(1307.08 -686.03) rotate(90)" fill="#47e6b1" />
                                    </g>
                                    <path d="M482.69,654.59a3.68,3.68,0,0,1-2.05-4.44,1.15,1.15,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a2.53,2.53,0,0,0-.2.36,3.67,3.67,0,0,1-4.44,2,1.86,1.86,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.88,1.88,0,0,0,.36.21,3.67,3.67,0,0,1,2.05,4.44,1.89,1.89,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.23h0a1.9,1.9,0,0,0,.2-.37,3.68,3.68,0,0,1,4.45-2,1.77,1.77,0,0,0,.4.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,482.69,654.59Z" transform="translate(-87.65 -114.18)" fill="#4d8af0" opacity="0.5" />
                                    <path d="M628.89,779.24a3.68,3.68,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.66,3.66,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.62,1.62,0,0,0,.36.21,3.68,3.68,0,0,1,2,4.44,1.86,1.86,0,0,0-.08.41h0a1.84,1.84,0,0,0,3.31,1.22h0a1.65,1.65,0,0,0,.2-.37,3.67,3.67,0,0,1,4.44-2,2,2,0,0,0,.41.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,628.89,779.24Z" transform="translate(-87.65 -114.18)" fill="#4d8af0" opacity="0.5" />
                                    <path d="M847.89,348.24a3.68,3.68,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.66,3.66,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.62,1.62,0,0,0,.36.21,3.68,3.68,0,0,1,2,4.44,1.86,1.86,0,0,0-.08.41h0a1.84,1.84,0,0,0,3.31,1.22h0a1.65,1.65,0,0,0,.2-.37,3.67,3.67,0,0,1,4.44-2,2,2,0,0,0,.41.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,847.89,348.24Z" transform="translate(-87.65 -114.18)" fill="#4d8af0" opacity="0.5" />
                                    <path d="M999.89,509.24a3.68,3.68,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.66,3.66,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.62,1.62,0,0,0,.36.21,3.68,3.68,0,0,1,2,4.44,1.86,1.86,0,0,0-.08.41h0a1.84,1.84,0,0,0,3.31,1.22h0a1.65,1.65,0,0,0,.2-.37,3.67,3.67,0,0,1,4.44-2,2,2,0,0,0,.41.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,999.89,509.24Z" transform="translate(-87.65 -114.18)" fill="#4d8af0" opacity="0.5" />
                                    <circle cx="142.35" cy="487.11" r="6" fill="#f55f44" opacity="0.5" />
                                    <circle cx="523.55" cy="50.76" r="6" fill="#4d8af0" opacity="0.5" />
                                    <circle cx="498.55" cy="489.76" r="6" fill="#47e6b1" opacity="0.5" />
                                    <circle cx="844.55" cy="639.76" r="6" fill="#f55f44" opacity="0.5" />
                                    <g opacity="0.5">
                                        <path d="M848.9,203.3h286a6.29,6.29,0,0,1,6.29,6.29V362.51a6.29,6.29,0,0,1-6.29,6.29h-286a6.28,6.28,0,0,1-6.28-6.28V209.58A6.29,6.29,0,0,1,848.9,203.3Z" transform="translate(346.54 1040.57) rotate(-73.39)" fill="url(#ad46d94a-2a5e-454e-b2ea-f38dffec9c1a)" />
                                    </g>
                                    <rect x="911.41" y="140.66" width="161.02" height="290.64" rx="13.64" transform="translate(35.53 -385.86) rotate(16.61)" fill="#fff" />
                                    <path d="M1070.15,165.27a13,13,0,0,1-15.5,7l-53.29-15.91A13.05,13.05,0,0,1,992.2,142L964,133.59a6.13,6.13,0,0,0-7.61,4.11L880.92,390.53a6.11,6.11,0,0,0,4.12,7.6l134.84,40.24a6.11,6.11,0,0,0,7.6-4.11l75.44-252.83a6.1,6.1,0,0,0-4.11-7.6Z" transform="translate(-87.65 -114.18)" fill="#e0e0e0" />
                                    <rect x="1010.74" y="156.59" width="35.88" height="2.24" rx="1.12" transform="translate(-5.15 -389.83) rotate(15.89)" fill="#dbdbdb" />
                                    <circle cx="965.68" cy="50.32" r="1.35" fill="#dbdbdb" />
                                    <rect x="953.4" y="188.74" width="44" height="38" transform="translate(2.54 -365.73) rotate(15.4)" fill="#fff" />
                                    <rect x="938.79" y="241.77" width="44" height="38" transform="translate(16.09 -359.95) rotate(15.4)" fill="#6c63ff" opacity="0.3" />
                                    <rect x="924.19" y="294.79" width="44" height="38" transform="translate(29.65 -354.17) rotate(15.4)" fill="#fff" />
                                    <rect x="909.58" y="347.82" width="44" height="38" transform="translate(43.2 -348.39) rotate(15.4)" fill="#3ad29f" opacity="0.3" />
                                    <rect x="1008.3" y="214.49" width="58" height="4" transform="translate(7.08 -381.86) rotate(15.4)" fill="#fff" />
                                    <rect x="1005.11" y="226.06" width="58" height="4" transform="translate(10.04 -380.6) rotate(15.4)" fill="#fff" />
                                    <rect x="993.96" y="266.56" width="58" height="4" transform="translate(20.39 -376.18) rotate(15.4)" fill="#fff" />
                                    <rect x="990.77" y="278.12" width="58" height="4" transform="translate(23.35 -374.92) rotate(15.4)" fill="#fff" />
                                    <rect x="979.62" y="318.62" width="58" height="4" transform="translate(33.7 -370.5) rotate(15.4)" fill="#fff" />
                                    <rect x="976.43" y="330.19" width="58" height="4" transform="translate(36.66 -369.24) rotate(15.4)" fill="#fff" />
                                    <rect x="965.28" y="370.68" width="58" height="4" transform="translate(47.01 -364.83) rotate(15.4)" fill="#fff" />
                                    <rect x="962.09" y="382.25" width="58" height="4" transform="translate(49.97 -363.56) rotate(15.4)" fill="#fff" />
                                </svg>
                            </span>
                        </div>
                        <div class="card-body d-flex justify-content-center flex-column col-lg-6 px-8 py-20 px-lg-20 py-lg-40">
                            <h2 class="display-4 text-dark mb-8">Ask a question..</h2>
                            <form class="">

                                <div class="input-group shadow-sm">
                                    <textarea class="form-control rounded"></textarea>
                                </div>
                                <a href="#" class="btn  btn-light-primary font-weight-bold mt-4">Submit</a>
                            </form>

                        </div>

                    </div>


                    {
                        storyArray.length ?
                            <div class="row">
                                {
                                    storyArray.map((obj) => {
                                        return (
                                            <div class="col-lg-12">
                                                <div class="card mb-8">
                                                    <div class="card-body">
                                                        <div class="d-flex align-items-center">
                                                            <div class="symbol symbol-40 symbol-light-success mr-5">
                                                                <span class="symbol-label">
                                                                    <img src="/metronic/theme/html/demo1/dist/assets/media/svg/avatars/047-girl-25.svg" class="h-75 align-self-end" alt="" />
                                                                </span>
                                                            </div>
                                                            <div class="d-flex flex-column flex-grow-1">
                                                                <a href="#" class="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Anjali Sharma</a>
                                                                <span class="text-muted font-weight-bold">{moment(obj.time).startOf('day').fromNow()}</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-4">
                                                            <div class="d-flex justify-content-between align-items-center mb-8">
                                                                <h2 class="display-4 text-dark">{obj.subject}</h2>
                                                                <div class="btn btn-text btn-sm btn-light-primary font-weight-bolder">Save</div>
                                                            </div>
                                                            <div class="text-dark-50 font-size-lg">
                                                                <p>{obj.story}</p>
                                                                <a class="font-weight-bold" data-toggle="collapse" href={`#collapseExample${obj.story_id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                                                                    Read Full Story..
                                                                </a>
                                                                <div class="collapse" id={`collapseExample${obj.story_id}`}>
                                                                    <p>{obj.story}</p>
                                                                    <div className="mt-4">
                                                                        <span class="svg-icon svg-icon-primary svg-icon-2x mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                <rect x="0" y="0" width="24" height="24" />
                                                                                <path d="M9,10 L9,19 L10.1525987,19.3841996 C11.3761964,19.7920655 12.6575468,20 13.9473319,20 L17.5405883,20 C18.9706314,20 20.2018758,18.990621 20.4823303,17.5883484 L21.231529,13.8423552 C21.5564648,12.217676 20.5028146,10.6372006 18.8781353,10.3122648 C18.6189212,10.260422 18.353992,10.2430672 18.0902299,10.2606513 L14.5,10.5 L14.8641964,6.49383981 C14.9326895,5.74041495 14.3774427,5.07411874 13.6240179,5.00562558 C13.5827848,5.00187712 13.5414031,5 13.5,5 L13.5,5 C12.5694044,5 11.7070439,5.48826024 11.2282564,6.28623939 L9,10 Z" fill="#000000" />
                                                                                <rect fill="#000000" opacity="0.3" x="2" y="9" width="5" height="11" rx="1" />
                                                                            </g>
                                                                        </svg>
                                                                            <span className="ml-2">123K</span>
                                                                        </span>

                                                                        <a class="btn btn-hover-text-primary p-0" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                                                            <span class="svg-icon svg-icon-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24" />
                                                                                    <polygon fill="#000000" opacity="0.3" points="5 15 3 21.5 9.5 19.5" />
                                                                                    <path d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z" fill="#000000" />
                                                                                </g>
                                                                            </svg></span>
                                                                        </a>

                                                                    </div>

                                                                </div>

                                                                <div class="collapse" id="collapseExample2">
                                                                    <div class="border-primary card card-body mb-4">
                                                                        <div class="border-primary card card-body mb-4">
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="symbol symbol-40 symbol-light-success mr-5">
                                                                                    <span class="symbol-label">
                                                                                        <img src="/metronic/theme/html/demo1/dist/assets/media/svg/avatars/047-girl-25.svg" class="h-75 align-self-end" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div class="d-flex flex-column flex-grow-1">
                                                                                    <a href="#" class="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Satyam Sharma</a>
                                                                                    <span class="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="p-4">
                                                                                <div class="text-dark-50 font-size-lg">
                                                                                    <p>Windows 10 automatically downloads and installs updates to make sure your device is secure and up to date. This means you receive the latest fixes and security updates, helping your device run efficiently and stay protected. In most cases, restarting your device completes the update. Make sure your device is plugged in when you know updates will be installed.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="card card-body mb-4">
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="symbol symbol-40 symbol-light-success mr-5">
                                                                                    <span class="symbol-label">
                                                                                        <img src="/metronic/theme/html/demo1/dist/assets/media/svg/avatars/047-girl-25.svg" class="h-75 align-self-end" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div class="d-flex flex-column flex-grow-1">
                                                                                    <a href="#" class="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Satyam Sharma</a>
                                                                                    <span class="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="p-4">
                                                                                <div class="text-dark-50 font-size-lg">
                                                                                    <p>Windows 10 automatically downloads and installs updates to make sure your device is secure and up to date. This means you receive the latest fixes and security updates, helping your device run efficiently and stay protected. In most cases, restarting your device completes the update. Make sure your device is plugged in when you know updates will be installed.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <form class="collapse" id={`collapseExample${obj.story_id}`}>
                                                            <div class="form-group">
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="comment.." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                                            </div>
                                                            <p className="d-flex justify-content-end">
                                                                <button class="btn btn-sm btn-light-primary font-weight-bolder" onClick={(e) => commentSend(e,obj.story_id)}>comment</button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                            :
                            <div style={loaderstyle} class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Dashboard
