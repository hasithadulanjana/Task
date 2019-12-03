function loaddata(){
fetch('data.json',{
   
  // 2.	Using the fetch api, get data from within the data.json file, using the post method.
  method: 'post',
 
})
.then(function(response){
  //console.log(response);

  return response.json();

})
.then(function(requestData){

  // 3.	Once you have a response from the fetch call convert the data to json and loop through the items in the list.

  let newData = requestData.data; 
 console.log(newData);
    let table=document.getElementById("myTable");
    for (let i = 0; i < newData.items.length; i++) { 
        // console.log(newData.items[i]);
         // 4.	Within the loop in point 3 add a function that will append a new row to the table created in point 1 with the relative details.
        let newRow =table.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = newData.items[i].id;
        cell2.innerHTML = newData.items[i].board.id;
        cell3.innerHTML = newData.items[i].subject ;
        // document.write('<tr><td>'+ newData.items[i].id +'</td></tr>');
        // document.write('<tr><td>'+ newData.items[i].board.id +'</td></tr>');
        // document.write('<tr><td>'+ newData.items[i].subject +'</td></tr>')
        
       // console.log(newData.items.author);

       // 6.	Create a selector with a style that makes all odd rows within the table a different colour. using JQUery
      //  $("tr:odd").css("background-color",  
      //  "green");
    }
   

})

.catch(function(error){
  console.log(error)
})
}

