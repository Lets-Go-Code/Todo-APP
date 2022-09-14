import Signin from './loginPages'
import Login from './loginPage'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <head>
        <title>To Do App</title>
      </head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <Signin/>
        <Login/>
      </main>
    </div>
  )
}
