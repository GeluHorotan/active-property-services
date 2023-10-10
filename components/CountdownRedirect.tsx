import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@components/Button';
import Link from 'next/link';

const CountdownRedirect = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [countdown, router]);

  return (
    <div className="flex flex-col gap-8 items-center justify-center ">
      <div className="flex items-center flex-col px-14 bg-white shadow-md text-custom_gray-900 py-4 rounded-4xl ">
        <h6 className="">Redirecting in</h6>
        <h4>{countdown}s</h4>
      </div>
      <Button className="text-[16px] border-[0.5px] border-custom_gray-700   rounded-[10px] items-center  py-[14px] px-[28px] leading-[25px]  font-normal gap-[8.5px] text-custom_gray-700">
        <Link href="/">HOME</Link>
      </Button>
    </div>
  );
};

export default CountdownRedirect;
