var DATA = '%data%';
var bio = {
  name: 'Muhanna AlMuqbil',
  role: 'Front End Developer',
    contacts: {
        mobile: '00966554482484',
        email: 'il-1@hotmail.com',
        github: 'malmuqbil',
        twitter: '@MHN5A',
        location: 'Riyadh',
  },
  welcomeMessage: 'I am a student at the university studying the data science and the development of sites through Udacity hope that the certificate will help me in achieving my future goals. ' ,
  skills: ['Front-End Web Developer Nanodegree ', 'Java', 'User Interface', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  biopic: 'images/mypic.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);
    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
        $('#skills').append(formattedSkills);
      }
    }
  }
};
var work = {
  jobs: [
    {
        employer: 'King Saud University',
        title: 'Student at King Saud University a Data Science',
        location: 'Riyadh, Saudi Arabia',
        dates: 'from 2014',
        description: 'I am a student at King Saud University Department of Data Science ' +
                   'In the Muzahmiyah branch. '},
    {
        employer: 'Uber',
        title: 'Driver',
        location: 'Riyadh, Saudi Arabia',
        dates: 'start from march 2017',
        description: 'At Uber I could work at any time on my car to make money in getting customers to their specific places.'
    },
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};
var projects = {
  projects: [
     {
      'title': 'fend-animal-trading-cards-master',
      'dates': 'July 2017',
      'description': 'card for a cat .',
      'images': ['images/project2.jpg']
        },
      {
      'title': 'Build a Portfolio Site',
      'dates': 'August 2017',
      'description': 'I have created a page for King Saud University bearing the logo and name'+ 
                     ' of the university and some information where it is with the pictures .',
      'images': ['images/project1.jpg']
        },
    ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);
        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);
          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};
var education = {
  schools: [ {
        'name': 'Abi Tayeb Al - Mutanabi School',
        'location': 'Alswaidi , Riyadh',
        'dates': '2003 - 2009',
        'degree': 'elementary school',
        'majors': ['None'], },
       {
        'name': 'Albraa bin Azib School',
        'location': 'Alswaidi , Riyadh',
        'dates': '2009 - 2012',
        'degree': 'intermediate school',
        'majors': ['None'], },
        {
        'name': 'Abi Tayeb Al - Mutanabi School',
        'location': 'Alswaidi , Riyadh',
        'dates': '2012 - 2015',
        'degree': 'High school',
        'majors': ['None'], }
        ],
  onlineCourses: [
   {
     'title': 'Front-End Web Developer Nanodegree Program',
     'school': 'Udacity',
     'dates': 'Jul 8 - Oct 21',
     'url': 'https://www.udacity.com/'
   },
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);
        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
        var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);
         $('.education-entry:last').append(formattedMajor);
        }
      }
      $('#education').append(HTMLonlineClasses);
      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);