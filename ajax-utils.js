(function (global) {

	//set up a name space for our utility
	var ajaxUtils = {};


	//returns an HTTP request object
	function getRequestObject () {
		if (window.XMLHttpRequest){
			return (new XMLHttpRequest());
		} else if (window.ActiveXObject) {
			//for every old IE browser (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		} else {
			global.alert ("Ajax is not suported!");
			return (null);
		}
	}
	//////////////////////////////////////////////////////

	//Makes an Ajax GET request to "requestUrl"
	ajaxUtils.sendGetRequest = 
		function(requestUrl, responseHandler) {
			var request = getRequestObject();
			request.onreadystatechange = 
				function (){
					handleResponse (request, responseHandler);
				}
			request.open("GET",requestUrl,true);
			request.send(null);//for POST only
		}

	/////////////////////////////////////////////////////////

	//only calls user provide "responseHandler"
	//function if response is ready
	//and not an error
	function handleResponse (request, responseHandler) {

		if ((request.readyState == 4 ) && request.satus == 200){
			responseHandler(request);
		}
	}
////////////////////////////////////////////////////////////////

//Expose utility to the global object
global.$ajaxUtils = ajaxUtils ;

})(window);