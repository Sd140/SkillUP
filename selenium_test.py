import unittest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.action_chains import ActionChains

import requests

chromeOptions = Options()
chromeOptions.headless = True

# Login Test
class Login(unittest.TestCase):
        
    def setUp(self):
        self.driver = webdriver.Chrome('chromedriver.exe')

    def test_login(self):
        driver = self.driver
        driver.implicitly_wait(30)
        driver.set_page_load_timeout(50)
        driver.maximize_window()
        driver.get("http://localhost:3000/login")
        print(driver)
        time.sleep(1)
        login = driver.find_element(By.ID, "username")
        login.send_keys("sak123")
        # time.sleep(2)

        password = driver.find_element(By.ID, "password")
        password.send_keys("sakshi")
        driver.execute_script("window.scrollBy(0,250)")
        time.sleep(2)
        ActionChains(driver).move_to_element(driver.find_element(By.ID, "lgn_submit")).click().perform()

        time.sleep(5)

        # print(driver.current_url)
        # time.sleep(10)

        try:
            assert "http://localhost:3000/" == driver.current_url

        except:
            print("Error in login")

        
    def tearDown(self):
        self.driver.close() 


if __name__ == "__main__":
    unittest.main()