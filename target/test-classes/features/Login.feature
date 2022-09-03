Feature: This feature would be used to test the login page of the application

  Background: Open the application
    Given I have opened the FlyAway application in browser

	@Sanity
  Scenario Outline: Validate the successsful login
    When I click on the Login link
    And I enter "<email_id>" and "<pwd>"
    And I click on the Login Button
    Then I land on the dashboard page

    Examples: 
      | email_id      | pwd    |
      | amit@amit.com | aaaaaa |
      | john@doe.com  | aaaaaa |

	@Sanity
  Scenario: Validate the negative login 
    When I click on the Login link
    And I enter email
    And I enter password
    And I click on the Login Button
    Then I should get the error message "Login failed"
