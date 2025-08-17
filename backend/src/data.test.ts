import { mockData } from './data';

describe('Mock Data', () => {
  test('should have items', () => {
    expect(mockData.length).toBeGreaterThan(0);
  });

  test('should have valid structure', () => {
    const firstItem = mockData[0];
    expect(firstItem).toHaveProperty('id');
    expect(firstItem).toHaveProperty('name');
    expect(firstItem).toHaveProperty('date');
    expect(firstItem).toHaveProperty('status');
  });

  test('all items should have names', () => {
    mockData.forEach(item => {
      expect(item).toHaveProperty('name');
    });
  });

  test('all items should have dates', () => {
    mockData.forEach(item => {
      expect(item.date).toBeDefined();
    });
  });
});
