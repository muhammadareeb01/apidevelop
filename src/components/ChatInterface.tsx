import { useState, useRef } from 'react';
import { Send, Bot, Paperclip } from 'lucide-react';
import { Button } from './Button';
import { FileUpload } from './FileUpload';
import { Message } from '../types/chat';
import { sendMessage, uploadFiles } from '../lib/api';

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleFileSelect = async (files: FileList) => {
    const newFiles = Array.from(files);
    setAttachments(prev => [...prev, ...newFiles]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && attachments.length === 0) || isLoading) return;

    setIsLoading(true);
    try {
      let fileUrls: string[] = [];
      if (attachments.length > 0) {
        fileUrls = await uploadFiles(attachments);
      }

      const userMessage: Message = {
        role: 'user',
        content: input,
        attachments: fileUrls,
      };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setAttachments([]);

      const response = await sendMessage(input, fileUrls);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.message,
      };
      setMessages(prev => [...prev, assistantMessage]);
      setTimeout(scrollToBottom, 100);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="flex items-center p-4 border-b">
        <Bot className="h-6 w-6 text-brand mr-2" />
        <h2 className="text-lg font-semibold">Grocery Assistant</h2>
      </div>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
              {message.attachments && message.attachments.length > 0 && (
                <div className="mt-2 flex gap-2">
                  {message.attachments.map((url, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <Paperclip className="h-4 w-4 mr-1" />
                      Attachment {i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex flex-col gap-2">
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {attachments.map((file, index) => (
                <div key={index} className="bg-gray-100 rounded px-2 py-1 text-sm flex items-center">
                  <Paperclip className="h-3 w-3 mr-1" />
                  {file.name}
                  <button
                    type="button"
                    className="ml-1 text-gray-500 hover:text-gray-700"
                    onClick={() => setAttachments(prev => prev.filter((_, i) => i !== index))}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <FileUpload onFileSelect={handleFileSelect} />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about grocery deals..."
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-brand"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}