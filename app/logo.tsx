import Image from 'next/image'

export function Logo() {
  return (
    <span className="om-logo" aria-label="OpenModels">
      <Image className="om-logo__light" src="/om.svg" alt="" width={162} height={24} priority />
      <Image className="om-logo__dark" src="/OpenModels.svg" alt="" width={162} height={24} priority />
    </span>
  )
}
