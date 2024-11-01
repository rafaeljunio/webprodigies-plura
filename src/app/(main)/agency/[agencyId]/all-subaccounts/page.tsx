import React from 'react'

import { AlertDialog } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { getAuthUserDetails } from '@/lib/queries'

type Props = {
  params: {
    agencyId: string
  }
}

const AllSubaccountsPage = async ({ params }: Props) => {
  const user = await getAuthUserDetails()

  if (!user) return

  return (
    <AlertDialog>
      <div className="flex flex-col">
        <Button>Create</Button>
      </div>
    </AlertDialog>
  )
}

export default AllSubaccountsPage
