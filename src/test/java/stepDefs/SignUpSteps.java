package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SignUpSteps {

	WebDriver driver = BaseClass.driver;
	
	@When("I click on a Signup Link")
	public void i_click_on_a_signup_link() throws InterruptedException {
		WebElement signUp = driver.findElement(By.xpath("//a[@href='signup']"));
		signUp.click();
		Thread.sleep(3000);
	};

	@When("I enter email_id")
	public void i_enter_email_id() {
		WebElement email = driver.findElement(By.name("email_id"));
		email.sendKeys("abcde@xyz.com");
	};

	@When("I enter and confirm password")
	public void i_enter_and_confirm_password() {
		WebElement password = driver.findElement(By.name("pwd"));
	    password.sendKeys("bbbbbb");
	    WebElement password2 = driver.findElement(By.name("pwd2"));
	    password2.sendKeys("bbbbbb");
	};

	@When("I enter name")
	public void i_enter_name() {
		WebElement name = driver.findElement(By.name("name"));
	    name.sendKeys("Gloria");
	};

	@When("I press on Signup button")
	public void i_press_on_signup_button() throws InterruptedException {
		WebElement btn = driver.findElement(By.xpath("//button"));
		btn.click();
		Thread.sleep(5000);
	};

	@Then("I should get the message {string}")
	public void i_should_get_the_message (String msg) {
		WebElement message = driver.findElement(By.xpath("//body"));
		Assert.assertTrue(message.getText().contains(msg));
	};

	@Then("I log in with the new credentials")
	public void i_log_in_with_the_new_credentials() throws InterruptedException {
		WebElement login = driver.findElement(By.xpath("//a[@href='login']"));
		login.click();
		Thread.sleep(3000);
		
		WebElement email = driver.findElement(By.name("email_id"));
		email.sendKeys("abcde@xyz.com");
		
		WebElement password = driver.findElement(By.name("pwd"));
	    password.sendKeys("bbbbbb");
	    
	    WebElement btn = driver.findElement(By.xpath("//button"));
		btn.click();
		Thread.sleep(5000);
		
		WebElement dashbrd = driver.findElement(By.xpath("//body/h3"));
		System.out.println(dashbrd.getText());
		Assert.assertEquals(dashbrd.getText(),"FLYAWAY - DASHBOARD");
	};


}
