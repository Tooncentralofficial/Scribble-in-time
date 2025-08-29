import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      throw new Error('Message is required');
    }

    // Call the AI API endpoint
    const response = await fetch('http://localhost:8000/api/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('AI API error:', errorData);
      throw new Error(`AI API responded with status ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      response: data.response,
      conversation_id: data.conversation_id,
      conversation_status: data.conversation_status,
    });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { 
        response: 'Sorry, I encountered an error processing your message. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
