let superemployees = [
  {
    name: "Ram",
    age: 1500,
    city: "topsecret1",
    salary: "6.3",
  },
  {
    name: "Iron",
    age: 34,
    city: "topsecret2",
    salary: "5.10",
  },
  {
    name: "Goat",
    age: 101,
    city: "topsecret3",
    salary: "6",
  },
  {
    name: "Pain",
    age: 105,
    city: "topsecret4",
    salary: "6",
  },
  {
    name: "Boat",
    age: 106,
    city: "topsecret5",
    salary: "6.2",
  },
];

function display(superarray) {
  let tabledata = "";

  superarray.forEach(function (superemployee, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${superemployee.name}</td>
    <td>${superemployee.age}</td>
    <td>${superemployee.city}</td>
    <td>${superemployee.salary}</td>
    <td>
    <button onclick='deleteSuperemloyee(${index})'>Delete</button>
    </td>
    </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display(superemployees);

function searchByNameOrCity() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = superemployees.filter(function (superemployee) {
    return (
      superemployee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || superemployee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

display(newdata);
}

function deleteSuperemloyee(index) {
  superemployees.splice(index, 1);
  display(superemployees);
}

