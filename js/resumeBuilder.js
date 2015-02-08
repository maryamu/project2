//This is .js file for making interactive resume (Maryam Kordi).
//TO DO: defining object bio with its elements
var bio = {
    "name" : "Maryam Kordi",
    "role" : "GeoInformatics expert, Web/GIS developer",
    "contacts": {
        "mobile" : "+41 00 000 0000",
        "email" : "maryam.kordi.ch@gmail.com",
        "github" : "maryamu",
        "twitter" : "@maryamu",
        "location" : "Switzerland"
    },
    "welcomeMessage" : "Welcome! and Thank you for visiting my resume. Here I briefly provide some information about my work experience, two project samples and my background education. This online resume is made as part of the second course project for the front-end web developing Nanodegree, Udacity.",
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
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
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
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
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
            "dates" : "2011-2013",
            "url" : "http://www.st-andrews.ac.uk/"
        },
        {
            "name" : "University of Gavle",
            "location" : "Sweden",
            "degree" : "MSc",
            "majors" : ["Geomatics (GIS)"],
            "dates" : "2007-2008",
            "url" : "http://hig.se/"
        },
        {
           "name" : "University of Shahrood",
            "location" : "Iran",
            "degree" : "BSc",
            "majors" : ["Appled Mathematics"],
            "dates" : "2000-2004",
            "url" : "http://www.shahroodut.ac.ir/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Nanodegree : Front-End Web Developing",
            "School" : "Udacity",
            "date" : "2015 - in progress",
            "url" : "https://www.udacity.com/"
        }
    ]
}

//TO DO: defining a function for displaying education elements:
education.display = function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolTitle = formattedschoolname + formatteddegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedschool = formattedschoolTitle + formattedDates + formattedlocation + formattedmajor;
        $('.education-entry:last').append(formattedschool);
    }

    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses){
        $("#education").append(HTMLschoolStart);
        var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace('#',education.onlineCourses[course].url);
        var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].School);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace('#',education.onlineCourses[course].url);
        var formattedonlineTitle = formattedonlinetitle + formattedonlineschool + formattedonlineDates + formattedonlineurl;
        $('.education-entry:last').append(formattedonlineTitle);
    }
};

//TO DO: defining object work with its elements
var work = {
    "jobs" : [
        {
           "employer" : "University of Lausanne",
            "title" : "Post-doctoral researcher",
            "location" : " Switzerland",
            "dates" : "October 2013",
            "description" : "GeoInformatics, GeoComputaion, Spatial Analysis, Geographic Information System (GIS)"
        },
        {
            "employer" : "University of St Andrews",
            "title" : "Doctoral researcher",
            "location" : "UK, Scotland",
            "dates" : "November 2011 - October 2013",
            "description" : "GeoInformatics, GeoComputaion, Spatial Analysis, Spatial Interaction moedlling"
        },
        {
            "employer" : "University of Maynooth, Ireland",
            "title" : "Research Assistant",
            "location" : "Ireland",
            "dates" : "September 2009 - November 2011",
            "description" : "GeoComputaion, Spatial Analysis, GeoInformatics"
        }
    ]
};

//TO DO: defining a function for displaying the work elements:
work.display = function() {
    for (job in work.jobs){
        // Create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        $(".work-entry:last").append(formattedlocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//TO DO: defining object projects with its elements
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

//TO DO: defining a function for displaying the projects elements:
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

//TO DO: defining a function for appending googleMap to mapDiv:
var buildMap = function(){
    $("#mapDiv").append(googleMap);
}

//TO DO: calling the function:
bio.display();
education.display();
projects.display();
work.display();
buildMap();