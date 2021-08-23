const items = [
  { id: 'm1', name: 'sushi', amount: 1, price: 22.33 },
  { id: 'm2', name: 'schnitzel', amount: 5, price: 25.33 },
  { id: 'm3', name: 'sushi', amount: 1, price: 22.33 },
];

function removeOrDecrese(arr, id) {
  let updatedItems;
  const found = arr.find((i) => i.id === id);

  if (found.amount > 1) {
    updatedItems = arr.map((i) => {
      if (i.id === id) {
        return { ...i, amount: i.amount - 1 };
      }
      return i;
    });
  } else if (found.amount === 1) {
    updatedItems = arr.filter((i) => i.id !== id);
  }
  console.log(updatedItems);
  return updatedItems;
}

// removeOrDecrese(items, 'm2');
removeOrDecrese(items, 'm3');
