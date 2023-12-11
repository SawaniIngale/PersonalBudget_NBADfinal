# Personal Budget App
Personal Budget App - the ultimate solution for easy and effective budget management. The application simplifies your financial tracking, enabling you to effortlessly set budgets and monitor expenses. At its core is an intuitive dashboard that provides a clear comparison of your budget against actual expenditures. With the innovative gauge chart feature, you can instantly see the proportion of your budget utilized, helping you make informed financial decisions. Quick to set up and simple to use,Personal Budget App is your go-to tool for smarter budgeting and expense management.
# Getting Started
To run this application from the repository:

 npm start

Open the URL: http://64.176.215.213:3000/

backend URL: http://64.176.215.213:8081

Which will open a login page, we you have an account login orelse use the signup. If you are a new user you won't see any graphs, for that first go to create budget and add the categories and amount in budget. To add expenses go to expense tab and select the cateory in sequence to add the amount.
You will now be able to see dashboard visualization graphs.

If you are inactive for a minute you will get a pop up asking if you want to stay logged in or logout. If no response then after 20 secs you will be logged out. To login Go to the URL http://64.176.215.213:3000/.

The databse is hosted on freemysql hosting of which detatils are in server.js file.

# Testing
The application has been tested using
1. Unit Test using JEST
2. ECE Test using cypress
3. Visual Regression Test using AppliTools

To run the test, go to https://github.com/SawaniIngale/Personal_budget_localhost as testing has been done on the localhost.

Go to the frontend folder

1. For unit test - in cmd type npm test

   Unit testing has been conducted on Navbar to see if the links are active.
   ![image](https://github.com/SawaniIngale/PersonalBudget_NBADfinal/assets/143910844/c9a96ea5-bca3-40b9-b438-59c0a3a782fd)

   
3. For ECE test - in cmd type npx cypress open

   ECE testing is done on login page which if user has valid credentials can access the homepage
   ![image](https://github.com/SawaniIngale/PersonalBudget_NBADfinal/assets/143910844/fb069d76-8ea5-4971-a434-d4282add38ed)

   
5. For Applitool - in cmd type node Applitool.test.js

   Tests for the link access to the login page and it takes the snapsot
   ![image](https://github.com/SawaniIngale/PersonalBudget_NBADfinal/assets/143910844/355118a0-b16d-424e-8588-d3696c225e0f)

# Troubleshooting

While trying to connect to the URL if it says " Cannot connect/ Network error" that will be because the server might have stopped on my end. 

Let me know if that happens

If you want to see the database on freemysqlhosting, send me an email for credentials

# Contact Information

Email: singale@uncc.edu



   
   
