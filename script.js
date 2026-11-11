document.getElementById('copy').addEventListener('click',function(){
  var b=this,t='slippinjimmy09';
  function done(ok){b.textContent=ok?'Copied':'Copy failed: select it manually';setTimeout(function(){b.textContent='Copy username'},1800)}
  try{navigator.clipboard.writeText(t).then(function(){done(true)},function(){done(false)})}catch(e){done(false)}
});
