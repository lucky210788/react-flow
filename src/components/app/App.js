// @flow

import React, {Component, Fragment} from 'react';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import RequestService from '../../services/requestService';
import List from '../list/List';
import ListPosts from '../listPosts/ListPosts';
import {ToastContainer, toast} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import './App.css';

type
    AppProps = {};

type
    AppState = {
    usersList: Array<Object>,
    postsList: Array<Object>,
    commentsList: Array<Object>,
};

export default class App extends Component<AppProps, AppState> {
    constructor() {
        super();
        this.state = {
            usersList: [],
            postsList: [],
            commentsList: [],
        }
    }

    requestService = new RequestService();

    handleGetUsers = () => {
        this.requestService.getUsers()
            .then(res => {
                this.setState({
                    usersList: res,
                    postsList: [],
                    commentsList: []
                }, () => {
                    this.showToast(true);
                })
            })
            .catch(error => {
                this.showToast(false);
                console.error('Error', error);
            });
    };

    handleClickUser = (id: number) => {
        this.requestService.getPosts(id)
            .then(res => {
                this.setState({
                    postsList: res,
                    commentsList: []
                }, () => {
                    this.showToast(true);
                })
            })
            .catch(error => {
                this.showToast(false);
                console.error('Error', error);
            });
    };

    handleClickPost = (id: number) => {
        this.requestService.getComments(id)
            .then(res => {
                this.setState({
                    commentsList: res
                }, () => {
                    this.showToast(true);
                })
            })
            .catch(error => {
                this.showToast(false);
                console.error('Error', error);
            });
    };

    showToast = (status: boolean) => {
        status ? toast('successful response') : toast.error('not successful response');
    };

    render() {
        const {usersList, postsList, commentsList} = this.state;

        return (
            <Fragment>
                <div className="App">
                    <Container className="text-center">
                        <ToastContainer/>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleGetUsers()}>
                            Get Users
                        </Button>
                        <div className="block-lists">
                            <List listItems={usersList}
                                  handleClickItem={this.handleClickUser}/>
                            <ListPosts postsList={postsList}
                                       handleClickItem={this.handleClickPost}/>
                            <List listItems={commentsList}
                                  handleClickItem={() => {
                                  }}/>
                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }
}