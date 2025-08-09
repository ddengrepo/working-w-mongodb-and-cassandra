// moviecount_by_year_interval

// define the pipeline in a variable
var year_interval = {
    year: {
        $gt: 1999
    }
};

// run the query and store in a variable (avg_votes_results)
var count_by_year_interval_results = db.movies.countDocuments(year_interval);

// print the results in shell
printjson(count_by_year_interval_results);