// @flow
import React, {Component} from 'react';
import RequestService from '../../../services/requestService';
import Spinner from '../../Spinner/Spinner';
import './ItemPost.css';

type
  ItemPostProps = {
  listItem: string,
  id: number,
  handleClickItem: Function,
};

type
  ItemPostState = {
  isLoading: boolean,
  countComm: number
};

export default class ItemPost extends Component <ItemPostProps, ItemPostState> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      countComm: 0
    }
  }

  requestService = new RequestService();

  componentWillMount() {
    this.requestService.getComments(this.props.id)
      .then(res => {
        this.setState({
          countComm: res.length,
          isLoading: false
        })
      })
      .catch(error => console.error('Error', error));
  }

  render() {
    const {listItem, handleClickItem} = this.props;
    const {isLoading, countComm} = this.state;

    return (
      <li className="list-item item-post"
          onClick={handleClickItem}>
        <p>{listItem}</p>
        {isLoading ? <Spinner/> : <p className="comments">{countComm}</p>}
      </li>
    )
  }
}