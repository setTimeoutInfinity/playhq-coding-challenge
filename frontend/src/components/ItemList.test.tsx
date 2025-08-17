import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ItemList from './ItemList';
import type { Item } from '../App';

describe('ItemList', () => {
  const mockItems: Item[] = [
    {
      id: 1,
      name: 'Test Event 1',
      date: '2024-03-15',
      status: 'active',
      description: 'Test description'
    },
    {
      id: 2,
      name: 'Test Event 2',
      date: '2024-04-20',
      status: 'pending'
    }
  ];

  it('renders items correctly', () => {
    render(<ItemList items={mockItems} />);
    
    expect(screen.getByText('Test Event 1')).toBeInTheDocument();
    expect(screen.getByText('Test Event 2')).toBeInTheDocument();
  });

  it('shows no items message when empty', () => {
    render(<ItemList items={[]} />);
    
    expect(screen.getByText('No events found')).toBeInTheDocument();
  });
});
