document.querySelectorAll('.nav a').forEach(function(link){
  if(link.pathname === window.location.pathname) link.setAttribute('aria-current','page');
});
const searchInput = document.querySelector('[data-search]');
if(searchInput){
  searchInput.addEventListener('input', function(){
    const value = this.value.trim().toLowerCase();
    document.querySelectorAll('[data-search-item]').forEach(function(item){
      item.style.display = item.innerText.toLowerCase().includes(value) ? '' : 'none';
    });
  });
}