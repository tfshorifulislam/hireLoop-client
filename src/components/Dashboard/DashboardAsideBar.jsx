import {
    LayoutSideContentLeft,
    Bell,
    Envelope,
    Gear,
    House,
    Magnifier,
    Person,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";

export function DashboardAsideBar() {
    const navItems = [
        { icon: House, label: "Dashboard" },
        { icon: Magnifier, label: "Jobs" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Candidates" },
        { icon: Gear, label: "Settings" },
    ];

    const navbar = (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-default"
                >
                    <item.icon className="size-5 opacity-70" />
                    <span>{item.label}</span>
                </button>
            ))}
        </nav>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 shrink-0 border-r lg:block">
                <div className="p-5">
                    <h2 className="text-lg font-bold">
                        Recruiter Dashboard
                    </h2>
                    <p className="mt-1 text-sm text-default-500">
                        Manage jobs and candidates
                    </p>
                </div>

                <div className="px-3">
                    {navbar}
                </div>
            </aside>

            {/* Mobile Sidebar */}
            <Drawer>
                <Button variant="secondary" className="lg:hidden">
                    <LayoutSideContentLeft />
                    Menu
                </Button>

                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />

                            <Drawer.Header>
                                <Drawer.Heading>
                                    Recruiter Dashboard
                                </Drawer.Heading>
                            </Drawer.Header>

                            <Drawer.Body>
                                {navbar}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}