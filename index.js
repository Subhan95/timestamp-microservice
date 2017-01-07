var express = require('express');
var moment = require('moment')
var path = require('path')
var app = express()
var obj;
var formats = ['MMMM D, YYYY',
        'MMMM D YYYY',
        'MMM D, YYYY',
        'MMM D YYYY',
        'X'
]

app.use('/',express.static(path.join(__dirname,'public')));

app.get('/:uri',function(req,res){

    var uri = req.params.uri;
    var date = moment(decodeURIComponent(uri),formats,true);

    if (date.isValid()) {
        obj = {
            'unix': parseInt(date.format('X')),
            'natural': date.format('MMMM DD, YYYY') 
        }
    }

    else {
        obj = {'unix':null,'natural':null};
    }

    res.send(obj);
})


app.listen(process.env.PORT||3000);

