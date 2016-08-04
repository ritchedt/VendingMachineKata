#Author: Drew Ritcher


Feature: Accept Coins
	As a vendor
	I want a vending machine that accepts coins
	So that I can collect money from the customer


Scenario Outline: Accepting valid coins
	Given I want to use a vending machine
	And the vending machine display shows INSERT COIN
	When I insert a <coin> into the coin slot
	Then the vending machine display shows <currentAmount>
	
	Examples: Accepted coins
		| coin		| currentAmount	|
		| quarter	| $0.25					|
		| dime		| $0.10					|
		| nickel	| $0.05					|

		
		
Scenario: Not accepting invalid coins
	Given I want to use a vending machine
	And the vending machine display shows INSERT COIN
	When I insert a penny into the coin slot
	Then all coins are returned in the change slot
	And the vending machine display shows INSERT COIN