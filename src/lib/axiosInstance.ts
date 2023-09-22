import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.apiBaseUrl, 
});

// Initialize a variable to keep track of whether a request is in progress
let isRequestInProgress = false;

// Function to make an API request with rate limiting
async function makeApiRequest(config: any) {
  // Check if a request is already in progress
  if (isRequestInProgress) {
    // If a request is in progress, return a promise that resolves when the current request is completed
    return new Promise((resolve) => {
      const checkRequestStatus = () => {
        if (!isRequestInProgress) {
          resolve(axiosInstance(config)); // Resolve the promise with the result of the request
        } else {
          setTimeout(checkRequestStatus, 100); // Check again after a short delay
        }
      };
      checkRequestStatus();
    });
  } else {
    // If no request is in progress, make the request and set the flag to true
    isRequestInProgress = true;
    try {
      const response = await axiosInstance(config);
      return response;
    } finally {
      isRequestInProgress = false; // Reset the flag when the request is completed
    }
  }
}

export default makeApiRequest;
