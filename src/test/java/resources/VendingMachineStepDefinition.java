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
	
	@Given("^I want to use a vending machine that only accepts exact change$")
	public void iWantToUseAVendingMachineThatOnlyAcceptsExactChange(){
		vendingMachine = new VendingMachine(0);
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
	
	@When("^there are no coins inserted into the vending machine$")
	public void noCoinsInVendingMachine(){
		assertTrue(vendingMachine.getAmountInsertedIntoMachine() == 0);
	}
	
	@When("^I insert \\$(\\d{0,2}.\\d{2}) into the machine$")
	public void insertMoneyIntoTheMachine(String amount){
		double amountInsertedMachine = Double.parseDouble(amount);
		double amountCurrenlyInMachine = vendingMachine.getAmountInsertedIntoMachine();
		
		 while(amountInsertedMachine != amountCurrenlyInMachine){
			
			if((amountInsertedMachine-amountCurrenlyInMachine) >= 0.25)
				vendingMachine.insertCoin(new Coin("6g", "24mm"));
			else if((amountInsertedMachine-amountCurrenlyInMachine) >= 0.10)
				vendingMachine.insertCoin(new Coin("2g", "18mm"));
			else if((amountInsertedMachine-amountCurrenlyInMachine) >= 0.05)
				vendingMachine.insertCoin(new Coin("5g", "21mm"));
			
			amountCurrenlyInMachine = vendingMachine.getAmountInsertedIntoMachine();
		}
	}
	
	
	@Then("^all coins are returned in the change slot$")
	public void allCoinsReturnedInTheChangeSlot(){
		assertTrue(vendingMachine.getAmountInsertedIntoMachine() == 0);
	}
	
	@Then("^\\$(\\d{0,2}.\\d{2}) is returned in the change slot$")
	public void allRemainingAmountIsReturnedInChangeSlot(String amount){
		assertTrue(vendingMachine.returnAllRemainingCoins() == Double.parseDouble(amount));
	}
	
	
	@And("^the vending machine display shows (.*)$")
	public void vendingMachineDisplay(String displayValue){
		String returnedDispayValue = vendingMachine.getDisplayValue();
		assertTrue("Actual: "+ returnedDispayValue, displayValue.equals(returnedDispayValue));
	}
	
	@And("^I select the (.*) option$")
	public void selectingAProductOption(String product){
		vendingMachine.selectProduct(product);
	}
	
	@And("^I choose the return coins option$")
	public void returnCoinsOption(){
		vendingMachine.returnAllRemainingCoins();
	}
	
	
	
}
