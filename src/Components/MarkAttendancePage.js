import React, { Component } from "react";
import "../Styles/MarkAttendancePage.css";
import "../Styles/Header.css";
import "../Styles/LeftSidebar.css";
import axios from 'axios';


export default class MarkAttendancePage extends Component{

    constructor(props) {
        super(props);
        this.onChangestaffid = this.onChangestaffid.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangeday = this.onChangeday.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            staffid: '',
            name: '',
            day:'',
            email:''
        
        }
    }
    onChangestaffid(e){
        this.setState( {
            staffid: e.target.value
        });
    }
    onChangename(e){
        this.setState( {
            name: e.target.value
        });
    }
    onChangeday(e){
        this.setState( {
            day: e.target.value,
        });
    }
  
    onChangeemail(e){
        this.setState( {
            email: e.target.value
        });
    }
   
    
    onSubmit(e){
        e.preventDefault();
        const obj = {
            staffid : this.state.staffid,
            name : this.state.name,
            day : this.state.day,
            email : this.state.email
          
           
        };

            if(this.state.staffid.length > 0){
                if(this.state.name.length > 2){
                 
                      
                            axios.post('http://localhost:4000/attendance/add',obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
                                        staffid: '',
                                        name: '',
                                        day:'',
                                        email:''
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/manageattendancepage');
                   
                }
                else{
                    alert('Invalid.Name shoud be more than 2 characters');
                }
            } 
            else {
                alert('Pleace enter the staffid');
            }
        
    }



    render(){
        return(
            <div className="MarkAttendancePage">
                <div className="left-sidebar">
                    <div className='component-name dashboard'>
						<div className='text'>
							<a href='/dashboard'> Dashboard</a>
						</div>
					</div>
					<div className='component-name farmer'>
						<div className='text'>
							<a href='/farmer'> Farmer</a>
						</div>
					</div>
					<div className='component-name vendor'>
						<div className='text'>
							<a href='/vendor'> Vendor</a>
						</div>
					</div>
					<div className='component-name products'>
						<div className='text'>
							<a href='/product'> Products</a>
						</div>
					</div>
					<div className='component-name clients'>
						<div className='text'>
							<a href='/client'>Clients</a>{" "}
						</div>
					</div>
					<div className='component-name dashboard'>
						<div className='text'>
							<a href='/dashboard'> Dashboard</a>
						</div>
					</div>
					<div className='component-name dashboard'>
						<div className='text'>
							<a href='/dashboard'> Dashboard</a>
						</div>
					</div>
                </div>
                <div className="right-side">
                    <h1>Attendance Management</h1>
                    <form onSubmit={this.onSubmit}>
                    <p>Mark Attendance</p>
                    <table className="table1">
                        <tr>
                            <td>Staff Id</td>
                        </tr>
                        <tr>
                            <td><input type="text" required value={this.state.staffid} onChange = {this.onChangestaffid} /></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr>
                            <td><input type="text" required value={this.state.name} onChange = {this.onChangename} /></td>
                        </tr>
                        <tr>
                            <td>Day</td>
                        </tr>
                        <tr>
                            <td><input type="date" required value={this.state.day} onChange = {this.onChangeday}/></td>
                        </tr>
                       
                        <tr>
                            <td>
                                <button type="submit">Mark Attendance</button>
                            </td>
                        </tr>
                    </table> 
</form>
                </div>
        </div>
);
}
}

 