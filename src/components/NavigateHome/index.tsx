import { DashboardLink } from "./styles";

export default function NavigateHome() {
    return (
        <DashboardLink to="/" className="text-sky-600 dark:text-sky-400">
            <h3>Busca Tabel Fipe</h3>
        </DashboardLink>
    )
}