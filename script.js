 fetch('http://whatyearisit-backend-azure-eta.vercel.app/year')
.then(response => response.json())
.then(data => {
  document.querySelector('#year').textContent = data.year;
});







