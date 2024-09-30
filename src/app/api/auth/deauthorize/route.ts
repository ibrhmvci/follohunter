import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the deauthorize request from Instagram
    const { user_id } = await req.json();

    // Handle deauthorization logic here (e.g., revoke user tokens, clean up session data)
    console.log('Deauthorized user:', user_id);

    // Respond to Instagram with success status
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Deauthorization error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
