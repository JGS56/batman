const getBrowserInfo = () => {
  let t, v = undefined;
  if (window.chrome) t = 'Chrome';
  else if (window.opera) t = 'Opera';
  else if (document.all) {
    t = 'IE';
    let nv = navigator.appVersion;
    let s = nv.indexOf('MSIE') + 5;
    v = nv.substring(s, s + 1);
  } else if (navigator.appName) t = 'Netscape';
  return {
    type: t,
    version: v
  };
}

const bookmark = (a) => {
  let url = window.document.location;
  let title = window.document.title;
  let b = getBrowserInfo();
  if (b.type == 'IE' && 8 >= b.version && b.version >= 4) window.external.AddFavorite(url, title);
  else if (b.type == 'Opera') {
    a.href = url;
    a.rel = "sidebar";
    a.title = url + ',' + title;
    return true;
  } else if (b.type == "Netscape") window.sidebar.addPanel(title, url, "");
  else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
  return false;
}