var d=document.getElementById('z');
if(d){var di=d.querySelector('img');
document.querySelectorAll('.shot').forEach(function(b){b.addEventListener('click',function(){var s=b.querySelector('img');di.src=s.src;di.alt=s.alt;d.showModal()})});
d.addEventListener('click',function(){d.close()})}
