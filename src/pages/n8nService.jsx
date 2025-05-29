export const sendContactMessage = async ({ name, email, message }) => {
  try {
    const response = await fetch('https://jeetpitale.app.n8n.cloud/webhook/de2bfe3c-1697-4cd4-83e8-ab9b628c828d', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send message: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};

// New function for newsletter
export const sendNewsletterSubscription = async (email) => {
  try {
    const response = await fetch('https://jeetpitale.app.n8n.cloud/webhook/7536405e-5f3c-43fc-85c3-5d46b2e99fba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to subscribe: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
