'use client'

import type {
  Agency,
  AgencySidebarOption,
  SubAccount,
  User,
} from '@prisma/client'
import { PlusCircle } from 'lucide-react'

import SubAccountDetails from '@/components/forms/subaccount-details'
import { CustomModal } from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useModal } from '@/providers/modal-provider'

type Props = {
  user: User & {
    Agency:
      | (
          | Agency
          | (null & {
              Subaccount: SubAccount[]
              SideBarOption: AgencySidebarOption[]
            })
        )
      | null
  }
  id: string
  className: string
}

export const CreateSubaccountButton = ({ className, id, user }: Props) => {
  const { setOpen } = useModal()
  const agencyDetails = user.Agency

  if (!agencyDetails) return

  return (
    <Button
      className={cn('w-full flex gap-4', className)}
      onClick={() => {
        setOpen(
          <CustomModal
            title="Create A Subaccount"
            subheading="You can switch between your agency account and the subaccount from the sidebar"
          >
            <SubAccountDetails
              agencyDetails={agencyDetails}
              userId={user.id}
              userName={user.name}
            />
          </CustomModal>,
        )
      }}
    >
      <PlusCircle size={15} />
      Create Sub Account
    </Button>
  )
}
