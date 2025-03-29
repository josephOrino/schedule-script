# Photoshop Schedule Script

This script automates the process of adding a formatted schedule into a Photoshop template and saving the output.

## 📌 How It Works

1. **Format the Schedule**  
   The schedule should be formatted as follows:

DDD | MMM DD, YYYY | UNDER | GAME 1 TEAM A | GAME 1 TEAM B | UNDER | GAME 2 TEAM A | GAME 2 TEAM B | ...


- `DDD` → Day (e.g., `MON`, `TUE`, `WED`, etc.)
- `MMM` → Month (e.g., `JAN`, `FEB`, `MAR`, etc.)
- `DD` → Day of the month
- `YYYY` → Year
- `UNDER` → Age category (e.g., `13U`, `15U`, `17U`, `19U`, `22U`, etc.)
- `vs` should be replaced with vertical bars (`|`).

💡 **Tip:** You can use ChatGPT to format any schedule into this format.

2. **Open the Correct Photoshop File**  
- Depending on the total number of games, open the corresponding `.tiff` file:  
  - **8 games** → `schedule season 6 - 8G.tiff`  
  - **7 games** → `schedule season 6 - 7G.tiff`  
  - And so on...

3. **Run the Script in Photoshop**  
- Locate the `.jsx` script in the same directory as the `.tiff` file.  
- Open the script in Photoshop.  
- When prompted, enter the formatted schedule from Step 1.  
- Press **Enter**, and the script will generate the schedule.

4. **Find the Output**  
- The final schedule image will be saved in the `SchedulesMade` folder.

---

## 🛠 Requirements

- **Adobe Photoshop** (with scripting enabled)
- **JavaScript (.jsx) support** in Photoshop

## 🚀 Usage Example

```plaintext
MON | MAR 25, 2025 | 17U | TEAM A | TEAM B | 19U | TEAM C | TEAM D
```
## 📢 Notes
- Ensure that the .tiff file matches the number of games in the schedule.
- If the script encounters errors, check the schedule formatting.


