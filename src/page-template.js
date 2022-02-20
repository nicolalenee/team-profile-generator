// generate employee cardd
const html = [];

const generateEmployeeCard = (data) => {
  function generateManager(manager) {
    return `
          <div class="card m-6">
            <div class="card-header is-flex is-flex-direction-column has-background-primary">
              <h2 class="card-header-title is-size-5 has-text-white is-centered">${manager.getName()} || Manager</h2>
            </div>

            <div class="card-content">
              <div id="id-number" class="box">
                <p class="is-size-7">ID: ${manager.getId()}</p>
              </div>

              <div id="email" class="box">
                <p class="is-size-7">Email: <span>
                  <a class="is-size-7" href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a>
                  </span></p> 
              </div>

              <div id="office-number" class="box">
                <p class="is-size-7">Office Number: ${manager.getOfficeNumber()}</p>
              </div>
            </div>
          </div>

    `;
  }

  function generateEngineer(engineer) {
    return `
          <div class="card m-6">
            <div class="card-header is-flex is-flex-direction-column has-background-primary">
              <h2 class="card-header-title is-size-5 has-text-white is-centered">${engineer.getName()} || ${engineer.getRole()}</h2>
            </div>

            <div class="card-content">
              <div id="id-number" class="box">
                <p class="is-size-7">ID: ${engineer.getId()}</p>
              </div>
              <div id="email" class="box">
                <p class="is-size-7">Email: <span>
                  <a class="is-size-7" href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>
                </span></p> 
                
              </div>
              <div id="github" class="box">
                <p class="is-size-7">Github: <span>
                  <a href="http://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
                </span></p>
              </span>
              </div>
            </div>
          </div>
    `;
  }

  function generateIntern(intern) {
    return `
          <div class="card m-6">
            <div class="card-header is-flex is-flex-direction-column has-background-primary">
              <h2 class="card-header-title is-size-5 has-text-white is-centered">${intern.getName()} || ${intern.getRole()}</h2>
            </div>

            <div class="card-content">
              <div id="id-number" class="box">
                <p class="is-size-7">ID: ${intern.getId()}</p>
              </div>
              <div id="email" class="box">
                <p class="is-size-7">Email: <span>
                  <a class="is-size-7" href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
                </span></p> 
                
              </div>
              <div id="github" class="box">
                <p class="is-size-7">School: ${intern.getSchool()}</p>
              </div>
            </div>
          </div>
    `;
  }

  console.log("RESULTS", data);

  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {
      html.push(generateManager(data[i]));
    } else if (data[i].getRole() === "Engineer") {
      html.push(generateEngineer(data[i]));
    } else {
      html.push(generateIntern(data[i]));
    }
  }
  return html.join("");
};

function generateTeamPage(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://kit.fontawesome.com/a8a5155182.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <header class="hero has-background-primary">
      <div class="hero-body">
        <h1 class="title has-text-centered has-text-info-light">My Team</h1>
      </div>
    </header>
  
    <main class="section is-flex is-flex-wrap-wrap is-align-content-flex-start is-justify-content-center has-background-primary-light">
      ${generateEmployeeCard(data)}
    </main>
  </body>
  </html>
    `;
}

module.exports = generateTeamPage;
