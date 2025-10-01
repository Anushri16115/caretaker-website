import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <aside>Admin Menu</aside>
      <section>{children}</section>
    </div>
  );
}
