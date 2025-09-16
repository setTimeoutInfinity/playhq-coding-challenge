import express, { Request, Response } from "express";
import cors from "cors";
import { mockData } from "./data";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors()
);

app.use(express.json());

// Mock data endpoint
app.get("/api/items", (req: Request, res: Response) => {
  const { sort, order } = req.query;
  let items = [...mockData];

  if (sort === "id") {
    items.sort((a, b) => {
      if (order === "desc") {
        return b.id - a.id;
      }
      return a.id - b.id; // Default ascending
    });
  } else if (sort === "alpha") {
    // TODO: Implement alphabetical sorting
    console.log("Alphabetical sorting not implemented");
  } else if (sort === "date") {
    // TODO: Implement date sorting
    console.log("Date sorting not implemented");
  }

  res.json({
    data: items.filter((item) => item.id !== 3),
    count: items.length,
  });
});

app.post("/api/items", (req: Request, res: Response) => {
  const newItem = req.body;

  if (!newItem) {
    return res.status(400).json({ error: "No data provided" });
  }

  mockData.push({
    id: mockData.length + 1,
    name: newItem.name,
    date: newItem.date,
    status: newItem.status || "active",
  });

  res.status(201).json({ success: true, item: newItem });
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
