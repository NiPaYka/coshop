import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  IconButton,
  Typography,
  TextField,
  Fade,
  Avatar,
  CircularProgress
} from '@mui/material';
import {
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { chatService } from '../services/chatService';
import { CHAT_BOT_CONSTANTS } from '../constants/chatBot';

interface ChatMessage {
  text: string;
  isBot: boolean;
}

interface ApiMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: CHAT_BOT_CONSTANTS.WELCOME_MESSAGE,
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    // Добавляем сообщение пользователя
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);

    try {
      // Преобразуем сообщения в формат для API
      const apiMessages: ApiMessage[] = messages.map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text
      }));

      // Добавляем новое сообщение пользователя
      apiMessages.push({ role: 'user', content: userMessage });

      // Получаем ответ от API
      const response = await chatService.sendMessage(apiMessages);

      // Добавляем ответ бота
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, {
        text: CHAT_BOT_CONSTANTS.ERROR_MESSAGE,
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 10, md: 20 },
        right: { xs: 10, md: 20 },
        zIndex: 1000,
      }}
    >
      <Fade in={isOpen}>
        <Paper
          elevation={3}
          sx={{
            width: { xs: 320, sm: 350 },
            height: { xs: 420, sm: 500 },
            display: isOpen ? 'flex' : 'none',
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              bgcolor: 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ bgcolor: 'white', color: 'primary.main', width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}>
                <ChatIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>Помощник</Typography>
            </Box>
            <IconButton
              size="small"
              onClick={() => setIsOpen(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 1.5, sm: 2 },
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: message.isBot ? 'flex-start' : 'flex-end',
                }}
              >
                <Paper
                  sx={{
                    p: 1.2,
                    maxWidth: '80%',
                    bgcolor: message.isBot ? 'grey.100' : 'primary.main',
                    color: message.isBot ? 'text.primary' : 'white',
                    borderRadius: 2,
                    fontSize: { xs: '0.98rem', sm: '1rem' },
                  }}
                >
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.98rem', sm: '1rem' } }}>{message.text}</Typography>
                </Paper>
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <CircularProgress size={20} />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              borderTop: 1,
              borderColor: 'divider',
              display: 'flex',
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Введите сообщение..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: { xs: '1rem', sm: '1.05rem' },
                  minHeight: { xs: 38, sm: 44 },
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSend}
              disabled={isLoading}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                width: { xs: 38, sm: 44 },
                height: { xs: 38, sm: 44 },
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                '&.Mui-disabled': {
                  bgcolor: 'grey.300',
                  color: 'grey.500',
                },
              }}
            >
              <SendIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </IconButton>
          </Box>
        </Paper>
      </Fade>

      {/* Chat Button */}
      {!isOpen && (
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            width: { xs: 56, sm: 60 },
            height: { xs: 56, sm: 60 },
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            boxShadow: 3,
          }}
        >
          <ChatIcon sx={{ fontSize: { xs: 28, sm: 30 } }} />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatBot; 