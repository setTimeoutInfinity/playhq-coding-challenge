export interface Item {
  id: number;
  name: string;
  date: string;
  status: 'active' | 'inactive' | 'pending';
  description?: string;
}

export const mockData: Item[] = [
  {
    id: 1,
    name: 'Football Match - Lions vs Tigers',
    date: '2024-03-15',
    status: 'active',
    description: 'Championship quarter-final'
  },
  {
    id: 2,
    name: 'Basketball Tournament',
    date: '2024-02-28',
    status: 'active',
    description: 'Regional finals'
  },
  {
    id: 3,
    name: 'Cricket World Cup',
    date: '2024-04-10',
    status: 'pending',
    description: 'International championship'
  },
  {
    id: 4,
    name: null as any,
    date: '2024-03-20',
    status: 'inactive',
    description: 'Tennis doubles match'
  },
  {
    id: 5,
    name: 'Athletics Championship',
    date: '2024-01-15',
    status: 'active',
    description: 'Track and field events'
  },
  {
    id: 6,
    name: 'Swimming Nationals',
    date: '2024-05-01',
    status: 'pending'
  },
  {
    id: 7,
    name: 'Rugby Sevens',
    date: 'invalid-date',
    status: 'active',
    description: 'International tournament'
  },
  {
    id: 8,
    name: 'Volleyball Finals',
    date: '2024-03-08',
    status: 'active',
    description: 'State championship'
  }
];
