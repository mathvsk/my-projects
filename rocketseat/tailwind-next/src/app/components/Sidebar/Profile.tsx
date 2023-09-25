import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/mathvsk.png"
        width={40}
        height={40}
        className="rounded-full"
        alt=""
      />

      <div className="flex w-44 flex-col">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Matheus Igor Viscki
        </span>
        <span className="truncate text-sm text-zinc-500">
          matheusviscki@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
