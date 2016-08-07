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
	
	private String defaultDisplayValue,displayValue;
	
	private static final HashMap<String,Double> currencyValue = new HashMap<String,Double>();
	private static final HashMap<String,Double> productValue = new HashMap<String,Double>();
	
	static{
		currencyValue.put("quarter",0.25);
		currencyValue.put("dime",0.10);
		currencyValue.put("nickel",0.05);
		
		productValue.put("cola", 1.00);
		productValue.put("chips", 0.50);
		productValue.put("candy", 0.65);
	}
	
	
	public VendingMachine(){
		colaInStock = 50;
		chipsInStock = 50;
		candyInStock = 50;
		
		currentAmountInsertedInMachine = 0;
		changeAmountInMachine = 25;
		
		defaultDisplayValue = "INSERT COIN";
		displayValue = defaultDisplayValue;
	}
	
	
	public VendingMachine(int colaInStock, int chipsInStock, int candyInStock, double changeAmountInMachine, String defaultDisplayValue){
		this.colaInStock = colaInStock;
		this.chipsInStock = chipsInStock;
		this.candyInStock = candyInStock;
		
		currentAmountInsertedInMachine = 0;
		this.changeAmountInMachine = changeAmountInMachine;
		
		this.defaultDisplayValue = defaultDisplayValue;
		displayValue = this.defaultDisplayValue;
	}
	
	
	public void insertCoin(Coin coin){
		
		if(coin.getWeight().equalsIgnoreCase(QUARTER_WEIGHT) && coin.getSize().equalsIgnoreCase(QUARTER_SIZE)){
			currentAmountInsertedInMachine += QUARTER_VALUE;
			displayValue = "$" + String.format("%.2f", currentAmountInsertedInMachine);
		}else if(coin.getWeight().equalsIgnoreCase(DIME_WEIGHT) && coin.getSize().equalsIgnoreCase(DIME_SIZE)){
			currentAmountInsertedInMachine += DIME_VALUE;
			displayValue = "$" + String.format("%.2f", currentAmountInsertedInMachine);
		}else if(coin.getWeight().equalsIgnoreCase(NICKEL_WEIGHT) && coin.getSize().equalsIgnoreCase(NICKEL_SIZE)){
			currentAmountInsertedInMachine += NICKEL_VALUE;
			displayValue = "$" + String.format("%.2f", currentAmountInsertedInMachine);
		}else
			returnInvalidCoin(coin);
	}
	
	
	public void selectProduct(String product){
		switch(product) {
			case "cola":
				if(colaInStock == 0)
					displayValue = "SOLD OUT";
				else if(currentAmountInsertedInMachine < productValue.get(product))
					displayValue = "PRICE $" + String.format("%.2f", productValue.get(product));
				else{
					colaInStock -= 1;
					currentAmountInsertedInMachine -= productValue.get(product);
					if(currentAmountInsertedInMachine==0)
						displayValue = "THANK YOU";
				}	
				break;
			case "chips":
				if(chipsInStock == 0)
					displayValue = "SOLD OUT";
				else if(currentAmountInsertedInMachine < productValue.get(product))
					displayValue = "PRICE $" + String.format("%.2f", productValue.get(product));
				else{
					chipsInStock -= 1;
					currentAmountInsertedInMachine -= productValue.get(product);
					if(currentAmountInsertedInMachine==0)
						displayValue = "THANK YOU";
				}
				break;
			case "candy":
				if(candyInStock == 0)
					displayValue = "SOLD OUT";
				else if(currentAmountInsertedInMachine < productValue.get(product))
					displayValue = "PRICE $" + String.format("%.2f", productValue.get(product));
				else{
					candyInStock -= 1;
					currentAmountInsertedInMachine -= productValue.get(product);
					if(currentAmountInsertedInMachine==0)
						displayValue = "THANK YOU";
				}
				break;
		}
		getDisplayValue();
	}
	
	
	public String getDisplayValue(){
		return displayValue;
	}
	
	public double getAmountInsertedIntoMachine(){
		return currentAmountInsertedInMachine;
	}
	
	public double returnAllRemainingCoins(){
		double remainingCoins = currentAmountInsertedInMachine;
		currentAmountInsertedInMachine = 0;
		displayValue = defaultDisplayValue;
		return remainingCoins;
	}
	
	
	public void returnInvalidCoin(Coin coin){
		coin = null;
	}
	
	
	
}
