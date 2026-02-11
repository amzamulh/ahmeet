import { ParticipantItem } from "@ah/organisms/confirence_room/ParticipantItem";
import { DashboardLayout } from "@ah/templates/Dashboard/DashboardLayout";
const DashboardPage = () => {
  return (
    <DashboardLayout sidebar={<ParticipantItem name="amzam" />}>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Welcome back</h2>
        <p className="text-sm text-[var(--color-muted-dark)]">
          Your meetings will appear here.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
