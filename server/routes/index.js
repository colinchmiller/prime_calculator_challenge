/**
 * Created by colinmiller on 11/1/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var mathCalc = require('./maths');
var mathResult = 0;

router.route('/data')
    .post( function(req, res){
        mathResult = mathCalc(req.body.mathType, req.body.firstNumber, req.body.secondNumber);
        res.send(mathResult.toString());
});

router.get("/*", function(req, res) {
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports=router;