 fetch('whatyearisit-backend-azure-eta.vercel.app')
.then(response => response.json())
.then(data => {
  document.querySelector('#year').textContent = data.year;
});







