import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Header = () => {
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            <div id="kt_header_mobile" class="header-mobile align-items-center header-mobile-fixed">
                <a href="/">
                    <h4>𝒲𝓇𝒾𝓉𝑒𝒴𝑜𝓊𝓇𝒪𝓌𝓃𝒮𝓉𝑜𝓇𝓎</h4>
                </a>
                <div class="d-flex align-items-center">
                    <button class="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
                        <span></span>
                    </button>
                    <button class="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
                        <span></span>
                    </button>
                    <button class="btn btn-hover-text-primary p-0 ml-2" id="kt_header_mobile_topbar_toggle">
                        <span class="svg-icon svg-icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                    <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                </g>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div id="kt_header" class="header header-fixed">
                <div class="container-fluid d-flex align-items-stretch justify-content-between">
                    <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                        <div id="kt_header_menu" class="header-menu header-menu-mobile header-menu-layout-default">
                            <ul class="menu-nav">
                                <li class="menu-item menu-item-submenu menu-item-rel menu-item" data-menu-toggle="click" aria-haspopup="true">
                                    {/* <a href="/add-story" class="menu-link menu-toggle">
                                        <span class="menu-text">Write</span>
                                        <i class="menu-arrow"></i>
                                    </a> */}

                                    <Link to='/add-story' class="menu-link">
                                        <span class="menu-text">Write</span>
                                    </Link>

                                </li>
                                <li class="menu-item menu-item-submenu" data-menu-toggle="click" aria-haspopup="true">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="menu-text">Features</span>
                                        <i class="menu-arrow"></i>
                                    </a>
                                    <div class="menu-submenu menu-submenu-fixed menu-submenu-left" >
                                        <div class="menu-subnav">
                                            <ul class="menu-content">
                                                <li class="menu-item">
                                                    <h3 class="menu-heading menu-toggle">
                                                        <i class="menu-bullet menu-bullet-dot">
                                                            <span></span>
                                                        </i>
                                                        <span class="menu-text">Task Reports</span>
                                                        <i class="menu-arrow"></i>
                                                    </h3>
                                                    <ul class="menu-inner">
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <span class="svg-icon menu-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z" fill="#000000" />
                                                                            <path d="M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                <span class="menu-text">Latest Tasks</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <span class="svg-icon menu-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                                            <path d="M11.2600599,5.81393408 L2,16 L22,16 L12.7399401,5.81393408 C12.3684331,5.40527646 11.7359848,5.37515988 11.3273272,5.7466668 C11.3038503,5.7680094 11.2814025,5.79045722 11.2600599,5.81393408 Z" fill="#000000" opacity="0.3" />
                                                                            <path d="M12.0056789,15.7116802 L20.2805786,6.85290308 C20.6575758,6.44930487 21.2903735,6.42774054 21.6939717,6.8047378 C21.8964274,6.9938498 22.0113578,7.25847607 22.0113578,7.535517 L22.0113578,20 L16.0113578,20 L2,20 L2,7.535517 C2,7.25847607 2.11493033,6.9938498 2.31738608,6.8047378 C2.72098429,6.42774054 3.35378194,6.44930487 3.7307792,6.85290308 L12.0056789,15.7116802 Z" fill="#000000" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                <span class="menu-text">Pending Tasks</span>
                                                            </a>
                                                        </li>

                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <span class="svg-icon menu-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M22,17 L22,21 C22,22.1045695 21.1045695,23 20,23 L4,23 C2.8954305,23 2,22.1045695 2,21 L2,17 L6.27924078,17 L6.82339262,18.6324555 C7.09562072,19.4491398 7.8598984,20 8.72075922,20 L15.381966,20 C16.1395101,20 16.8320364,19.5719952 17.1708204,18.8944272 L18.118034,17 L22,17 Z" fill="#000000" />
                                                                            <path d="M2.5625,15 L5.92654389,9.01947752 C6.2807805,8.38972356 6.94714834,8 7.66969497,8 L16.330305,8 C17.0528517,8 17.7192195,8.38972356 18.0734561,9.01947752 L21.4375,15 L18.118034,15 C17.3604899,15 16.6679636,15.4280048 16.3291796,16.1055728 L15.381966,18 L8.72075922,18 L8.17660738,16.3675445 C7.90437928,15.5508602 7.1401016,15 6.27924078,15 L2.5625,15 Z" fill="#000000" opacity="0.3" />
                                                                            <path d="M11.1288761,0.733697713 L11.1288761,2.69017121 L9.12120481,2.69017121 C8.84506244,2.69017121 8.62120481,2.91402884 8.62120481,3.19017121 L8.62120481,4.21346991 C8.62120481,4.48961229 8.84506244,4.71346991 9.12120481,4.71346991 L11.1288761,4.71346991 L11.1288761,6.66994341 C11.1288761,6.94608579 11.3527337,7.16994341 11.6288761,7.16994341 C11.7471877,7.16994341 11.8616664,7.12798964 11.951961,7.05154023 L15.4576222,4.08341738 C15.6683723,3.90498251 15.6945689,3.58948575 15.5161341,3.37873564 C15.4982803,3.35764848 15.4787093,3.33807751 15.4576222,3.32022374 L11.951961,0.352100892 C11.7412109,0.173666017 11.4257142,0.199862688 11.2472793,0.410612793 C11.1708299,0.500907473 11.1288761,0.615386087 11.1288761,0.733697713 Z" fill="#000000" fill-rule="nonzero" transform="translate(11.959697, 3.661508) rotate(-90.000000) translate(-11.959697, -3.661508)" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                <span class="menu-text">Failed Tasks</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item">
                                                    <h3 class="menu-heading menu-toggle">
                                                        <i class="menu-bullet menu-bullet-dot">
                                                            <span></span>
                                                        </i>
                                                        <span class="menu-text">Profit Margins</span>
                                                        <i class="menu-arrow"></i>
                                                    </h3>
                                                    <ul class="menu-inner">
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-line">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">Overall Profits</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-line">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">Gross Profits</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-line">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">Nett Profits</span>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="menu-text">Apps</span>
                                        <i class="menu-arrow"></i>
                                    </a>
                                    <div class="menu-submenu menu-submenu-classic menu-submenu-left">
                                        <ul class="menu-subnav">
                                            <li class="menu-item" aria-haspopup="true">
                                                <a href="javascript:;" class="menu-link">
                                                    <span class="svg-icon menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z" fill="#000000" opacity="0.3" />
                                                                <path d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z" fill="#000000" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span class="menu-text">Reporting</span>
                                                </a>
                                            </li>
                                            <li class="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                                                <a href="javascript:;" class="menu-link menu-toggle">
                                                    <span class="svg-icon menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M3,13.5 L19,12 L3,10.5 L3,3.7732928 C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047 C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205 L21.9867539,11.5440392 C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177 C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608 L3.70518234,20.6826679 C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072 C3.22385763,20.7267072 3,20.5028496 3,20.2267072 L3,13.5 Z" fill="#000000" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span class="menu-text">Social Presence</span>
                                                    <i class="menu-arrow"></i>
                                                </a>
                                                <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                                                    <ul class="menu-subnav">
                                                        <li className="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">Reached Users</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">SEO Ranking</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">User Dropout Points</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">Market Segments</span>
                                                            </a>
                                                        </li>
                                                        <li class="menu-item" aria-haspopup="true">
                                                            <a href="javascript:;" class="menu-link">
                                                                <i class="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span class="menu-text">Opportunity Growth</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </li>

                                <li class="menu-item menu-item-submenu menu-item-rel menu-item" data-menu-toggle="click" aria-haspopup="true">
                                    <Link to="/news" className="menu-link">
                                        <span class="menu-text">News</span>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="topbar">
                        <div class="dropdown" id="kt_quick_search_toggle">
                            <div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                                <div class="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
                                    <span class="svg-icon svg-icon-xl svg-icon-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                                <div class="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
                                    <form method="get" class="quick-search-form">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <span class="svg-icon svg-icon-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                                <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Search..." />
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="quick-search-close ki ki-close icon-sm text-muted"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="quick-search-wrapper scroll" data-scroll="true" data-height="325" data-mobile-height="200"></div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                                <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
                                    <span class="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <path d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z" fill="#000000" />
                                            <rect fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2" />
                                        </g>
                                    </svg></span>
                                    <span class="pulse-ring"></span>
                                </div>
                            </div>
                            <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                                <form>
                                    <div class="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top" >
                                        <h4 class="d-flex flex-center rounded-top">
                                            <span class="text-white">User Notifications</span>
                                            <span class="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2">23 new</span>
                                        </h4>
                                        <ul class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active show" data-toggle="tab" href="#topbar_notifications_notifications">Alerts</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#topbar_notifications_events">Events</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#topbar_notifications_logs">Logs</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-content">
                                        <div class="tab-pane active show p-8" >
                                            <div class="navi navi-hover scroll my-4" data-scroll="true" data-height="300" data-mobile-height="200">
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-line-chart text-success"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New report has been received</div>
                                                            <div class="text-muted">23 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-paper-plane text-danger"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">Finance report has been generated</div>
                                                            <div class="text-muted">25 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-user flaticon2-line- text-success"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New order has been received</div>
                                                            <div class="text-muted">2 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-pin text-primary"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New customer is registered</div>
                                                            <div class="text-muted">3 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-sms text-danger"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">Application has been approved</div>
                                                            <div class="text-muted">3 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-pie-chart-3 text-warning"></i>
                                                        </div>
                                                        <div class="navinavinavi-text">
                                                            <div class="font-weight-bold">New file has been uploaded</div>
                                                            <div class="text-muted">5 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon-pie-chart-1 text-info"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New user feedback received</div>
                                                            <div class="text-muted">8 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-settings text-success"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">System reboot has been successfully completed</div>
                                                            <div class="text-muted">12 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon-safe-shield-protection text-primary"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New order has been placed</div>
                                                            <div class="text-muted">15 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-notification text-primary"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">Company meeting canceled</div>
                                                            <div class="text-muted">19 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-fax text-success"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New report has been received</div>
                                                            <div class="text-muted">23 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon-download-1 text-danger"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">Finance report has been generated</div>
                                                            <div class="text-muted">25 hrs ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon-security text-warning"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New customer comment recieved</div>
                                                            <div class="text-muted">2 days ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="navi-item">
                                                    <div class="navi-link">
                                                        <div class="navi-icon mr-2">
                                                            <i class="flaticon2-analytics-1 text-success"></i>
                                                        </div>
                                                        <div class="navi-text">
                                                            <div class="font-weight-bold">New customer is registered</div>
                                                            <div class="text-muted">3 days ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="topbar-item">

                            {user ?
                                <>
                                    <div class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                                        <div class="dropdown">
                                            <span class="btn font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.email}</span>
                                            <div class="dropdown-menu dropdown-menu-sm">
                                                <ul class="navi navi-hover">
                                                    <li class="navi-item">
                                                        <a class="navi-link" href="#">
                                                            <Link to="/profile" class="navi-text">Profile</Link>
                                                        </a>
                                                    </li>
                                                    <li class="navi-item">
                                                        <a class="navi-link" href="#">
                                                            <a class="navi-text" onClick={logout}>Log out</a>
                                                        </a>
                                                    </li>
                                                    <li class="navi-item">
                                                        <a class="navi-link" href="#">
                                                            <a class="navi-text" href="#">Setting</a>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <span class="symbol symbol-35 symbol-light-success">
                                            <span class="symbol-label font-size-h5 font-weight-bold">A</span>
                                        </span>

                                    </div>
                                </>

                                :
                                <>
                                    <Link to="/register" class="btn btn-sm btn-light-primary font-weight-bold mr-2">Sign up</Link>
                                    <Link to="/login" class="btn btn-sm btn-light-primary font-weight-bold mr-2">Log in</Link>
                                </>

                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
