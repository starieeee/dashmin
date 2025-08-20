document.addEventListener("DOMContentLoaded", function () {
  // Scroll to Top Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!mybutton) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

 window.topFunction = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  // to-do list
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

  window.addTask = function() {
    if (inputBox.value === "") {
      alert("Please enter a task");
      return;
    } else {
      let li = document.createElement("li");
      li.innerHTML = `<div class="d-flex align-items-center border-bottom py-2">
                                    <input type="checkbox" class="form-check-input m-0">
                                    <div class="w-100 ms-3">
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <span>
                                                ${inputBox.value}
                                            </span>
                                            <button class="btn btn-sm remove-btn">
                                                <i class="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
      listContainer.appendChild(li);
      inputBox.value = "";
      // Add event for checkbox
      li.querySelector('input[type="checkbox"]').addEventListener(
        "change",
        function () {
          const span = li.querySelector("span");
          if (this.checked) {
            span.classList.add("text-decoration-line-through");
          } else {
            span.classList.remove("text-decoration-line-through");
          }
        }
      );

      // Remove
      li.querySelector(".remove-btn").addEventListener("click", function () {
        li.remove();
      });
    }
  }

  // Worldwide Sales Chart
  const ctx = document.getElementById("worldwide-sales").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "USA",
          data: [15, 30, 55, 65, 60, 80, 95],
          backgroundColor: "rgba(0, 156, 255, .7)",
        },
        {
          label: "UK",
          data: [8, 35, 40, 60, 70, 55, 75],
          backgroundColor: "rgba(0, 156, 255, .5)",
        },
        {
          label: "AU",
          data: [12, 25, 45, 55, 65, 70, 60],
          backgroundColor: "rgba(0, 156, 255, .3)",
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  // Salse & Revenue Chart
  var ctx2 = document.getElementById("salse-revenue").getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "Salse",
          data: [15, 30, 55, 45, 70, 65, 85],
          backgroundColor: "rgba(0, 156, 255, .5)",
          fill: true,
        },
        {
          label: "Revenue",
          data: [99, 135, 170, 130, 190, 180, 270],
          backgroundColor: "rgba(0, 156, 255, .3)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Calender
  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });
});
$("#calendar").datetimepicker({
 inline: true,
 format: "L",
});



document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".sidebar-toggler");
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");

  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.classList.toggle("open");
    content.classList.toggle("open");
  });
});

// Single Line Chart
var ctx3 = $("#line-chart").get(0).getContext("2d");
var myChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    datasets: [
      {
        label: "Salse",
        fill: false,
        backgroundColor: "rgba(0, 156, 255, .3)",
        data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Multiple line chart
var ctx4 = document.getElementById("multiple-chart").getContext("2d");
var myChart2 = new Chart(ctx4, {
  type: "line",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Salse",
        data: [15, 30, 55, 45, 70, 65, 85],
        backgroundColor: "rgba(0, 156, 255, .5)",
        fill: true,
      },
      {
        label: "Revenue",
        data: [99, 135, 170, 130, 190, 180, 270],
        backgroundColor: "rgba(0, 156, 255, .3)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//   Single bar chart
const ctx5 = document.getElementById("single-bar-chart").getContext("2d");
new Chart(ctx5, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "USA",
        data: [15, 30, 55, 65, 60, 80, 95],
        backgroundColor: "rgba(0, 156, 255, .7)",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//   Multiple bar chart
const ctx6 = document.getElementById("multiple-bar-chart").getContext("2d");
new Chart(ctx6, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "USA",
        data: [15, 30, 55, 65, 60, 80, 95],
        backgroundColor: "rgba(0, 156, 255, .7)",
      },
      {
        label: "UK",
        data: [8, 35, 40, 60, 70, 55, 75],
        backgroundColor: "rgba(0, 156, 255, .5)",
      },
      {
        label: "AU",
        data: [12, 25, 45, 55, 65, 70, 60],
        backgroundColor: "rgba(0, 156, 255, .3)",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//   pie chart
const ctx7 = document.getElementById("pie-chart").getContext("2d");
new Chart(ctx7, {
  type: "pie",
  data: {
    labels: ["USA", "ENGLAND", "CAMBODIA", "ITALY", "KOREA"],
    datasets: [
      {
        label: "USA",
        data: [20, 15, 30, 25, 10],
        backgroundColor: "rgba(0, 156, 255, .7)",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//   doughnut chart

const ctx8 = document.getElementById("d-chart").getContext("2d");
new Chart(ctx8, {
  type: "doughnut",
  data: {
    labels: ["USA", "ENGLAND", "CAMBODIA", "ITALY", "KOREA"],
    datasets: [
      {
        label: "USA",
        data: [20, 15, 30, 25, 10],
        backgroundColor: "rgba(0, 156, 255, .7)",
      },
    ],
  },
  options: {
    responsive: true,
  },
});
