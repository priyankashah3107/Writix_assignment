// import {
//   Cloud,
//   CreditCard,
//   Github,
//   Keyboard,
//   LifeBuoy,
//   LogOut,
//   Mail,
//   MessageSquare,
//   Plus,
//   PlusCircle,
//   Settings,
//   User,
//   UserPlus,
//   Users,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function DropdownMenuDemo() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">Categories dropdown list</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <User className="mr-2 h-4 w-4" />
//             <span>Profile</span>
//             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <CreditCard className="mr-2 h-4 w-4" />
//             <span>Billing</span>
//             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Keyboard className="mr-2 h-4 w-4" />
//             <span>Keyboard shortcuts</span>
//             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <Users className="mr-2 h-4 w-4" />
//             <span>Team</span>
//           </DropdownMenuItem>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>
//               <UserPlus className="mr-2 h-4 w-4" />
//               <span>Invite users</span>
//             </DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>
//                   <Mail className="mr-2 h-4 w-4" />
//                   <span>Email</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <MessageSquare className="mr-2 h-4 w-4" />
//                   <span>Message</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <PlusCircle className="mr-2 h-4 w-4" />
//                   <span>More...</span>
//                 </DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           <DropdownMenuItem>
//             <Plus className="mr-2 h-4 w-4" />
//             <span>New Team</span>
//             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           <Github className="mr-2 h-4 w-4" />
//           <span>GitHub</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <LifeBuoy className="mr-2 h-4 w-4" />
//           <span>Support</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem disabled>
//           <Cloud className="mr-2 h-4 w-4" />
//           <span>API</span>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }


"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
