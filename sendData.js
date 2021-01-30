const btn = document.querySelector('button');


function sendData() {

  data = {
    'age' : document.getElementById('ageInput').value,
    'sex': document.getElementById('sexInput').value,
    'cp': document.getElementById('chestPainInput').value,
    'restbps' : document.getElementById('rbsInput').value,
    'chol' : document.getElementById('cholesterolInput').value,
    'fbs' : document.getElementById('fbsInput').value,
    'restecg' : document.getElementById('electroInput').value,
    'thalach' : document.getElementById('hrateInput').value,
    'exang':document.getElementById('exeranginaInput').value,
    'oldpeak' : document.getElementById('oldpeakInput').value,
    'slope' : document.getElementById('slopeInput').value,
    'ca' : document.getElementById('vesselInput').value,
    'thal' : document.getElementById('bloodDsdrInput').value

  }
  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  XHR.addEventListener( 'load', function(event) {
    jsonn = JSON.parse(XHR.response)
    if(jsonn['Heart disease'] == 0){
      alert( `You do not have a heart disease ` );
    }
    else{
      alert( `You do have a heart disease ` );
    }
    
    
  } );

  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  XHR.open( 'POST', 'https://happiness-predict.herokuapp.com/heart' );

  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  XHR.send( urlEncodedData );
}
