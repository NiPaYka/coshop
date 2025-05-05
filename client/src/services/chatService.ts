import axios from 'axios';
import { CHAT_BOT_CONSTANTS } from '../constants/chatBot';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

// Debug log to check if API key is loaded
console.log('API Key loaded:', API_KEY ? 'Yes' : 'No');

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const chatService = {
  async sendMessage(messages: Message[]) {
    try {
      if (!API_KEY) {
        console.error('OpenAI API key is not set');
        return 'Ошибка: API ключ не настроен. Пожалуйста, проверьте настройки.';
      }

      console.log('Sending request to OpenAI with messages:', messages);

      const response = await axios.post(
        API_URL,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: CHAT_BOT_CONSTANTS.SYSTEM_PROMPT },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 500,
          presence_penalty: 0.6,
          frequency_penalty: 0.3
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Received response from OpenAI:', response.data);
      return response.data.choices[0].message.content;
    } catch (error: any) {
      console.error('Error sending message to OpenAI:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        return `Ошибка: ${error.response.data.error?.message || 'Неизвестная ошибка'}`;
      }
      return CHAT_BOT_CONSTANTS.ERROR_MESSAGE;
    }
  }
}; 