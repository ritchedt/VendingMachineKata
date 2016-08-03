package resources;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
 
@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"html:target/cucumber"},
	features = {"classpath:features/"},
	glue = {"resources"},
	monochrome = true,
	tags = {"~@wip"}
)
public class CucumberRunner {

}
