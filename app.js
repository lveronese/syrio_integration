"use strict";

import services_entrasp_interprise_it__ILoadService from "./LoadService";

var fs = require('fs');
var readline = require('readline');
var input = "";

function invioOk(response) {

}

function invioErrore(status, statusText) {

}

function inviaANebula() {
  const ws = new services_entrasp_interprise_it__ILoadService();
  ws.url = 'https://associativiecc..../entrasp/services/LoadServicePort';
  ws.process(invioOk, invioErrore, codiceAzienda, codicePartner, input, check, dataRecordName, extSysName);
}

function caricaDati() {
  let lineReader = readline.createInterface({input: fs.createReadStream('./input.txt')});
  var logStream = fs.createWriteStream('result.txt');
  lineReader.on('line', function(line) {
    record = {
      denominazione: line.substring(10, 100).trim(),
      cf: line.substring(100, 116).trim(),
      via: via.trim(),
      civico: civico.trim(),
      cap: line.substring(146, 151).trim(),
      citta: line.substring(151, 181).trim(),
      prov: line.substring(181, 183).trim().toUpperCase(),
      nazione: line.substring(183, 185).trim().toUpperCase() || 'IT',
      piva: line.substring(194, 212).trim()
    }
    input += `${nominativo.denominazione};${nominativo.bic};${nominativo.iban};${nominativo.cf};;${nominativo.via};${nominativo.civico};${nominativo.citta};${nominativo.prov};${nominativo.cap};${nominativo.nazione}\n`
  }
});
lineReader.on('close', inviaANebula);
}

caricaDati();
