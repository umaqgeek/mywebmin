
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Header extends Component{

    constructor(props) {
        super(props);
      
        this.state = {
          toggleactive: false,
          defaultValue: 1
        };
        this.togglebutton = this.togglebutton.bind(this);
        console.log(process.env.PUBLIC_URL);
        console.log(process.env.NODE_ENV);
      }
      togglebutton(toggleactive) {
        this.props.updateParent();
      };
 
    render(){
        return(
              <nav className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row"> 
                    
                    <div className="text-left navbar-brand-wrapper">
                      <Link className="navbar-brand brand-logo" to="/"><img src="assets/images/logo-dark.png" alt="" /></Link>
                      <Link className="navbar-brand brand-logo-mini" to="/"><img src="assets/images/logo-icon-dark.png"  alt="" /></Link>
                    </div>
                    {/* <!-- Top bar left --> */}
                    <ul className="nav navbar-nav mr-auto">
                         <li className="nav-item">
                            <a className="button-toggle-nav inline-block ml-20 pull-left"  onClick={this.togglebutton} href="javascript:void(0);"  ><i className="zmdi zmdi-menu ti-align-right"></i></a>
                        </li>
                        <li className="nav-item">
                            <div className="search">
                            <a className="search-btn not_click" href="javascript:void(0);"></a>
                            <div className="search-box not-click">
                                <input type="text" className="not-click form-control" placeholder="Search" name="search" />
                                <button className="search-button" type="submit"> <i className="fa fa-search not-click"></i></button>
                            </div>
                            </div>
                        </li>
                    </ul>
             
                    {/* <!-- top bar right --> */}
                    <ul className="nav navbar-nav ml-auto">
                  
                        <li className="nav-item fullscreen">
                            <a id="btnFullscreen" className="nav-link" ><i className="ti-fullscreen"></i></a>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link top-nav" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-bell"></i>
                            <span className="badge badge-danger notification-status"> </span>
                            </a>
                           
                            <div className="dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications">
                            <div className="dropdown-header notifications">
                                <strong>Notifications</strong>
                                <span className="badge badge-pill badge-warning">05</span>
                            </div>
                          
                            <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">New registered user <small className="float-right text-muted time">Just now</small> </a>
                                <a href="#" className="dropdown-item">New invoice received <small className="float-right text-muted time">22 mins</small> </a>
                                <a href="#" className="dropdown-item">Server error report<small className="float-right text-muted time">7 hrs</small> </a>
                                <a href="#" className="dropdown-item">Database report<small className="float-right text-muted time">1 days</small> </a>
                                 <a href="#" className="dropdown-item">Order confirmation<small className="float-right text-muted time">2 days</small> </a>
                            </div>
                           
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link top-nav" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true"> <i className=" ti-view-grid"></i> </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-big">
                            <div className="dropdown-header">
                                <strong>Quick Links</strong>
                            </div>
                            <div className="dropdown-divider"></div> 
                            <div className="nav-grid">
                                <a href="#" className="nav-grid-item"><i className="ti-files text-primary"></i><h5>New Task</h5></a>
                                <a href="#" className="nav-grid-item"><i className="ti-check-box text-success"></i><h5>Assign Task</h5></a>
                            </div>
                            <div className="nav-grid">
                                <a href="#" className="nav-grid-item"><i className="ti-pencil-alt text-warning"></i><h5>Add Orders</h5></a>
                                <a href="#" className="nav-grid-item"><i className="ti-truck text-danger "></i><h5>New Orders</h5></a>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown mr-30">
                            <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/images/profile-avatar.jpg" alt="avatar" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-header">
                                <div className="media">
                                <div className="media-body">
                                    <h5 className="mt-0 mb-0">Michael Bean</h5>
                                    <span>michael-bean@mail.com</span>
                                </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i className="text-secondary ti-reload"></i>Activity</a>
                            <a className="dropdown-item" href="#"><i className="text-success ti-email"></i>Messages</a>
                            <a className="dropdown-item" href="#"><i className="text-warning ti-user"></i>Profile</a>
                            <a className="dropdown-item" href="#"><i className="text-dark ti-layers-alt"></i>Projects <span className="badge badge-info">6</span> </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i className="text-info ti-settings"></i>Settings</a>
                            <Link className="dropdown-item" to="/login"><i className="text-danger ti-unlock"></i>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            //   End Header

        );
    }
}
export default Header;

