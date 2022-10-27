function generateHtml(data) {
//  console.log(data) 
//  console.log (data.managerName)
  // return "This is a practice return";
  return `<!DOCTYPE html>
  <html lang="en-US">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css" />
  </head>
  
  <body>
    <div class="container">
      <div style="margin-top: 80px;" class="jumbotron text-center">
        <h1 class="display-4">Team Profile <span role="img" aria-label="Memo"></span></h1>
      </div>
    </div>
    <div>
      <div>Manager Information
        <ul>
          <li> Manager Name: ${data.managerName}</li>
          <li> Manager ID: ${data.managerID}</li>
          <li> Manager Email: ${data.managerEmail}</li>
          <li> Manager Number: ${data.managerNumber}</li>
        </ul>
      </div>
      <div> Engineer Information
        <ul>
        <li>Engineer Name: ${data.engineerName}
        <li>Engineer ID: ${data.engineerID}
        <li>Engineer Email: ${data.engineerEmail}
        <li> Engineer Username: ${data.engineerUsername}
        </ul>
      </div>
      <div> Intern Information
        <ul>
        <li>Intern Name: ${data.InternName}
        <li>Intern ID: ${data.InternID}
        <li>Intern Email: ${data.InternEmail}
        <li>Intern School: ${data.InternSchool}
      </ul>
    </div>
    </div>
    <script src="/assets/js/index.js"></script>
  </body>
  
  </html>`
    
};


module.exports= generateHtml;
