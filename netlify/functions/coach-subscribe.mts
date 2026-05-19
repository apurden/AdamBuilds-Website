const KIT_COACH_FORM_ID = '9461468';

export default async (request: Request) => {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405);
  }

  try {
    const { email } = await request.json();
    if (!isEmail(email)) {
      return jsonResponse({ error: 'invalid_email' }, 400);
    }

    const params = new URLSearchParams();
    params.append('email_address', email);
    params.append('form_id', KIT_COACH_FORM_ID);
    params.append('id', KIT_COACH_FORM_ID);

    const response = await fetch(
      `https://app.kit.com/forms/${KIT_COACH_FORM_ID}/subscriptions`,
      {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        redirect: 'manual',
      }
    );

    if (response.status >= 200 && response.status < 400) {
      return jsonResponse({ ok: true }, 200);
    }

    return jsonResponse({ error: 'kit_rejected', status: response.status }, 502);
  } catch (error) {
    return jsonResponse({ error: 'subscribe_failed' }, 500);
  }
};

export const config = {
  path: '/api/coach-subscribe',
};

function isEmail(value: unknown): value is string {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
