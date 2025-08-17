import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import Controls from "./components/Controls";
import "./styles.scss";

export interface Item {
  id: number;
  name: string;
  date: string;
  status: "active" | "inactive" | "pending";
  description?: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"none" | "id" | "alpha" | "date">(
    "none"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [totalCount, setTotalCount] = useState<number>(0);

  // Intentional bug: Missing async/await
  const fetchItems = (sort?: string, order?: string) => {
    setLoading(true);
    setError(null);

    let url = "http://localhost:3001/api/items";
    if (sort && sort !== "none") {
      url += `?sort=${sort}`;
      if (order) {
        url += `&order=${order}`;
      }
    }

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data.data);
        // Store the count from the response
        setTotalCount(data.count || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSort = (sortType: "none" | "id" | "alpha" | "date") => {
    setSortBy(sortType);
    // Only ID sorting works correctly, others need implementation
    if (sortType === "id") {
      fetchItems(sortType, sortOrder);
    } else if (sortType !== "none") {
      fetchItems();
    } else {
      fetchItems();
    }
  };

  const handleSortOrder = (order: "asc" | "desc") => {
    setSortOrder(order);
    fetchItems(sortBy, order);
  };

  const handleRefresh = () => {
    fetchItems();
  };

  const handleAddItem = () => {
    const newItem = {
      name: `New Game ${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      status: "pending" as const,
    };

    fetch("http://localhost:3001/api/items", {
      method: "POST",
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Item added");
      })
      .catch((err) => {
        console.error("Failed to add item:", err);
      });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Game Centre</h1>
        <p>Manage your sports events and tournaments</p>
      </header>

      <Controls
        onSort={handleSort}
        onSortOrder={handleSortOrder}
        onRefresh={handleRefresh}
        onAdd={handleAddItem}
        sortBy={sortBy}
        sortOrder={sortOrder}
        loading={loading}
      />

      <div className="items-container">
        <div className="items-header">
          <h2>Events List</h2>
          {!loading && (
            <span className="item-count">
              Total: {totalCount} events | Showing: {items.length} events
            </span>
          )}
        </div>
        {error && <div className="error">{error}</div>}
        {loading ? (
          <div className="loading">Loading events...</div>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </div>
  );
}

export default App;
