#Author: Drew Ritcher

@wip
Feature: Make Change
	As a vendor
	I want customers to receive correct change
	So that they will use the vending machine again


Scenario: Selecting a product
	Given I want to use a vending machine
	And the vending machine display shows INSERT COIN
	When I insert $1.00 into the machine
	And I select the candy option
	Then the candy is dispenced
	And the remaining amount is returned in the change slot
	

		
	
	
