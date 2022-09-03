package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginSteps {

	WebDriver driver = BaseClass.driver;
	
	@When("I click on the Login link")
	public void i_click_on_the_login_link() throws InterruptedException {
		WebElement login = driver.findElement(By.xpath("//a[@href='login']"));
		login.click();
		Thread.sleep(3000);
	};

	@When("I enter {string} and {string}")
	public void i_enter_and(String email_id, String pwd) {
	    WebElement email = driver.findElement(By.name("email_id"));
	    email.sendKeys(email_id);
	    
	    WebElement password = driver.findElement(By.name("pwd"));
	    password.sendKeys(pwd);
	};

	@When("I click on the Login Button")
	public void i_click_on_the_login_button() throws InterruptedException {
		WebElement button = driver.findElement(By.xpath("//button"));
		button.click();
		Thread.sleep(3000);
	};

	@Then("I land on the dashboard page")
	public void i_land_on_the_dashboard_page() {
		WebElement dashbrd = driver.findElement(By.xpath("//body/h3"));
		System.out.println(dashbrd.getText());
		Assert.assertEquals(dashbrd.getText(),"FLYAWAY - DASHBOARD");
	};

	@When("I enter email")
	public void i_enter_email() {
		WebElement email = driver.findElement(By.name("email_id"));
		email.sendKeys("admin@admin.com");
	};

	@When("I enter password")
	public void i_enter_password() {
		WebElement password = driver.findElement(By.name("pwd"));
	    password.sendKeys("aaaaaa");
	};

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String ErrMsg) {
		WebElement errorMsg = driver.findElement(By.xpath("//body"));
		Assert.assertTrue(errorMsg.getText().contains(ErrMsg));
		
	};


}
