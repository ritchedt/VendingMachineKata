#Author: Drew Ritcher


Feature: Select Products
	As a vendor
	I want customers to select products
	So that I can give them an incentive to put money in the machine


Scenario Outline: Selecting a product
	Given I want to use a vending machine
	And the vending machine display shows INSERT COIN
	When I insert <moneyInserted> into the machine
	And I select the <product> option
	Then the <product> is dispenced
	And the current total amount is $0.00
	And the vending machine display shows THANK YOU
	
	Examples: Purchasing a product
		| moneyInserted		| product	|
		| $1.00						|	cola		|
		| $0.50						|	chips		|
		| $0.65						|	candy		|

		
		
Scenario: Seleting a product with an insufficent amount of money
	Given I want to use a vending machine
	And the vending machine display shows INSERT COIN
	When I insert $0.80 into the machine
	And I select the cola option
	Then the vending machine display shows PRICE $1.00
	
	
