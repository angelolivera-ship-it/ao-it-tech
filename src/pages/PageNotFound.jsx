import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-surface">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-muted-theme font-heading">404</h1>
                        <div className="h-0.5 w-16 bg-[var(--brand)]/30 mx-auto" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-heading font-heading">Page Not Found</h2>
                        <p className="text-body leading-relaxed">
                            The page <span className="font-medium text-heading">"{pageName}"</span> could not be found.
                        </p>
                    </div>
                    <div className="pt-6">
                        <a href="/" className="inline-flex items-center px-5 py-2.5 text-sm font-heading font-semibold text-white bg-[var(--brand)] rounded-lg hover:opacity-90 transition-all duration-200">
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
