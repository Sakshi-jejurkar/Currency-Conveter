console.log("main.js working");

const populate = async (value, currency) => {
  let myStr = "";
  const url = `add your api=${currency}`;

  try {
    const response = await fetch(url);
    const rjson = await response.json();
    console.log(rjson);

    // Loop through the data
    for (let key in rjson["data"]) {
      myStr += `
        <tr>
          <td>${key}</td>
          <td>${rjson["data"][key]["code"]}</td>
          <td>${rjson["data"][key]["value"] * value}</td>
        </tr>
      `;
    }

    // Populate the table
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button is clicked");

  const value = parseInt(document.querySelector("input[name='quantity']").value);
  const currency = document.querySelector("select[name='Currency']").value;

  // Call the populate function with the inputs
  populate(value, currency);
});
