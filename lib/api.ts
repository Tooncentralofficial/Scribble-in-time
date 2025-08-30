const API_BASE_URL = 'https://scribble-in-time-backend-production.up.railway.app';

export const sendMessage = async (message: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'include',
      body: JSON.stringify({ message: message }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || 'Failed to send message');
    }

    const data = await response.json();
    return { 
      response: data.response || 'No response content',
      session_id: data.session_id 
    };
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
