import React, { Component } from 'react'
import axios from '../config/axios';
import { Jumbotron} from 'reactstrap';
import {connect} from 'react-redux'

class Profile extends Component {
    state = {
        data: undefined,
        img:undefined
    }


    componentDidMount() {
        // Get Profile
        axios.get('/users/' + this.props.data_id)
            .then(res => {
                console.log(res.data)
                this.setState({data: res.data});
                this.displayAvatar()

            })
    }

//CARA BEGO

    // arrayBufferToBase64(buffer) {
    //     var binary = '';
    //     var bytes = [].slice.call(new Uint8Array(buffer));    
    //     bytes.forEach((b) => binary += String.fromCharCode(b));   
    //     console.log("here") 
    //     return window.btoa(binary);
        
    // };

    // displayAvatar(){
    //     var b64
    //     var imgsrc
    //     var base64Flag = 'data:image/png;base64,';
    //     axios.get("/users/"+ this.props.data_id)
    //         .then(res=>{
    //             console.log(res.data)
    //             //var b64 = btoa(res)
    //             //this.setState({b64res: b64})
    //             b64 = this.arrayBufferToBase64(res.data.avatar.data)
    //             console.log("this"+b64)
    //             imgsrc=base64Flag+b64
    //             this.setState({img:imgsrc})
    //         })
    // }

    render() {

        if(this.state.data){
            return (
                <div className="container mt-5">
                    <Jumbotron >
                        <img   alt="Please choose your avatar" key={new Date()} />
                        <h1 className="display-3">Hello, {this.state.data.name}!</h1>
                        <img src= {'https://jc9mongo.herokuapp.com//users/' + this.props.data_id + '/avatar'}></img>
                        {/* <img src={this.state.img}></img> */}
                        <p className="lead"></p>
                    </Jumbotron>
                </div>
            )
        }

        return <h1>Loading</h1>
    }
}

const mps = state => {
    return {
        data_id: state.auth.id
    }
}

export default connect(mps)(Profile) 