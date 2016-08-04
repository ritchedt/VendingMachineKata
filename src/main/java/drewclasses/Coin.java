package drewclasses;

public class Coin {

	String coinWeight, coinSize;
	
	public Coin(String coinWeight, String coinSize){
		
		this.coinWeight = coinWeight;
		this.coinSize = coinSize;
	}
	
	public String getWeight(){
		return coinWeight;
	}
	
	public String getSize(){
		return coinSize;
	}
	
}
