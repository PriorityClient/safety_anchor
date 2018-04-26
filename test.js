var anchor_links = require('./index');

function tester(exit, phrase, ...remaining){
  if(!phrase) return exit
  const new_phrase = anchor_links(phrase[0]);
  if(new_phrase !== phrase[1]){
    console.log("testing:", phrase[0]);
    console.log("expected:", phrase[1]);
    console.log("received:", new_phrase);
    console.log("---");
    exit = 1;
  }
  return tester(exit, ...remaining);
}

process.exit(tester(0,
  ["priorityclient.com/something", '<a target="_blank" href="http://priorityclient.com/something">priorityclient.com/something</a>'],
  ["http://priorityclient.com/something", '<a target="_blank" href="http://priorityclient.com/something">http://priorityclient.com/something</a>'],
  ["http://priorityclient.com/something and http://priorityclient.com/something/else", '<a target="_blank" href="http://priorityclient.com/something">http://priorityclient.com/something</a> and <a target="_blank" href="http://priorityclient.com/something/else">http://priorityclient.com/something/else</a>'],
  ["priorityclient.com", '<a target="_blank" href="http://priorityclient.com">priorityclient.com</a>'],
  ["http://priorityclient.co.jp", '<a target="_blank" href="http://priorityclient.co.jp">http://priorityclient.co.jp</a>'],
  ["priorityclient.com and http://priorityclient.co.jp", '<a target="_blank" href="http://priorityclient.com">priorityclient.com</a> and <a target="_blank" href="http://priorityclient.co.jp">http://priorityclient.co.jp</a>'],
  ["priorityclient.com?", '<a target="_blank" href="http://priorityclient.com">priorityclient.com</a>?'],
  ["franken.priorityclient.com.", '<a target="_blank" href="http://franken.priorityclient.com">franken.priorityclient.com</a>.'],
  ["priorityclient.com.",  '<a target="_blank" href="http://priorityclient.com">priorityclient.com</a>.'],
  ["priorityclient.com?test=best", '<a target="_blank" href="http://priorityclient.com?test=best">priorityclient.com?test=best</a>'],
  ["priorityclient.com?test=best.", '<a target="_blank" href="http://priorityclient.com?test=best">priorityclient.com?test=best</a>.'],
  ["priorityclient.com?test=best?", '<a target="_blank" href="http://priorityclient.com?test=best">priorityclient.com?test=best</a>?'],
  ["http://priorityclient.co.",  '<a target="_blank" href="http://priorityclient.co">http://priorityclient.co</a>.'],
  ["http://priorityclient.co?test=best", '<a target="_blank" href="http://priorityclient.co?test=best">http://priorityclient.co?test=best</a>'],
  ["http://priorityclient.co?test=best.", '<a target="_blank" href="http://priorityclient.co?test=best">http://priorityclient.co?test=best</a>.'],
  ["http://priorityclient.co?test=best?", '<a target="_blank" href="http://priorityclient.co?test=best">http://priorityclient.co?test=best</a>?']
  ["http://priorityclient.co?test=best&better&better?", '<a target="_blank" href="http://priorityclient.co?test=best&better&better">http://priorityclient.co?test=best&better&better</a>?']
));

