// UTM parameter utilities
export function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
}

export function appendUTMToUrl(url) {
  const utmParams = getUTMParams();
  const hasParams = Object.values(utmParams).some(Boolean);
  if (!hasParams) return url;
  
  const separator = url.includes('?') ? '&' : '?';
  const utmString = Object.entries(utmParams)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  return `${url}${separator}${utmString}`;
}

export function storeUTMParams() {
  const utmParams = getUTMParams();
  const hasParams = Object.values(utmParams).some(Boolean);
  if (hasParams) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
}

export function getStoredUTMParams() {
  try {
    return JSON.parse(sessionStorage.getItem('utm_params') || '{}');
  } catch {
    return {};
  }
}
