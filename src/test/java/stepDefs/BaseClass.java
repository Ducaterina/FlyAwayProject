package stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class BaseClass {

	public static WebDriver driver;
	
	@Before
	public void SetUp() {
		
		System.setProperty("webdriver.chrome.driver", "chromedriver104.0.5112.79.exe");
				
		driver = new ChromeDriver();

		driver.manage().window().maximize();
		
		//wait for 5 sec for your browser to load
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
		//WebDriverWait wait = new WebDriverWait(driver,50);
		
	}
	
	@After
	public void TearDown() {
		driver.close();
	}
}
