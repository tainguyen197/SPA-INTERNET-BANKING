import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

class ListReceiver extends Component{

    render(){
        return(
            <div>     
            
            <div className="dashboard-body">
            <div className="center-list-receiver-label">
                <div className = "col-md-6">Danh sách người nhận</div>
                <div className = "col-md-6">
                <Button className ="center-list-receiver-button">Thêm mới</Button>
                </div>
                <div className="col-md-12 home-line-cross"></div>
            </div>
            
                <br></br>
                <br></br>
                <div className="center-list-receiver">
                    <div className="col-md-1 icon-avatar-receiver "></div>
                    <div className="col-md-10 name-account-receiver">Nguyen Van A</div>
                
                </div>
                <div className="center-list-receiver">
                    <div className="col-md-1 icon-avatar-receiver "></div>
                    <div className="col-md-10 name-account-receiver">Nguyen Van A</div>
                
                </div>
                <div className="center-list-receiver">
                    <div className="col-md-1 icon-avatar-receiver "></div>
                    <div className="col-md-10 name-account-receiver">Nguyen Van A</div>
                
                </div>
             
            </div>
        </div>
        )
    }
}

export default ListReceiver;