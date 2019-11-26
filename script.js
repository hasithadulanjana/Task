function loaddata(){
fetch('data.json')
.then(function(response){
  console.log(response);
  return response.json();

})
.then(function(data){
  console.log(data);
  document.getElementById('result').innerHTML=data;
})

.catch(function(error){
  console.log(error)
})
}

