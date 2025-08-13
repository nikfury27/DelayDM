# 📩 DM Delay App

A fun and simple app where you can type a message and delay it like a scheduled DM.  
Perfect for learning **state management**, **timers**, and **frontend cleanup** in React.

---

## 💡 What I Learnt

1. **useState** and **setTimeout** in React  
2. How to simulate **message scheduling**  
3. Cancel scheduled tasks with **clearTimeout**  
4. Building with **ShadCN UI** + **Tailwind CSS**  
5. Writing **clean React code** in TypeScript  

---

## 🎯 Tech Stack Used

- **React (Vite)** – Fast and modern frontend framework  
- **TypeScript** – Type safety and better developer experience  
- **Tailwind CSS** – Utility-first CSS styling  
- **ShadCN UI** – Prebuilt, accessible UI components  

---

## 👨‍🎓 Why This Project is Important

This app teaches how the frontend handles:

- **Timing logic** – scheduling actions and delays  
- **State management** – tracking messages and timers  
- **Cleanup patterns** – avoiding memory leaks with `clearTimeout`  
- **UI patterns** – integrating styled components into functional apps  

These are **core skills** for building chat apps, schedulers, bots, and notifications in real-world projects.

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dm-delay-app.git
   cd dm-delay-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit: `http://localhost:5173`

````

## 🛠 How It Works

1. **Type a message** in the input box.
2. **Set a delay** in seconds.
3. Click **Send Later**.
4. After the set delay, the message will be displayed in the output area.
5. Use the **Cancel** button to stop a scheduled message before it sends.

---

## 🌍 Real-World Applications

This feature can be integrated into:

* **Social Media Schedulers** – Schedule posts or DMs for future times.
* **Customer Support Bots** – Delay sending auto-responses for a natural feel.
* **Notification Systems** – Send reminders after a set interval.
* **Team Collaboration Tools** – Schedule important announcements.
* **E-commerce Apps** – Delay sending promotional messages based on user activity.
* **Productivity Apps** – Create reminders and to-do list alerts.

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── MessageForm.tsx   # Input, delay, and send logic
 ├── App.tsx                # Main app structure
 ├── main.tsx               # Entry point
 └── index.css              # Tailwind setup
```

---

## 📸 Screenshot

<img width="1919" height="977" alt="Screenshot 2025-08-13 223848" src="https://github.com/user-attachments/assets/b6e0b1f3-87a9-4ec2-9db1-547b987cdc47" />
<img width="1919" height="977" alt="Screenshot 2025-08-13 223802" src="https://github.com/user-attachments/assets/63343b2c-90e9-462a-b5a9-f0fdd8325039" />
<img width="1919" height="982" alt="Screenshot 2025-08-13 223117" src="https://github.com/user-attachments/assets/c863b990-f5da-46d4-b9a5-a6be69fd9e01" />



---


### ✨ Contributions Welcome

We welcome improvements and new ideas!
Some ways you can contribute:
-UI Enhancements<br>
-Improve styling or animations for message transitions<br>
-Add dark/light mode toggle<br>
-Feature Additions<br>
-Allow multiple scheduled messages<br>
-Support message editing before sending<br>
-Add persistence (localStorage or backend)<br>
-Support custom time formats (e.g., hh:mm AM/PM)<br>
-Integrations<br>
-Connect with a real chat API for actual scheduled sending<br>
-Hook into Discord, Slack, or WhatsApp bots<br>
-Add push/browser notifications<br>
-Code Quality<br>
-Improve TypeScript types & interfaces<br>


