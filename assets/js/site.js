document.querySelectorAll('.nav a').forEach(function(link){
  if (link.pathname === window.location.pathname) link.setAttribute('aria-current','page');
});
