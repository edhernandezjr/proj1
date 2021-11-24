/* eslint-disable */
window.GetAllCategories = function() {
    return {
        data: ['test'],
        init: function() {
            var al = this; 
            var url = window.location.origin + '/api.php'
            var params = {
                action: "query",
                format: "json",
                list: "allcategories",
            };
            
            url = url + "?origin=*";
            Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
            
            fetch(url)
                .then(function(response){return response.json();})
                .then(function(response) {
                    al.data = response.query.allcategories;
                })
                .catch(function(error){console.log(error);});
        }

    }
};