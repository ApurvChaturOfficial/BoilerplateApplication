"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@//aConnection/bShadcnConnection/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@//aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>,
  route: string
}

export function DataTableRowActions<TData>({
  row, route
}: DataTableRowActionsProps<TData>) {
  // const task = taskSchema.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
      <DropdownMenuItem asChild>
          <Link to={`/${route}-retrieve/${row.getValue("_id")}`} >Retrieve</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to={`/${route}-update/${row.getValue("_id")}`} >Update</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={`/${route}-delete/${row.getValue("_id")}`} >Delete</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
