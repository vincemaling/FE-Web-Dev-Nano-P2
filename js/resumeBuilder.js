var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Channel Marketing Manager",
			"location": "Atlanta, GA, US",
			"dates_worked": "Sept 2012 - Present",
			"description": "Responsible for developing, launching and evolving B2B telecom products in consumer distribution channels",
		},
		{
			"employer": "AT&T",
			"title": "B2B Sales Manager",
			"location": "Birmingham, AL, US",
			"dates_worked": "Aug 2009 - Aug 2012",
			"description": "Managed a team of B2B sales professionals responsible for the Gulf States territory",
		},
		{
			"employer": "AT&T",
			"title": "B2B Sales Executive",
			"location": "New Orleans, LA, US",
			"dates_worked": "Dec 2006 - Jul 2009",
			"description": "B2B sales to large businesses and government agencies headquartered in Louisiana",
		}
	],
	populateWork: function() {
		$("#workExperience").append(HTMLworkStart);

		for (var i=0; i<work.jobs.length; i++) {
			var formattedEmployerTitle = HTMLworkEmployer.replace("%data%",work.jobs[i].employer) + HTMLworkTitle.replace("%data%",work.jobs[i].title);
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates_worked);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Enterprise Buy Online, Pick-up in Store",
			"dates_worked": "Jan 2014 - Jun 2014",
			"description": "Enables AT&T business customers to complete an online order for one or more device and pick it up in a local store",
			"images": ["http://m.att.com/shopcms/media/att/2014/shop/wireless/promotions/click2store/211827_Click-to-store_640.jpg"]		
		}
	],
	populateProjects: function() {
		$("#projects").append(HTMLprojectStart);

		for (var i=0; i<projects.projects.length; i++) {
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates_worked);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);
			
			for (var y=0; y<projects.projects[i].images.length; y++) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[y]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

var bio = {
	"contacts": [
		{
			"mobile_number": "205-201-3908",
			"email": "vincemaling@yahoo.com",
			"location": "Atlanta, GA, US"
		}
	],
	"skills": ["B2B Sales", "Sales Leadership", "Marketing", "Channel Management", "Project Management", "Sale Operations"],
	"name": "Vincent Maling",
	"role": "B2B Guru",
	"welcome_message": "No one reads welcome messages.",
	"pic": "images/vince.jpg",
	populateBio: function() {

		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName);


		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[0].mobile_number);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[0].email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[0].location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		
		var formattedPic = HTMLbioPic.replace("%data%",bio.pic);
		$("#header").append(formattedPic);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcome_message);
		$("#header").append(formattedMsg);


		$("#header").append(HTMLskillsStart);

		for (var i=0; i<bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

};


var education = {
	"schools": [
		{
			"name": "University of Florida",
			"location": "Gainesville, FL, US",
			"degree": "BS",
			"major": ["Marketing", "English"],
			"dates_attended": "2002-2006",
			"url": "http://www.ufl.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates_attended": "2014",
			"url": "http://wwww.udacity.com"
		}
	],
	populateEducation: function() {
		$("#education").append(HTMLschoolStart);
		for (var i=0; i<education.schools.length; i++) {
			var formattedSchoolNameDegree = HTMLschoolName.replace("%data%",education.schools[i].name) + HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").find("a").attr("href",education.schools[i].url);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates_attended);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			$(".education-entry:last").append(formattedLocation);
			for (var y=0; y<education.schools[i].major.length; y++) {
				var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major[y]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var i=0; i<education.onlineCourses.length; i++) {
			var formattedOnlineTitleSchool = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates_attended);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedURL);
		}

	}
};

$("#mapDiv").append(googleMap);
work.populateWork();
bio.populateBio();
projects.populateProjects();
education.populateEducation();

