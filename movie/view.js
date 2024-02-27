function render(movies) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basketball Players</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: blanchedalmond;
            margin: 0;
            padding: 0;
        }

        table {
            width: 80%;
            margin: 0px auto;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }
        tbody>tr:hover{
            background-color: grey;
            font-size:20px;
            font-weight:bold;
            transition-duration:10s;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 0px;
        }
        h1{
            margin-bottom:0px;
            color: #4CAF50;
        }
        footer{
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 0px;
        }
        footer:hover{
            background-color: red;
            font-size:40px;
            font-weight:bolder;
            transition-duration:5s;
        }
    </style>

    
</head>
<body>
    <div><h1>NBA TOP5PICK</h1></div>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Height</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>LeBron James</td>
                <td>Los Angeles Lakers</td>
                <td>Forward</td>
                <td>6'9"</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Stephen Curry</td>
                <td>Golden State Warriors</td>
                <td>Guard</td>
                <td>6'3"</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Kawhi Leonard</td>
                <td>Los Angeles Clippers</td>
                <td>Forward</td>
                <td>6'7"</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Giannis Antetokounmpo</td>
                <td>Milwaukee Bucks</td>
                <td>Forward</td>
                <td>6'11"</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Luka Dončić</td>
                <td>Dallas Mavericks</td>
                <td>Guard/Forward</td>
                <td>6'7"</td>
            </tr>
        </tbody>
    </table>
    <footer><h1>นายสรรเสริญ สิงห์สุทธิชาติ 6403249</h1></footer>
</body>
</html>
`};

module.exports = render;