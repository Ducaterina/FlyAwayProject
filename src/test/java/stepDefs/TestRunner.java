package stepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		
		//add this plugin to form the report
		plugin = {"html:target/htlm-cucumber","json:target/cucumber.json"},
		
		features="src/test/java/features",
		
		tags= {"@Sanity"},
		
		//tags= {"@F_Login"}, //to execute all the tests inside Login.feature
		
		//tags= {"@Regression or @Rapid"}, // to run both Sanity and Regression
		//or can use:
		//tags= {"@Sanity, @Regression"},
		
		//tags= {"@Regression and @Rapid"}, //to run only tests with Rapid Regression tags
		//or can use:
		//tags= {"@Regression","@Rapid"},
		
		//tags= {"@Sanity or (@Regression and @Rapid)"}, // to run both Sanity and R&R
		
		//tags={"@Regression and ~@Ignore"},
		
		glue={"stepDefs"}
		
		)

public class TestRunner {

}
