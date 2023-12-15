let o=document.getElementById('text');
let q=document.getElementById('author');
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let i = Math.floor(Math.random() * data.length);
    let x=data[i].author;
    let y=data[i].text;
    o.innerHTML=y;
    q.innerHTML="-"+x;
        
  });