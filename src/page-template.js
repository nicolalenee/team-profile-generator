// generate manager card
const generateManagerCard = managerInfo => {
  return `
  <div class="card m-6">
      <div class="card-header is-flex is-flex-direction-column has-background-primary">
        <h2 class="card-header-title is-size-5 has-text-white is-centered">Nicola || Manager</h2>
      </div>

      <div class="card-content">
        <div id="id-number" class="box">
          <p class="is-size-7">>ID: 1</p>
        </div>
        <div id="email" class="box">
          <p class="is-size-7">Email: <span>
            <a class="is-size-7" href = "mailto: marblenicola@gmail.com">marblenicola@gmail.com</a>
          </span></p> 
          
        </div>
        <div id="github" class="box">
          <p class="is-size-7">Github: <span>
            <a href="http://github.com/nicolalenee" target="_blank">nicolalenee</a>
          </span></p>
        </span>
        </div>
      </div>
    </div>
  
  `;
}

// generate employee cardd
const generateEmployeeCard = employeeInfo => {
  if (employeeInfo === 'Engineer') {
    return `
    <div class="card m-6">
      <div class="card-header is-flex is-flex-direction-column has-background-primary">
        <h2 class="card-header-title is-size-5 has-text-white is-centered">Nicola || Engineer</h2>
      </div>

      <div class="card-content">
        <div id="id-number" class="box">
          <p class="is-size-7">ID: 1</p>
        </div>
        <div id="email" class="box">
          <p class="is-size-7">Email: <span>
            <a class="is-size-7" href = "mailto: marblenicola@gmail.com">marblenicola@gmail.com</a>
          </span></p> 
          
        </div>
        <div id="github" class="box">
          <p class="is-size-7">Github: <span>
            <a href="http://github.com/nicolalenee" target="_blank">nicolalenee</a>
          </span></p>
        </span>
        </div>
      </div>
    </div>
    `;

  } else if (employeeInfo === 'Intern') {
    return `
    <div class="card m-6">
      <div class="card-header is-flex is-flex-direction-column has-background-primary">
        <h2 class="card-header-title is-size-5 has-text-white is-centered">Nicola || Intern</h2>
      </div>

      <div class="card-content">
        <div id="id-number" class="box">
          <p class="is-size-7">ID: 1</p>
        </div>
        <div id="email" class="box">
          <p class="is-size-7">Email: <span>
            <a class="is-size-7" href = "mailto: marblenicola@gmail.com">marblenicola@gmail.com</a>
          </span></p> 
          
        </div>
        <div id="github" class="box">
          <p class="is-size-7">Github: <span>
            <a href="http://github.com/nicolalenee" target="_blank">nicolalenee</a>
          </span></p>
        </span>
        </div>
      </div>
    </div>
    `;

  } {
    return;
  }
}

// generate full hmtl 

module.exports = templateData => {
  const { manager, employee} = templateData;

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
    <header class="hero has-background-info">
      <div class="hero-body">
        <h1 class="title has-text-centered has-text-info-light">My Team</h1>
      </div>
    </header>

    <main class="section is-flex is-flex-wrap-wrap is-align-content-flex-start is-justify-content-center has-background-primary-light">

      ${generateManagerCard(manager)}
      ${generateEmployeeCard(employee)}

    </main>

  </body>
  </html>

  `;
}