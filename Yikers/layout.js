window.onload = function(){
	var a = document.querySelector('a.download-btn[data-browser="edge"]');
	a.setAttribute('href' , 'https://microsoftedge.microsoft.com/addons/detail/' + chrome.runtime.id);
}