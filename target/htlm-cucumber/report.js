$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/BookFlight.feature");
formatter.feature({
  "name": "This feature would be used to test booking a flight in the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the FlyAway application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFlightSteps.i_have_opened_the_flyaway_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "BookFlightSteps.i_enter_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"bbbbbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "BookFlightSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on YourBookings there are 0 bookings",
  "keyword": "When "
});
formatter.match({
  "location": "BookFlightSteps.i_click_on_yourbookings_there_are_bookings(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to Home",
  "keyword": "And "
});
formatter.match({
  "location": "BookFlightSteps.i_go_to_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "book a flight to Hyderabad",
  "keyword": "And "
});
formatter.match({
  "location": "BookFlightSteps.book_a_flight_to_hyderabad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check a new booking on YourBookings page",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlightSteps.i_check_a_new_booking_on_yourbookings_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to test the login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the successsful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter \"\u003cemail_id\u003e\" and \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I land on the dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email_id",
        "pwd"
      ]
    },
    {
      "cells": [
        "amit@amit.com",
        "aaaaaa"
      ]
    },
    {
      "cells": [
        "john@doe.com",
        "aaaaaa"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the FlyAway application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFlightSteps.i_have_opened_the_flyaway_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successsful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"amit@amit.com\" and \"aaaaaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_land_on_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the FlyAway application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFlightSteps.i_have_opened_the_flyaway_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successsful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"john@doe.com\" and \"aaaaaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_land_on_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the FlyAway application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFlightSteps.i_have_opened_the_flyaway_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the negative login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Login failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SearchFlight.feature");
formatter.feature({
  "name": "This feature will be used to search for flights",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search for flights from Bangalore to Chennai",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the FlyAway application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFlightSteps.i_have_opened_the_flyaway_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select source",
  "keyword": "When "
});
formatter.match({
  "location": "SearchFlightSteps.i_select_source()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select destination",
  "keyword": "And "
});
formatter.match({
  "location": "SearchFlightSteps.select_desnitation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchFlightSteps.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see one flight with this route",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFlightSteps.i_should_see_one_flight_with_this_route()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SignUp.feature");
formatter.feature({
  "name": "This feature would be used to sign up in the application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the FlyAway application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFlightSteps.i_have_opened_the_flyaway_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful sign up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a Signup Link",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpSteps.i_click_on_a_signup_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email_id",
  "keyword": "When "
});
formatter.match({
  "location": "SignUpSteps.i_enter_email_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter and confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpSteps.i_enter_and_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter name",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpSteps.i_enter_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press on Signup button",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpSteps.i_press_on_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the message \"Your registration is confirmed.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.i_should_get_the_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log in with the new credentials",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpSteps.i_log_in_with_the_new_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});