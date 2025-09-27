# Energy App

This project consists of a Python FastAPI backend and a React frontend.

## Running the Backend

1. **Navigate to the backend folder:**
   ```bash
   cd ../backend
   ```

2. **(Optional) Create and activate a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the FastAPI server:**
   ```bash
   uvicorn app.main:app --reload
   ```

The backend will be available at `http://localhost:8000`.

---

## Running the Frontend

1. **Navigate to the frontend folder:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`.

---

## Notes

- Make sure the backend is running before starting the frontend to enable API communication.
- The backend CORS policy allows requests from `http://localhost:3000` for development.