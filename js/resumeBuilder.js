//This is .js file for making interactive resume (Maryam Kordi).
//TO DO: defining object bio with its elements
var bio = {
    "name" : "Maryam Kordi",
    "role" : "GeoInformatics expert, Web/GIS developer",
    "contacts": {
        "phone" : "+41 00 000 0000",
        "email" : "maryam.kordi.ch@gmail.com",
        "github" : "maryamu",
        "twitter" : "@maryamu",
        "location" : "Switzerland"
    },
    "WelcomeMessage" : "Welcome! and Thank you for visiting my resume. Here I briefly provide some information about my work experience, two project samples and my background education. This online resume is made as part of the second course project for the front-end web developing Nanodegree, Udacity.",
    "skills" : [
        "GeoInformatics", "GIS Web developing", "Spatial Analysis", "Mathematics", "Programming", "Teaching","Graphics design"
    ],
    "biopic" : "images/maryam.jpg"
}

// TO DO: defining a function for displaying the object bio elements
bio.display = function(){
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    // this can be a bit shorter as:
    $('#header').append(HTMLbioPic.replace("%data%", bio.biopic));

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.phone);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    $('#footerContacts').append(formattedemail);

    var formattedgithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    $('#footerContacts').append(formattedgithub);

    var formattedtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    $('#footerContacts').append(formattedtwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $('#footerContacts').append(formattedLocation);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $('#header').append(HTMLskillsStart);

    //a bit more sophisticated looking for loop:
    for (var i=0; i < bio.skills.length; i++){
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
};

//TO DO: defing the object education:
var education = {
    "schools" : [
        {
            "name" : "University of St Andrews",
            "location" : "UK - Scotland",
            "degree" : "PhD",
            "majors" : ["GeoInformatics"],
            "date" : "2011-2013",
        },
        {
            "name" : "University of Gavle",
            "location" : "Sweden",
            "degree" : "MSc",
            "majors" : ["Geomatics (GIS)"],
            "date" : "2007-2008",
        },
        {
           "name" : "University of Shahrood",
            "location" : "Iran",
            "degree" : "BSc",
            "majors" : ["Appled Mathematics"],
            "date" : "2000-2004",
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Nanodegree : Front-End Web Developing",
            "School" : "Udacity",
            "date" : "2015-in progress",
            "url" : "https://www.udacity.com/"
        }
    ]
}

//TO DO: defining a function for displaying the object education elements:
education.display = function(){
    for (school in education.schools){
        //TO DO: Create new div for education
        $("#education").append(HTMLschoolStart);
        //TO DO: concat school name  and degree
        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedschoolTitle = formattedschoolname + formatteddegree;

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);

        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)

        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        var formattedschool = formattedschoolTitle + formattedDates + formattedlocation + formattedmajor;
        $('.education-entry:last').append(formattedschool);
    }

    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses){
        $("#education").append(HTMLschoolStart);

        // concat school name  and degree
        var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].School);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        var formattedonlineTitle = formattedonlinetitle + formattedonlineschool + formattedonlineDates + formattedonlineurl;
        $('.education-entry:last').append(formattedonlineTitle);
    }
};

var projects = {
    "projects" : [
        {
            "title" : "GWSI",
            "dates" : "2013",
            "description" : "In this study, a framework for localising spatial interaction models, based on geographically weighted (GW) techniques has been developed. Using custom-built algorithms and computer code, we apply the GWSI models to a journey-to-work flow network in Lausanne, Switzerland.",
            "images" : [
                "images/lsne-flows.jpg",
            ]
        },
        {
            "title" : "Fuzzy AHP",
            "dates" : "2008",
            "description" : "This project examins the effect of uncertainty in Analytic Hierarchy Process (AHP) method of multi criteria decision analysis. In a real-world case study in Costa Rica, it looks at different levels of fuzzification of the AHP and makes a comparison with two AHP techniques using crisp numbers. ",
            "images" : [
                "images/fig3-eps-converted-to.jpg"
            ]
        }
    ]
}

projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var work = {
    "jobs" : [
        {
            "position" : "Post-doctoral researcher",
            "employer" : "University of Lausanne",
            "dates" : "October 2013",
            "location" : " Switzerland",
            "deciplines" : "GeoInformatics, GeoComputaion, Spatial Analysis, Geographic Information System (GIS)"
        },
        {
            "position" : "Doctoral researcher",
            "employer" : "University of St Andrews",
            "dates" : "November 2011 - October 2013",
            "location" : "UK, Scotland",
            "deciplines" : "GeoInformatics, GeoComputaion, Spatial Analysis, Spatial Interaction moedlling"
        },
        {
            "position" : "Research Assistant",
            "employer" : "University of Maynooth, Ireland",
            "dates" : "September 2009 - November 2011",
            "location" : "Ireland",
            "deciplines" : "GeoComputaion, Spatial Analysis, GeoInformatics"
        }
    ]
};

work.display = function() {

    for (job in work.jobs){
        // Create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        $(".work-entry:last").append(formattedlocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].deciplines);
        $(".work-entry:last").append(formattedDescription);
    }
};


var buildMap = function(){
    $("#mapDiv").append(googleMap);
}

//TO DO: calling the function:
bio.display();
education.display();
projects.display();
work.display();
buildMap();
