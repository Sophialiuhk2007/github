let credential = JSON.parse(sessionStorage.getItem("requested_credential")); 
let table = [];
$(document).ready(function () {
document.getElementById("user_name").textContent  = "The Lawrenceville School"; //sessionStorage.getItem("issuer_email");
  var t = $('#dataTable').DataTable({
        order: [[3, 'desc']],
        columnDefs: [
            { visible: false, targets: [4] }
        ],
  }); 
  let counter=0;
  for (x of credential){
    t.row.add([JSON.parse(x.data).firstName + ' ' + JSON.parse(x.data).lastName, x.email, x.credentialType, x.createdAt.substring(0, 10), counter]).draw(false);
    counter++;
  }
  /*for (let j of ["Student ID Credential","Graduation Credential"]){
      if (JSON.stringify(credential[j])!='[]'){
          for (let x of credential[j]){
              table.push(x);
              t.row.add([x.data["First Name"] + ' ' + x.data["Last Name"], x.data["Email"], x.credentialType, x.issuedDate, counter]).draw(false);
              counter++;
          }
      }
  }
  sessionStorage.setItem("issuerCredentialTable",JSON.stringify(table));    */
  $("#dataTable tbody tr").css('cursor', 'pointer');
  $('#dataTable tbody').on('click', 'tr', function () {
      var data = t.row(this).data();
      console.log(data[4]);
      sessionStorage.setItem("selectedRow",data[4]);
      window.location.assign("detail.html");
  });
  $(".nav-item .nav-link").on("click", function(){
    $(".nav-item").find(".active").removeClass("active");
    $(this).addClass("active");
 });
});