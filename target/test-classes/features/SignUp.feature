Feature: This feature would be used to sign up in the application

  Background: Open the application
    Given I have opened the FlyAway application in browser
	
	@Sanity
  Scenario: Validate successful sign up
    When I click on the Login link
    And I click on a Signup Link
    When I enter email_id
    And I enter and confirm password
    And I enter name
    And I press on Signup button
    Then I should get the message "Your registration is confirmed."
    And I log in with the new credentials
