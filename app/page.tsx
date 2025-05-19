'use client';

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { initLiff } from '@/utils/liff';

export default function HomePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await initLiff();
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        setProfile(profile);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="p-4">
      <h1>LIFF App with Next.js App Router</h1>
      {profile ? (
        <div>
          <p>Name: {profile.displayName}</p>
          <img src={profile.pictureUrl} alt="profile" width={100} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
