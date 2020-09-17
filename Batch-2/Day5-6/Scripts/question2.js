window.onload = function () {
  let initialsuperbuses = [];

  if (localStorage.getItem("superbuses") == null) {
    localStorage.setItem("superbuses", JSON.stringify(initialsuperbuses));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let superbuses;
  if (superarray == undefined) {
    superbuses = JSON.parse(localStorage.getItem("superbuses"));
  } else {
    superbuses = superarray;
  }

  superbuses.forEach(function (superbus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${superbus.name}</td>
      <td>${superbus.number}</td>
      <td>${superbus.passenger}</td>
      <td>${superbus.source}</td>
      <td>${superbus.destination}</td>
      <td>
      <button onclick='deleteSuperbus(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addSuperbus(e) {
  e.preventDefault();
  let superbus = {};
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let passenger = document.getElementById("passenger").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  superbus.name = name;
  superbus.number = Number(number);
  superbus.passenger = Number(passenger);
  superbus.source = source;
  superbus.destination = destination;

  let superbuses = JSON.parse(localStorage.getItem("superbuses"));
  superbuses.push(superbus);
  localStorage.setItem("superbuses", JSON.stringify(superbuses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("passenger").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
}

function searchBySourceOrDestination() {
  let searchValue = document.getElementById("searchName").value;
  let superbuses = JSON.parse(localStorage.getItem("superbuses"));
  //console.log(superbuses);
  //console.log(searchValue);
  let newdata = superbuses.filter(function (superbus) {
    return (
      superbus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || superbus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 
    );
  });
  //console.log("newdata"+newdata);
  display(newdata);
}

function deleteSuperbus(index) {
  let superbuses = JSON.parse(localStorage.getItem("superbuses"));
  superbuses.splice(index, 1);
  localStorage.setItem("superbuses", JSON.stringify(superbuses));
  display();
}

let updateIndex;

function copySuperbus(index) {
  let superbuses = JSON.parse(localStorage.getItem("superbuses"));
  updateIndex = index;
  let superbus = superbuses[index];

  document.getElementById("upname").value = superbus.name;
  document.getElementById("upnumber").value = superbus.number;
  document.getElementById("uppassenger").value = superbus.passenger;
  document.getElementById("upsource").value = superbus.source;
  document.getElementById("updestination").value = superbus.destination;
}

function updateSuperbus(e) {
  e.preventDefault();
  let superbuses = JSON.parse(localStorage.getItem("superbuses"));
  let superbus = superbuses[updateIndex];
  console.log(superbus);
  let name = document.getElementById("upname").value;
  let number = document.getElementById("upnumber").value;
  let passenger = document.getElementById("uppassenger").value;
  let source = document.getElementById("upsource").value;
  let destination = document.getElementById("updestination").value;
  superbus.name = name;
  superbus.number = Number(number);
  superbus.passenger = Number(passenger);
  superbus.source = source;
  superbus.destination = destination;

  localStorage.setItem("superbuses", JSON.stringify(superbuses));
  display(superbuses);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copySuperbus(index);
}

function hideModal(event) {
  if (event.target.className == "modal") {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
}
