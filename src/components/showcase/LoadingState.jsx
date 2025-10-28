import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Heart } from 'lucide-react';

export default function LoadingState() {
  return (
    <div className="min-h-screen bg-white" role="status" aria-live="polite" aria-busy="true">
      <section className="bg-white py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-[#C9A959] fill-[#C9A959]/20 mx-auto mb-8 animate-pulse" aria-hidden="true" />
          <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-gray-100" />
          <Skeleton className="h-8 w-full max-w-3xl mx-auto mb-4 bg-gray-100" />
          <Skeleton className="h-8 w-5/6 max-w-3xl mx-auto mb-12 bg-gray-100" />
          <Skeleton className="h-14 w-64 mx-auto rounded-full bg-gray-100" />
          <p className="sr-only">Loading collection…</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-3 bg-gray-100" />
          <Skeleton className="h-6 w-48 mx-auto mb-12 bg-gray-100" />
          <div className="flex gap-3 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-12 w-24 rounded-full bg-gray-100" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[3/4] w-full rounded-3xl bg-gray-100" />
              <Skeleton className="h-6 w-3/4 bg-gray-100" />
              <Skeleton className="h-8 w-24 bg-gray-100" />
              <Skeleton className="h-20 w-full bg-gray-100" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
