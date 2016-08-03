#Author: Drew Ritcher

@wip
Feature: Return Coins
	As a customer
	I want to have my money returned
	So that I can change my mind about buying stuff from the vending machine


Scenario: Return all coins that are inserted into the vending machine
	Given I want to use a vending machine
	And the vending machine display shows INSERT COIN
	When I insert $1.00 into the machine
	And I choose the return coins option
	Then all coins are returned in the change slot
	And the vending machine display shows INSERT COIN
	

		
	
	
