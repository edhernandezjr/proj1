/* eslint-disable */
window.GetAllCategories = function($skipCats) {
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
                    var skipCats = [
                        'Upcoming Events',
                        'Reference Materials',
                        'RPC Stories'
                    ]
                    al.data = response.query.allcategories.filter(function(item) {
                        if ($skipCats) {
                            return skipCats.includes(item['*'])
                        } else {
                            return !skipCats.includes(item['*'])
                        }

                    });
                })
                .catch(function(error){console.log(error);});
        }

    }
};