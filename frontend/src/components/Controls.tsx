import React from 'react';

interface ControlsProps {
  onSort: (sortBy: 'none' | 'id' | 'alpha' | 'date') => void;
  onSortOrder: (order: 'asc' | 'desc') => void;
  onRefresh: () => void;
  onAdd: () => void;
  sortBy: 'none' | 'id' | 'alpha' | 'date';
  sortOrder: 'asc' | 'desc';
  loading: boolean;
}

const Controls: React.FC<ControlsProps> = ({ 
  onSort, 
  onSortOrder,
  onRefresh, 
  onAdd, 
  sortBy,
  sortOrder,
  loading 
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'none' | 'id' | 'alpha' | 'date';
    onSort(value);
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'asc' | 'desc';
    onSortOrder(value);
  };

  return (
    <div className="controls">
      <button 
        onClick={onRefresh}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Refresh'}
      </button>
      
      <button 
        onClick={onAdd}
        className="secondary"
      >
        Add New Event
      </button>

      <select 
        value={sortBy} 
        onChange={handleSortChange}
      >
        <option value="none">Sort by...</option>
        <option value="id">ID</option>
        <option value="alpha">Name (A-Z)</option>
        <option value="date">Date</option>
      </select>

      <select
        value={sortOrder}
        onChange={handleOrderChange}
        disabled={sortBy === 'none'}
      >
        <option value="asc">Ascending ↑</option>
        <option value="desc">Descending ↓</option>
      </select>

      {sortBy !== 'none' && (
        <span style={{ marginLeft: '10px', color: '#666', fontSize: '0.9rem' }}>
          {sortBy === 'id' ? '✓' : '⚠️'} Sorting by {sortBy === 'id' ? 'ID' : sortBy === 'alpha' ? 'Name' : 'Date'}
          {sortBy !== 'id' && ' (not implemented)'}
        </span>
      )}
    </div>
  );
};

export default Controls;
