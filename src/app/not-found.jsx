import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#070708] text-white">
            {/* Hide navbar on this page */}
            <style>{`#main-navbar { display: none !important; }`}</style>
            {/* Subtle grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
            </div>

            {/* Animated glow blobs */}
            <div className="pointer-events-none absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-[#cdb376]/20 blur-[120px] animate-pulse" />
            <div className="pointer-events-none absolute -bottom-40 -right-28 h-[620px] w-[620px] rounded-full bg-white/10 blur-[140px] animate-pulse" />

            <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
                <div className="grid w-full items-center gap-10 md:grid-cols-2">
                    {/* Left: Big 404 + copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                            <span className="h-2 w-2 rounded-full bg-[#cdb376]" />
                            Oops… route not found
                        </div>

                        <h1 className="mt-6 text-[92px] leading-none font-extrabold tracking-tighter md:text-[140px]">
                            404
                        </h1>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                            This page went missing.
                        </h2>

                        <p className="mt-4 max-w-xl text-base text-white/65 md:text-lg">
                            The link may be broken, or the page may have been moved. Try going
                            back home, or jump to a popular section.
                        </p>

                        {/* Actions */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 rounded-full primary-bg px-7 py-3.5 text-sm font-bold text-gray-900 hover:brightness-110 transition shadow-lg shadow-[#cdb376]/20"
                            >
                                <span className="text-base">←</span>
                                Back to Home
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                            >
                                Contact Support
                                <span className="text-base">↗</span>
                            </Link>
                        </div>

                        {/* Quick links */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {[
                                { label: "Services", href: "/services" },
                                { label: "Projects", href: "/projects" },
                                { label: "News", href: "/news" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Glass card illustration */}
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl" />

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-semibold text-white/70">
                                    Location
                                </div>
                                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                                    Error 404
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {/* Fake breadcrumbs */}
                                <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                                    <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                                        /
                                    </span>
                                    <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                                        unknown
                                    </span>
                                    <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                                        page
                                    </span>
                                </div>

                                {/* “Map” lines */}
                                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="h-2 w-24 rounded-full bg-white/20" />
                                        <div className="h-2 w-10 rounded-full bg-[#cdb376]/60" />
                                    </div>

                                    <div className="mt-5 space-y-3">
                                        <div className="h-3 w-full rounded-full bg-white/10" />
                                        <div className="h-3 w-[88%] rounded-full bg-white/10" />
                                        <div className="h-3 w-[72%] rounded-full bg-white/10" />
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="text-xs text-white/60">
                                            Tip: check the URL or use the menu.
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-white/30" />
                                            <span className="h-2 w-2 rounded-full bg-white/30" />
                                            <span className="h-2 w-2 rounded-full bg-[#cdb376]/70" />
                                        </div>
                                    </div>
                                </div>

                                {/* Footer note */}
                                <div className="pt-2 text-xs text-white/50">
                                    If you believe this is a mistake, please contact us.
                                </div>
                            </div>
                        </div>

                        {/* Floating mini badge */}
                        <div className="absolute -top-5 right-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70 backdrop-blur">
                            Try navigating from the menu ↑
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
