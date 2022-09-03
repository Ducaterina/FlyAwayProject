Feature: This feature will be used to search for flights
	
	@Sanity
  Scenario: Search for flights from Bangalore to Chennai
    Given I have opened the FlyAway application in browser
    When I select source
    And select destination
    And click on Submit button
    Then I should see one flight with this route
