# MedReminder

MedReminder is a user-friendly, web-based application designed to help individuals keep track of their medication schedules. Built with HTML, CSS, and Vanilla JavaScript, it leverages local storage for data persistence and uses Flask for deployment. This app aims to improve medication adherence and overall health management.

## Features

- **Add Medication Reminders**: Easily input medication names and scheduled times.
- **View Reminders**: See a list of all scheduled reminders at a glance.
- **Delete Reminders**: Remove individual reminders when they're no longer needed.
- **Real-time Notifications**: Receive popup alerts when it's time to take medication.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data Persistence**: Utilizes local storage to maintain user data across sessions.
- **User-friendly Interface**: Clean and intuitive design for ease of use.

## Installation

To run MedReminder locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/abisong/MedReminder.git
   cd MedReminder
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the Flask application:
   ```
   python main.py
   ```

   Note: The application uses an environment variable `PORT` to set the port. If not set, it defaults to 5000.

4. Open your web browser and navigate to `http://localhost:5000` (or the port specified by the `PORT` environment variable)

## Usage

### Adding a New Reminder

1. On the main page, locate the "Add Reminder" form.
2. Enter the medication name in the "Medication Name" field.
3. Set the time for the reminder using the time input field.
4. Click the "Add Reminder" button to save the new reminder.

### Viewing Reminders

- All scheduled reminders are displayed below the input form.
- Each reminder shows the medication name and the scheduled time.

### Deleting a Reminder

- To remove a reminder, click the trash can icon next to the reminder you wish to delete.
- The reminder will be immediately removed from the list and local storage.

### Receiving Notifications

- When it's time to take a medication, a popup will appear on the screen.
- The popup will display the name of the medication to be taken.
- Click the "Dismiss" button to close the notification after taking your medication.

### Mobile Usage

- The app is fully responsive and can be used on mobile devices.
- For the best experience, access the app through a mobile web browser.

## Technologies Used

- **Frontend**:
  - HTML5 for structure
  - CSS3 for styling and responsive design
  - JavaScript (ES6+) for interactive features
- **Backend**:
  - Flask (Python web framework) for server-side logic
- **Data Storage**:
  - Local Storage API for client-side data persistence
- **Deployment**:
  - Replit for easy deployment and hosting

## Deployment on Replit

MedReminder is deployed and hosted on Replit, which provides a simple and efficient way to run the application. To deploy your own instance of MedReminder on Replit:

1. Fork the MedReminder repository on GitHub.
2. Create a new Repl on Replit and import the forked repository.
3. In the Replit environment, install the required dependencies by running `pip install -r requirements.txt` in the Shell.
4. Set up the following environment variables in your Repl:
   - `PORT`: The port number for the Flask app to run on (default is 5000)
   - `GITHUB_TOKEN`: Your GitHub personal access token (if you plan to use GitHub integration)
5. Click the "Run" button to start the Flask server.
6. Your MedReminder app will be accessible via the provided Replit URL.

Note: Make sure to keep your environment variables, especially `GITHUB_TOKEN`, confidential and never expose them in your code or version control.

## Contributing

Contributions to MedReminder are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions, suggestions, or issues, please open an issue on the GitHub repository or contact the maintainers directly.
