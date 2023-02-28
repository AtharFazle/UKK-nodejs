import React,{Component} from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import {Col,Card,Row} from "react-bootstrap"

export default class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: ""
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/hotel/user")
            .then(response => {
              console.log(response.data)
                this.setState({
                    Users: response.data
                })
            })
            .catch(error => {
              console.log(error)
            })
      }
    
    
    render() {
console.log(this.state.Users)
        return (
            <div>
                {this.state.nama_tipe_kamar}
            </div>
                   
        )
    }
}

    