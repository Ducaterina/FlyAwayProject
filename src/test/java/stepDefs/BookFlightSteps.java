package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BookFlightSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@When("I enter email {string}")
	public void i_enter_email (String email_id) {
		WebElement email = driver.findElement(By.name("email_id"));
		email.sendKeys(email_id);
	};

	@When("I enter password {string}")
	public void i_enter_password (String pwd) {
		WebElement password = driver.findElement(By.name("pwd"));
	    password.sendKeys(pwd);
	};

	@When("I click on YourBookings there are {int} bookings")
	public void i_click_on_yourbookings_there_are_bookings (int num) throws InterruptedException {
	    WebElement view = driver.findElement(By.xpath("//a[@href='memberbookings']"));
	    view.click();
	    Thread.sleep(3000);
	    WebElement message = driver.findElement(By.xpath("//body"));
	    String msg = "Total 4 bookings";
		Assert.assertTrue(message.getText().contains(msg));
	};

	@When("I go to Home")
	public void i_go_to_home () throws InterruptedException {
		WebElement home = driver.findElement(By.xpath("//a[@href='home']"));
	    home.click();
	    Thread.sleep(3000);
	};

	@When("book a flight to Hyderabad")
	public void book_a_flight_to_hyderabad () throws InterruptedException {
		WebElement hdrbd = driver.findElement(By.xpath("//a[@href='bookflight?id=7']"));
	    hdrbd.click();
	    Thread.sleep(3000);
	    
	    WebElement cmplt = driver.findElement(By.xpath("//a[@href='completepurchase']"));
	    cmplt.click();
	    Thread.sleep(3000);
	};

	@Then("I check a new booking on YourBookings page")
	public void i_check_a_new_booking_on_yourbookings_page () throws InterruptedException {
		WebElement view = driver.findElement(By.xpath("//a[@href='memberbookings']"));
	    view.click();
	    Thread.sleep(3000);
	    WebElement message = driver.findElement(By.xpath("//body"));
	    String msg = "Total 5 bookings";
		Assert.assertTrue(message.getText().contains(msg));
	
	};

}
