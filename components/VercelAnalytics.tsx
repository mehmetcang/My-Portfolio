'use client';

import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';

export default function VercelAnalytics() {
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
} 