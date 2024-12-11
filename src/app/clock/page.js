'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to another page, e.g., "/target-page"
    router.push('/web-art/clock');
  }, [router]);

  return (
      <div>
        
      </div>
  );
}
