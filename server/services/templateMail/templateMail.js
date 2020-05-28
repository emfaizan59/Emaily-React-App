const keys = require('../../config/keys')
module.exports = survey => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap" rel="stylesheet">
        <title>Document</title>
    </head>
    
    <body style=" font-family: 'Squada One'">
         <div style="text-align : center">
            <h1 style="font-size: 40pt;
            color: rgb(163, 46, 46);
            margin-bottom: 0px;" >Help Improve Ourself</h1>
            <h3 style="  margin-top: 10px;
            font-size: 24pt;
            color: rgb(15, 112, 156);
        " >Our Company values your Opinion</h3>
            <p style=" font-size: 16pt;
            margin-bottom: 10px;">You are recieving this Email because your are choosing our Product recently. So help us to improve our quality by sending us your feedback.</p>
    
            <!-- <p class="body-question"></p> -->
            <p style="  margin-top: 0px;
            font-size: 20pt;
            color: rgb(163, 46, 46);
            font-weight: bold;">${survey.body}</p>
            <div class="feedback-div">
            <a style=" text-decoration: none;
            color: black;
            border:  2px solid  rgb(15, 112, 156);
            border-radius: 5px;
            
            padding: 10px;
            margin-right: 20px;" href='${keys.domainURL}/api/surveys/${survey.id}/yes'>
            Satisfying
            </a>
            <a style=" text-decoration: none;
            color: black;
            border:  2px solid  rgb(163, 46, 46);
            border-radius: 5px;
            
            padding: 10px;
            margin-right: 20px;" href='${keys.domainURL}/api/surveys/${survey.id}/no'>
                Not-Satisfying
                </a>
        </div>
            
            <h4 style=" font-size: 18pt;
            margin-bottom: 0px;">We appreciate your time and feedback!</h4>
            <h3 style="   margin-top: 10px;
            font-size: 20pt;">Thanks</h3>
            </div>
    </body>
    </html>
    `
}