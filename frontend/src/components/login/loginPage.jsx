import React from "react";
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import CardGuest from './Cards/CardGuest'
import CardAdmin from './Cards/CardAdmin'
import CardResepsionis from './Cards/CardResepsionis'

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div class="flex ...">
            <div class="flex-1 h-16 ...">
                <CardGuest />
            </div>
            <div class="shrink-0 h-16 w-32 ...">
                <CardAdmin />
            </div>
            <div class="flex-1 h-16 ...">
                03
            </div>
        </div>

    )
}

export default LoginPage;