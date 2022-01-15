import React from "react";

const AboutUs = (props) => {
    console.log('About Us section')
    return (
        <div className='container m-6 p-4 text-justify'>
            <div>
                <h1>App Guide</h1>
                <p>
                    <em><b>App Introduction</b></em><br />
                    The Point of Sales Billing App is a one Stop Solution for Generating Bills.<br />
                    Find detail information about each tab below.<br />
                    <em><b>Register Tab</b></em><br />
                    If the user is using the tool for the first time then user needs to create a new account using the Register tab. Enter the name , email , mobile no., Business name , Business Address and Click on Register. User will be redirected to the login page. Login using the login mail and password to access the tool.<br />
                    <em><b>Login Tab</b></em><br />
                    Once registered , from next time user can directly come into the login Page and entert the credentials to access the App.<br />
                    <em><b>Customers Tab</b></em><br />
                    The User needs to add Customer first from the Customers Tab.Once added it will reflect in the list of the current Customers.The last added Customer gets added after the last Customer in the last page.<br />
                    <em><b>products Tab</b></em><br />
                    Then the User needs to add Product or Commodities first from the Products Tab.Once added it will reflect in the list of the current Products in the table. The last added product gets added after the last product in the last page.<br />
                    <em><b>Billing Tab</b></em><br />
                    The billing Tab has two purpose. First to generate Bills and second to see the list of generated Bills.
                    On left lies the list of generated bills in a table with the option to view and delete bill.On the right user can generate new bill by selecting the customer and adding products to the cart. Once all the items are added user can click Generate Button to generate the bill. This generated bill automatically gets added as the last entry in the last page of the Generated Bills.<br />
                    <em><b>Logout Tab</b></em><br />
                    Once the bill is generated and the tool is no longer used then User can log out of the tool. And close the Tab.<br />
                    <em><b>support</b></em><br />
                    Reach out to the App Owner via below mentioned mediums for more support.<br />
                    mail : heyrandhirs@gmail.com,
                    Mobile : +91-7854854644<br />
                    Thanks for using our App.Have a nice rest of the day.
                </p>
            </div>
        </div>)
}

export default AboutUs