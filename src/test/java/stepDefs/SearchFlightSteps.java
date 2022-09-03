package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class SearchFlightSteps {
	
	WebDriver driver = BaseClass.driver;	
	
	@Given("I have opened the FlyAway application in browser") 
	public void i_have_opened_the_flyaway_application_in_browser() throws InterruptedException {
		driver.get("http://localhost:8082/FlyAway/");
		Thread.sleep(3000);
	};

	@When("I select source")
	public void i_select_source() {
		WebElement source = driver.findElement(By.name("source"));
		source.click();
		WebElement bgl = driver.findElement(By.xpath("//*[@name='source']/option[3]"));
		bgl.click();
	};

	@When("select destination")
	public void select_desnitation() {
		WebElement destination = driver.findElement(By.name("destination"));
		destination.click();
		WebElement bgl = driver.findElement(By.xpath("//*[@name='destination']/option[4]"));
		bgl.click();
	};

	@When("click on Submit button")
	public void click_on_submit_button() {
		WebElement submit = driver.findElement(By.xpath("//button"));
		submit.click();
	};

	@Then("I should see one flight with this route")
	public void i_should_see_one_flight_with_this_route() {
		WebElement result = driver.findElement(By.xpath("//table[@border='1']//tr[2]"));
		System.out.println(result.getText());
		Assert.assertEquals(result.getText(), "Bangalore Chennai AirAsia Dep.8 pm Arr.9.30pm (1.30 hours) 4500.00 Book Flight");
	};

	}  


