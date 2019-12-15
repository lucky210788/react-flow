// @flow

import React from 'react';
import ListItem from '../listItem/ListItem';
import './List.css';

type ListProps = {
    listItems: Array<Object>,
    handleClickItem: Function,
};

const List = ({listItems, handleClickItem}: ListProps) => {
    const item = listItems.map((item) => {
        return (
            <ListItem key={item.id}
                      listItem={item.name}
                      handleClickItem={() => handleClickItem(item.id)}
            />
        );
    });
    return (
        <ul className="list">
            {item}
        </ul>
    );
};

export default List;