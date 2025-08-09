// avg_votes_by_year.js

// define the pipeline in a variable
var avg_votes = [
    {
        $match: 
        {
            year: 2007
        },
    },
    {
        $group: 
        {
            _id: '$year',
            averageVotes:
            {
                $avg: '$Votes'
            }
        }
    }
]

// run the query and store in a variable (avg_votes_results)
var avg_votes_results = db.movies.aggregate(avg_votes);

// print the results in shell
printjson(avg_votes_results.next());