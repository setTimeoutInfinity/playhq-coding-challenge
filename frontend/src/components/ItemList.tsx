import React from 'react';
import type { Item } from '../App';

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  if (!items) {
    return (
      <div className="no-items">
        <p>No events available</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="items-list">
      {items?.map((item) => (
        <div className="item-card">
          <div className="item-header">
            <div className="item-title">
              <span className="item-id">#{item.id}</span>
              <h3>{item.name}</h3>
            </div>
            <span className={`status-badge ${item.status}`}>
              {item.status}
            </span>
          </div>
          <div className="item-details">
            <p>
              <strong>Date:</strong> {formatDate(item.date)}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <div className="no-items">
          <p>No events found</p>
          <p>Try adding some events or check your connection</p>
        </div>
      )}
    </div>
  );
};

export default ItemList;
