
///////////////////////////////////////////////////////////////////
// AREA CONFIGURATION
//
	var MAX_DISTINC = 30;
	var AREAX = 920;
	var AREAY = 600;
	var COLORS_APPROACH = "fix"; // fix, random, gradient
	var PARAM1 = "category";
	var PARAM2 = "category";
	var AREA_TITLE = "AREA IR";

///////////////////////////////////////////////////////////////////
// FIELDS CONFIGURATIONS:
//
// -> the index are the machine-names for each field (only alphanumeric characters)/ Also used in var DATA
// -> human : human name for the field
// -> filter: 0 no eligible for filtering | 1 eligible for filtering
//

	
// NOTE: could be interesting when data is big, to use short index names, f.e. 0, 1, 2, 3, 4...

///////////////////////////////////////////////////////////////////
// DATA
//

var FIELDS = [
	{
    "id": 
			{ human: "Activity Id", areafilter: "0", type:"number", exclude: "1"},
    "date": 
			{ human: "Date", areafilter: "1", type:"text", exclude: "0"},
    "weekDay": 
			{ human: "WeekDay", areafilter: "1", type:"text", exclude: "0"},
    "startTime": 
			{ human: "Start Time", areafilter: "1", type:"text", exclude: "0"},
    "endTime": 
			{ human: "End Time", areafilter: "1", type:"text", exclude: "0"},
    "category": 
			{ human: "Category", areafilter: "1", type:"text", exclude: "0"},
    "noAttendants": 
			{ human: "Number of Attendies", areafilter: "1", type:"text", exclude: "0"},
    "noFemale": 
			{ human: "Number of Females", areafilter: "1", type:"text", exclude: "0"},
    "noYoung_Girls_Boys": 
			{ human: "Number of Young/Girls/Boys", areafilter: "1", type:"text", exclude: "0"},
    "groupRelated": 
			{ human: "Related groups", areafilter: "1", type:"text", exclude: "0"},
    "cscName": 
			{ human: "Centre's name", areafilter: "1", type:"text", exclude: "0"},
    "region": 
			{ human: "Region", areafilter: "1", type:"text", exclude: "0"},
    "activityTitle": 
			{ human: "Activity Title", areafilter: "1", type:"text", exclude: "1"},
    "activityDescription": 
			{ human: "Activity Description", areafilter: "1", type:"text", exclude: "1"},
    "pictures": 
			{ human: "Related media", areafilter: "1", type:"text", exclude: "1"},
    "officerName": 
			{ human: "Officer Name", areafilter: "1", type:"text", exclude: "0"},
    "activities": 
			{ human: "Activities", areafilter: "0", type:"text", exclude: "0"},

	}
];
