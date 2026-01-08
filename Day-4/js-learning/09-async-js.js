/*
ASYNC JAVASCRIPT
*/

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


/*
ASYNC JAVASCRIPT
---------------
APIs, backend calls
*/

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

// async/await (React default)
async function loadData() {
  const data = await fetchData();
  console.log(data);
}
