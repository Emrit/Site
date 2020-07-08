/*functions for setting cookies and reading cookie */
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

var urlParams = ''
var ref = ''
var referral = ''
var input = ''

setInterval(function() {
  urlParams = new URLSearchParams(window.location.search)
  ref = urlParams.get('referral')

  if (ref != null) {
    setCookie('ref', ref, 30)
  }

  if (ref == null || ref == '') {
    referral = getCookie('ref')
  } else {
    referral = ref
  }
  input = document.getElementById('referral') /*change this id*/

  if (referral != null && referral != '') {
    if (input != null && input != '') {
      document.getElementById('referral').value = referral /*change this id*/
    }
  }
}, 10)
