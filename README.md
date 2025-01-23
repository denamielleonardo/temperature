# Temperature Converter Project

This project is a temperature conversion tool that allows users to convert values between Celsius and Fahrenheit. The user can input values manually or adjust the temperature using a slider. The slider's color changes based on the temperature range to visually indicate different temperature zones.

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Angular** version 13 or higher
- **Node** version v18 or higher

## Repository Setup

1. Clone the repository:
   git clone https://github.com/denamielleonardo/temperature.git

2. After cloning, switch to the main branch:
   git checkout main

3. Install the required dependencies:
   npm install

4. Start the development server:
   ng serve and run http://localhost:4200/

## User Manual / Features

- **Celsius and Fahrenheit Input:**  
  The user can manually enter values in the Celsius and Fahrenheit input fields.

- **Input Validation:**

  - **Celsius Range:**  
    The Celsius input accepts values from **-30°C to 200°C**. Any value outside this range will trigger an error message:  
    **"Invalid celsius value"**.

- **Temperature Slider:**  
  The slider allows the user to adjust the temperature, and the corresponding Celsius and Fahrenheit values will update in real-time.

- **Slider Color Changes:**  
  The slider color will change based on the Celsius value:
  - **Blue** for temperatures **30°C and below**
  - **Orange** for temperatures between **30°C and 80°C**
  - **Red** for temperatures **above 80°C**

## Time Log

Here’s an approximate time breakdown for completing different parts of the project:

- **Project Setup (including GitHub repository):** 15-20 minutes
- **Layout Design:** 20 minutes
- **Methods Development:** 1 hour
- **Unit Testing:** 5-10 minutes
