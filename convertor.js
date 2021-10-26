function getInputValue() {
  var pnd,
    kg,
    ouns,
    gm,
    stn = 0;
  var ip = document.getElementById('ip').value;
  var ci = document.getElementById('ci');
  var tsi = document.getElementById('tsi').value;
  var fsi = document.getElementById('fsi').value;
  // _Kilogram to other _________________________________________________________________
  if (fsi == 'Kilogram' && tsi == 'Pound') {
    pnd = ip * 2.2046;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + pnd;
  } else if (fsi == 'Kilogram' && tsi == 'Ounces') {
    ouns = ip * 35.274;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + ouns;
  } else if (fsi == 'Kilogram' && tsi == 'Gram') {
    gram = ip * 1000;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + gram;
  } else if (fsi == 'Kilogram' && tsi == 'Stones') {
    stn = ip * 0.1574;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + stn;
  } else if (fsi == 'Kilogram' && tsi == 'Kilogram') {
    kg = ip;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + kg;
  }
  // Ounces to other_____________________________________________________________
  else if (fsi == 'Ounces' && tsi == 'Pound') {
    pnd = ip * 0.0625;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + pnd;
  } else if (fsi == 'Ounces' && tsi == 'Ounces') {
    ouns = ip;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + ouns;
  } else if (fsi == 'Ounces' && tsi == 'Gram') {
    gram = ip / 0.035274;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + gram;
  } else if (fsi == 'Ounces' && tsi == 'Stones') {
    stn = ip * 0.0044643;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + stn;
  } else if (fsi == 'Ounces' && tsi == 'Kilogram') {
    kg = ip / 35.274;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + kg;
  }
  // Gram to other_____________________________________________________________
  else if (fsi == 'Gram' && tsi == 'Pound') {
    pnd = ip * 0.0022046;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + pnd;
  } else if (fsi == 'Gram' && tsi == 'Ounces') {
    ouns = ip * 0.035274;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + ouns;
  } else if (fsi == 'Gram' && tsi == 'Gram') {
    gram = ip;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + gram;
  } else if (fsi == 'Gram' && tsi == 'Stones') {
    stn = ip * 0.00015747;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + stn;
  } else if (fsi == 'Gram' && tsi == 'Kilogram') {
    kg = ip / 1000;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + kg;
  }
  // Pound to other_____________________________________________________________
  else if (fsi == 'Pound' && tsi == 'Pound') {
    pnd = ip;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + pnd;
  } else if (fsi == 'Pound' && tsi == 'Ounces') {
    ouns = ip * 16;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + ouns;
  } else if (fsi == 'Pound' && tsi == 'Gram') {
    gram = ip / 0.0022046;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + gram;
  } else if (fsi == 'Pound' && tsi == 'Stones') {
    stn = ip * 0.071429;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + stn;
  } else if (fsi == 'Pound' && tsi == 'Kilogram') {
    kg = ip / 2.2046;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + kg;
  }
  // Stones to other_____________________________________________________________
  else if (fsi == 'Stones' && tsi == 'Pound') {
    pnd = ip * 14;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + pnd;
  } else if (fsi == 'Stones' && tsi == 'Ounces') {
    ouns = ip * 224;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + ouns;
  } else if (fsi == 'Stones' && tsi == 'Gram') {
    gram = ip / 0.00015747;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + gram;
  } else if (fsi == 'Stones' && tsi == 'Stones') {
    stn = ip;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + stn;
  } else if (fsi == 'Stones' && tsi == 'Kilogram') {
    kg = ip / 0.15747;
    ci.innerHTML = ' Converted Value (' + tsi + ' ) : ' + kg;
  } else {
    window.alert(
      'please Enter valid input(integer!) or check selected field is correct !'
    );
  }
}
