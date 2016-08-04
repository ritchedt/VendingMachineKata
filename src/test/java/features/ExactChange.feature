#Author: Drew Ritcher


Feature: Exact Change
	As a customer
	I want to be told when exact change is required
	So that I can determine if I can buy something with the money I have before inserting it


Scenario: Using a vending machine that can only accept exact change
	Given I want to use a vending machine that only accepts exact change
	When there are no coins inserted into the vending machine
	Then the vending machine display shows EXACT CHANGE ONLY
	

		
	
	
