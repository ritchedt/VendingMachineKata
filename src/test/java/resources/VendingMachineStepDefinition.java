package resources;

import cucumber.api.java.en.*;
import drewclasses.*;
import static org.junit.Assert.*;

public class VendingMachineStepDefinition {

	VendingMachine vendingMachine;
	
	
	@Given("^I want to use a vending machine$")
	public void iWantToUseAVendingMachine(){
		vendingMachine = new VendingMachine();
	}
	
	
	@And("^the vending machine display shows (.*)$")
	public void vendingMachineDisplay(String displayValue){
		String returnedDispayValue = vendingMachine.getDisplayValue();
		assertTrue("Actual: "+ returnedDispayValue, displayValue.equals(returnedDispayValue));
	}
	
	@When("^I insert a (\\w+) into the coin slot$")
	public void insertCoinInSlot(String coin){
		
		if(coin.equalsIgnoreCase("quarter"))
			vendingMachine.insertCoin(new Coin("6g", "24mm"));
		else if(coin.equalsIgnoreCase("dime"))
			vendingMachine.insertCoin(new Coin("2g", "18mm"));
		else if(coin.equalsIgnoreCase("nickel"))
			vendingMachine.insertCoin(new Coin("5g", "21mm"));
		else
			vendingMachine.insertCoin(new Coin("3g", "19mm"));
	}
	
	

	
	
	
}
