---
---

(function(){
  var baseurl = "{{ site.baseurl }}";
  var langs = ({{ site.data.languages | jsonify }});
  var langMap = {
    "en": "en",
    "en-us": "en",
    "en-gb": "en",
    "de": "de",
    "de-de": "de",
    "fr": "fr",
    "fr-fr": "fr",
    "zh": "zh-Hans",
    "zh-cn": "zh-Hans",
    "zh-sg": "zh-Hans",
    "zh-hans": "zh-Hans"
  };

  function getPreferred(){
    try{
      var saved = localStorage.getItem("site-lang");
      if (saved) return saved;
    }catch(e){}
    var nav = (navigator.language || (navigator.languages && navigator.languages[0]) || "en").toLowerCase();
    return langMap[nav] || "en";
  }

  function pathFor(code){
    for (var i=0;i<langs.length;i++){
      if (langs[i].code === code){ return (langs[i].path || ""); }
      if (code === "zh-Hans" && langs[i].code === "zh-Hans"){ return (langs[i].path || ""); }
    }
    return "";
  }

  var pathname = window.location.pathname.replace(/\/index\.html$/, "");
  var rootPaths = ["/", baseurl + "/", baseurl];
  var onRoot = rootPaths.indexOf(pathname) !== -1;

  if (onRoot){
    var pref = getPreferred();
    var p = pathFor(pref);
    if (p && p !== ""){
      try{ localStorage.setItem("site-lang", pref); }catch(e){}
      window.location.replace(baseurl + p + "/");
      return;
    }
  }

  var btn = document.querySelector(".lang-btn");
  var menu = document.querySelector(".lang-menu");
  if (btn && menu){
    btn.addEventListener("click", function(){
      var open = menu.hasAttribute("hidden") ? false : true;
      if (open){ menu.setAttribute("hidden",""); btn.setAttribute("aria-expanded","false"); }
      else { menu.removeAttribute("hidden"); btn.setAttribute("aria-expanded","true"); }
    });
    document.addEventListener("click", function(e){
      if (!menu.contains(e.target) && !btn.contains(e.target)){
        if (!menu.hasAttribute("hidden")){ menu.setAttribute("hidden",""); btn.setAttribute("aria-expanded","false"); }
      }
    });
    menu.addEventListener("click", function(e){
      var a = e.target.closest("a[data-lang]");
      if (a){
        try{ localStorage.setItem("site-lang", a.getAttribute("data-lang")); }catch(err){}
      }
    });
  }
})();
