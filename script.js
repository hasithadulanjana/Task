function loaddata(){
fetch('data.json',{
  //created the post method so the data is posted to the json file
  method: 'post',
  body: JSON.stringify()
})
.then(function(response){
  console.log(response);

  return response.json();

})
.then(function(data){
  console.log(data);

})

.catch(function(error){
  console.log(error)
})
}

