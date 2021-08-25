var original = [
    {
        search:"zara",
        colName:"brand"
    },
    {
        search:"nike",
        colName:"brand"
    },
    {
        search:"4",
        colName:"rating"
    },
    {
        search:"5",
        colName:"rating"
    },

]

function transform(o)
{
        var uar = [...new Set(original.map(function(s){return s.colName}))];
        var transformed={};
        uar.forEach(function(c){
           var colSer =  original.filter(function(s){ return s.colName==c})
            var colvalues =    colSer.map(function(sr){return sr.search})
            transformed[c]=colvalues;
        })
         return transformed;
}


console.log(transform(original));

