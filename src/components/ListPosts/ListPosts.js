// @flow

import React from 'react';
import './ListPosts.css';
import ItemPost from "./ItemPost/ItemPost";

type Props = {
  postsList: Array<Object>,
  handleClickItem: Function,
};

const ListPosts = ({postsList, handleClickItem}: Props) => {
  const item = postsList.map((item) => {
    return (
      <ItemPost key={item.id}
                id={item.id}
                listItem={item.title}
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

export default ListPosts;