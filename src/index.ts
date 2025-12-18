import type { Plugin, PluginContext } from "./types";
import SubscriptionsView from "./SubscriptionsView.svelte";
import { mount, unmount } from "svelte";

export const plugin: Plugin = {
  manifest: {
    id: "subscriptions",
    name: "Subscriptions",
    version: "0.1.0",
    description: "Detect recurring charges and track subscription costs",
    author: "Treeline",
    permissions: {
      tables: {
        write: ["sys_plugin_subscriptions"],
      },
    },
  },

  activate(context: PluginContext) {
    // Register the subscriptions view
    context.registerView({
      id: "subscriptions",
      name: "Subscriptions",
      icon: "repeat",
      mount: (target: HTMLElement, props: Record<string, any>) => {
        const instance = mount(SubscriptionsView, {
          target,
          props,
        });

        return () => {
          unmount(instance);
        };
      },
    });

    // Add sidebar item
    context.registerSidebarItem({
      sectionId: "main",
      id: "subscriptions",
      label: "Subscriptions",
      icon: "repeat",
      viewId: "subscriptions",
    });

    // Register command for quick access
    context.registerCommand({
      id: "subscriptions.open",
      name: "View Subscriptions",
      description: "Open the subscriptions view to see recurring charges",
      execute: () => {
        context.openView("subscriptions");
      },
    });

    console.log("✓ Subscriptions plugin loaded");
  },

  deactivate() {
    console.log("Subscriptions plugin deactivated");
  },
};
