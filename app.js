function callMe() {
	var userInput = document.getElementById("dob").value;
	var dob = new Date(userInput);

	// Checking user input
	if (userInput == null || userInput == "") {
		document.getElementsByClassName("desc").innerHTML = "Provide valid input";
	} else {
		// execute, if user entered a date
		var dobYear = dob.getFullYear();
		var dobMonth = dob.getMonth();
		var dobDate = dob.getDate();

		// getting cuttent date from system
		var now = new Date();

		// extracting year, month and date

		var currentYear = now.getFullYear();
		var currentMonth = now.getMonth();
		var currentDate = now.getDate();

		// declaring variable to collect the age in Years, Month and Days

		var age = {};
		var ageString = "";

		// get Years
		if (dobYear > currentYear) {
			// for erroe message
			var elementSpan = document.querySelector(".age");
			elementSpan.style.display = "none";
			var elementError = document.querySelector(".error");
			elementError.style.display = "block";
		} else {
			var yearAge = currentYear - dobYear;
		}

		// get Months
		if (currentMonth >= dobMonth) {
			//get month when current month is greater
			var monthAge = currentMonth - dobMonth;
		} else {
			monthAge--;
			var monthAge = 12 + currentMonth - dobMonth;
		}

		// get days
		if (currentDate >= dobDate) {
			var dateAge = currentDate - dobDate;
		} else {
			monthAge--;
			var dateAge = 31 + currentDate - dobDate;
		}

		if (monthAge < 0) {
			monthAge = 11;
			yearAge--;
		}
	}
	// group the age in single variable
	age = {
		years: yearAge,
		month: monthAge,
		days: dateAge,
	};

	function displayAge() {
		let domYear = (document.getElementById("years").innerHTML = age.years);
		let domMonth = (document.getElementById("months").innerHTML = age.month);
		let domDay = (document.getElementById("days").innerHTML = age.days);
	}
	displayAge();
}
