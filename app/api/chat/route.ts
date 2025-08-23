import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Call Django backend
    const response = await fetch('http://127.0.0.1:8000/api/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Django backend error:', errorData);
      throw new Error(`Django backend responded with status ${response.status}: ${errorData}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      response: data.response || data.message || 'No response content',
      session_id: data.session_id || Date.now().toString(),
    });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
