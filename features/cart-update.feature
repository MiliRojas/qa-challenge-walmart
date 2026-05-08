Feature: Cart quantity update

  Scenario: User updates product quantity
    Given the user has a product in the cart
    When the user updates the quantity
    Then the cart should reflect the correct total price based on quantity