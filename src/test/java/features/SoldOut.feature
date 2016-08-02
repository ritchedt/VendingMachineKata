#Author: Drew Ritcher


Feature: Sold Out
	As a customer
	I want to be told when the item I have selected is not available
	So that I can select another item


Scenario: Selecting a product
	Given I want to use a vending machine that is sold out of candy
	And the vending machine display shows INSERT COIN
	When I select the candy option
	Then the vending machine display shows SOLD OUT
	

		
	
	
