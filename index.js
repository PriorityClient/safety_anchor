
function anchor_links(string = ''){
  return string
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/(([a-zA-Z]+:\/\/)[A-Za-z0-9-._~:\/?#\[\]@!$&'()*+,;=\`]+[^((\.|\?)($|\s))])|([A-Za-z0-9-._~:\/?#\[\]@!$&'()*+,;=`]+\.(com|gov|net|org|edu))((:|\?|#|\/)[A-Za-z0-9-._~:\/?#\[\]@!$&'()*+,;=`]+[^((\.|\?)($|\s))])*/g, function(m, g1, g2, g3, g4, g5){
            return '<a target="_blank" href="'+(g2?'':'http://')+m+'">'+m+'</a>'
          })
}

module.exports = anchor_links;
