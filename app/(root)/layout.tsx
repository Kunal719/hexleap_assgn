export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <main className="flex-1 dark:bg-[#292B32] bg-[#F7F7F8]">{children}</main>
        </div>
    );
}

// bg-[#292B32]