import { useEffect, useCallback, useRef, useMemo } from 'react';
import { webSocketService } from '@/lib/websocket';

interface UseWebSocketProps {
  conversationId: string | null;
  onMessage?: (data: any) => void;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: Event) => void;
  autoReconnect?: boolean;
}

export function useWebSocket({
  conversationId,
  onMessage,
  onConnect,
  onDisconnect,
  onError,
  autoReconnect = true,
}: UseWebSocketProps) {
  // Memoize the callbacks to prevent unnecessary re-renders
  const callbacksRef = useRef({ onMessage, onConnect, onDisconnect, onError });
  
  // Update callback refs when they change
  useEffect(() => {
    callbacksRef.current = { onMessage, onConnect, onDisconnect, onError };
  }, [onMessage, onConnect, onDisconnect, onError]);

  // Memoize sendMessage to prevent unnecessary recreations
  const sendMessage = useCallback((message: string) => {
    return webSocketService.sendMessage(message);
  }, []);

  // Memoize disconnect to prevent unnecessary recreations
  const disconnect = useCallback(() => {
    webSocketService.disconnect();
  }, []);

  // Get current connection status
  const isConnected = useMemo(() => webSocketService.isConnected(), [conversationId]);

  useEffect(() => {
    if (!conversationId) return;

    // Connect to WebSocket if not already connected
    if (!isConnected) {
      webSocketService.connect(conversationId);
    }

    const handleMessage = (data: any) => {
      // Only process if we have a message handler and the data is valid
      if (data && callbacksRef.current.onMessage) {
        callbacksRef.current.onMessage(data);
      }
    };

    const handleConnect = () => {
      callbacksRef.current.onConnect?.();
    };

    const handleError = (error: Event) => {
      callbacksRef.current.onError?.(error);
    };

    // Get cleanup function from addMessageHandler
    const cleanupMessageHandler = webSocketService.addMessageHandler(handleMessage);
    
    // Set up connection handler if needed
    if (onConnect) {
      if (isConnected) {
        handleConnect();
      } else {
        const originalSocket = (webSocketService as any).socket;
        if (originalSocket) {
          const originalOnOpen = originalSocket.onopen;
          originalSocket.onopen = (event: Event) => {
            originalOnOpen?.(event);
            handleConnect();
          };
        }
      }
    }

    // Set up error handler if needed
    if (onError) {
      const originalSocket = (webSocketService as any).socket;
      if (originalSocket) {
        const originalOnError = originalSocket.onerror;
        originalSocket.onerror = (event: Event) => {
          originalOnError?.(event);
          handleError(event);
        };
      }
    }

    // Cleanup on unmount or when conversationId changes
    return () => {
      // Use the cleanup function from addMessageHandler
      cleanupMessageHandler?.();
      
      if (!autoReconnect) {
        webSocketService.disconnect();
      }
      
      callbacksRef.current.onDisconnect?.();
    };
  }, [conversationId, autoReconnect, isConnected]);

  return {
    sendMessage,
    isConnected,
    disconnect,
  };
}
