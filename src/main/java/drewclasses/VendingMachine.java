package drewclasses;

import java.util.HashMap;

public class VendingMachine {

	private int colaInStock, chipsInStock, candyInStock;
	
	private double currentAmountInsertedInMachine, changeAmountInMachine;
	
	private final String QUARTER_WEIGHT = "6g";
	private final String QUARTER_SIZE = "24mm";
	private final double QUARTER_VALUE = 0.25;
	
	private final String DIME_WEIGHT = "2g";
	private final String DIME_SIZE = "18mm";
	private final double DIME_VALUE = 0.10;
	
	private final String NICKEL_WEIGHT = "5g";
	private final String NICKEL_SIZE = "21mm";
	private final double NICKEL_VALUE = 0.05;
	
	private String displayValue;
	
	private static final HashMap<String,Double> currencyValue = new HashMap<String,Double>();
	
	static{
		currencyValue.put("quarter",0.25);
		currencyValue.put("dime",0.10);
		currencyValue.put("nickel",0.05);
	}
	
	
	public VendingMachine(){
		colaInStock = 50;
		chipsInStock = 50;
		candyInStock = 50;
		
		currentAmountInsertedInMachine = 0;
		changeAmountInMachine = 25;
		
		displayValue = "INSERT COIN";
	}
	
	
	public void insertCoin(Coin coin){
		
		if(coin.getWeight().equalsIgnoreCase(QUARTER_WEIGHT) && coin.getSize().equalsIgnoreCase(QUARTER_SIZE))
			currentAmountInsertedInMachine += QUARTER_VALUE;
		else if(coin.getWeight().equalsIgnoreCase(DIME_WEIGHT) && coin.getSize().equalsIgnoreCase(DIME_SIZE))
			currentAmountInsertedInMachine += DIME_VALUE;
		else if(coin.getWeight().equalsIgnoreCase(NICKEL_WEIGHT) && coin.getSize().equalsIgnoreCase(NICKEL_SIZE))
			currentAmountInsertedInMachine += NICKEL_VALUE;
		else
			returnInvalidCoin(coin);
		
		displayValue = "$" + String.format("%.2f", currentAmountInsertedInMachine);
	}
	
	
	public String getDisplayValue(){
		return displayValue;
	}
	
	public double getAmountInsertedIntoMachine(){
		return currentAmountInsertedInMachine;
	}
	
	public void returnAllCoins(){
		currentAmountInsertedInMachine = 0;
	}
	
	public void returnInvalidCoin(Coin coin){
		coin = null;
	}
	
	
	
}
