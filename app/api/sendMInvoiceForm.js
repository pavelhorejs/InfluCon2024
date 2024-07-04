// pages/api/sendEmail.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { email, name } = req.body;
  
    const apiKey = process.env.ECOMAIL_API_KEY;
    const templateId = process.env.ECOMAIL_TEMPLATE_ID;
  
    try {
      const response = await fetch('https://api2.ecomailapp.cz/transactional/send-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          key: apiKey,
        },
        body: JSON.stringify({
          template_id: templateId,
          message: {
            to: [{ email, name }],
            global_merge_vars: {
              name,
            },
          },
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }