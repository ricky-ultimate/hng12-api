# HNG12 Public API

## Description
This is a simple Node.js API for the HNG12 internship. It returns the user's registered email, current datetime in ISO 8601 format, and the GitHub repository URL.

## Technologies
- Node.js
- Express
- TypeScript
- Render Deployment

## Setup
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Steps to Run Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/ricky-ultimate/hng12-api.git
   cd hng12-api
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file:**
   ```sh
   PORT=5001
   GITHUB_URL=https://github.com/yourusername/hng12-api
   EMAIL=your-email@example.com
   ```
4. **Start the server:**
   ```sh
   npm run dev
   ```
5. **API will be available at:**
   ```
   http://localhost:5001/
   ```

## API Documentation
### Endpoint: `/`
#### Request Type:
- `GET`

#### Response Format:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/hng12-api"
}
```

## Deployment
This API is deployed on Render.

**Live URL:** [https://hng12-api-htj0.onrender.com](https://hng12-api-htj0.onrender.com)

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`)
3. Commit your changes (`git commit -m "Added a new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## Hire Node.js Developers
[Node.js Developers on HNG](https://hng.tech/hire/nodejs-developers)
