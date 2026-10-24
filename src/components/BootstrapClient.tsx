"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS on client-side only
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS initialized successfully.");
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS:", err);
      });
  }, []);

  return null;
}
