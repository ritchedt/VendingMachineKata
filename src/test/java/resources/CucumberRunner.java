package resources;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
 
@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"html:target/cucumber"},
	features = {"src/test/java/resources"},
	glue = {"src/test/java/resources"},
	monochrome = true,
	dryRun = true
)
public class CucumberRunner {

}
