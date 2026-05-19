import Link from "next/link";
import type { CaseListItem } from "./data";

type Props = {
  caseItem: CaseListItem;
};

export function CaseCard({ caseItem }: Props) {
  return (
    <Link
      href={`/cases/${caseItem.slug}`}
      className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      <div className="flex h-[240px]">
        <div className="flex flex-1 items-center justify-center bg-neolith-gray-100 text-sm text-neolith-gray-600">
          ДО
        </div>
        <div className="flex flex-1 items-center justify-center bg-neolith-gray-200 text-sm text-neolith-gray-600">
          ПІСЛЯ
        </div>
      </div>
      <div className="space-y-1 p-6">
        <p className="text-lg font-semibold text-neolith-black group-hover:opacity-80">
          {caseItem.title}
        </p>
        <p className="text-sm text-neolith-gray-600">
          {caseItem.patient} • {caseItem.doctor}
        </p>
        <p className="text-xs text-neolith-gray-600">Термін: {caseItem.duration}</p>
      </div>
    </Link>
  );
}
