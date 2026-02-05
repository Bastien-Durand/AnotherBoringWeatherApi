# Weather App

A clean, responsive weather application built with React, TypeScript, and Vite. Fetches real-time weather data from the OpenWeatherMap API.

## 🎯 Project Overview

A simple weather app that allows users to search for any city worldwide and displays current weather conditions including temperature, weather description, humidity, and wind speed.

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast development build tool
- **OpenWeatherMap API** - Real-time weather data

## ✨ Features

### Completed

- ✅ City search functionality
- ✅ Real-time weather data display
- ✅ Current temperature (Celsius)
- ✅ Weather conditions with icon
- ✅ "Feels like" temperature
- ✅ Humidity percentage
- ✅ Wind speed
- ✅ Loading state while fetching data
- ✅ Error handling for invalid cities
- ✅ Clean, centered UI design
- ✅ Responsive layout

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd weather-app

# Install dependencies
npm install

# Create .env file in root directory
touch .env

# Add your API key to .env
VITE_WEATHER_API_KEY=your_api_key_here

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📂 Project Structure

```
src/
├── components/
│   ├── WeatherForm.tsx       # Search input form
│   └── WeatherDisplay.tsx    # Weather data display
├── App.tsx                   # Main app with state & API logic
├── App.css
└── main.tsx                  # App entry point
```

## 🔑 API Integration

### How It Works

1. **Geocoding API Call**
   - Converts city name to latitude/longitude coordinates
   - Endpoint: `http://api.openweathermap.org/geo/1.0/direct`

2. **Weather API Call**
   - Fetches current weather data using coordinates
   - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
   - Returns temperature in Celsius (`units=metric`)

### API Flow

```
User Input (City Name)
    ↓
Geocoding API (City → Lat/Lon)
    ↓
Weather API (Lat/Lon → Weather Data)
    ↓
Display Results
```

## 🧩 Key Concepts Demonstrated

### React Fundamentals

- Component composition
- State management with `useState`
- Async data fetching
- Conditional rendering
- Event handling
- Props and data flow

### TypeScript

- Interface definitions for props
- Type-safe API responses
- Event handler typing

### API Integration

- Sequential API calls (dependent requests)
- `async/await` pattern
- Error handling with try/catch
- Loading states
- Environment variable management

### User Experience

- Loading indicators
- Error messages for invalid input
- Clean, intuitive UI
- Real-time data display

## 🎨 Styling

Uses inline styles for:

- Centered layout (max-width container)
- Clean form design with search button
- Weather card with shadow and border-radius
- Responsive spacing and typography
- Error state styling

## 📝 Learning Goals

This project was built to practice:

- Working with external APIs
- Handling asynchronous JavaScript
- Managing multiple API calls in sequence
- User input validation and error handling
- TypeScript with React
- Environment variable security

## 🔄 Data Flow

```
WeatherForm (user input)
    ↓
onHoistUp prop
    ↓
App.tsx fetchData()
    ↓
API calls (geocoding → weather)
    ↓
setState (weatherData)
    ↓
WeatherDisplay (render data)
```

## 🔐 Security

- API key stored in `.env` file
- `.env` added to `.gitignore`
- Never committed to version control
- Uses `VITE_` prefix for Vite environment variables

## 🚧 Future Enhancements

Potential additions:

- 5-day forecast
- Search history
- Favorite cities
- Temperature unit toggle (C°/F°)
- More detailed weather info (sunrise/sunset, UV index)
- Geolocation (auto-detect user's location)
- Weather alerts
- Animated weather icons

## 📚 API Documentation

- [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
- [OpenWeatherMap Geocoding API](https://openweathermap.org/api/geocoding-api)

## 📄 License

MIT

---

**Note:** This app requires an active internet connection and a valid OpenWeatherMap API key to function.
