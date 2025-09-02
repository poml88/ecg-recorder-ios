(function(){
  function baseurl(){ var m = document.querySelector('meta[name=baseurl]'); return m ? m.content : ''; }
  function pathForLang(code){
    switch(code){
      case 'de': return baseurl() + '/de/';
      case 'fr': return baseurl() + '/fr/';
      case 'zh-Hans': return baseurl() + '/zh-Hans/';
      default: return baseurl() + '/';
    }
  }
  function normalize(lang){
    if(!lang) return 'en';
    lang = lang.toLowerCase();
    if(lang.startsWith('de')) return 'de';
    if(lang.startsWith('fr')) return 'fr';
    if(lang.startsWith('zh')) return 'zh-Hans';
    return 'en';
  }
  function currentLang(){
    return document.documentElement.getAttribute('lang') || 'en';
  }
  function onReady(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  onReady(function(){
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if(btn && menu){
      btn.addEventListener('click', function(){
        var open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      });
      menu.addEventListener('click', function(e){
        var a = e.target.closest('a[data-lang]');
        if(a){
          var lang = a.getAttribute('data-lang');
          try{ localStorage.setItem('lang', lang); }catch(e){}
          window.location.href = pathForLang(lang);
          e.preventDefault();
        }
      });
      document.addEventListener('click', function(e){
        if(!menu.contains(e.target) && !btn.contains(e.target)){ menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
      });
    }

    // Autodetect: only when no choice stored and not already redirected in this tab
    var stored = null;
    try{ stored = localStorage.getItem('lang'); }catch(e){}
    var redirected = sessionStorage.getItem('i18n-redirected') === '1';
    var curr = currentLang();
    if(stored && stored !== curr){
      // Respect user's selection
      window.location.replace(pathForLang(stored));
      return;
    }
    if(!stored && !redirected){
      var navLangs = (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language) || 'en';
      var pref = normalize(navLangs);
      if(pref !== curr){
        sessionStorage.setItem('i18n-redirected','1');
        window.location.replace(pathForLang(pref));
      }
    }
  });
})();
