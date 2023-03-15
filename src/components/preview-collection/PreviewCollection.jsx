import React from "react";

import "./PreviewCollection.styles.scss";
import CollectionItem from "./../collection-item/CollectionItem";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props}></CollectionItem>
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
