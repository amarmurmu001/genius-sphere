import  Link  from 'next/link';

import { useUser, UserButton} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {user} = useUser;
  const router = useRouter;
  return (
    <div>
      <nav className="p-5 px-20 w-full h-auto flex  items-center justify-between">
        <h1 className="text-lg font-extrabold">GeniusSphere</h1>
        <div className="flex space-x-4 font-bold gap-4  ">
          <Link href="/browse">
            <div className="hover:text">Courses</div>
          </Link>
          <Link href="/about">
            <div className="hover:font-bold">About</div>
          </Link>
          <Link href="/contact">
            <div className="hover:font-bold">Contact</div>
          </Link>
        {!user?<button onClick={()=>router.push("/sign-in")}>Login</button>:
        <UserButton/>}
        </div>
      </nav>
      <main className="w-screen h-auto py-20 bg-gray-300 rounded-md flex-col items-center text-center justify-center" >
        <h1 className='text-9xl font-extrabold'>Learn To <br></br> <span>Code</span></h1>
        <p>&& have fun doing it</p>
      </main>
    </div>
  );
}
