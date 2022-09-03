Feature: This feature would be used to test booking a flight in the application

	@Sanity
  Scenario: Title of your scenario
    Given I have opened the FlyAway application in browser
    When I click on the Login link
    And I enter email "abc@xyz.com"
    And I enter password "bbbbbb"
    And I click on the Login Button
    When I click on YourBookings there are 0 bookings
    And I go to Home
    And book a flight to Hyderabad
    Then I check a new booking on YourBookings page
