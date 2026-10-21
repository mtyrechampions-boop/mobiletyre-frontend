import { NextResponse } from 'next/server';
import { checkCoverage } from '@/lib/coverage';

// Authoritative service-coverage check. The client UI never decides coverage itself.
export const dynamic = 'force-dynamic';

export async function GET(request) {
  const raw = new URL(request.url).searchParams.get('postcode') || '';
  if (raw.length > 32) {
    return NextResponse.json(
      { status: 'invalid', postcode: '', message: 'Please enter a valid UK postcode (e.g. GU11 3HY)' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const result = checkCoverage(raw);
  return NextResponse.json(result, {
    status: result.status === 'invalid' ? 400 : 200,
    headers: { 'Cache-Control': 'no-store' },
  });
}
