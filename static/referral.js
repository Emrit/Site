/*functions for setting cookies and reading cookie */
console.log('started')
function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
function getCookie(cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/* get the referral variable from the url if it exists and set it to a variable named ref */
const urlParams = new URLSearchParams(window.location.search)
const ref = urlParams.get('referral')
console.log(ref)
/* if ref variable is not null set it as a cookie named ref. This will overwrite existing cookie if the variable exists and set the cookie to expire in 30 days */
if (ref != null) {
  setCookie('ref', ref, 30)
}

/* set a variable named referral to the value from the cookie if the cookie existes and set a variable named input that matches the id of the input field from your signup. This should be changed to match the id from your form. */
var referral = getCookie('ref')
var input = document.getElementById('referral') /*change this id*/
console.log(referral)
/* if cookie variable is not set or if the input does not exist on page, then do nothing otherwise set input with id of refferal to the value of the cookie and disable the form input field. This should be changed to match the id from your form.  */
if (referral != null && referral != '') {
  if (input != null && input != '') {
    document.getElementById('referral').value = referral /*change this id*/
    document.getElementById('referral').disabled = true /*change this id*/
  }
}
