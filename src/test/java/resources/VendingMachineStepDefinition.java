package resources;

import cucumber.api.java.After;
import cucumber.api.java.en.*;
import drewclasses.*;
import static org.junit.Assert.*;

public class VendingMachineStepDefinition {

	VendingMachine vendingMachine;
	
	@After()
	public void tearDown(){
		vendingMachine = null;
	}
	
	
	@Given("^I want to use a vending machine$")
	public void iWantToUseAVendingMachine(){
		vendingMachine = new VendingMachine();
	}
	
	@Given("^I want to use a vending machine that only accepts exact change$")
	public void iWantToUseAVendingMachineThatOnlyAcceptsExactChange(){
		vendingMachine = new VendingMachine(50, 50, 50, 0, "EXACT CHANGE ONLY");
	}
	
	@Given("^I want to use a vending machine that is sold out of (\\w+)$")
	public void iWantToUseAVendingMachineThatIsSoldOutOfAProduct(String product){
		
		if(product.equalsIgnoreCase("cola"))
			vendingMachine = new VendingMachine(0, 50, 50, 25, "INSERT COIN");
		else if(product.equalsIgnoreCase("chips"))
			vendingMachine = new VendingMachine(50, 0, 50, 25, "INSERT COIN");
		else if(product.equalsIgnoreCase("candy"))
			vendingMachine = new VendingMachine(50, 50, 0, 25, "INSERT COIN");
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
		double insertedIntoMachine = vendingMachine.getAmountInsertedIntoMachine();
		assertTrue("Actual: " + insertedIntoMachine, insertedIntoMachine == 0);
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
		double insertedIntoMachine = vendingMachine.getAmountInsertedIntoMachine();
		assertTrue("Actual: " + insertedIntoMachine, insertedIntoMachine == 0);
	}
	
	@Then("^\\$(\\d{0,2}.\\d{2}) is returned in the change slot$")
	public void allRemainingAmountIsReturnedInChangeSlot(String amount){
		double returnedCoins = vendingMachine.getChangeAmountFromReturnedCoins();
		assertTrue("Actual: "+ returnedCoins, returnedCoins == Double.parseDouble(amount));
	}
	
	
	@And("^the vending machine display shows (.*)$")
	public void vendingMachineDisplay(String displayValue){
		String returnedDispayValue = vendingMachine.getDisplayValue();
		assertTrue("Actual: "+ returnedDispayValue, displayValue.equals(returnedDispayValue));
	}
	
	@And("^I select the (\\w+) option$")
	public void selectingAProductOption(String product){
		vendingMachine.selectProduct(product);
	}
	
	@And("^I choose the return coins option$")
	public void returnCoinsOption(){
		vendingMachine.returnAllRemainingCoins();
	}
	
	
	
}
