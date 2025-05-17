// Switch status using checkbox
const statusSwitch = document.getElementById("statusSwitch");
const statusLabel = document.getElementById("statusLabel");
statusSwitch.onchange = function () {
  if (statusSwitch.checked) {
    statusLabel.textContent = "Available";
    statusLabel.classList.remove("text-danger");
    statusLabel.classList.add("text-success");
  } else {
    statusLabel.textContent = "Busy";
    statusLabel.classList.remove("text-success");
    statusLabel.classList.add("text-danger");
  }
};

// Sidebar navigation (demo)
document.getElementById("myServicesLink").onclick = function () {
  document.getElementById("dashboardTitle").textContent = "My Services";
  document.getElementById("dashboardContent").innerHTML = `
            <ul class="list-group" id="serviceList">
                <li class="list-group-item">Laundry - Home Cleaning</li>
                <li class="list-group-item">Plumbing - Repairs</li>
            </ul>
        `;
};
document.getElementById("myReviewsLink").onclick = function () {
  document.getElementById("dashboardTitle").textContent = "My Reviews";
  document.getElementById("dashboardContent").innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">"Great service!" - Jane</li>
                <li class="list-group-item">"Very professional." - Mike</li>
            </ul>
        `;
};
document.getElementById("myEarningsLink").onclick = function () {
  document.getElementById("dashboardTitle").textContent = "My Earnings";
  document.getElementById("dashboardContent").innerHTML = `
            <p>Total Earnings: <strong>$1,200</strong></p>
            <p>This Month: <strong>$300</strong></p>
            <button class="btn btn-success" id="withdrawBtn">Withdraw Earnings</button>
        `;
  // Add event listener for withdraw button
  setTimeout(() => {
    const withdrawBtn = document.getElementById("withdrawBtn");
    if (withdrawBtn) {
      withdrawBtn.onclick = function () {
        alert("Withdrawal request sent!");
      };
    }
  }, 100);
};

// Add Service Modal form (demo)
document.querySelector("#addServiceModal form").onsubmit = function (e) {
  e.preventDefault();
  const type = document.getElementById("serviceType").value;
  const category = document.getElementById("serviceCategory").value;
  if (type && category) {
    const list = document.getElementById("serviceList");
    if (list) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${type} - ${category}`;
      list.appendChild(li);
    }
    bootstrap.Modal.getInstance(
      document.getElementById("addServiceModal")
    ).hide();
  }
};

// Chat icon click opens chat modal
document.getElementById("chatIcon").onclick = function () {
  const chatModal = new bootstrap.Modal(document.getElementById("chatModal"));
  chatModal.show();
};

// Chat list switching logic
document.querySelectorAll(".chat-list-item").forEach((item) => {
  item.onclick = function () {
    document
      .querySelectorAll(".chat-list-item")
      .forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
    document
      .querySelectorAll(".chat-conversation")
      .forEach((conv) => conv.classList.add("d-none"));
    const chatId = this.getAttribute("data-chat");
    document.getElementById(chatId).classList.remove("d-none");
  };
});
