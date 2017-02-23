var anchor_links = require('./index');

function tester(exit, phrase, ...remaining){
  if(!phrase) return exit
  const new_phrase = anchor_links(phrase[0]);
  if(new_phrase !== phrase[1]){
    console.log(phrase[0], phrase[1], "|", new_phrase)
    exit = 1;
  }
  return tester(exit, ...remaining);
}

process.exit(tester(0,
  ["priorityclient.com", '<a href="priorityclient.com">priorityclient.com</a>'],
  ["http://priorityclient.co.jp", '<a href="http://priorityclient.co.jp">http://priorityclient.co.jp</a>'],
  ["priorityclient.com and http://priorityclient.co.jp", '<a href="priorityclient.com">priorityclient.com</a> and <a href="http://priorityclient.co.jp">http://priorityclient.co.jp</a>'],
  ["priorityclient.com?", '<a href="priorityclient.com">priorityclient.com</a>?'],
  ["franken.priorityclient.com.", '<a href="franken.priorityclient.com">franken.priorityclient.com</a>.'],
  ["priorityclient.com.",  '<a href="priorityclient.com">priorityclient.com</a>.'],
  ["priorityclient.com?test=best", '<a href="priorityclient.com?test=best">priorityclient.com?test=best</a>'],
  ["priorityclient.com?test=best.", '<a href="priorityclient.com?test=best">priorityclient.com?test=best</a>.'],
  ["priorityclient.com?test=best?", '<a href="priorityclient.com?test=best">priorityclient.com?test=best</a>?'],
  ["http://priorityclient.com.",  '<a href="http://priorityclient.com">http://priorityclient.com</a>.'],
  ["http://priorityclient.com?test=best", '<a href="http://priorityclient.com?test=best">http://priorityclient.com?test=best</a>'],
  ["http://priorityclient.com?test=best.", '<a href="http://priorityclient.com?test=best">http://priorityclient.com?test=best</a>.'],
  ["http://priorityclient.com?test=best?", '<a href="http://priorityclient.com?test=best">http://priorityclient.com?test=best</a>?']
  ["http://priorityclient.com?test=best&better&better?", '<a href="http://priorityclient.com?test=best&better&better">http://priorityclient.com?test=best&better&better</a>?']
));

