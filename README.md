# filter-wp-plugins
Filter WordPress Plugins. Try this at your own risk. No guarantees of decent software are made. 

# Filtering WordPress Plugins by Active Installations in Brave Browser

This guide explains how to filter WordPress plugins on the plugin installation page based on the number of active installations, using Brave's Developer Tools.

## Steps to Filter Plugins

1. **Open the Plugin Page**  
   Navigate to the WordPress plugin installation page in the Brave browser.

2. **Open Developer Tools**  
   - Right-click anywhere on the page and select **Inspect**.
   - Alternatively, press `Ctrl+Shift+I` (or `Cmd+Option+I` on macOS) to open Developer Tools.

3. **Access the Console Tab**  
   - In Developer Tools, navigate to the **Console** tab.

4. **Paste and Run the Script**  
   Copy and paste the following JavaScript code into the console and press `Enter`:
   ```javascript
   document.querySelectorAll('.plugin-card').forEach(card => {
       const installsElement = card.querySelector('.column-downloaded'); // Adjusted selector
       if (installsElement) {
           const installsText = installsElement.textContent.trim(); // Use textContent to get the text
           const installs = parseInt(installsText.replace(/[^0-9]/g, ''), 10); // Extract the number
           if (installs < 100000) {
               card.style.display = 'none'; // Hide if installs < 100,000
           }
       }
   });

 4b. **Paste and Run the Script**  
 Copy and paste the following JavaScript code into the console and press `Enter`:
 ```javascript
  document.querySelectorAll('.plugin-card').forEach(card => {
       const installsElement = card.querySelector('.column-downloaded'); // Adjusted selector
       if (installsElement) {
           const installsText = installsElement.textContent.trim(); // Use textContent to get the text
           const installs = parseInt(installsText.replace(/[^0-9]/g, ''), 10); // Extract the number
           if (installs < 80000) {
               card.style.display = 'none'; // Hide if installs < 80,000
           }
       }
   });
