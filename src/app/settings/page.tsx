import { SettingsLayout } from "../components/templates/SettingsLayout";

const SettingsPage = () => {
  return (
    <SettingsLayout>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-sm text-[var(--color-muted-dark)]">
          Manage your personal information.
        </p>
      </section>
    </SettingsLayout>
  );
};
export default SettingsPage;
