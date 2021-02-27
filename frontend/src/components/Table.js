import React, { Component, createFactory } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

class  Table extends Component {
   
    render() { 
        const {currentStaff} = this.props;
        return ( 
            <div>
                <p>Add a character with a name and a job to the table.</p>
                <Form handleSubmit={this.props.handleSubmit} />
                <div classNAme='container-md' style={{width:'55rem'}}>
                    <table>
                        <thead>
                            <tr>
                                <th>Costumer</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.users.map((item,index)=>{
                                return(
                                    <tr key ={index}>
                                        <td>
                                            <Link
                                            to={"/user/"+item.id}
                                            key={item.id}
                                            onClick={()=>this.props.getOneCostumer(item.id)}>
                                                {item.name}
                                             </Link>   
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.city}</td>
                                        <td>{item.isActive?"Active":"Inactive"}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                  </div>
            </div>
         );
    }
}
 
export default  Table;