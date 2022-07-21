import Image from "next/image"
import HeaderItem from "./header_item"
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  UserIcon,
  SearchIcon
} from "@heroicons/react/outline"
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto" >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="COLLECTION" Icon={UserIcon} />
      </div>
      <Image className="object-contain"
        src='https://links.papareact.com/ua6'
        width={150} height={75} />
    </header>
  )
}

export default Header