package drewclasses;

public class Coin {

	String coinWeight, coinSize;
	
	public Coin(String weight, String size){
		
		coinWeight = weight;
		coinSize = size;
	}
	
	public String getWeight(){
		return coinWeight;
	}
	
	public String getSize(){
		return coinSize;
	}
	
}
