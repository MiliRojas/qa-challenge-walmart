Feature: Register and Login

  Scenario: User registers and logs in successfully
    Given the user opens the homepage
    When the user registers a new account
    And the user logs out
    And the user logs in again
    Then the account should be accessible