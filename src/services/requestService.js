// @flow

import {Component} from "react";
import axios from './axios-set';
import type {response} from "../type/response";

type RequestServiceProps = {};

export default class RequestService extends Component<RequestServiceProps> {
    async getUsers() {
        try {
            const res: response = await axios.get('users');
            return await  res.data;
        }
        catch (e) {
            console.log('Error', e);
        }
    };

    async getPosts(id: number) {
        try {
            const res: response = await axios.get(`posts?userId=${id}`);
            return await  res.data;
        }
        catch (e) {
            console.log('Error', e);
        }
    };

    async getComments(id: number) {
        try {
            const res: response = await axios.get(`comments?postId=${id}`);
            return await  res.data;
        }
        catch (e) {
            console.log('Error', e);
        }
    };
}