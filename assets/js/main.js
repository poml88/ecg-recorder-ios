---
layout: null
---
(function(){
  const supported = ['en','de','fr','it','nl','ru','zh-Hans'];
  const path = window.location.pathname.replace(/\/+$/,''); // trim trailing slash
  const siteBase = '{{ site.baseurl }}' || '';
  const currentLang = document.documentElement.getAttribute('lang') || 'en';

  // Persisted language
  const saved = localStorage.getItem('site-lang');

  function bestLang(){
    const n = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || navigator.userLanguage || 'en'];
    for(const l of n){
      const ll = l.toLowerCase();
      if(ll.startsWith('de')) return 'de';
      if(ll.startsWith('fr')) return 'fr';
      if(ll.startsWith('it')) return 'it';
      if(ll.startsWith('nl')) return 'nl';
      if(ll.startsWith('ru')) return 'ru';
      if(ll.startsWith('zh')) return 'zh-Hans';
      if(ll.startsWith('en')) return 'en';
    }
    return 'en';
  }

  // Redirect on root (English is default at root). If user preferred different language and not on that page, go there.
  if(!saved){
    const b = bestLang();
    if(b !== 'en' && (path === siteBase || path === siteBase + '')){
      window.location.replace(siteBase + '/' + (b === 'zh-Hans' ? 'zh-Hans' : b) + '/');
      return;
    }
  }

  // Lang menu toggle
  const btn = document.querySelector('[data-lang-button]');
  const menu = document.querySelector('[data-lang-menu]');
  if(btn && menu){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', function(){
      menu.style.display = 'none';
    });
  }

  // Handle language change clicks
  document.querySelectorAll('[data-lang-select]').forEach(function(a){
    a.addEventListener('click', function(e){
      const lang = e.currentTarget.getAttribute('data-lang-select');
      localStorage.setItem('site-lang', lang);
    });
  });
})();
