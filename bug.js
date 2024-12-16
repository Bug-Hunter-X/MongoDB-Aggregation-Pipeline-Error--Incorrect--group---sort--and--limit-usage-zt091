```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection('data').aggregate([
  {$group: {_id: '$field', count: {$sum: 1}}}, // Correct grouping
  {$sort: {count: -1}}, // Correct sorting
  {$limit: 10} // Correct limit
])
```