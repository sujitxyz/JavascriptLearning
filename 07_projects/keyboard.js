console.log('Project 5');
 const insert = document.querySelector("#insert")

 window.addEventListener("keydown", function(e){
   insert.innerHTML = `
   <table>
   <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
     </tr>
          <tr>
          <td>${e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
        </table>
   `
 })
