// topmovie_by_year_by_count.js

// define the pipeline in a variable
var sum_by_year = [
    {
        $group: 
        {
            '_id': '$year',
            'moviecount':
            {
                $sum: 1
            }
        },
    },
    {
        $sort: 
        {
            'moviecount': -1
        }
    },
    {
        $limit: 1
    }
]

// run the query and store in a variable (avg_votes_results)
var sum_by_year_results = db.movies.aggregate(sum_by_year);

// print the results in shell
printjson(sum_by_year_results.next());