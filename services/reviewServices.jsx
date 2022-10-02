import axios from 'axios'
import React from 'react'

export default class reviewServices {
    static get (){
        return fetch("https://jsonplaceholder.typicode.com/comments")
    }
}