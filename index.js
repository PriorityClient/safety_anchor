
function anchor_links(string){
  return string
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/([a-zA-Z]+:\/\/[A-Za-z0-9-._~:\/?#\[\]@!$&'()*+,;=\`]+[^((\.|\?)($|\s))])|([A-Za-z0-9-._~:\/?#\[\]@!$&'()*+,;=`]+\.(com|gov|net|org|edu))((:|\?|#)[A-Za-z0-9-._~:\/?#\[\]@!$&'()*+,;=`]+[^((\.|\?)($|\s))])*/g, '<a href="$&">$&</a>')
}

module.exports = anchor_links;
