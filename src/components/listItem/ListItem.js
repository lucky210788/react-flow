// @flow

import React from 'react';
import './ListItem.css';

type ListItemProps = {
    listItem: string,
    handleClickItem: Function,
};

const ListItem = ({listItem, handleClickItem}: ListItemProps) => {
    return (
        <li className="list-item"
            onClick={handleClickItem}>
            <p>{listItem}</p>
        </li>
    );
};

export default ListItem;