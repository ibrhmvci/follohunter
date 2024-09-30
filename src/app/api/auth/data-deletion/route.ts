import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request (you might receive a signed request from Instagram)
    const { signed_request } = await req.json();

    // Verify the signed request using your Instagram app's secret key
    const secret = process.env.INSTAGRAM_CLIENT_SECRET;
    const [signature, payload] = signed_request.split('.');
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json({ status: 'error', message: 'Invalid signature' }, { status: 400 });
    }

    // Parse the user data from the payload
    const userData = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'));

    // Handle the deletion process here: remove user data from your database
    console.log('Data deletion request for user:', userData.user_id);

    // Respond to Instagram with the required URL and response format
    return NextResponse.json({
      status: 'success',
      message: 'User data has been deleted',
    });
  } catch (error) {
    console.error('Data deletion error:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to delete user data' }, { status: 500 });
  }
}
