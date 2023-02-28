import { Navbar, ListUser,ListTipeKamar } from "../../components";
import React, { Component } from "react";
import { API_URL } from "../../utils/constants";
import axios from "axios";

export default class DashboardAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
        }
    }
 

    render() {


        return (
            <div >
                <div>
                    <Navbar />
                </div>
                <div>
                    <ListUser />List
                </div>
                <div>
                    <ListTipeKamar />
                </div>
            </div>
        );
    }
}
