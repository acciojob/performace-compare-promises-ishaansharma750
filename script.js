// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here




const outputAll = document.getElementById('output-all');
const outputAny = document.getElementById('output-any');

const promises = urls.map(url => fetch(url));

	Promise.all(promises)
	  .then(responses => {
	    responses.forEach(response => {
	      const row = document.createElement('tr');
	      const urlCell = document.createElement('td');
	      const statusCell = document.createElement('td');
	      urlCell.textContent = response.url;
	      statusCell.textContent = response.status;
	      row.appendChild(urlCell);
	      row.appendChild(statusCell);
	      outputAll.appendChild(row);
	    });
	  })
	  .catch(error => {
    console.log(error);
  });

	Promise.any(promises)
	  .then(response => {
	    const row = document.createElement('tr');
	    const urlCell = document.createElement('td');
	    const statusCell = document.createElement('td');
	    urlCell.textContent = response.url;
	    statusCell.textContent = response.status;
	    row.appendChild(urlCell);
	    row.appendChild(statusCell);
	    outputAny.appendChild(row);
	  })
	  .catch(error => {
	    console.log(error);
	  });






const outputAll = document.getElementById('output-all');
const outputAny = document.getElementById('output-any');

function fetchData(apiUrls) {
	const promises = apiUrls.map(api => fetch(api));

	const allPromise = Promise.all(promises);
	const anyPromise = Promise.any(promises);

	return {
		allPromise,
		anyPromise
	}
}

const {allPromise, anyPromise} = fetchData(apiUrls);

const start = new Date().getTime();

allPromise.then(data => {
	
	outputAll.innerText = new Date().getTime() - start;
});

const start1 = new Date().getTime();

anyPromise.then(data => {
	outputAny.innerText = new Date().getTime() - start1;
});
  