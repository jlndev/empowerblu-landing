// Configuration for environment-specific values

const config = {
  // App URLs
  urls: {
    // Use environment variable if available, otherwise default to production URL
    app: process.env.NEXT_PUBLIC_APP_URL || 'https://app.empowerblu.com',
    // Add other URLs as needed
    marketing: process.env.NEXT_PUBLIC_MARKETING_URL || 'https://empowerblu.com',
  },
  // Auth paths
  auth: {
    login: '/auth/login', // Path to append to app URL for login
    signup: '/signup', // Path to append to app URL for signup
    forgotPassword: '/forgot-password', // Path for password reset
  }
};

export default config; 