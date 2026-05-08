Feature: Checkout process
@checkout
  Scenario: User completes checkout successfully
    Given the user is logged into the application
    When the user adds a product to the cart
    And the user completes checkout
    Then the order should be created successfully