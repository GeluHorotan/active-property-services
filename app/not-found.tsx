'use client';
import CountdownRedirect from '@/components/CountdownRedirect';
import ContentNotFound from '@components/ContentNotFound';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className="self-center justify-self-center   flex items-center justify-center h-screen w-full    flex-col gap-12">
      <div className="bg-white rounded-4xl flex flex-col items-center justify-center gap-12 py-4 px-7">
        <div className="flex items-center justify-center gap-4 flex-col ">
          <h4 className="text-custom_gray-900 font-semibold">Page not found</h4>
          <ContentNotFound>
            Sorry, we couldn&apos;t found what you&apos;re looking for.
            We&apos;re sending you back to the homepage.
          </ContentNotFound>
        </div>
        <CountdownRedirect />
      </div>
    </div>
  );
};

export default NotFound;
